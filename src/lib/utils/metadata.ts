import type { AuthorData, PostsData } from "$routes/blog/content";

export const DEFAULT_HOST = 'https://appwrite.io';
export const DEFAULT_DESCRIPTION = 'Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.';
export function buildOpenGraphImage(title: string, description: string): string {
	return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
		title
	)}&subtitle=${encodeURIComponent(description)}`;
}

export function createSchemaAuthor(author: AuthorData): string {
	return (
		`< script type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: author.name,
			url: author.href,
			image: author.avatar
		})}</` + 'script>'
	);
}

export function createSchemaPost(post: PostsData): string {
	return (
		`< script type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			image: post.cover,
			datePublished: post.date,
			dateModified: post.date
		})}</` + 'script>'
	);
}
