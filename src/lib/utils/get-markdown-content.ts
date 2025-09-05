import { readFile, stat } from 'fs/promises';
import { join } from 'path';

export const getMarkdownContent = async <T extends string | null>(slug: T) => {
    if (!slug) return null;
    try {
        const basePath = join(process.cwd(), 'src', 'routes', slug, '+page.markdoc');

        try {
            const stats = await stat(basePath);
            if (!stats.isFile()) {
                return null;
            }
        } catch {
            return null;
        }

        const fileContent = await readFile(basePath, 'utf-8');

        return fileContent;
    } catch (e) {
        return null;
    }
};
