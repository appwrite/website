import { iterateAllThreads } from '../helpers';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const ids = [];
    for await (const thread of iterateAllThreads()) {
        ids.push(thread.$id);
    }

    return json(ids);
};
