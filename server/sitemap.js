import { createRequire } from 'node:module';
import { defineEventHandler, setResponseHeader } from 'h3';

/**
 * @returns {Promise<import('h3').EventHandler>}
 */
export async function sitemap() {
    console.info('Preparing Sitemap...');
    const { manifest } = await import('../build/server/manifest.js');
    const sveltekit_routes = manifest._.routes
        .filter((route) => route.params.length === 0)
        .map((route) => route.id);
    const threads = collectThreads();
    const all_routes = [...sveltekit_routes, ...threads];
    const document_routes = all_routes.filter(
        (route) => !['.json', '.xml'].some((ext) => route.endsWith(ext))
    );
    const routes = new Set(document_routes);
    console.info(`Sitemap loaded with ${routes.length} routes!`);
    console.group();
    console.info(`sveltekit: ${sveltekit_routes.length}`);
    console.info(`threads: ${threads.length}`);
    console.groupEnd();

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
        ${[...routes]
            .map(
                (route) => `<url>
            <loc>https://appwrite.io${route}</loc>
        </url>
        `
            )
            .join('')}
    </urlset>`.trim();

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
