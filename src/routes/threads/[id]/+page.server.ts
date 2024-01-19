import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread, getThreadMessages, iterateAllThreads } from '../helpers.js';

export const prerender = true;

export const entries = async () => {
    const ids = [];
    for await (const thread of iterateAllThreads()) {
        ids.push({ id: thread.$id });
    }

    return ids;
};

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);
        const messages = await getThreadMessages(id);

        return {
            ...thread,
            related,
            messages
        };
    } catch (e) {
        throw error(404, 'Thread not found');
    }
};
