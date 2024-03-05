import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(303, '/docs/tutorials/nextjs-ssr-auth/step-1');
}
