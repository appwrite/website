import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { RequestHandler } from '@sveltejs/kit';

const BASE_DIR = dirname(fileURLToPath(import.meta.url));

export const GET: RequestHandler = () => {
    try {
        const contentPath = join(BASE_DIR, 'content.txt');
        const llmsContent = readFileSync(contentPath, 'utf-8');

        return new Response(llmsContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    } catch (error) {
        console.error('Error reading llms content:', error);
        return new Response('Content not found', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
};
