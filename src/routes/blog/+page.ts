import { base } from '$app/paths';
import type { AuthorData, PostsData } from './content';

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

    const page = Number(url.searchParams.get('page')) || 1;
    const postsPerPage = 6; // Adjust this number as needed
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginatedPosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage);

    return {
        posts: paginatedPosts,
        authors,
        currentPage: page,
        totalPages,
        featured: posts.find(post => post.featured)
    };
}
