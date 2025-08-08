import { resolveRoute } from '$app/paths';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const markdocFiles = import.meta.glob('$routes/docs/**/+page.markdoc', {
    query: '?raw',
    import: 'default',
    eager: true
});

export const GET: RequestHandler = ({ request }) => {
    try {
        const content = Object.keys(markdocFiles).reduce((acc, path) => {
            const content = markdocFiles[path] as string;

            const route = path.replace(/^\/src\/routes/, '').replace(/\/\+page\.markdoc$/, '');
            const url = new URL(resolveRoute(route, {}), request.url);

            return acc + `\n# ${url}\n\n${content}\n\n---\n\n`;
        }, '# Appwrite Documentation\n\n');

        return new Response(content, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    } catch (error) {
        console.error('Error reading markdoc files:', error);
        return new Response('Error processing documentation files', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
};
