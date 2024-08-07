import { redirect } from '@sveltejs/kit';
import { CHANGELOG_DEPENDENCY, getAllChangelogEntries } from '../utils';

const PER_PAGE = 5;

export const entries = async () => {
    const entries = await getAllChangelogEntries();
    const totalPages = Math.ceil(entries.length / PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => {
        return {
            page: (i + 1).toString()
        };
    });
};

export const load = async ({ depends, params }) => {
    depends(CHANGELOG_DEPENDENCY);

    if (params.page === '1') {
        redirect(302, '/changelog');
    }

    const page = parseInt(params.page || '1', 10);

    const entries = await getAllChangelogEntries();

    return {
        page,
        entries: entries.slice(0, page * PER_PAGE),
        nextPage: page < Math.ceil(entries.length / PER_PAGE) ? page + 1 : null
    };
};
