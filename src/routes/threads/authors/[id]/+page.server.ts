import { error } from '@sveltejs/kit';
import { DEFAULT_HOST } from '$lib/utils/metadata';
import { getAuthor, getAuthorThreads } from '../../helpers.js';

export const load = async ({ params }) => {
    try {
        const author = await getAuthor(params.id);
        const threads = await getAuthorThreads(params.id);

        return {
            author,
            threads,
            canonicalUrl: `${DEFAULT_HOST}/threads/authors/${params.id}`
        };
    } catch {
        error(404, 'Author not found');
    }
};
