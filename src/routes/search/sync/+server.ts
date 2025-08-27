import { json } from '@sveltejs/kit';
import { getSearchablePosts } from '$lib/meilisearch/blog';
import { index } from '$lib/meilisearch/client';

export const GET = async () => {
    try {
        const posts = getSearchablePosts();

        await index.deleteAllDocuments();
        const res = index.addDocumentsInBatches(posts, 1000);

        return json(res);
    } catch (error) {
        return json({ updated: false, error });
    }
};
