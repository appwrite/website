import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async () => {
    redirect(303, '/docs/products/databases/databases');
};
