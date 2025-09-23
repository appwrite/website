import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getVariationConfig } from '$lib/components/homepage-variations/variation-config';

export const load: PageLoad = ({ params }) => {
    const { variation } = params;
    const config = getVariationConfig(variation);

    if (!config) {
        throw error(404, 'Page not found');
    }

    return { config };
};
