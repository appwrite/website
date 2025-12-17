import type { AuthorData } from '$routes/blog/content';

export interface AuthorInfo {
    name: string;
    href: string;
}

/**
 * Extracts author information from a post for use in Article components
 */
export function getPostAuthors(
    postAuthor: string | string[],
    allAuthors: AuthorData[]
): {
    postAuthors: AuthorInfo[];
    authorAvatars: string[];
    primaryAuthor: AuthorData | undefined;
} {
    const postAuthorSlugs = Array.isArray(postAuthor) ? postAuthor : [postAuthor];
    const primarySlug = postAuthorSlugs[0];

    const primaryAuthor =
        allAuthors.find((a) => a.slug === primarySlug) ||
        allAuthors.find((a) => postAuthorSlugs.includes(a.slug));

    const postAuthors = postAuthorSlugs
        .map((slug) => allAuthors.find((a) => a.slug === slug))
        .filter((a): a is AuthorData => !!a)
        .map((a) => ({ name: a.name, href: a.href }));

    const authorAvatars = postAuthorSlugs
        .map((slug) => allAuthors.find((a) => a.slug === slug)?.avatar)
        .filter((a): a is string => !!a);

    return {
        postAuthors,
        authorAvatars,
        primaryAuthor
    };
}
