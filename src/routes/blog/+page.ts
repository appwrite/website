import { base } from '$app/paths';
import type { AuthorData, PostsData } from './content';

const POSTS_PER_PAGE = 12;
export const _PAGE_NAVIGATION_RANGE = 3;

export function load({ url }) {
    const postsGlob = import.meta.glob('./post/**/*.markdoc', {
        eager: true
    });
    const authorsGlob = import.meta.glob('./author/**/*.markdoc', {
        eager: true
    });

    const posts = Object.entries(postsGlob)
        .map(([filepath, postList]) => {
            const { frontmatter } = postList as {
                frontmatter: PostsData;
            };
            const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
            const postName = slug.slice(slug.lastIndexOf('/') + 1);

            return {
                title: frontmatter.title,
                description: frontmatter.description,
                featured: frontmatter?.featured ?? false,
                date: new Date(frontmatter.date),
                cover: frontmatter.cover,
                timeToRead: frontmatter.timeToRead,
                author: frontmatter.author,
                category: frontmatter.category,
                href: `${base}/blog/post/${postName}`,
                draft: frontmatter.draft
            };
        })
        .sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
        });

    const authors = Object.values(authorsGlob).map((authorList) => {
        const { frontmatter } = authorList as {
            frontmatter: AuthorData;
        };

        return {
            name: frontmatter.name,
            slug: frontmatter.slug,
            role: frontmatter.role,
            avatar: frontmatter.avatar,
            bio: frontmatter.bio,
            twitter: frontmatter.twitter,
            linkedin: frontmatter.linkedin,
            github: frontmatter.github,
            href: `${base}/blog/author/${frontmatter.slug}`
        };
    });

    const paginationData = getPaginationData(url, posts);

    return {
        authors,
        ...paginationData,
        featured: posts.find(post => post.featured)
    };
}

function getPaginationData(url: URL, posts: object) {
    const currentPage = Number(url.searchParams.get('page')) || 1;
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const paginatedPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const pageNavigationChunks = Array.from({ length: totalPages }, (_, i) => i + 1)
        .reduce((acc, curr, idx) => {
            const chunkIdx = Math.floor(idx / _PAGE_NAVIGATION_RANGE);
            acc[chunkIdx] = acc[chunkIdx] || [];
            acc[chunkIdx].push(curr);
            return acc;
        }, []);

    return {
        totalPages,
        currentPage,
        posts: paginatedPosts,
        navigation: pageNavigationChunks,
    }
}