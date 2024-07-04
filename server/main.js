import { createApp, fromNodeMiddleware, toNodeListener } from 'h3';
import { createServer } from 'node:http';
import { handler } from '../build/handler.js';
import { sitemap } from './sitemap.js';

async function main() {
    const port = process.env.PORT || 3000;
    const app = createApp();
    app.use('/sitemap.xml', await sitemap());
    app.use(fromNodeMiddleware(handler));
    const server = createServer(toNodeListener(app)).listen(port);
    server.addListener('listening', () => {
        console.log(`Listening on http://0.0.0.0:${port}`);
    });
}

main();
