import { posts, authors, categories } from './content';

export function load() {
    return {
        posts,
        authors,
        categories
    };
}
