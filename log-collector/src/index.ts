export interface Env {
    PROFOUND_API_URL: string;
    PROFOUND_API_KEY: string;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const response = await fetch(request);
        const responseClone = response.clone();

        ctx.waitUntil(handleRequest(request, responseClone, env));
        return response;
    }
} satisfies ExportedHandler<Env>;

async function handleRequest(request: Request, response: Response, env: Env) {
    const requestUrl = new URL(request.url);

    const headerSize = Array.from(response.headers.entries()).reduce(
        (total, [key, value]) => total + key.length + value.length + 4,
        0
    );

    const responseBody = await response.blob();
    const bodySize = responseBody.size;
    const totalBytesSent = headerSize + bodySize;

    const logData = {
        timestamp: Date.now(),
        host: requestUrl.hostname,
        method: request.method,
        pathname: requestUrl.pathname,
        query_params: Object.fromEntries(requestUrl.searchParams),
        ip: request.headers.get('cf-connecting-ip'),
        userAgent: request.headers.get('user-agent'),
        referer: request.headers.get('referer'),
        bytes: totalBytesSent,
        status: response.status
    };

    await fetch(env.PROFOUND_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': env.PROFOUND_API_KEY
        },
        body: JSON.stringify([logData])
    }).catch((error) => console.error('Failed to send logs:', error));
}
