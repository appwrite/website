import { posts, authors, categories } from './content';

export async function load({ data }) {
    return {
        posts,
        authors,
        categories,
        rawContent: data.rawContent
    };
}
