export default {
    async fetch(request: Request): Promise<Response> {
        return fetch(request);
    }
} satisfies ExportedHandler;
