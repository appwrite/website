import { error } from '@sveltejs/kit';
import { getRelatedThreads, getThread } from '../helpers.js';

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);
        const related = await getRelatedThreads(thread);

        return { ...thread, related };
    } catch {
        throw error(404, 'Thread not found');
    }
};
