// @ts-nocheck — wraps `writeHead` / `write` / `end`; overloads are not worth typing in JS.
/**
 * Cache-Control for static assets. Used by `server/main.js` (sirv serves `build/client`
 * before SvelteKit `handle`) and by `src/hooks.server.ts` for SSR responses.
 */

export const CACHE_IMMUTABLE = 'public, max-age=31536000, immutable';

export const CACHE_IMAGES_SAFE = 'public, max-age=604800, stale-while-revalidate=86400';

export const CACHE_IMAGES_DEFAULT = 'public, max-age=2592000, stale-while-revalidate=86400';

export const CACHE_SCRIPTS = 'public, max-age=86400, stale-while-revalidate=604800';

/** @param {string} pathname */
export function cacheControlForPath(pathname) {
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

/** @param {import('node:http').IncomingMessage} req */
export function pathnameFromRequest(req) {
    const raw = req.url ?? '/';
    try {
        return decodeURIComponent(new URL(raw, 'http://localhost').pathname);
    } catch {
        return new URL(raw, 'http://localhost').pathname;
    }
}

/**
 * Set Cache-Control when sirv sends the body (headers often go out on first write).
 * @param {import('node:http').ServerResponse} res
 * @param {string | null} directive
 */
export function attachStaticCacheControl(res, directive) {
    if (!directive) return;
    const policy = directive;

    let applied = false;

    /** @param {number} statusCode */
    function tryApply(statusCode) {
        if (applied || res.headersSent || res.getHeader('Cache-Control')) return;
        if (statusCode !== 200 && statusCode !== 206 && statusCode !== 304) return;
        applied = true;
        res.setHeader('Cache-Control', policy);
    }

    const origWriteHead = res.writeHead.bind(res);
    res.writeHead = (...args) => {
        if (!res.headersSent) {
            const first = args[0];
            const code = typeof first === 'number' ? first : (res.statusCode ?? 200);
            tryApply(code);
        }
        return origWriteHead(...args);
    };

    const origWrite = res.write.bind(res);
    res.write = (...args) => {
        if (!res.headersSent) tryApply(res.statusCode);
        return origWrite(...args);
    };

    const origEnd = res.end.bind(res);
    res.end = (...args) => {
        if (!res.headersSent) tryApply(res.statusCode);
        return origEnd(...args);
    };
}
