/**
 * @returns {Promise<import('express').RequestHandler>}
 */
export async function sitemap() {
    const manifest = await import('../build/server/manifest.js');
    const prerendered = manifest.prerendered;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...prerendered].filter(route => !route.endsWith('.json')).map(route => `<url>
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