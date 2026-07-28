import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/products/auth/oauth-server/sign-in-with-your-product/step-1');
}
