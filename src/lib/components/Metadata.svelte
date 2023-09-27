<script lang="ts" context="module">
	export const DEFAULT_HOST = 'https://website-appwrite.vercel.app';
	export function buildOpenGraphImage(title: string, description: string): string {
		return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
			title
		)}&subtitle=${encodeURIComponent(description)}`;
	}
</script>

<script lang="ts">
	import type { AuthorData } from '$markdoc/layouts/Author.svelte';
	import type { PostsData } from '$markdoc/layouts/Post.svelte';

	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let ogImage: string | undefined = undefined;
	export let ogTitle: string | undefined = title;
	export let ogDescription: string | undefined = description;
	export let author: AuthorData | undefined = undefined;
	export let post: PostsData | undefined = undefined;

	function createSchemaAuthor(author: AuthorData): string {
		return JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: author.name,
			url: author.href,
			image: author.avatar
		});
	}

	function createSchemaPost(post: PostsData): string {
		return JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.title,
			image: post.cover,
			datePublished: post.date,
			dateModified: post.date
		});
	}
</script>

{#if title}
	<title>{title}</title>
{/if}
{#if description}
	<meta name="description" content={description} />
{/if}
{#if ogImage}
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
{/if}
{#if ogTitle}
	<meta property="og:title" content={ogTitle} />
{/if}
{#if ogDescription}
	<meta property="og:description" content={ogDescription} />
{/if}
{#if author}
	{@html `<script type="application/ld+json">${createSchemaAuthor(author)}</script>`}
{/if}
{#if post}
	{@html `<script type="application/ld+json">${createSchemaPost(post)}</script>`}
{/if}
<slot />
