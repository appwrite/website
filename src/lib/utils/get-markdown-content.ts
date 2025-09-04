import { readFile } from 'fs/promises';
import { join } from 'path';

export const getMarkdownContent = async <T extends string | null>(slug: T) => {
    if (!slug) return null;
    try {
        const basePath = join(process.cwd(), 'src', 'routes', slug, '+page.markdoc');
        return await readFile(basePath, 'utf-8');
    } catch (e) {
        return null;
    }
};
