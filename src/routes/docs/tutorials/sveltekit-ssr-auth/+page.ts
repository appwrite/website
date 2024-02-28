import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(303, '/docs/tutorials/sveltekit-ssr-auth/step-1');
}
