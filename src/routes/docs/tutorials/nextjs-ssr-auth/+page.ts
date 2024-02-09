import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    throw redirect(303, '/docs/tutorials/nextjs-ssr-auth/step-1');
};
