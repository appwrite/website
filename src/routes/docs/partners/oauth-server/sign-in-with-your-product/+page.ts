import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/partners/oauth-server/sign-in-with-your-product/step-1');
}
