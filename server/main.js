import { sitemaps } from './sitemap.js';
import { createServer } from 'node:http';
import { handler } from '../build/handler.js';
import { createApp, defineEventHandler, fromNodeMiddleware, toNodeListener } from 'h3';

async function main() {
    const port = process.env.PORT || 3000;
    const app = createApp();
    let isReady = false;
    let isDraining = false;

    app.use(
        '/healthz',
        defineEventHandler((event) => {
            if (!isReady || isDraining) {
                event.node.res.statusCode = 503;
                return;
            }
            return { status: 'ok' };
        })
    );

    app.use(['/sitemap.xml', '/sitemaps'], await sitemaps());

    app.use(fromNodeMiddleware(handler));

    const server = createServer(toNodeListener(app)).listen(port);
    server.addListener('listening', () => {
        isReady = true;
        console.log(`Listening on http://0.0.0.0:${port}`);
    });

    const shutdown = (signal) => {
        if (isDraining) return;
        isDraining = true;
        console.info(`${signal} received - draining connections`);

        server.close((err) => {
            if (err) {
                console.error('Error during shutdown', err);
                process.exit(1);
            }
            console.info('Shutdown complete - exiting');
            process.exit(0);
        });
    };

    process.once('SIGTERM', () => shutdown('SIGTERM'));
    process.once('SIGINT', () => shutdown('SIGINT'));
}

main();
