<script context="module" lang="ts">
	export type CategoryData = {
		name: string;
		description: string;
		href: string;
	};
</script>

<script lang="ts">
	import { FooterNav, MainFooter } from '$lib/components';
	import { Main } from '$lib/layouts';
	import { getContext } from 'svelte';
	import type { PostsData } from './Post.svelte';
	import type { AuthorData } from './Author.svelte';

	export let name: string;
	export let description: string;

	const authors = getContext<AuthorData[]>('authors');
	const postsList = getContext<PostsData[]>('posts');
	const posts = postsList.filter((post) => post.category.includes(name.toLowerCase()));
</script>

<Main>
	<div class="aw-big-padding-section-level-1">
		<div class="aw-big-padding-section-level-2">
			<div class="aw-container">
				<a class="aw-link aw-u-color-text-secondary" href="/blog">
					<span class="aw-icon-chevron-left" aria-hidden="true" />
					<span class="">Back to blog</span>
				</a>
				<div class="aw-category-header u-margin-block-start-24">
					<div class="aw-category-header-content">
						<h1 class="aw-display aw-u-color-text-primary">{name}</h1>
						<p class="aw-category-header-description aw-description">
							{description}
						</p>
					</div>
					<!-- <div class="aw-input-text-search-wrapper u-inline-width-100-percent-mobile">
						<span class="icon-search" aria-hidden="true" />
						<input class="aw-input-text aw-u-block-size-48" type="search" placeholder="Search" />
					</div> -->
				</div>

				<div class="u-margin-block-start-48">
					<ul class="aw-grid-articles">
						{#each posts as post}
							{@const author = authors.find((a) => a.name.includes(post.author))}
							<li>
								<a class="aw-grid-articles-item" href={post.href}>
									<div class="aw-grid-articles-item-image">
										<img src={post.cover} class="aw-image-ratio-4/3" alt={post.title} />
									</div>
									<div class="aw-grid-articles-item-content">
										<h4 class="aw-label aw-u-color-text-primary">
											{post.title}
										</h4>
										<div class="aw-author">
											<div class="u-flex u-cross-center u-gap-8">
												<img
													class="aw-author-image"
													src={author?.avatar}
													width="24"
													height="24"
													alt={author?.name}
												/>
												<div class="aw-author-info">
													<h4 class="aw-sub-body-400 aw-u-color-text-primary">{author?.name}</h4>
													<ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
														<li>{post.date.toLocaleDateString()}</li>
														<li>{post.timeToRead} min</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div
					class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
				>
					<div class="aw-container">
						<FooterNav />
						<MainFooter />
					</div>
				</div>
			</div>
		</div>
	</div></Main
>
