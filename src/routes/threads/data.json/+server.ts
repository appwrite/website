import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_APPWRITE_ENDPOINT } from '$env/static/public';
import { iterateAllThreads } from '../helpers';

/* short-circuit for build runs on CI from external contributors */
function shouldSkipThreadsPrerender(): boolean {
    const endpoint = PUBLIC_APPWRITE_ENDPOINT;
    return !endpoint || endpoint.includes('appwrite.test');
}

export const prerender = true;

export const GET: RequestHandler = async () => {
    if (shouldSkipThreadsPrerender()) {
        return json([]);
    }

    const ids = [];
    for await (const thread of iterateAllThreads()) {
        ids.push(thread.$id);
    }

    return json(ids);
};
