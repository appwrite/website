import { DEFAULT_HOST } from './metadata';

/**
 * Canonical version for API references - should always point to this version.
 * Update this when a new reference version becomes the default.
 */
export const CANONICAL_DOCS_VERSION = '1.8.x';

/**
 * Normalizes the version in a docs reference path to the canonical version
 */
function normalizeDocsVersion(pathname: string): string {
    // Match patterns like /docs/references/1.7.x/... or /docs/references/0.15.x/... or /docs/references/1.8.x/...
    const versionPattern = /^\/docs\/references\/([^/]+)\//;
    const match = pathname.match(versionPattern);

    if (match) {
        const currentVersion = match[1];
        if (currentVersion !== CANONICAL_DOCS_VERSION) {
            return pathname.replace(versionPattern, `/docs/references/${CANONICAL_DOCS_VERSION}/`);
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
