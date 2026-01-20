import { DEFAULT_HOST } from './metadata';

/**
 * Normalizes the version in a docs reference path to the canonical version
 */
function normalizeDocsVersion(pathname: string): string {
    // Match patterns like /docs/references/1.7.x/... or /docs/references/0.15.x/... or /docs/references/cloud/...
    const versionPattern = /^\/docs\/references\/([^/]+)\//;
    const match = pathname.match(versionPattern);

    if (match) {
        const currentVersion = match[1];
        // Use "cloud" as the single canonical docs version so we don't have to
        // maintain a list of explicit versions. Anything that isn't "cloud"
        // will point canonically to the /cloud/ variant.
        if (currentVersion !== 'cloud') {
            return pathname.replace(versionPattern, `/docs/references/cloud/`);
        }
    }

    return pathname;
}

/**
 * Builds a canonical URL from a page URL, applying smart normalization:
 * - Fixes prerender origin issue (uses DEFAULT_HOST during prerendering)
 * - For docs references: always points to the chosen canonical version
 * - Query strings are already stripped by using pathname (original behavior preserved)
 */
export function getCanonicalUrl(url: URL): string {
    // During prerendering, SvelteKit uses 'http://sveltekit-prerender' as origin
    // Use DEFAULT_HOST instead to ensure proper canonical URLs
    let origin = url.origin;
    if (origin === 'http://sveltekit-prerender' || origin === 'https://sveltekit-prerender') {
        origin = DEFAULT_HOST;
    } else {
        origin = origin.replace(/^http:/, 'https:').replace(/^https:\/\/www\./, 'https://');
    }

    let pathname = url.pathname;

    // Normalize docs reference versions to latest
    if (pathname.startsWith('/docs/references/')) {
        pathname = normalizeDocsVersion(pathname);
    }

    // Query strings are already stripped by using pathname only (original behavior)
    // This matches the original implementation which used: `${origin}${pathname}`
    return `${origin}${pathname}`;
}
