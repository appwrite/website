import { browser } from '$app/environment';
import { ENV } from '$lib/system';
import { STATSIG_STABLE_ID_KEY, STATSIG_EXPERIMENT_BEST_DESCRIPTION } from '$lib/statsig/constants';

/** Statsig client SDK key (browser-safe; shipped to clients). Rotate by updating this constant. */
const STATSIG_CLIENT_KEY = 'client-TRp4ODQ3Yfsha0XwmRayqwb7WW0ujUbiGrNlB0pfhTH';

export { STATSIG_EXPERIMENT_BEST_DESCRIPTION };

/** Narrow surface we use from `@statsig/js-client` (avoids static `import type` from that package, which can break Vite named re-exports). */
export type StatsigBrowserClient = {
    initializeSync(options?: object): unknown;
    initializeAsync(options?: object): Promise<unknown>;
    getExperiment(name: string): { get(key: string, defaultValue: string): string };
    logEvent(eventOrName: string, value?: string | number, metadata?: Record<string, string>): void;
};

let client: StatsigBrowserClient | null = null;
let syncPromise: Promise<StatsigBrowserClient | null> | null = null;
let networkPromise: Promise<void> | null = null;

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
    if (syncPromise) return;

    syncPromise = (async (): Promise<StatsigBrowserClient | null> => {
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
                STATSIG_CLIENT_KEY,
                { userID: getStableUserId() },
                {
                    plugins: [new StatsigSessionReplayPlugin(), new StatsigAutoCapturePlugin()]
                }
            );

            instance.initializeSync();
            client = instance as StatsigBrowserClient;

            networkPromise = instance
                .initializeAsync()
                .then(() => {})
                .catch((err: unknown) => {
                    console.error('[Statsig] initializeAsync failed', err);
                });

            return client;
        } catch (err: unknown) {
            console.error('[Statsig] Failed to initialize', err);
            client = null;
            syncPromise = null;
            networkPromise = null;
            return null;
        }
    })();
}

/**
 * Resolves once Statsig has applied **cached** evaluations (`initializeSync`).
 * `getStatsigClient()` is usable immediately after — good for hero copy to avoid waiting on the network.
 */
export function whenStatsigSyncReady(): Promise<StatsigBrowserClient | null> {
    if (!browser || ENV.TEST) return Promise.resolve(null);
    if (client) return Promise.resolve(client);
    startStatsig();
    return syncPromise ?? Promise.resolve(null);
}

/** Resolves after `initializeAsync` finishes (or immediately if init failed / tests). */
export function whenStatsigNetworkReady(): Promise<void> {
    if (!browser || ENV.TEST) return Promise.resolve();
    startStatsig();
    return (syncPromise ?? Promise.resolve(null)).then(() => networkPromise ?? Promise.resolve());
}

/** Loads Statsig: sync cache first, then network refresh (session replay, etc.). */
export function initStatsig(): Promise<void> {
    return whenStatsigNetworkReady();
}

/** Resolved Statsig client after the first successful `initializeSync`, or null if init failed. */
export function getStatsigClient(): StatsigBrowserClient | null {
    return client;
}

export function logStatsigCtaEvent(eventName: string, data?: Record<string, unknown>): void {
    if (!browser || ENV.TEST || !client) return;
    const metadata = data && Object.keys(data).length > 0 ? toStringMetadata(data) : undefined;
    client.logEvent(eventName, undefined, metadata);
}
