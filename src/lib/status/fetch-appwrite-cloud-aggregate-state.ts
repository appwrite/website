/**
 * Reads Appwrite Cloud aggregate status from the public status page API
 * (same source as console `../vibes` — `status.appwrite.online/index.json`).
 */

const APPWRITE_CLOUD_STATUS_URL = 'https://status.appwrite.online/index.json';

export type AppwriteCloudAggregateState = 'operational' | 'degraded' | 'downtime' | 'maintenance';

type StatusPageResponse = {
    data?: {
        attributes?: {
            aggregate_state?: string;
        };
    };
};

function normalizeAggregateState(value: string | undefined): AppwriteCloudAggregateState {
    switch (value) {
        case 'degraded':
        case 'downtime':
        case 'maintenance':
            return value;
        default:
            return 'operational';
    }
}

const FETCH_TIMEOUT_MS = 8_000;

function timeoutSignal(): AbortSignal | undefined {
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
        return AbortSignal.timeout(FETCH_TIMEOUT_MS);
    }
    return undefined;
}

/** Non-blocking network read; never throws — failures map to `operational`. */
export async function fetchAppwriteCloudAggregateState(): Promise<AppwriteCloudAggregateState> {
    try {
        const response = await fetch(APPWRITE_CLOUD_STATUS_URL, {
            signal: timeoutSignal(),
            cache: 'no-store',
            priority: 'low' as RequestPriority
        });
        if (!response.ok) {
            return 'operational';
        }
        const payload = (await response.json()) as StatusPageResponse;
        const raw = payload?.data?.attributes?.aggregate_state;
        return normalizeAggregateState(typeof raw === 'string' ? raw : undefined);
    } catch {
        return 'operational';
    }
}
