import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ data }) => {
    return data;
};
