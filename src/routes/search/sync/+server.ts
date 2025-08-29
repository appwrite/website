import { json } from '@sveltejs/kit';
import { getSearchablePosts } from '../(lib)/blog';
import { index } from '../(lib)/client';

export const GET = async () => {
    try {
        const posts = getSearchablePosts();

        const res = await index.addDocuments(posts);

        return json(res);
    } catch (error) {
        return json({ updated: false, error });
    }
};
