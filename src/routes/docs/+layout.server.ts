import { getMarkdownContent } from '$lib/server/markdown';
import type { LayoutRouteId } from './$types';

export const load = async ({ route }) => {
    return {
        /** Inline file read in `load` so HTML has content immediately (avoid `query()` remote delay). */
        rawContent: await getMarkdownContent(route.id as LayoutRouteId)
    };
};
