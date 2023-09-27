<script context="module" lang="ts">
	export type PostsData = {
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
</script>

<script lang="ts">
	import { Article, FooterNav, MainFooter, Metadata, Newsletter } from '$lib/components';
	import { Main } from '$lib/layouts';
	import { getContext } from 'svelte';
	import type { AuthorData } from './Author.svelte';
	import type { CategoryData } from './Category.svelte';
	import { BLOG_TITLE_SUFFIX } from '$routes/titles';
	import { DEFAULT_HOST } from '$lib/components/Metadata.svelte';

	export let title: string;
	export let description: string;
	export let author: string;
	export let date: string;
	export let timeToRead: string;
	export let cover: string;
	export let category: string;

	const authors = getContext<AuthorData[]>('authors');
	const authorData = authors.find((a) => a.slug === author);
	const categoriesList = getContext<CategoryData[]>('categories');
	const categories = getValidCategories();
	const posts = getContext<PostsData[]>('posts');

	function getValidCategories() {
		if (!category) return undefined;
		const cats = category.split(',');
		return categoriesList.filter((c) =>
			cats.some((cat) => cat.toLocaleLowerCase() === c.name.toLocaleLowerCase())
		);
	}
</script>

<svelte:head>
	<Metadata
		title={title + BLOG_TITLE_SUFFIX}
		{description}
		ogTitle={title}
		ogImage={DEFAULT_HOST + cover}
	/>
</svelte:head>

<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section">
			<div class="aw-big-padding-section-level-1">
				<div class="aw-big-padding-section-level-2">
					<div class="aw-container" style="--container-size:42.5rem">
						<article class="aw-main-article">
							<header class="aw-main-article-header">
								<a class="aw-link aw-u-color-text-secondary" href="/blog">
									<span class="aw-icon-chevron-left" aria-hidden="true" />
									<span>Back to blog</span>
								</a>
								<ul class="aw-metadata aw-caption-400">
									<li>
										<time datetime={date}>{new Date(date).toLocaleDateString()}</time>
									</li>
									{#if timeToRead}
										<li>{timeToRead} min</li>
									{/if}
								</ul>
								<h1 class="aw-title aw-u-color-text-primary">{title}</h1>
								{#if description}
									<p class="aw-description u-margin-block-start-8">
										{description}
									</p>
								{/if}
								{#if authorData}
									<div class="aw-author u-margin-block-start-16">
										<a href={authorData.href} class="u-flex u-cross-center u-gap-8">
											{#if authorData.avatar}
												<img
													class="aw-author-image"
													src={authorData.avatar}
													width="44"
													height="44"
													alt=""
												/>
											{/if}
											<div class="u-flex-vertical">
												<h4 class="aw-sub-body-400 aw-u-color-text-primary">{authorData.name}</h4>
												<p class="aw-caption-400">{authorData.role}</p>
											</div>
										</a>
										<!-- <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
											{#if authorData.twitter}
												<li>
													<a
														href={authorData.twitter}
														class="aw-icon-button"
														aria-label="Author twitter"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-x" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authorData.linkedin}
												<li>
													<a
														href={authorData.linkedin}
														class="aw-icon-button"
														aria-label="Author LinkedIn"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-linkedin" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authorData.github}
												<li>
													<a
														href={authorData.github}
														class="aw-icon-button"
														aria-label="Author GitHub"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-github" aria-hidden="true" />
													</a>
												</li>
											{/if}
										</ul> -->
									</div>
								{/if}
							</header>
							{#if cover}
								<div class="aw-media-container">
									<img class="u-block" src={cover} alt="console dashboard" />
								</div>
							{/if}

							<div class="aw-article-content u-margin-block-start-32">
								<slot />
							</div>
						</article>
						<!-- {#if categories?.length}
							<div class="u-flex u-gap-16">
								{#each categories as cat}
									<a href={cat.href} class="aw-tag">{cat.name}</a>
								{/each}
							</div>
						{/if} -->
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="aw-big-padding-section-level-1 aw-u-sep-block-start">
		<div class="aw-big-padding-section-level-2">
			<div class="aw-container">
				<h3 class="aw-label aw-u-color-text-primary">Read next</h3>
				<section class="u-margin-block-start-32">
					<ul class="aw-grid-articles">
						{#each posts.filter((p) => p.title !== title).slice(0, 3) as post}
							{@const author = authors.find((a) => a.slug === post.author)}
							{#if author}
								<Article
									title={post.title}
									href={post.href}
									cover={post.cover}
									date={post.date}
									timeToRead={post.timeToRead}
									avatar={author.avatar}
									author={author.name}
								/>
							{/if}
						{/each}
					</ul>
				</section>
			</div>
		</div>
	</div>

	<div
		class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
	>
		<div class="aw-container">
			<Newsletter />
			<FooterNav />
			<MainFooter />
		</div>
	</div>
</Main>
