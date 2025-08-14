import { base } from '$app/paths';

export interface CategoryData {
    name: string;
    description: string;
    href: string;
}
export interface AuthorData {
    name: string;
    slug: string;
    role: string;
    avatar: string;
    bio: string;
    twitter: string;
    linkedin: string;
    github: string;
    href: string;
}

export interface PostsData {
    draft: boolean;
    title: string;
    description: string;
    date: Date;
    lastUpdated: Date;
    cover: string;
    timeToRead: number;
    author: string;
    category: string;
    href: string;
    slug: string;
    featured?: boolean;
    unlisted?: boolean;
    callToAction?: {
        heading?: string;
        label?: string;
        url?: string;
    };
}

const postsGlob = import.meta.glob('./post/**/*.markdoc', {
    eager: true
});
const authorsGlob = import.meta.glob('./author/**/*.markdoc', {
    eager: true
});
const categoriesGlob = import.meta.glob('./category/**/*.markdoc', {
    eager: true
});

export const getAllPosts = Object.entries(postsGlob)
    .map(([filepath, postList]) => {
        const { frontmatter } = postList as {
            frontmatter: PostsData;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const postName = slug.slice(slug.lastIndexOf('/') + 1);

        return {
            title: frontmatter.title,
            description: frontmatter.description,
            featured: frontmatter.featured,
            date: new Date(frontmatter.date),
            lastUpdated: new Date(frontmatter.lastUpdated),
            cover: frontmatter.cover,
            timeToRead: frontmatter.timeToRead,
            author: frontmatter.author,
            category: frontmatter.category,
            href: `${base}/blog/post/${postName}`,
            slug,
            unlisted: frontmatter.unlisted,
            draft: frontmatter.draft
        };
    })
    .sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

export const getAllAuthors = Object.values(authorsGlob).map((authorList) => {
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

export const getAllCategories = Object.values(categoriesGlob).map((categoryList) => {
    const { frontmatter } = categoryList as {
        frontmatter: CategoryData;
    };

    return {
        name: frontmatter.name,
        description: frontmatter.description,
        href: `${base}/blog/category/${frontmatter.name.toLowerCase()}`
    };
});

export const normalizeCategory = (str: string) => str?.replace(/\s+/g, '-').toLowerCase();

export const getBlogEntries = () => {
    const filteredCategories = getAllCategories.filter((category) =>
        getAllPosts.some(
            (post) => normalizeCategory(post.category) === normalizeCategory(category.name)
        )
    );

    return {
        authors: getAllAuthors,
        filteredCategories,
        posts: getAllPosts.filter((post) => !post.unlisted)
    };
};
