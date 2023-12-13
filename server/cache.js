/**
 * @returns {import('express').RequestHandler}
 */
export function cache() {
    return function (_req, res, next) {
        res.setHeader('Cache-Control', 'max-age=3600, no-cache');
        next();
    }
}