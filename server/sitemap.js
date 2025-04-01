import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { readFile, stat } from 'node:fs/promises';
import { mkdirSync, writeFileSync } from 'node:fs';
import {
    defineEventHandler,
    getRequestURL,
    sendRedirect,
    serveStatic,
    setResponseHeader
} from 'h3';

const MAX_THREADS_PER_FILE = 1000;
const BASE_URL = 'https://appwrite.io';
const BASE_DIR = dirname(fileURLToPath(import.meta.url));

const SITEMAP_DIR = join(BASE_DIR, './sitemaps');
const THREADS_DIR = join(SITEMAP_DIR, 'threads');
const NAMED_GROUPS = {
    blog: '/blog',
    docs: '/docs',
    integrations: '/integrations'
};

export async function sitemaps() {
    console.info('Preparing Sitemap...');
    const { manifest } = await import('../build/server/manifest.js');
    const threads = collectThreads().map((id) => `/threads/${id}`);
    const otherRoutes = manifest._.routes
        .filter((r) => r.params.length === 0)
        .map((r) => r.id)
        .filter(
            (id) => !id.startsWith('/threads/') && !id.endsWith('.json') && !id.endsWith('.xml')
        );

    mkdirSync(SITEMAP_DIR, { recursive: true });
    mkdirSync(THREADS_DIR, { recursive: true });

    let totalCount = 0;
    const sitemapIndexOrder = [];

    const grouped = {},
        fallback = [];

    for (const route of otherRoutes) {
        const match = Object.entries(NAMED_GROUPS).find(([, prefix]) => route.startsWith(prefix));
        if (match) {
            const [group] = match;
            grouped[group] ??= [];
            grouped[group].push(route);
        } else fallback.push(route);
    }

    totalCount += writeSitemap('pages.xml', fallback, SITEMAP_DIR);
    sitemapIndexOrder.push('pages.xml');

    for (const group of ['docs', 'blog', 'integrations']) {
        if (grouped[group]?.length) {
            const filename = `${group}.xml`;
            totalCount += writeSitemap(filename, grouped[group], SITEMAP_DIR);
            sitemapIndexOrder.push(filename);
        }
    }

    const threadChunks = chunkArray(threads, MAX_THREADS_PER_FILE);
    threadChunks.forEach((chunk, i) => {
        const filename = `${i + 1}.xml`;
        totalCount += writeSitemap(filename, chunk, THREADS_DIR);
        sitemapIndexOrder.push(`threads/${filename}`);
    });

    const sitemapIndex = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapIndexOrder
            .map(
                (name) => `
            <sitemap>
                <loc>${BASE_URL}/sitemaps/${name}</loc>
            </sitemap>`
            )
            .join('\n')}
    </sitemapindex>`.trim();

    console.info(`✅ Sitemap generation complete — ${totalCount} URLs in total.\n`);

    return defineEventHandler(async (event) => {
        const url = getRequestURL(event);

        if (url.pathname === '/sitemap.xml') {
            setResponseHeader(event, 'Content-Type', 'application/xml');
            return sitemapIndex;
        }

        if (url.pathname === '/sitemaps') {
            return sendRedirect(event, '/sitemap.xml', 307);
        }

        if (url.pathname === '/sitemaps/threads') {
            return sendRedirect(event, '/sitemaps/threads/1.xml', 307);
        }

        const dir = import.meta.resolve('./sitemaps');
        return serveStatic(event, {
            fallthrough: true,
            indexNames: undefined,
            getContents: (id) => readFile(new URL(dir + id)),
            getMeta: async (id) => {
                const stats = await stat(new URL(dir + id)).catch(() => null);
                if (!stats?.isFile()) return;
                return {
                    size: stats.size,
                    mtime: stats.mtimeMs
                };
            }
        });
    });
}

function writeSitemap(filename, routes, dir) {
    const body = `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
${routes.map((route) => `  <url>\n    <loc>${BASE_URL}${route}</loc>\n  </url>`).join('\n')}
</urlset>`.trim();

    const filepath = join(dir, filename);
    writeFileSync(filepath, body);

    const label = filepath.replace(BASE_DIR + '/sitemaps', '');
    console.info(`  └── Generated ${label} with ${routes.length} URLs`);

    return routes.length;
}

function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

function collectThreads() {
    return createRequire(import.meta.url)('../build/prerendered/threads/data.json');
}
