import { getThreads } from './helpers.js';

export async function load({ url }) {
    const tagsParam = url.searchParams.get('tags');

    const result = await getThreads({
        q: url.searchParams.get('q'),
        tags: tagsParam ? tagsParam.split(',') : undefined,
        allTags: true
    });

    return {
        threads: result.threads,
        hasMore: result.hasMore,
        nextCursor: result.nextCursor,
        total: result.total
    };
}
