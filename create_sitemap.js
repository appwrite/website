import { writeFileSync } from 'fs';
import { prerendered } from './build/server/manifest.js';

const isVercel = process.env.VERCEL === '1';

if (isVercel) {
    console.log('Skipping sitemap.xml creation on Vercel preview.');
    process.exit(0);
}

console.log('Building sitemap.xml ...');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...prerendered].filter(route => !route.endsWith('.json')).map(route => `<url>
        <loc>https://appwrite.io${route}</loc>
    </url>
    `).join('')}
</urlset>`;

writeFileSync('./build/sitemap.xml', sitemap, { encoding: 'utf8', flag: 'w' });

console.log('sitemap.xml created successfully!');