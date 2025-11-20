import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import {
    getVariationConfig,
    type VariationKey
} from '$lib/components/homepage-variations/variation-config';

export const load: PageLoad = ({ params }) => {
    const { variation } = params;
    const key = variation as VariationKey;
    const config = getVariationConfig(key);

    if (!config) {
        throw error(404, 'Not Found');
    }

    return { config };
};
