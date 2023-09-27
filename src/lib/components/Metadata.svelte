<script lang="ts" context="module">
	type MetaDataType = {
		title: string;
		description: string;
		ogImage: string;
		ogTitle: string;
		ogDescription: string;
		author: AuthorData;
		post: PostsData;
	};

	const metadata = writable<Partial<MetaDataType>>();
	export const DEFAULT_HOST = 'https://website-appwrite.vercel.app';
	export function buildOpenGraphImage(title: string, description: string): string {
		return `https://og.appwrite.global/image.png?title=${encodeURIComponent(
			title
		)}&subtitle=${encodeURIComponent(description)}`;
	}
	export function setMetadata(data: Partial<MetaDataType>) {
		metadata.set(data);
	}
</script>

<script lang="ts">
	import type { AuthorData } from '$markdoc/layouts/Author.svelte';
	import type { PostsData } from '$markdoc/layouts/Post.svelte';
	import { writable } from 'svelte/store';

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

{#if $metadata?.title}
	<title>{$metadata.title}</title>
	<meta name="”twitter:site”" content="@appwrite" />
	{#if !$metadata?.ogTitle}
		<meta property="og:title" content={$metadata.title} />
		<meta name="”twitter:title”" content={$metadata.title} />
	{/if}
{/if}
{#if $metadata?.description}
	<meta name="description" content={$metadata.description} />
	{#if !$metadata?.ogDescription}
		<meta property="og:description" content={$metadata.description} />
		<meta name="”twitter:description" content={$metadata.description} />
	{/if}
{/if}
{#if $metadata?.ogImage}
	<meta property="og:image" content={$metadata.ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={$metadata.ogImage} />
	<meta name="”twitter:card”" content="”summary”" />
{/if}
{#if $metadata?.ogTitle}
	<meta property="og:title" content={$metadata.ogTitle} />
	<meta name="”twitter:title”" content={$metadata.ogTitle} />
{/if}
{#if $metadata?.ogDescription}
	<meta property="og:description" content={$metadata.ogDescription} />
	<meta name="”twitter:description" content={$metadata.ogDescription} />
{/if}
{#if $metadata?.author}
	{@html `<script type="application/ld+json">${createSchemaAuthor($metadata.author)}</script>`}
{/if}
{#if $metadata?.post}
	{@html `<script type="application/ld+json">${createSchemaPost($metadata.post)}</script>`}
{/if}
