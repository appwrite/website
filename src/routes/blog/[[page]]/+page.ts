import { getAllBlogEntriesWithAuthors } from '../content';
import { BLOG_POSTS_PER_PAGE } from '$lib/constants';
import { error, redirect } from '@sveltejs/kit';

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

    const pageNavigationChunks = generatePageNavigation(currentPage, totalPages);

    const endIndex = currentPage * BLOG_POSTS_PER_PAGE;
    const startIndex = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
    const blogPosts = posts.slice(startIndex, endIndex);

    if (blogPosts.length === 0) {
        error(404, 'Not Found');
    }

    return {
        authors,
        totalPages,
        currentPage,
        posts: blogPosts,
        navigation: pageNavigationChunks,
        featured: posts.find((post) => post.featured)
    };
};

function generatePageNavigation(currentPage: number, totalPages: number): number[] {
    const range = [];

    // adds `...` to range.
    const ellipseItem = -1;

    const middlePages = 3;
    const visiblePages = 5;

    if (totalPages <= visiblePages + 2) {
        // +2 for the first and last page
        // If the total number of pages is small, show all pages without ellipsis
        for (let i = 1; i <= totalPages; i++) {
            range.push(i);
        }
    } else {
        if (currentPage <= 4) {
            // Case 1: Show first visiblePages pages + ellipsis + last page
            for (let i = 1; i <= visiblePages; i++) {
                range.push(i);
            }
            range.push(ellipseItem);
            range.push(totalPages);
        } else if (currentPage > 4 && currentPage < totalPages - (visiblePages - 1)) {
            // Case 2: Show first page + ellipsis + middlePages centered around currentPage + ellipsis + last page
            range.push(1);
            range.push(ellipseItem);
            for (
                let i = currentPage - Math.floor(middlePages / 2);
                i <= currentPage + Math.floor(middlePages / 2);
                i++
            ) {
                range.push(i);
            }
            range.push(ellipseItem);
            range.push(totalPages);
        } else {
            // Case 3: Show first page + ellipsis + last visiblePages pages
            range.push(1);
            range.push(ellipseItem);
            for (let i = totalPages - (visiblePages - 1); i <= totalPages; i++) {
                range.push(i);
            }
        }
    }

    return range;
}
