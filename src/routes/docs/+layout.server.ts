import { getMarkdownContent } from '$lib/server/markdown';

/**
 * Use the request pathname, not `route.id`: for nested docs under this layout, `route.id`
 * stays `/docs`, so `getMarkdownContent` would look for `docs/+page.markdoc` (missing) and
 * TOC seeding would get no `rawContent`. Pathname matches `+page.markdoc` paths and dynamic
 * reference generators (they regex-match concrete URLs).
 */
export const load = async ({ url }) => {
    const path = url.pathname.replace(/\/$/, '') || '/';

    return {
        /** Inline file read in `load` so HTML has content immediately (avoid `query()` remote delay). */
        rawContent: await getMarkdownContent(path)
    };
};
