import { getThreads } from './helpers.js';

export async function load({ url }) {
    const tagsParam = url.searchParams.get('tags');

    return {
        threads: await getThreads({
            q: url.searchParams.get('q'),
            tags: tagsParam ? tagsParam.split(',') : undefined,
            allTags: true
        })
    };
}
