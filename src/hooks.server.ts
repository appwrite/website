import * as Sentry from '@sentry/sveltekit';
import type { Handle } from '@sveltejs/kit';
import redirects from './redirects.json';
import { sequence } from '@sveltejs/kit/hooks';
import { getMarkdownContent, processMarkdownWithPartials } from '$lib/server/markdown';
import { type GithubUser } from '$routes/(init)/init/(utils)/auth';
import { createInitSessionClient } from '$routes/(init)/init/(utils)/appwrite';
import type { AppwriteUser } from '$lib/utils/console';

const redirectMap = new Map(redirects.map(({ link, redirect }) => [link, redirect]));

const markdownHandler: Handle = async ({ event, resolve }) => {
    const pathname = event.url.pathname;
    if (!pathname.endsWith('.md')) {
        return resolve(event);
    }

    // strip trailing ".md" from the pathname to get the underlying route id
    const withoutExt = pathname.replace(/\.md$/, '');
    const routeId = withoutExt;

    const content = await getMarkdownContent(routeId);
    if (content == null) {
        return new Response('Not found', { status: 404 });
    }

    const processedContent = await processMarkdownWithPartials(content);

    return new Response(processedContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8'
        }
    });
};

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

    return resolve(event);
};

const wwwRedirecter: Handle = async ({ event, resolve }) => {
    if (event.url.host.startsWith('www.')) {
        const location = new URL(event.url);
        location.host = location.host.replace(/^www\./, '');
        return new Response(null, {
            status: 308,
            headers: {
                location: location.href
            }
        });
    }

    return resolve(event);
};

const securityheaders: Handle = async ({ event, resolve }) => {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    event.locals.nonce = nonce;

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace(/%sveltekit.nonce%/g, nonce);
        }
    });

    // `true` if deployed via Coolify.
    const isPreview = !!process.env.COOLIFY_FQDN || process.env.NODE_ENV === 'development';
    // COOLIFY_FQDN already includes `http`.
    const previewDomain = isPreview ? `${process.env.COOLIFY_FQDN}` : null;
    const join = (arr: string[]) => arr.join(' ');

    const cspDirectives: Record<string, string> = {
        'default-src': "'self'",
        'script-src': join([
            "'self'",
            'blob:',
            "'unsafe-inline'",
            "'unsafe-eval'",
            'https://*.plausible.io',
            'https://plausible.io',
            'https://*.cookieyes.com',
            'https://cdn-cookieyes.com'
        ]),
        'style-src': "'self' 'unsafe-inline'",
        'img-src': "'self' data: https:",
        'font-src': "'self'",
        'object-src': "'none'",
        'base-uri': "'self'",
        'form-action': "'self'",
        'frame-ancestors': join(["'self'", 'https://www.youtube.com', 'https://*.vimeo.com']),
        'block-all-mixed-content': '',
        'upgrade-insecure-requests': '',
        'connect-src': join([
            "'self'",
            'https://*.appwrite.io',
            'https://*.appwrite.org',
            'https://*.appwrite.network',
            'https://*.sentry.io',
            'https://*.plausible.io',
            'https://plausible.io',
            'https://*.cookieyes.com',
            'https://cdn-cookieyes.com',
            // Statsig JS client + session replay + web analytics
            // https://docs.statsig.com/client/jsClientSDK#content-security-policy
            'https://api.statsig.com',
            'https://*.statsig.com',
            'https://featuregates.org',
            'https://statsigapi.net',
            'https://*.statsigapi.net',
            'https://events.statsigapi.net',
            'https://api.statsigcdn.com',
            'https://*.statsigcdn.com',
            'https://featureassets.org',
            'https://assetsconfigcdn.org',
            'https://prodregistryv2.org',
            'https://cloudflare-dns.com',
            'https://beyondwickedmapping.org'
        ]),
        'frame-src': join([
            "'self'",
            'https://www.youtube.com',
            'https://status.appwrite.online',
            'https://www.youtube-nocookie.com',
            'https://player.vimeo.com',
            'https://cdn-cookieyes.com'
        ])
    };

    if (isPreview) {
        delete cspDirectives['block-all-mixed-content'];
        delete cspDirectives['upgrade-insecure-requests'];
        ['default-src', 'script-src', 'style-src', 'img-src', 'font-src', 'connect-src'].forEach(
            (key) => {
                cspDirectives[key] += ` ${previewDomain}`;
            }
        );
    }

    const cspDirectivesString = Object.entries(cspDirectives)
        .map(([key, value]) => `${key} ${value}`.trim())
        .join('; ');

    // Set security headers
    response.headers.set('Content-Security-Policy', cspDirectivesString);

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

