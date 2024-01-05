import { random } from '$lib/utils/random.js';
import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread, getThreadMessages, getThreadTldr } from '../helpers.js';

export const prerender = false;

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);
        const messages = await getThreadMessages(id);

        const upvotes = random(1, 60);

        return {
            ...thread,
            related,
            upvotes,
            messages,
            streamed: {
                tldr: getThreadTldr(thread)
            }
        };
    } catch (e) {
        console.log(e);
        throw error(404, 'Thread not found');
    }
};
