import { getThreads } from './helpers.js';

export async function load({ url }) {
    return {
        threads: await getThreads(url.searchParams.get('q'))
    };
}
