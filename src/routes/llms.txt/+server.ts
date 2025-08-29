import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

// Eagerly import all markdown/markdoc content within src/routes
const markdocAndMarkdownFiles = import.meta.glob('$routes/**/*.{markdoc,md}', {
    query: '?raw',
    import: 'default',
    eager: true
});

// Strip group directories like (marketing) from a route path
function stripRouteGroups(routePath: string): string {
    return routePath.replace(/\([^/]+\)\//g, '');
}

function pathToRoute(path: string): string {
    // Convert absolute file path to a route path
    // Examples:
    //  /src/routes/docs/intro/+page.markdoc => /docs/intro
    //  /src/routes/blog/post/my-post.markdoc => /blog/post/my-post
    //  /src/routes/docs/references/xyz/page.md => /docs/references/xyz/page
    let route = path.replace(/^\/src\/routes/, '');

    if (/\/+page\.(markdoc|md)$/.test(route)) {
        route = route.replace(/\/+page\.(markdoc|md)$/, '');
    } else {
        route = route.replace(/\.(markdoc|md)$/, '');
    }

    // Remove route groups
    route = stripRouteGroups(route.replace(/\\/g, '/'));

    // Also handle extension-less +page keys just in case
    route = route.replace(/\/+page$/, '');

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

function toSummary(text: string, maxWords = 200): string {
    // Remove frontmatter
    let out = stripFrontmatter(text);
    // Remove fenced code blocks
    out = out.replace(/```[\s\S]*?```/g, '');
    // Remove inline code
    out = out.replace(/`[^`]*`/g, '');
    // Images: remove entirely
    out = out.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
    // Links: keep link text only
    out = out.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
    // HTML tags
    out = out.replace(/<[^>]+>/g, '');
    // Collapse whitespace
    out = out.replace(/\r?\n\s*\r?\n/g, '\n\n');
    out = out.replace(/[\t ]+/g, ' ');

    // Take first N words
    const words = out.trim().split(/\s+/);
    if (words.length <= maxWords) return words.join(' ');
    return words.slice(0, maxWords).join(' ') + '…';
}

function sectionWeight(href: string): number {
    try {
        const u = new URL(href);
        const path = u.pathname;
        if (path.startsWith('/docs')) return 0;
        if (path.startsWith('/blog')) return 1;
        if (path.startsWith('/integrations')) return 2;
        return 3;
    } catch {
        // Fallback for relative inputs (shouldn't happen as we use absolute URLs)
        if (href.startsWith('/docs')) return 0;
        if (href.startsWith('/blog')) return 1;
        if (href.startsWith('/integrations')) return 2;
        return 3;
    }
}

export const GET: RequestHandler = ({ request }) => {
    try {
        type Item = { href: string; title: string; description: string };
        const items: Item[] = [];
        for (const path of Object.keys(markdocAndMarkdownFiles)) {
            const raw = markdocAndMarkdownFiles[path] as string;

            const route = pathToRoute(path);
            // Skip parameterized/internal helper content
            if (route.includes('[')) continue;

            const href = route.startsWith('/') ? route : `/${route}`;
            const url = new URL(href, request.url).toString();

            const title = extractTitle(raw) ?? href.split('/').pop()!.replace(/[-_]/g, ' ');
            // Markdown bullet list of links with concise description
            const description = toSummary(raw, 18);
            items.push({ href: url, title, description });
        }
        items.sort((a, b) => {
            const wa = sectionWeight(a.href);
            const wb = sectionWeight(b.href);
            if (wa !== wb) return wa - wb;
            // within section, sort by href for stability
            return a.href.localeCompare(b.href);
        });
        const lines = items.map(
            (i) =>
                `- [${i.title.replace(/\\/g, '\\\\').replace(/\[/g, '\\[').replace(/\]/g, '\\]')}](${i.href}): ${i.description}`
        );
        const origin = new URL(request.url).origin;
        const header = `# ${origin} llms.txt`;
        const content = `${header}\n\n${lines.join('\n')}\n`;

        return new Response(content, {
            headers: {
                'Content-Type': 'text/markdown; charset=utf-8',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        console.error('Error generating llms.txt:', error);
        return new Response('Error processing content files', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
};
