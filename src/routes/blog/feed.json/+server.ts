import type { RequestHandler } from './$types';
import { getAllPosts } from '../content';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
    return json({
        posts: getAllPosts,
        total: Object.keys(getAllPosts).length
    });
};
