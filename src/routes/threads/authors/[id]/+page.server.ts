import { error } from '@sveltejs/kit';
import { DEFAULT_HOST } from '$lib/utils/metadata';
import { getAuthor, getAuthorThreads } from '../../helpers.js';
import type { DiscordThread } from '../../types.js';

export const load = async ({ params }) => {
    let author;
    try {
        author = await getAuthor(params.id);
    } catch {
        error(404, 'Author not found');
    }

    let threads: DiscordThread[] = [];
    let total = 0;
    try {
        ({ threads, total } = await getAuthorThreads(params.id));
    } catch (e) {
        console.error('Failed to fetch author threads:', e);
    }

    return {
        author,
        threads,
        total,
        canonicalUrl: `${DEFAULT_HOST}/threads/authors/${params.id}`
    };
};
