import { base } from '$app/paths';
export type CategoryData = {
    name: string;
    description: string;
    href: string;
};
export type AuthorData = {
    name: string;
    slug: string;
    role: string;
    avatar: string;
    bio: string;
    twitter: string;
    linkedin: string;
    github: string;
    href: string;
};
export type PostsData = {
    draft: boolean;
    title: string;
    description: string;
    date: Date;
    cover: string;
    timeToRead: number;
    author: string;
    category: string;
    href: string;
    featured?: boolean;
};

const postsGlob = import.meta.glob('./post/**/*.markdoc', {
    eager: true
});
const authorsGlob = import.meta.glob('./author/**/*.markdoc', {
    eager: true
});
const categoriesGlob = import.meta.glob('./category/**/*.markdoc', {
    eager: true
});

export const posts = Object.entries(postsGlob)
    .map(([filepath, postList]) => {
        const { frontmatter } = postList as {
            frontmatter: PostsData;
        };

        const slug = filepath.replace('./', '').replace('/+page.markdoc', '');
        const postName = slug.slice(slug.lastIndexOf('/') + 1);

        return {
            title: frontmatter.title,
            description: frontmatter.description,
            date: new Date(frontmatter.date),
            cover: frontmatter.cover,
            timeToRead: frontmatter.timeToRead,
            author: frontmatter.author,
            category: frontmatter.category,
            href: `${base}/blog/post/${postName}`
        };
    })
    .sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    });

export const authors = Object.values(authorsGlob).map((authorList) => {
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

export const categories = Object.values(categoriesGlob).map((categoryList) => {
    const { frontmatter } = categoryList as {
        frontmatter: CategoryData;
    };

    return {
        name: frontmatter.name,
        description: frontmatter.description,
        href: `${base}/blog/category/${frontmatter.name.toLowerCase()}`
    };
});
