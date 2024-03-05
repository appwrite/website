import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread, getThreadMessages } from '../helpers.js';

export const load = async ({ params }) => {
    const id = params.id;
    console.log('rendering page with id', id)

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
        error(404, 'Thread not found');
    }
};
