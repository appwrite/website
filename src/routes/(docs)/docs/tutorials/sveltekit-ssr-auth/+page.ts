import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/tutorials/sveltekit-ssr-auth/step-1');
}
