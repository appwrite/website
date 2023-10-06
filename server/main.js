import express from 'express';
import compression from 'compression'
import { cache } from './cache.js';
import { sitemap } from './sitemap.js'
import { handler } from '../build/handler.js';

async function main() {
    const app = express();
    app.use(cache());
    app.use(compression());
    app.use(await sitemap());
    app.use(handler);
    app.listen(3000, () => {
        console.log('Listening on http://0.0.0.0:3000');
    });
}

main();