// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import redirects from '../static/redirects.json'

let redirectMap = new Map(redirects.map(({ link, redirect }) => {
    link = new URL(link).pathname;
    redirect = new URL(redirect).pathname;
    return [link, redirect];
}));

export const handle: Handle = async ({ event, resolve }) => {
    const currentPath = event.url.pathname;
    if (redirectMap.has(currentPath)) {
        return new Response(null, {
            status: 308,
            headers: {
                location: redirectMap.get(currentPath) ?? ''
            }
        });
    }

    return await resolve(event);
};