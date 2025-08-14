import { getAllPosts, getAllAuthors, getAllCategories } from './content';

export function load() {
    return {
        posts: getAllPosts,
        authors: getAllAuthors,
        categories: getAllCategories
    };
}
