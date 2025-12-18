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
    if (postAuthorSlugs.length === 0) {
        return {
            postAuthors: [],
            authorAvatars: [],
            primaryAuthor: undefined
        };
    }

    const authorsBySlug = new Map<string, AuthorData>();
    for (const author of allAuthors) {
        authorsBySlug.set(author.slug, author);
    }

    const postAuthors: AuthorInfo[] = [];
    const authorAvatars: string[] = [];
    let primaryAuthor: AuthorData | undefined;

    for (const slug of postAuthorSlugs) {
        const author = authorsBySlug.get(slug);
        if (author) {
            postAuthors.push({ name: author.name, href: author.href });
            if (author.avatar) {
                authorAvatars.push(author.avatar);
            }
            if (!primaryAuthor) {
                primaryAuthor = author;
            }
        }
    }

    return {
        postAuthors,
        authorAvatars,
        primaryAuthor
    };
}
