import { env } from '$env/dynamic/private';
import Statsig from 'statsig-node';
import type { StatsigUser } from 'statsig-node';
import { STATSIG_CLIENT_SDK_KEY, STATSIG_EXPERIMENT_BEST_DESCRIPTION } from './constants';

let initPromise: ReturnType<typeof Statsig.initialize> | null = null;

async function ensureStatsigServer(): Promise<boolean> {
    const secret = env.STATSIG_SERVER_SECRET;
    if (!secret?.trim()) return false;

    if (!initPromise) {
        initPromise = Statsig.initialize(secret.trim()).catch((err: unknown) => {
            console.error('[Statsig server] initialize failed', err);
            initPromise = null;
            throw err;
        });
    }

    try {
        await initPromise;
        return true;
    } catch {
        return false;
    }
}

/**
 * Evaluates `best_description` for SSR. Exposure is not logged here so the client can log the real view.
 */
export async function evaluateHeroDescriptionExperiment(
    user: StatsigUser,
    fallback: string
): Promise<string> {
    const ready = await ensureStatsigServer();
    if (!ready) return fallback;

    try {
        const experiment = Statsig.getExperimentWithExposureLoggingDisabledSync(
            user,
            STATSIG_EXPERIMENT_BEST_DESCRIPTION
        );
        return experiment.get('description', fallback) as string;
    } catch {
        return fallback;
    }
}

/**
 * JSON payload for `StatsigClient.dataAdapter.setData` + `initializeAsync`, so the JS SDK skips
 * cache-first experiment checks (Group Assignment Health). Requires `STATSIG_SERVER_SECRET`.
 * @see https://docs.statsig.com/client/javascript-mono/UsingEvaluationsDataAdapter#bootstrapping
 */
export async function getStatsigClientBootstrapPayload(user: StatsigUser): Promise<string | null> {
    const ready = await ensureStatsigServer();
    if (!ready) return null;

    try {
        const response = Statsig.getClientInitializeResponse(user, STATSIG_CLIENT_SDK_KEY, {
            hash: 'djb2'
        });
        if (!response) return null;
        return JSON.stringify(response);
    } catch {
        return null;
    }
}
