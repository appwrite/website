import type { RequestHandler } from './$types';
import { publishedPosts } from '../content';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
    return json({
        posts: publishedPosts,
        total: publishedPosts.length
    });
};
