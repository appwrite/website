import { env } from '$env/dynamic/private';
import { Statsig, StatsigUser, type StatsigUserArgs } from '@statsig/statsig-node-core';
import { STATSIG_CLIENT_SDK_KEY, STATSIG_EXPERIMENT_BEST_DESCRIPTION } from './constants';

/** User fields used by marketing home load + Statsig bootstrap (server). */
export type StatsigServerUserInput = { userID: string } & Partial<
    Pick<StatsigUserArgs, 'customIDs' | 'userAgent' | 'ip' | 'email'>
>;

let statsigClient: Statsig | null = null;
let initPromise: Promise<void> | null = null;

async function getStatsigClient(): Promise<Statsig | null> {
    const secret = env.STATSIG_SERVER_SECRET?.trim();
    if (!secret) return null;

    if (!initPromise) {
        initPromise = (async () => {
            const client = new Statsig(secret);
            await client.initialize();
            statsigClient = client;
        })().catch((err: unknown) => {
            console.error('[Statsig server] initialize failed', err);
            statsigClient = null;
            initPromise = null;
            throw err;
        });
    }

    try {
        await initPromise;
        return statsigClient;
    } catch {
        return null;
    }
}

function toStatsigUser(user: StatsigUser | StatsigServerUserInput): StatsigUser {
    if (user instanceof StatsigUser) {
        return user;
    }
    return new StatsigUser({
        userID: user.userID,
        ...(user.customIDs ? { customIDs: user.customIDs } : {}),
        ...(user.userAgent ? { userAgent: user.userAgent } : {}),
        ...(user.ip ? { ip: user.ip } : {}),
        ...(user.email ? { email: user.email } : {})
    });
}

/**
 * Evaluates `best_description` for SSR. Exposure is not logged here so the client can log the real view.
 */
export async function evaluateHeroDescriptionExperiment(
    user: StatsigUser | StatsigServerUserInput,
    fallback: string
): Promise<string> {
    const client = await getStatsigClient();
    if (!client) return fallback;

    try {
        const statsigUser = toStatsigUser(user);
        const experiment = client.getExperiment(statsigUser, STATSIG_EXPERIMENT_BEST_DESCRIPTION, {
            disableExposureLogging: true
        });
        return experiment.get('description', fallback) as string;
    } catch {
        return fallback;
    }
}

/**
 * JSON payload for `StatsigClient.dataAdapter.setData` + `initializeAsync`, so the JS SDK skips
 * cache-first experiment checks (Group Assignment Health). Requires `STATSIG_SERVER_SECRET`.
 * Node Core returns this string directly (no extra `JSON.stringify`).
 * @see https://docs.statsig.com/client/javascript-mono/UsingEvaluationsDataAdapter#bootstrapping
 */
export async function getStatsigClientBootstrapPayload(
    user: StatsigUser | StatsigServerUserInput
): Promise<string | null> {
    const client = await getStatsigClient();
    if (!client) return null;

    try {
        const statsigUser = toStatsigUser(user);
        const response = client.getClientInitializeResponse(statsigUser, {
            hashAlgorithm: 'djb2',
            clientSdkKey: STATSIG_CLIENT_SDK_KEY
        });
        if (response == null || response === '') {
            return null;
        }
        return response;
    } catch {
        return null;
    }
}
