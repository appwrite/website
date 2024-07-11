import type { AuthorData, PostsData } from "$routes/blog/content";

export const DEFAULT_HOST = 'https://appwrite.io';
export const DEFAULT_DESCRIPTION = 'Appwrite is an open-source backend platform offering essential APIs for building web and mobile applications.';
export const ASSETS_DESCRIPTION = 'Resources for presenting the Appwrite brand, ensuring consistency in using our logos, colours, and other brand elements across various platforms and materials.'
export const BLOG_DESCRIPTION = 'Stay updated with the latest product news, insights, and tutorials from the Appwrite team. Discover tips and best practices for hassle-free backend development.'
export const CHANGELOG_DESCRIPTION = 'Check out our detailed changelog to see what\'s new and what updates have been made to Appwrite Cloud and Self Hosted.'
export const COMMUNITY_DESCRIPTION = 'Join our vibrant community of developers. Ask questions, contribute solutions, and inspire others to improve the backend development experience.'
export const COOKIE_POLICY_DESCRIPTION = 'Read our cookie policy to understand your choices and manage your preferences.'
export const DOCUMENTATION_DESCRIPTION = 'Learn how to build like a team of hundreds. Get started with Authentication, Databases, Storage, Functions, and Messaging in your preferred framework.'
export const POLICY_DESCRIPTION = 'Understand how we collect, use, and protect your personal information.'
export const PRICING_DESCRIPTION = 'Explore our straightforward pricing plans that scale with your project.'
export const TERMS_POLICY_DESCRIPTION = 'Review our Terms of Service to understand the rules and guidelines for using our open-source backend-as-a-service platform.'
export const TUTORIALS_DESCRIPTION = 'Follow a simple tutorial to get started with Appwrite in your preferred framework quickly and easily.'

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
