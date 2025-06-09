import { error } from '@sveltejs/kit';
import { getAllChangelogEntries } from '../../utils.js';
import type { EntryGenerator } from './$types.js';

export const entries: EntryGenerator = async () => {
    const entries = await getAllChangelogEntries();
    return entries.map((entry) => {
        return {
            entry: entry.slug
        };
    });
};

export const load = async ({ params }) => {
    const entries = await getAllChangelogEntries();
    const entry = entries.find((entry) => {
        return entry.slug === params.entry;
    });

    if (!entry) {
        error(404, 'Not found');
    }

    return {
        ...entry
    };
};
