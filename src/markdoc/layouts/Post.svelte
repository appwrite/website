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
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import { FooterNav, MainFooter, Newsletter, PreFooter } from '$lib/components';
	import { Main } from '$lib/layouts';
	import type { AuthorData } from './Author.svelte';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let author: string;
	export let date: string;
	export let timeToRead: string;
	export let cover: string;

	let authors: AuthorData | undefined;

	function fetchAuthorData() {
		const authorsGlob = import.meta.glob('$routes/blog/author/**/*.markdoc', {
			eager: true
		});
		const data = Object.entries(authorsGlob).map(([_filepath, authorList]) => {
			const { frontmatter } = authorList as {
				frontmatter: AuthorData;
			};

			return {
				name: frontmatter.name,
				role: frontmatter.role,
				avatar: frontmatter.avatar,
				bio: frontmatter.bio,
				twitter: frontmatter.twitter,
				linkedin: frontmatter.linkedin,
				github: frontmatter.github,
				href: `${base}/blog/author/${frontmatter.name.toLowerCase()}`
			};
		});

		authors = data.find((a) => a.name.includes(author));
	}
	fetchAuthorData();
</script>

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
								{#if authors}
									<div class="aw-author u-margin-block-start-16">
										<a href={authors.href} class="u-flex u-cross-center u-gap-8">
											{#if authors.avatar}
												<img
													class="aw-author-image"
													src={authors.avatar}
													width="44"
													height="44"
													alt=""
												/>
											{/if}
											<div class="u-flex-vertical">
												<h4 class="aw-sub-body-400 aw-u-color-text-primary">{authors.name}</h4>
												<p class="aw-caption-400">{authors.role}</p>
											</div>
										</a>
										<ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
											{#if authors.twitter}
												<li>
													<a
														href={authors.twitter}
														class="aw-icon-button"
														aria-label="Author twitter"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-twitter" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authors.linkedin}
												<li>
													<a
														href={authors.linkedin}
														class="aw-icon-button"
														aria-label="Author LinkedIn"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-linkedin" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authors.github}
												<li>
													<a
														href={authors.github}
														class="aw-icon-button"
														aria-label="Author GitHub"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-github" aria-hidden="true" />
													</a>
												</li>
											{/if}
										</ul>
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
					</div>
				</div>
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
