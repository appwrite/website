import { getThreads } from './helpers.js';

export async function load({ url }) {
    const tagsParam = url.searchParams.get('tags');

    return {
        threads: await getThreads(
            url.searchParams.get('q'),
            tagsParam ? tagsParam.split(',') : undefined
        )
    };
}
