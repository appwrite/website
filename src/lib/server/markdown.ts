import { readFile } from 'fs/promises';
import { join, normalize, resolve } from 'path';
import { generateDynamicMarkdown, hasDynamicMarkdownGenerator } from './markdown-generators';

/**
 * Gets markdown content for a route.
 * - For dynamic routes with registered generators, generates markdown from data sources
 * - For static routes, reads from +page.markdoc files
 *
 * Dynamic routes include:
 * - Model reference pages: /docs/references/{version}/models/{model}
 * - Service reference pages: /docs/references/{version}/{platform}/{service}
 */
export const getMarkdownContent = async (routeId: string | null) => {
    if (!routeId) return null;

    // Try dynamic markdown generators first (for API reference pages)
    if (hasDynamicMarkdownGenerator(routeId)) {
        return await generateDynamicMarkdown(routeId);
    }

    // Fall back to static markdoc files
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
