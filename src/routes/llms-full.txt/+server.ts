import type { RequestHandler } from '@sveltejs/kit';
import { SPECIAL_PAGES } from '../llms-config';

export const prerender = true;

const markdocAndMarkdownFiles = import.meta.glob('$routes/**/*.{markdoc,md}', {
    query: '?raw',
    import: 'default',
    eager: true
});

function stripRouteGroups(routePath: string): string {
    return routePath.replace(/\([^/]+\)\//g, '');
}

function pathToRoute(path: string): string {
    let route = path.replace(/^\/src\/routes/, '');

    if (/\/\+?page\.(markdoc|md)$/.test(route)) {
        route = route.replace(/\/\+?page\.(markdoc|md)$/, '');
    } else {
        route = route.replace(/\.(markdoc|md)$/, '');
    }

    route = stripRouteGroups(route.replace(/\\/g, '/'));

    // Also handle extension-less page/+page keys
    route = route.replace(/\/\+?page$/, '');

    return route || '/';
}

function stripFrontmatter(text: string): string {
    return text.replace(/^\s*---\s*\n[\s\S]*?\n---\s*/m, '');
}

function extractTitle(text: string): string | null {
    // Try frontmatter title first
    const fmMatch = text.match(/^\s*---\s*\n([\s\S]*?)\n---\s*/m);
    if (fmMatch) {
        const lines = fmMatch[1].split(/\r?\n/);
        const findKey = (key: string) => lines.find((l) => new RegExp(`^${key}\\s*:`, 'i').test(l));

        const fromKey = (key: string) => {
            const line = findKey(key);
            if (!line) return null;
            const val = line.replace(new RegExp(`^${key}\\s*:\\s*`, 'i'), '').trim();
            const unquoted = val.replace(/^['"]|['"]$/g, '');
            return unquoted || null;
        };

        // Prefer title; fallback to name (e.g., authors, categories)
        const byTitle = fromKey('title');
        if (byTitle) return byTitle;
        const byName = fromKey('name');
        if (byName) return byName;
    }
    // Fall back to first H1
    const h1 = text.match(/^#\s+(.+)$/m);
    if (h1) return h1[1].trim();
    return null;
}

function demoteHeadings(md: string, levels = 1): string {
    // Demote ATX headings by `levels` up to 6 ('######')
    return md.replace(/^(\s{0,3}#{1,6})(\s+)/gm, (m, hashes, sp) => {
        const newHashes = '#'.repeat(Math.min(hashes.trim().length + levels, 6));
        return `${newHashes}${sp}`;
    });
}

function sectionWeight(href: string): number {
    try {
        const u = new URL(href);
        const path = u.pathname;
        if (path.startsWith('/docs')) return 0;
        if (path.startsWith('/integrations')) return 1;
        if (path.startsWith('/blog')) return 2;
        return 3;
    } catch {
        if (href.startsWith('/docs')) return 0;
        if (href.startsWith('/integrations')) return 1;
        if (href.startsWith('/blog')) return 2;
        return 3;
    }
}

export const GET: RequestHandler = ({ request }) => {
    try {
        const base = 'https://appwrite.io';
        type Item = { href: string; title: string; block: string };
        const items: Item[] = [];

        // Add special non-markdown pages from config
        SPECIAL_PAGES.forEach((page) => {
            const url = new URL(page.href, base).toString();
            items.push({
                href: url,
                title: page.title,
                block: `## ${page.title}
${url}

${page.fullContent}

---`
            });
        });

        for (const path of Object.keys(markdocAndMarkdownFiles)) {
            const raw = markdocAndMarkdownFiles[path] as string;

            const route = pathToRoute(path);
            if (route.includes('[')) continue;

            const href = route.startsWith('/') ? route : `/${route}`;

            // Only include docs, blog posts, and integrations
            if (
                !href.startsWith('/docs') &&
                !href.startsWith('/blog/post') &&
                !href.startsWith('/integrations')
            ) {
                continue;
            }

            // Skip stub pages with no useful content
            if (href === '/docs/advanced/integration' || href === '/blog/category/integrations') {
                continue;
            }

            const url = new URL(href, base).toString();

            const fmOrH1 = extractTitle(raw);
            const title = fmOrH1 ?? href.split('/').pop()!.replace(/[-_]/g, ' ');

            let body = stripFrontmatter(raw).trim();
            // Remove the first H1 if present
            body = body.replace(/^\s*#\s+.+\n+/, '');
            // Demote all headings by two levels
            body = demoteHeadings(body, 2);

            items.push({ href: url, title, block: `## ${title}\n${url}\n\n${body}\n\n---` });
        }
        items.sort((a, b) => {
            const wa = sectionWeight(a.href);
            const wb = sectionWeight(b.href);
            if (wa !== wb) return wa - wb;
            return a.href.localeCompare(b.href);
        });
        const blocks = items.map((i) => i.block);
        const header = `# Appwrite`;
        const content = `${header}\n\n${blocks.join('\n\n')}\n`;

        return new Response(content, {
            headers: {
                'Content-Type': 'text/markdown; charset=utf-8',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        console.error('Error generating llms-full.txt:', error);
        return new Response('Error processing content files', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
};
