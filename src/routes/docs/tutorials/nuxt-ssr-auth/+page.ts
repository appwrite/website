import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/tutorials/nuxt-ssr-auth/step-1');
}
