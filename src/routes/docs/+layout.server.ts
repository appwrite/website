import { getPageMarkdown } from '$lib/remote/markdown.remote';
import type { LayoutRouteId } from './$types';

export const load = async ({ route }) => {
    return {
        rawContent: await getPageMarkdown(route.id as LayoutRouteId)
    };
};
