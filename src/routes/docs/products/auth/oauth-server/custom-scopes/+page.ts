import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/products/auth/oauth-server/custom-scopes/step-1');
}
