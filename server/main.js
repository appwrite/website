import { sitemaps } from './sitemap.js';
import { createServer } from 'node:http';
import { handler } from '../build/handler.js';
import { createApp, fromNodeMiddleware, toNodeListener } from 'h3';

async function main() {
    const port = process.env.PORT || 3000;
    const app = createApp();
    app.use(['/sitemap.xml', '/sitemaps'], await sitemaps());

    app.use(fromNodeMiddleware(handler));
    const server = createServer(toNodeListener(app)).listen(port);
    server.addListener('listening', () => {
        console.log(`Listening on http://0.0.0.0:${port}`);
    });
}

main();
