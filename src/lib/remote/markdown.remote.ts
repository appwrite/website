import { query } from '$app/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const getPageMarkdown = query(
    'unchecked',
    async (routeId: string | null) => {
        if (!routeId) return null;
        
        try {
            const basePath = join(process.cwd(), 'src', 'routes', routeId, '+page.markdoc');
            return await readFile(basePath, 'utf-8');
        } catch (e) {
            return null;
        }
    }
);


