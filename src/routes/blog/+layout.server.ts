import { getMarkdownContent } from '$lib/utils/get-markdown-content';
import type { LayoutRouteId } from './$types';

export const load = async ({ route }) => {
    return {
        rawContent: await getMarkdownContent<LayoutRouteId>(route.id)
    };
};
