import { error } from '@sveltejs/kit';
import { getThread } from '../helpers.js';

export const load = async ({ params }) => {
    const id = params.id;

    try {
        const thread = await getThread(id);

        return { ...thread };
    } catch {
        throw error(404, 'Thread not found');
    }
};
