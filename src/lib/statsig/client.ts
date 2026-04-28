import { browser } from '$app/environment';
import { ENV } from '$lib/system';
import {
    STATSIG_STABLE_ID_KEY,
    STATSIG_EXPERIMENT_BEST_DESCRIPTION,
    STATSIG_CLIENT_SDK_KEY
} from '$lib/statsig/constants';

export { STATSIG_EXPERIMENT_BEST_DESCRIPTION };

/** Narrow surface we use from `@statsig/js-client` (avoids static `import type` from that package, which can break Vite named re-exports). */
export type StatsigBrowserClient = {
    initializeAsync(options?: object): Promise<unknown>;
    getExperiment(name: string): { get(key: string, defaultValue: string): string };
    logEvent(eventOrName: string, value?: string | number, metadata?: Record<string, string>): void;
};

let client: StatsigBrowserClient | null = null;
/** In-flight or last completed browser init (`initializeAsync`); cleared on failure so callers can retry. */
let initPromise: Promise<StatsigBrowserClient | null> | null = null;
/** Server bootstrap JSON for first init (homepage); avoids cache-first experiment checks. */
let pendingBootstrapJson: string | null | undefined;

function readStableIdFromCookie(): string | null {
    if (typeof document === 'undefined' || !document.cookie) return null;
    const prefix = `${STATSIG_STABLE_ID_KEY}=`;
    for (const part of document.cookie.split('; ')) {
        if (part.startsWith(prefix)) {
            return decodeURIComponent(part.slice(prefix.length));
        }
    }
    return null;
}

function persistStableIdToCookie(id: string): void {
    try {
        const secure =
            typeof location !== 'undefined' && location.protocol === 'https:' ? ';Secure' : '';
        document.cookie = `${STATSIG_STABLE_ID_KEY}=${encodeURIComponent(id)};path=/;max-age=31536000;SameSite=Lax${secure}`;
    } catch {
        /* ignore */
    }
}

/** Prefer server-issued cookie so SSR experiment assignment matches the JS client. */
function getStableUserId(): string {
    try {
        let id = readStableIdFromCookie() ?? localStorage.getItem(STATSIG_STABLE_ID_KEY);
        if (!id) {
            id = crypto.randomUUID();
        }
        localStorage.setItem(STATSIG_STABLE_ID_KEY, id);
        persistStableIdToCookie(id);
        return id;
    } catch {
        // Can't persist; return an ephemeral random ID so each session gets its own experiment bucket.
        return crypto.randomUUID?.() ?? `anon-${Date.now()}-${Math.random()}`;
    }
}

function toStringMetadata(data: Record<string, unknown>): Record<string, string> {
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(data)) {
        if (v === undefined || v === null) continue;
        out[k] = typeof v === 'string' ? v : JSON.stringify(v);
    }
    return out;
}

function startStatsig(): void {
    if (!browser || ENV.TEST) return;
    if (initPromise) return;

    initPromise = (async (): Promise<StatsigBrowserClient | null> => {
        try {
            const [
                { StatsigClient },
                { StatsigSessionReplayPlugin },
                { StatsigAutoCapturePlugin }
            ] = await Promise.all([
                import('@statsig/js-client'),
                import('@statsig/session-replay'),
                import('@statsig/web-analytics')
            ]);

            const instance = new StatsigClient(
                STATSIG_CLIENT_SDK_KEY,
                { userID: getStableUserId() },
                {
                    plugins: [new StatsigSessionReplayPlugin(), new StatsigAutoCapturePlugin()]
                }
            );

            const bootstrap = pendingBootstrapJson;
            pendingBootstrapJson = undefined;
            if (bootstrap) {
                try {
                    (
                        instance as unknown as { dataAdapter: { setData(data: string): void } }
                    ).dataAdapter.setData(bootstrap);
                } catch (err: unknown) {
                    console.error('[Statsig] dataAdapter.setData (bootstrap) failed', err);
                }
            }

            // Await network init. With server bootstrap on `/`, evaluations come from bootstrap first
            // (better Group Assignment Health than cache-only reads during async init).
            try {
                await instance.initializeAsync();
            } catch (err: unknown) {
                console.error('[Statsig] initializeAsync failed', err);
                client = null;
                initPromise = null;
                return null;
            }

            client = instance as StatsigBrowserClient;
            // Log homepage experiment exposure only when server bootstrapped (healthy eval reason).
            if (bootstrap) {
                try {
                    client.getExperiment(STATSIG_EXPERIMENT_BEST_DESCRIPTION);
                } catch {
                    /* ignore */
                }
            }
            return client;
        } catch (err: unknown) {
            console.error('[Statsig] Failed to initialize', err);
            client = null;
            initPromise = null;
            return null;
        }
    })();
}

/**
 * Resolves once `initializeAsync()` has finished. Hero copy is SSR’d; this path is for any
 * future client checks that should align with Statsig “await init before experiments” guidance.
 */
export function whenStatsigSyncReady(): Promise<StatsigBrowserClient | null> {
    if (!browser || ENV.TEST) return Promise.resolve(null);
    if (client) return Promise.resolve(client);
    startStatsig();
    return initPromise ?? Promise.resolve(null);
}

/** Resolves after `initializeAsync` finishes (or immediately if init failed / tests). */
export function whenStatsigNetworkReady(): Promise<void> {
    if (!browser || ENV.TEST) return Promise.resolve();
    startStatsig();
    return (initPromise ?? Promise.resolve(null)).then(() => {});
}

/**
 * Loads Statsig after a full async init. Pass `statsigBootstrap` from `+page.server.ts` on `/` when
 * the server has `STATSIG_SERVER_SECRET` so the client can bootstrap and avoid cache/loading checks.
 */
export function initStatsig(clientBootstrapJson?: string | null): Promise<void> {
    if (
        !initPromise &&
        typeof clientBootstrapJson === 'string' &&
        clientBootstrapJson.length > 0
    ) {
        pendingBootstrapJson = clientBootstrapJson;
    }
    return whenStatsigNetworkReady();
}

/** Resolved Statsig client after successful `initializeAsync`, or null if init failed. */
export function getStatsigClient(): StatsigBrowserClient | null {
    return client;
}

export function logStatsigCtaEvent(eventName: string, data?: Record<string, unknown>): void {
    if (!browser || ENV.TEST || !client) return;
    const metadata = data && Object.keys(data).length > 0 ? toStringMetadata(data) : undefined;
    client.logEvent(eventName, undefined, metadata);
}
