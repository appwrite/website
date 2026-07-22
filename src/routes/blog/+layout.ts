import { publishedPosts, authors, categories } from './content';

export async function load({ data }) {
    return {
        posts: publishedPosts,
        authors,
        categories,
        rawContent: data.rawContent
    };
}
