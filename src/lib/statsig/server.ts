import { env } from '$env/dynamic/private';
import {
    Statsig,
    StatsigUser,
    type StatsigOptions,
    type StatsigUserArgs
} from '@statsig/statsig-node-core';
import { STATSIG_CLIENT_SDK_KEY } from './constants';

function buildStatsigServerOptions(): StatsigOptions {
    const explicit = env.STATSIG_ENVIRONMENT?.trim();
    return {
        environment:
            explicit && explicit.length > 0
                ? explicit
                : process.env.NODE_ENV === 'production'
                  ? 'production'
                  : 'development'
    };
}

/** User fields used by marketing home load + Statsig bootstrap (server). */
export type StatsigServerUserInput = { userID: string } & Partial<
    Pick<StatsigUserArgs, 'customIDs' | 'userAgent' | 'ip' | 'email'>
>;

let statsigClient: Statsig | null = null;
let initPromise: Promise<void> | null = null;

/** Shared Node Statsig client for SSR + bootstrap. Returns null when `STATSIG_SERVER_SECRET` is unset. */
export async function getStatsigServerClient(): Promise<Statsig | null> {
    const secret = env.STATSIG_SERVER_SECRET?.trim();
    if (!secret) return null;

    if (!initPromise) {
        initPromise = (async () => {
            const client = new Statsig(secret, buildStatsigServerOptions());
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

export function toStatsigUser(user: StatsigUser | StatsigServerUserInput): StatsigUser {
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
 * JSON payload for `StatsigClient.dataAdapter.setData` + `initializeAsync`, so the JS SDK skips
 * cache-first experiment checks (Group Assignment Health). Requires `STATSIG_SERVER_SECRET`.
 * @see https://docs.statsig.com/client/javascript-mono/UsingEvaluationsDataAdapter#bootstrapping
 */
export async function getStatsigClientBootstrapPayload(
    user: StatsigUser | StatsigServerUserInput
): Promise<string | null> {
    const client = await getStatsigServerClient();
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
