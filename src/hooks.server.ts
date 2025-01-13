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
});

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

const securityheaders: Handle = async ({ event, resolve }) => {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    (event.locals as { nonce: string }).nonce = nonce;

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace(/%sveltekit.nonce%/g, nonce);
        }
    });

    const cspDirectives = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.posthog.com",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'self' https://www.youtube.com https://*.vimeo.com",
        'block-all-mixed-content',
        'upgrade-insecure-requests',
        "connect-src 'self' https://*.appwrite.io https://*.posthog.com",
        "frame-src 'self' https://www.youtube.com https://status.appwrite.online https://www.youtube-nocookie.com https://player.vimeo.com"
    ];

    // Set security headers
    response.headers.set('Content-Security-Policy', cspDirectives.join('; '));

    // HTTP Strict Transport Security
    // max-age is set to 1 year in seconds
    response.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
    );

    // X-Content-Type-Options
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // X-Frame-Options
    response.headers.set('X-Frame-Options', 'DENY');

    return response;
};

const bannerRewriter: Handle = async ({ event, resolve }) => {
    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%aw_banner_key%', BANNER_KEY)
    });
    return response;
};

export const handle = sequence(Sentry.sentryHandle(), redirecter, bannerRewriter, securityheaders);
export const handleError = Sentry.handleErrorWithSentry();
