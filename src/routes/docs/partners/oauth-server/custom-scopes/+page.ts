import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/partners/oauth-server/custom-scopes/step-1');
}
