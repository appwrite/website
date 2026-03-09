import { readFile } from 'fs/promises';
import { join, normalize, resolve } from 'path';
import { generateDynamicMarkdown, hasDynamicMarkdownGenerator } from './markdown-generators';

const partialsCache = new Map<string, string>();

export async function processMarkdownWithPartials(content: string): Promise<string> {
    const partialsDir = join(process.cwd(), 'src', 'partials');
    const resolvedPartialsDir = resolve(partialsDir);
    const partialRegex = /\{%\s*partial\s+file="([^"]+)"\s*\/%\}/g;

    const matches = [...content.matchAll(partialRegex)];
    if (matches.length === 0) return content;

    let result = content;
    for (const match of matches) {
        const partialFile = match[1];
        const fullMatch = match[0];

        if (!partialsCache.has(partialFile)) {
            try {
                const normalizedPartialFile = normalize(partialFile).replace(
                    /^(\.\.(\/|\\|$))+/,
                    ''
                );
                const partialPath = resolve(partialsDir, normalizedPartialFile);

                if (
                    !partialPath.startsWith(resolvedPartialsDir + '/') &&
                    partialPath !== resolvedPartialsDir
                ) {
                    console.warn(`Partial path traversal attempt detected: ${partialFile}`);
                    partialsCache.set(partialFile, '');
                    continue;
                }

                const partialContent = await readFile(partialPath, 'utf-8');
                partialsCache.set(partialFile, partialContent);
            } catch {
                console.warn(`Partial not found: ${partialFile}`);
                partialsCache.set(partialFile, '');
            }
        }

        const partialContent = partialsCache.get(partialFile) || '';
        result = result.replaceAll(fullMatch, partialContent);
    }

    return result;
}

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
