import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const { PROFOUND_API_URL, PROFOUND_API_KEY } = env;

export const profoundAnalytics: Handle = async ({ event, resolve }) => {
    // Short circuit if analytics is not configured
    if (!PROFOUND_API_URL || !PROFOUND_API_KEY) {
        return resolve(event);
    }

    const response = await resolve(event);

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
    const logData = {
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

    // Fire-and-forget analytics call
    fetch(PROFOUND_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': PROFOUND_API_KEY
        },
        body: JSON.stringify([logData])
    }).catch((error) => console.error('Failed to send logs to Profound:', error));

    return response;
};
