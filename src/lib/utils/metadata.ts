import type { AuthorData } from '$markdoc/layouts/Author.svelte';
import type { PostsData } from '$markdoc/layouts/Post.svelte';

export const DEFAULT_HOST = 'https://website-appwrite.vercel.app';
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
