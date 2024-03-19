import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(303, '/docs/tutorials/sveltekit-csr-auth/step-1');
}
