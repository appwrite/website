import { getMarkdownContent } from '$lib/server/markdown';

/** Same as docs: nested blog posts need pathname so we resolve the correct `+page.markdoc`. */
export const load = async ({ url }) => {
    const path = url.pathname.replace(/\/$/, '') || '/';

    return {
        rawContent: await getMarkdownContent(path)
    };
};
