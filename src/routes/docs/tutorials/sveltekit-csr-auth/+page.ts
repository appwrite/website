import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/tutorials/sveltekit-csr-auth/step-1');
}
