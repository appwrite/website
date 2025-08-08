import { resolveRoute } from '$app/paths';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const markdocFiles = import.meta.glob('$routes/docs/**/+page.markdoc', {
    query: '?raw',
    import: 'default',
    eager: true
});

/**
 * Remove frontmatter from content
 */
function removeFrontmatter(content: string): string {
    const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/;
    return content.replace(frontmatterRegex, '').trim();
}

export const GET: RequestHandler = ({ request }) => {
    try {
        const contents: string[] = [];
        
        Object.keys(markdocFiles).forEach(path => {
            const content = markdocFiles[path] as string;
            const bodyContent = removeFrontmatter(content);
            
            if (bodyContent.trim()) {
                contents.push(bodyContent);
            }
        });
        
        // Join all content with separators
        const fullContent = contents.join('\n\n---\n\n');

        return new Response(fullContent, {
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