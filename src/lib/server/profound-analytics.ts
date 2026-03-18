import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { building } from '$app/environment';

const { PROFOUND_API_URL, PROFOUND_API_KEY } = env;

interface LogEntry {
    timestamp: number;
    host: string;
    method: string;
    pathname: string;
    query_params: Record<string, string>;
    ip: string | null;
    userAgent: string | null;
    referer: string | null;
    bytes: number;
    status: number;
}

class LogBatcher {
    private queue: LogEntry[] = [];
    private readonly MAX_SIZE = 10000;
    private readonly FLUSH_INTERVAL_MS = 10000;
    private flushTimer: ReturnType<typeof setInterval> | null = null;
    private isRunning = false;

    constructor() {
        this.start();
    }

    start(): void {
        if (this.isRunning) return;

        this.isRunning = true;
        this.flushTimer = setInterval(() => {
            void this.flush();
        }, this.FLUSH_INTERVAL_MS);
    }

    stop(): void {
        if (this.flushTimer) {
            clearInterval(this.flushTimer);
            this.flushTimer = null;
        }
        this.isRunning = false;
    }

    add(log: LogEntry): void {
        // Evict oldest entries if at capacity (FIFO)
        while (this.queue.length >= this.MAX_SIZE) {
            this.queue.shift();
        }
        this.queue.push(log);
    }

    async flush(): Promise<void> {
        if (this.queue.length === 0) return;
        if (!PROFOUND_API_URL || !PROFOUND_API_KEY) return;

        // Take all logs from queue
        const batch = this.queue.splice(0);

        try {
            const response = await fetch(PROFOUND_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': PROFOUND_API_KEY
                },
                body: JSON.stringify(batch)
            });

            if (!response.ok) {
                console.error(`Analytics flush failed: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error('Analytics flush failed:', error);
        }
    }
}

// Singleton instance
const logBatcher = new LogBatcher();

export const profoundAnalytics: Handle = async ({ event, resolve }) => {
    // Short circuit if analytics is not configured or during pre-render
    if (building || !PROFOUND_API_URL || !PROFOUND_API_KEY) {
        return resolve(event);
    }

    const response = await resolve(event);

    // Only track HTML pages, not API responses or static assets
    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('text/html')) {
        return resolve(event);
    }

    // Calculate header size
    const headerSize = Array.from(response.headers.entries()).reduce(
        (total, [key, value]) => total + key.length + value.length + 4,
        0
    );

    // Get body size
    const contentLength = response.headers.get('content-length');
    const bodySize = contentLength ? Number.parseInt(contentLength, 10) || 0 : 0;
    const totalBytesSent = headerSize + bodySize;

    // Build log data
    const logData: LogEntry = {
        timestamp: Date.now(),
        host: event.url.hostname,
        method: event.request.method,
        pathname: event.url.pathname,
        query_params: Object.fromEntries(event.url.searchParams),
        ip: event.getClientAddress(),
        userAgent: event.request.headers.get('user-agent'),
        referer: event.request.headers.get('referer'),
        bytes: totalBytesSent,
        status: response.status
    };

    // Non-blocking: add to queue and return immediately
    logBatcher.add(logData);

    return response;
};
