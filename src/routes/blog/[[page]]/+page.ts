import { getAllBlogEntriesWithAuthors } from '../content';
import { BLOG_POSTS_NAVIGATION_RANGE, BLOG_POSTS_PER_PAGE } from '$lib/constants';
import { redirect } from '@sveltejs/kit';

export const entries = () => {
    const { posts } = getAllBlogEntriesWithAuthors();
    const totalPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);

    return Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString()
    }));
};

export const load = async ({ params }) => {
    const currentPage = parseInt(params.page || '1', 10);

    if (params.page === '1') {
        redirect(302, '/blog');
    }

    const { posts, authors } = getAllBlogEntriesWithAuthors();
    const totalPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);

    const pageNavigationChunks = generatePageNavigationChunks(totalPages);

    const endIndex = currentPage * BLOG_POSTS_PER_PAGE;
    const startIndex = (currentPage - 1) * BLOG_POSTS_PER_PAGE;

    return {
        authors,
        totalPages,
        currentPage,
        navigation: pageNavigationChunks,
        posts: posts.slice(startIndex, endIndex),
        featured: posts.find(post => post.featured)
    };
};

function generatePageNavigationChunks(totalPages: number): number[][] {
    return Array.from({ length: totalPages }, (_, i) => i + 1).reduce((acc: number[][], curr, idx) => {
        const chunkIdx = Math.floor(idx / BLOG_POSTS_NAVIGATION_RANGE);
        acc[chunkIdx] = acc[chunkIdx] || [];
        acc[chunkIdx].push(curr);
        return acc;
    }, []);
}