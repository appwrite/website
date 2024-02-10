import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(303, '/docs/tutorials/nuxt-ssr-auth/step-1');
}
