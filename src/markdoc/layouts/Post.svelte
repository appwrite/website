<script lang="ts">
	import { base } from '$app/paths';
	import { FooterNav, MainFooter, Newsletter, PreFooter } from '$lib/components';
	import { Main } from '$lib/layouts';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let author: string;
	export let date: string;
	export let timeToRead: string;
	export let cover: string;

	type AuthorData = {
		name: string;
		role: string;
		avatar: string;
		bio: string;
		twitter: string;
		linkedin: string;
		github: string;
		href: string;
	};

	let authorData: AuthorData | undefined;

	function fetchAuthorData() {
		const authors = import.meta.glob('$routes/blog/author/**/*.markdoc', {
			eager: true
		});
		console.log(authors);
		const data = Object.entries(authors).map(([_filepath, authors]) => {
			const { frontmatter } = authors as {
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

		authorData = data.find((a) => a.name.includes(author));
		console.log(authorData);
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
										<time datetime={date}>{date}</time>
									</li>
									<li>{timeToRead} min</li>
								</ul>
								<h1 class="aw-title aw-u-color-text-primary">{title}</h1>
								<p class="aw-description u-margin-block-start-8">
									{description}
								</p>
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
										<ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
											{#if authorData.twitter}
												<li>
													<a
														href={authorData.twitter}
														class="aw-icon-button"
														aria-label="Author twitter"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span class="aw-icon-twitter" aria-hidden="true" />
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
										</ul>
									</div>
								{/if}
							</header>

							<div class="aw-media-container">
								<img class="u-block" src={cover} alt="console dashboard" />
							</div>

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
