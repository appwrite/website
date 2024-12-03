import { createRequire } from 'node:module';
import { defineEventHandler, setResponseHeader } from 'h3';

/**
 * @returns {Promise<import('h3').EventHandler>}
 */
export async function sitemap() {
    console.info('Preparing Sitemap...');
    const manifest = await import('../build/server/manifest.js');
    const prerendered = manifest.prerendered;
    const file_route_extensions = ['.json', '.xml'];
    const routes = [...prerendered, ...collectThreads()].filter(
        (route) => !file_route_extensions.some((ext) => route.endsWith(ext))
    );
    console.info(`Sitemap loaded with ${routes.length} routes!`);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes
            .map(
                (route) => `<url>
            <loc>https://appwrite.io${route}</loc>
        </url>
        `
            )
            .join('')}
    </urlset>`;

    return defineEventHandler((event) => {
        setResponseHeader(event, 'Content-Type', 'application/xml');

        return sitemap;
    });
}

/**
 * @returns {string[]}
 */
function collectThreads() {
    const threads = createRequire(import.meta.url)('../build/prerendered/threads/data.json');

    return threads.map((id) => `/threads/${id}`);
}
