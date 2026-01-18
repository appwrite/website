import { page } from '$app/state';

// Eagerly import all `prompt.md` files under routes to make them available at runtime.
// Keys look like "/src/routes/docs/quick-starts/react/prompt.md"
const promptFiles = import.meta.glob('/src/routes/**/prompt.md', {
    query: '?raw',
    import: 'default',
    eager: true
}) as Record<string, string>;

function toRouteKey(fullPath: string): string {
    // Convert absolute like "/src/routes/docs/quick-starts/react/prompt.md" to "/docs/quick-starts/react"
    const withoutPrefix = fullPath.replace(/^\/src\/routes\//, '/');
    return withoutPrefix.replace(/\/prompt\.md$/, '');
}

const routePathToPrompt: Record<string, string> = Object.entries(promptFiles).reduce(
    (acc, [absPath, contents]) => {
        const key = toRouteKey(absPath);
        acc[key] = contents;
        return acc;
    },
    {} as Record<string, string>
);

export function getRoutePrompt(routePath?: string): string | null {
    // Accept explicit routePath (like "/docs/quick-starts/react"). If not provided, use current page.
    const key = routePath ?? page.route.id?.toString() ?? '';
    if (!key) return null;
    // Normalize: ensure it starts with leading slash and has no trailing slash
    const normalized = ('/' + key).replace(/\/+/g, '/').replace(/\/$/, '');
    return routePathToPrompt[normalized] ?? null;
}

export function hasRoutePrompt(routePath?: string): boolean {
    return getRoutePrompt(routePath) !== null;
}

export function listRoutePrompts(): string[] {
    return Object.keys(routePathToPrompt).sort();
}
