import { getMarkdownContent } from '$lib/server/markdown';
import type { LayoutRouteId } from './$types';

export const load = async ({ route }) => {
    return {
        rawContent: await getMarkdownContent(route.id as LayoutRouteId)
    };
};
