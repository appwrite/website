import type { AuthorData } from '$routes/blog/content';

export const DEFAULT_HOST = 'https://appwrite.io';
export const DEFAULT_DESCRIPTION =
    'Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.';

/**
 * Generates an Open Graph image URL with encoded title and description.
 */
export function buildOpenGraphImage(title: string, description: string): string {
    return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
        title
    )}&subtitle=${encodeURIComponent(description)}`;
}

/**
 * Escapes `<` as the JSON unicode escape `\u003c` so the result can be embedded
 * inside HTML `<script>` tags (including SvelteKit route data) without `</script>`
 * or similar sequences in string values ending the script early. `JSON.parse`
 * still yields the original `<`.
 */
export function escapeJsonLtForHtmlScript(json: string): string {
    return json.replace(/</g, '\\u003c');
}

/**
 * Returns an inlined JSON-LD script tag without breaking IDE formatting.
 */
export function getInlinedScriptTag(jsonSchema: string): string {
    const safeForInlineScript = escapeJsonLtForHtmlScript(jsonSchema);
    return `<script type="application/ld+json">${safeForInlineScript}</` + 'script>';
}

/**
 * Returns the JSON-LD schema for the Appwrite organization.
 */
export function organizationJsonSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: 'https://appwrite.io',
        sameAs: [
            'https://www.linkedin.com/company/appwrite',
            'https://github.com/appwrite/appwrite',
            'https://www.producthunt.com/products/appwrite',
            'https://x.com/appwrite'
        ],
        name: 'Appwrite',
        legalName: 'Appwrite Code Ltd.',
        description:
            'A secure open-source backend server provides the core APIs required to build web and mobile applications. Appwrite provides authentication, database, storage, functions, messaging, and advanced realtime capabilities.',
        logo: 'https://appwrite.io/assets/logotype/white.png'
    });
}

/**
 * Returns the JSON-LD schema for the Appwrite software application.
 */
export function softwareAppSchema() {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Appwrite',
        applicationCategory: 'Software development',
        featureList: 'Authentication, Database, Storage, Functions, Messaging',
        audience: {
            '@type': 'Audience',
            audienceType: 'Developers'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: '5',
            ratingValue: '4.8',
            ratingCount: '74'
        }
    });
}

/**
 * Returns the JSON-LD schema for a blog post.
 */
export function createPostSchema(
    post: { title: string; cover: string; date: string; lastUpdated?: string },
    authors?: AuthorData | AuthorData[]
) {
    const authorsArray = Array.isArray(authors) ? authors : authors ? [authors] : [];

    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [post.cover],
        datePublished: post.date,
        ...(post.lastUpdated && { dateModified: post.lastUpdated }),
        ...(authorsArray.length > 0 && {
            author: authorsArray.map((author) => ({
                '@type': 'Person',
                url: author.href,
                name: author.name
            }))
        })
    });
}

/**
 * Returns the JSON-LD schema for breadcrumbs.
 */
export function createBreadcrumbsSchema(articleInfo: {
    title: string;
    category: string;
    url: string;
}): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Blog',
                item: 'https://appwrite.io/blog'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: articleInfo.category,
                item: `https://appwrite.io/blog?category=${articleInfo.category}`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: articleInfo.title,
                item: articleInfo.url
            }
        ]
    });
}

/**
 * Returns the JSON-LD schema for faqs.
 */
export function createFaqSchema(
    faqs: Array<{
        question: string;
        answer: string;
    }>
): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    });
}

export type DiscussionForumMessageForSchema = {
    author: string;
    /** Full message body as shown on the page (e.g. markdown source). */
    text: string;
    timestamp: string;
    $id?: string;
};

export type DiscussionForumThreadForSchema = {
    title: string;
    /** Fallback when there are no messages in the thread. */
    content: string;
    author: string;
    $createdAt: string;
    vote_count?: number;
};

function toIso8601DateTime(value: string): string {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

function nonEmptyText(value: string, fallback: string): string {
    const t = value.trim();
    return t.length > 0 ? value : fallback;
}

/**
 * JSON-LD for thread / forum pages (DiscussionForumPosting), per
 * https://developers.google.com/search/docs/appearance/structured-data/discussion-forum
 */
export function createDiscussionForumPageSchema(options: {
    canonicalUrl: string;
    thread: DiscussionForumThreadForSchema;
    messages: DiscussionForumMessageForSchema[];
}): string {
    const { canonicalUrl, thread, messages } = options;
    const first = messages[0];
    const opText = nonEmptyText(first?.text ?? '', nonEmptyText(thread.content, thread.title));
    const opAuthor = (first?.author ?? thread.author).trim() || 'Anonymous';
    const opDate = toIso8601DateTime(first?.timestamp ?? thread.$createdAt);

    const comments = messages.slice(1).map((m) => {
        const text = nonEmptyText(m.text, '(No text)');
        const comment: Record<string, unknown> = {
            '@type': 'Comment',
            text,
            author: {
                '@type': 'Person',
                name: m.author.trim() || 'Anonymous'
            },
            datePublished: toIso8601DateTime(m.timestamp)
        };
        if (m.$id) {
            comment.url = `${canonicalUrl}#message-${m.$id}`;
        }
        return comment;
    });

    const mainEntity: Record<string, unknown> = {
        '@type': 'DiscussionForumPosting',
        headline: thread.title,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        text: opText,
        author: {
            '@type': 'Person',
            name: opAuthor
        },
        datePublished: opDate
    };

    if (typeof thread.vote_count === 'number' && thread.vote_count >= 0) {
        mainEntity.interactionStatistic = {
            '@type': 'InteractionCounter',
            interactionType: 'https://schema.org/LikeAction',
            userInteractionCount: thread.vote_count
        };
    }

    const replyCount = Math.max(0, messages.length - 1);
    if (replyCount > 0) {
        mainEntity.commentCount = replyCount;
        mainEntity.comment = comments;
    }

    const graph = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: canonicalUrl,
        mainEntity
    };

    return escapeJsonLtForHtmlScript(JSON.stringify(graph));
}

export function createAuthorPageSchema({
    canonicalUrl,
    author
}: {
    canonicalUrl: string;
    author: {
        display_name: string;
        username: string;
        avatar?: string;
        thread_count: number;
        reply_count: number;
        bio?: string;
    };
}): string {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: canonicalUrl,
        mainEntity: {
            '@type': 'Person',
            name: author.display_name,
            alternateName: author.username,
            ...(author.avatar ? { image: author.avatar } : {}),
            ...(author.bio ? { description: author.bio } : {}),
            interactionStatistic: [
                {
                    '@type': 'InteractionCounter',
                    interactionType: 'https://schema.org/WriteAction',
                    userInteractionCount: author.thread_count + author.reply_count
                }
            ]
        }
    };

    return escapeJsonLtForHtmlScript(JSON.stringify(schema));
}
