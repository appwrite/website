import { redirect } from '@sveltejs/kit';

export async function load() {
    throw redirect(303, '/docs/tutorials/astro-ssr-auth/step-1');
}
