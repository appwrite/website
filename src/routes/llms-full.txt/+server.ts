import type { RequestHandler } from '@sveltejs/kit';

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

    if (/\/+page\.(markdoc|md)$/.test(route)) {
        route = route.replace(/\/+page\.(markdoc|md)$/, '');
    } else {
        route = route.replace(/\.(markdoc|md)$/, '');
    }

    route = stripRouteGroups(route.replace(/\\/g, '/'));
    return route || '/';
}

function stripFrontmatter(text: string): string {
    return text.replace(/^\s*---\s*\n[\s\S]*?\n---\s*/m, '');
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
        if (href.startsWith('/docs')) return 0;
        if (href.startsWith('/blog')) return 1;
        if (href.startsWith('/integrations')) return 2;
        return 3;
    }
}

export const GET: RequestHandler = ({ request }) => {
    try {
        type Item = { href: string; title: string; block: string };
        const items: Item[] = [];
        for (const path of Object.keys(markdocAndMarkdownFiles)) {
            const raw = markdocAndMarkdownFiles[path] as string;

            const route = pathToRoute(path);
            if (route.includes('[')) continue;

            const href = route.startsWith('/') ? route : `/${route}`;
            const url = new URL(href, request.url).toString();

            const titleMatch = raw.match(/^#\s+(.+)$/m);
            const title = titleMatch ? titleMatch[1].trim() : href.split('/').pop()!.replace(/[-_]/g, ' ');

            const body = stripFrontmatter(raw).trim();
            items.push({ href: url, title, block: `## ${title}\n${url}\n\n${body}\n\n---` });
        }
        items.sort((a, b) => {
            const wa = sectionWeight(a.href);
            const wb = sectionWeight(b.href);
            if (wa !== wb) return wa - wb;
            return a.href.localeCompare(b.href);
        });
        const blocks = items.map((i) => i.block);
        const origin = new URL(request.url).origin;
        const header = `# ${origin} llms-full.txt`;
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


