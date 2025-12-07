import { error } from '@sveltejs/kit';
import { changelogs } from '../../utils.js';
import type { EntryGenerator } from './$types.js';

export const entries: EntryGenerator = async () =>
    changelogs.map((entry) => ({
        entry: entry.slug
    }));

export const load = async ({ params }) => {
    const entry = changelogs.find((entry) => entry.slug === params.entry);

    if (!entry) {
        error(404, 'Not found');
    }

    return {
        ...entry
    };
};
