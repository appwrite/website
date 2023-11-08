import type { RequestHandler } from './$types';
import { posts } from '../content';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
    return json({
        posts,
        total: Object.keys(posts).length
    });
};
