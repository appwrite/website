import * as Sentry from '@sentry/sveltekit';
import type { Handle } from '@sveltejs/kit';
import redirects from './redirects.json';
import { sequence } from '@sveltejs/kit/hooks';
import { BANNER_KEY, SENTRY_DSN } from '$lib/constants';
import { dev } from '$app/environment';

Sentry.init({
    enabled: !dev,
    dsn: SENTRY_DSN,
    tracesSampleRate: 1,
    allowUrls: [/appwrite\.io/]
})

const redirectMap = new Map(redirects.map(({ link, redirect }) => [link, redirect]));

const redirecter: Handle = async ({ event, resolve }) => {
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

const bannerRewriter: Handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%aw_banner_key%', BANNER_KEY)
    });
    return response;
};

export const handle = sequence(Sentry.sentryHandle(), redirecter, bannerRewriter);
export const handleError = Sentry.handleErrorWithSentry();