const initSession: Handle = async ({ event, resolve }) => {
    const session = await createInitSessionClient(event.cookies);

    const getGithubUser = async () => {
        try {
            const identitiesList = await session?.account.listIdentities();

            if (!identitiesList?.total) return null;
            const identity = identitiesList.identities[0];
            const { providerAccessToken, provider, providerEmail } = identity;
            if (provider !== 'github') return null;

            const res = await fetch('https://api.github.com/user', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${providerAccessToken}`
                }
            })
                .then((res) => {
                    return res.json() as Promise<GithubUser>;
                })
                .then((user) => ({
                    login: user.login,
                    name: user.name,
                    email: providerEmail,
                    avatar_url: user.avatar_url
                }));

            if (!res.login) {
                await session?.account.deleteSession('current');
                return null;
            }

            return res;
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    const getAppwriteUser = async (): Promise<AppwriteUser | null> => {
        const appwriteUser = await session?.account
            .get()
            .then((res) => res)
            .catch(() => null);

        return appwriteUser || null;
    };

    const getInitUser = async () => {
        const [github, appwrite] = await Promise.all([getGithubUser(), getAppwriteUser()]);

        return { github, appwrite };
    };

    event.locals.initUser = await getInitUser();

    return resolve(event);
};

/**
 * SEO optimization: noindex internal/auth pages and staging subdomains
 */
const NOINDEX_PATHS = [
    /^\/console\/login\/?$/,
    /^\/console\/register\/?$/,
    /^\/v1\/storage\//,
    /^\/v1\//
];

// Block any staging/preview subdomains (e.g., *.cloud.appwrite.io, stage.*, etc.)
const NOINDEX_HOSTS = [/\.cloud\.appwrite\.io$/i, /^stage\./i, /^fra\./i];

const seoOptimization: Handle = async ({ event, resolve }) => {
    const { url } = event;

    // Check if this is a path or host that should not be indexed
    const shouldNoindex =
        NOINDEX_PATHS.some((re) => re.test(url.pathname)) ||
        NOINDEX_HOSTS.some((re) => re.test(url.hostname));

    const response = await resolve(event);

    if (shouldNoindex) {
        response.headers.set('x-robots-tag', 'noindex, nofollow');
    }

    return response;
};

/** Long-lived hashed build output from Vite/SvelteKit */
const CACHE_IMMUTABLE = 'public, max-age=31536000, immutable';

/** Blog and marketing images can be replaced at the same URL; avoid immutable */
const CACHE_IMAGES_SAFE = 'public, max-age=604800, stale-while-revalidate=86400';

/** Site UI assets (icons, illustrations) that rarely change */
const CACHE_IMAGES_DEFAULT = 'public, max-age=2592000, stale-while-revalidate=86400';

/** Third-party or vendor scripts we mirror under /scripts */
const CACHE_SCRIPTS = 'public, max-age=86400, stale-while-revalidate=604800';

/**
 * Lighthouse: static responses had no Cache-Control. Set TTLs here (Kit adapter-node
 * does not add them). Skip if something already set Cache-Control.
 */
function cacheControlForPath(pathname: string): string | null {
    if (pathname === '/_app/version.json' || pathname === '/_app/env.js') {
        return 'no-store';
    }
    if (pathname.startsWith('/_app/immutable/')) {
        return CACHE_IMMUTABLE;
    }
    if (pathname.startsWith('/_app/')) {
        return 'public, max-age=0, must-revalidate';
    }
    if (/\.(woff2?|ttf|otf|eot)$/i.test(pathname)) {
        return CACHE_IMMUTABLE;
    }
    if (pathname.startsWith('/images/blog/')) {
        if (/\.(png|jpe?g|webp|gif|avif)$/i.test(pathname)) {
            return CACHE_IMAGES_SAFE;
        }
    } else if (/\.(png|jpe?g|webp|gif|avif|svg|ico)$/i.test(pathname)) {
        return CACHE_IMAGES_DEFAULT;
    }
    if (pathname.startsWith('/scripts/') && pathname.endsWith('.js')) {
        return CACHE_SCRIPTS;
    }
    return null;
}

const staticAssetCache: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    if (response.headers.has('Cache-Control')) {
        return response;
    }
    const s = response.status;
    if (s !== 200 && s !== 206 && s !== 304) {
        return response;
    }
    const directive = cacheControlForPath(event.url.pathname);
    if (directive) {
        response.headers.set('Cache-Control', directive);
    }
    return response;
};

export const handle = sequence(
    Sentry.sentryHandle(),
    markdownHandler,
    redirecter,
    wwwRedirecter,
    securityheaders,
    initSession,
    seoOptimization,
    staticAssetCache
);
export const handleError = Sentry.handleErrorWithSentry();
