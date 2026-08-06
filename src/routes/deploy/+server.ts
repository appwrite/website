import type { RequestHandler } from '@sveltejs/kit';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const GET: RequestHandler = async ({ url }) => {
    const variant = url.searchParams.get('variant') || 'dark';
    const filename = variant === 'light' ? 'light.svg' : 'dark.svg';
    const filePath = join(process.cwd(), 'static', 'images', 'deploy', filename);

    try {
        const svgContent = await readFile(filePath, 'utf-8');

        return new Response(svgContent, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        });
    } catch {
        return new Response('SVG file not found', {
            status: 404,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
};

