import { createRequire } from 'node:module'

/**
 * @returns {Promise<import('express').RequestHandler>}
 */
export async function sitemap() {
    const manifest = await import('../build/server/manifest.js');
    const prerendered = manifest.prerendered;

    const routes = [
        ...prerendered,
        ...collectThreads()
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.filter(route => !route.endsWith('.json')).map(route => `<url>
            <loc>https://appwrite.io${route}</loc>
        </url>
        `).join('')}
    </urlset>`;

    return async (req, res, next) => {
        if (req.url === '/sitemap.xml') {
            res.setHeader('Content-Type', 'application/xml');
            return res.send(sitemap);
        }
        next();
    }
}

function collectThreads() {
    const threads = createRequire(import.meta.url)('../build/prerendered/threads/data.json');

    return threads.map(id => `/threads/${id}`);
}