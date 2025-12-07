import type { RequestHandler } from './$types';
import { getMarkdownContent } from '$lib/server/markdown';

export const GET: RequestHandler = async ({ params, url }) => {
    const pathname = url.pathname;
    if (!pathname.endsWith('.md')) {
        return new Response('Not found', { status: 404 });
    }

    const slug = params.slug;
    if (!slug) {
        return new Response('Not found', { status: 404 });
    }

    // strip trailing ".md" from the slug to get the underlying route id
    const withoutExt = slug.replace(/\.md$/, '');
    const routeId = `/${withoutExt}`;

    const content = await getMarkdownContent(routeId);
    if (content == null) {
        return new Response('Not found', { status: 404 });
    }

    return new Response(content, {
        status: 200,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8'
        }
    });
};
