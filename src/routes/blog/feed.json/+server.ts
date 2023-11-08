import type { RequestHandler } from './$types';
import { posts } from '../content';

export const GET: RequestHandler = () => {
    return new Response(
        JSON.stringify({
            posts,
            total: Object.keys(posts).length
        })
    );
};
