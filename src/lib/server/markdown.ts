import { readFile } from 'fs/promises';
import { join, normalize, resolve } from 'path';

export const getMarkdownContent = async (routeId: string | null) => {
    if (!routeId) return null;

    try {
        const routesRoot = join(process.cwd(), 'src', 'routes');
        const cleaned = routeId.replace(/^[\\/]+/, '');
        const normalized = normalize(cleaned).replace(/^(\.\.(\/|\\|$))+/, '');

        const basePath = resolve(routesRoot, normalized, '+page.markdoc');

        if (!basePath.startsWith(routesRoot)) return null;

        return await readFile(basePath, 'utf-8');
    } catch {
        return null;
    }
};
