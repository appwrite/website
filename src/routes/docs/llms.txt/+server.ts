import { resolveRoute } from '$app/paths';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const markdocFiles = import.meta.glob('$routes/docs/**/+page.markdoc', {
    query: '?raw',
    import: 'default',
    eager: true
});

/**
 * Parse frontmatter and body from markdoc content
 */
function parseMarkdoc(content: string) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);
    
    if (!match) {
        return {
            frontmatter: {},
            body: content
        };
    }
    
    const frontmatterContent = match[1];
    const bodyContent = match[2];
    
    // Parse frontmatter properties
    const frontmatter: Record<string, string> = {};
    frontmatterContent.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.+)$/);
        if (match) {
            let value = match[2];
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            frontmatter[match[1]] = value;
        }
    });
    
    return {
        frontmatter,
        body: bodyContent
    };
}

/**
 * Extract title from frontmatter or first heading
 */
function extractTitle(frontmatter: Record<string, string>, body: string): string {
    // First try frontmatter
    if (frontmatter.title) {
        return frontmatter.title;
    }
    
    // Then try first heading in body
    const headingMatch = body.match(/^#\s+(.+)$/m);
    if (headingMatch) {
        return headingMatch[1];
    }
    
    return 'Untitled';
}

/**
 * Extract description from frontmatter or first paragraph
 */
function extractDescription(frontmatter: Record<string, string>, body: string): string {
    // First try frontmatter
    if (frontmatter.description) {
        return frontmatter.description;
    }
    
    // Then try first paragraph
    const paragraphs = body.trim().split('\n\n');
    for (const paragraph of paragraphs) {
        const cleanParagraph = paragraph
            .replace(/^#+\s+.*$/gm, '') // Remove headings
            .replace(/^```[\s\S]*?```$/gm, '') // Remove code blocks
            .replace(/^{% .*? %}$/gm, '') // Remove template tags
            .trim();
        
        if (cleanParagraph && cleanParagraph.length > 10) {
            return cleanParagraph.split('\n')[0]; // First line only
        }
    }
    
    return 'No description available';
}

export const GET: RequestHandler = ({ request }) => {
    try {
        const entries: string[] = [];
        
        Object.keys(markdocFiles).forEach(path => {
            const content = markdocFiles[path] as string;
            const { frontmatter, body } = parseMarkdoc(content);
            
            const title = extractTitle(frontmatter, body);
            const description = extractDescription(frontmatter, body);
            
            const route = path.replace(/^\/src\/routes/, '').replace(/\/\+page\.markdoc$/, '');
            const url = new URL(resolveRoute(route, {}), request.url);
            
            entries.push(`${title} — ${description}\n${url}\n`);
        });
        
        const content = entries.join('\n');

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
