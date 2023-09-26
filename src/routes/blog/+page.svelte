<script lang="ts">
	import { Main } from '$lib/layouts';
	import { MainFooter, FooterNav, Article } from '$lib/components';

	export let data;

	const featured = data.posts.find((post) => post.featured);
</script>

<Main>
	<div class="aw-big-padding-section-level-1 u-position-relative">
		<div
			class="u-position-absolute"
			style="pointer-events:none;inset-inline-start:0; inset-block-end:0;"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="660"
				height="497"
				viewBox="0 0 660 497"
				fill="none"
			>
				<g opacity="0.4" filter="url(#filter0_f_2092_11792)">
					<ellipse
						cx="-2.5"
						cy="609.5"
						rx="362.5"
						ry="309.5"
						fill="url(#paint0_radial_2092_11792)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_2092_11792"
						x="-665"
						y="0"
						width="1325"
						height="1219"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_2092_11792" />
					</filter>
					<radialGradient
						id="paint0_radial_2092_11792"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(-2.5 629.739) rotate(90) scale(289.261 362.5)"
					>
						<stop offset="0.281696" stop-color="#FE9567" />
						<stop offset="0.59375" stop-color="#FD366E" />
					</radialGradient>
				</defs>
			</svg>
		</div>

		<div class="aw-big-padding-section-level-2 u-position-relative">
			<div class="aw-container">
				<h1 class="aw-display aw-u-color-text-primary">Blog</h1>
				{#if featured}
					{@const author = data.authors.find((author) => author.slug === featured.author)}
					<article class="aw-feature-article u-margin-block-start-48">
						<a href={featured.href} class="aw-feature-article-image">
							<img src={featured.cover} class="aw-image-ratio-4/3" alt="cover" />
						</a>
						<div class="aw-feature-article-content">
							<header class="aw-feature-article-header">
								<ul class="aw-metadata aw-caption-400 aw-is-only-mobile">
									<li>{featured.timeToRead} min</li>
								</ul>
								<a href={featured.href}>
									<h2 class="aw-title aw-u-color-text-primary">{featured.title}</h2>
								</a>
							</header>
							<p class="aw-sub-body-400">
								{featured.description}
							</p>
							<div class="aw-author">
								<div class="u-flex u-cross-center u-gap-8">
									<img
										class="aw-author-image"
										src="/images/blog/placeholder.png"
										width="24"
										height="24"
										alt=""
									/>
									<div class="aw-author-info">
										<a href={author?.href} class="aw-sub-body-400 aw-link">{author?.name}</a>
										<p class="aw-caption-400 u-hide">{author?.bio}</p>
										<ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
											<li>[data]</li>
											<li>[time-to-read] min</li>
										</ul>
									</div>
								</div>
								<ul class="u-flex u-gap-8 u-margin-inline-start-auto u-hide">
									<li>
										<a
											href="https://twitter.com/appwrite"
											class="aw-icon-button"
											aria-label="Author twitter"
											target="_blank"
										>
											<span class="aw-icon-x" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/appwrite"
											class="aw-icon-button"
											aria-label="Author LinkedIn"
											target="_blank"
										>
											<span class="aw-icon-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
							<button class="aw-button is-secondary u-margin-block-start-auto">
								<span>Read article</span>
							</button>
						</div>
					</article>
				{/if}
			</div>
		</div>
	</div>
	<div class="aw-big-padding-section-level-1">
		<div class="aw-big-padding-section-level-2">
			<div class="aw-container">
				<h2 class="aw-title aw-u-color-text-primary">Articles</h2>
				<!-- <div class="aw-is-only-mobile u-margin-block-start-32">
					<label class="u-block aw-select is-colored" for="articles">
						<select id="articles">
							<option>Latest</option>
							<option>News</option>
							<option>Insights</option>
							<option>Tutorials</option>
							<option>Changelog</option>
						</select>
						<span class="icon-cheveron-down" aria-hidden="true" />
					</label>
				</div>
				<div class="aw-is-not-mobile">
					<div class="u-flex u-main-space-between u-gap-16 u-margin-block-start-24">
						<ul
							class="aw-secondary-tabs is-transparent"
							role="tablist"
							aria-orientation="horizontal"
							data-orientation="horizontal"
							data-melt-tabs-list=""
						>
							<li class="aw-secondary-tabs-item">
								<button
									class="aw-secondary-tabs-button u-width-full-line is-selected"
									type="button"
									role="tab"
									data-state="active"
									tabindex="0"
									data-value="Cloud"
									data-orientation="horizontal"
									data-melt-tabs-trigger=""
								>
									<span class="aw-main-body-500">Latest</span>
								</button>
							</li>
							<li class="aw-secondary-tabs-item">
								<button
									class="aw-secondary-tabs-button u-width-full-line"
									type="button"
									role="tab"
									data-state="inactive"
									tabindex="-1"
									data-value="Self-Hosted"
									data-orientation="horizontal"
									data-melt-tabs-trigger=""
								>
									<span class="aw-main-body-500">News</span>
								</button>
							</li>
							<li class="aw-secondary-tabs-item">
								<button
									class="aw-secondary-tabs-button u-width-full-line"
									type="button"
									role="tab"
									data-state="inactive"
									tabindex="-1"
									data-value="Self-Hosted"
									data-orientation="horizontal"
									data-melt-tabs-trigger=""
								>
									<span class="aw-main-body-500">Insights</span>
								</button>
							</li>
							<li class="aw-secondary-tabs-item">
								<button
									class="aw-secondary-tabs-button u-width-full-line"
									type="button"
									role="tab"
									data-state="inactive"
									tabindex="-1"
									data-value="Self-Hosted"
									data-orientation="horizontal"
									data-melt-tabs-trigger=""
								>
									<span class="aw-main-body-500">Tutorials</span>
								</button>
							</li>
							<li class="aw-secondary-tabs-item">
								<button
									class="aw-secondary-tabs-button u-width-full-line"
									type="button"
									role="tab"
									data-state="inactive"
									tabindex="-1"
									data-value="Self-Hosted"
									data-orientation="horizontal"
									data-melt-tabs-trigger=""
								>
									<span class="aw-main-body-500">Changelog</span>
								</button>
							</li>
						</ul> 
						 <div class="aw-input-text-search-wrapper">
							<span class="icon-search" aria-hidden="true" />
							<input class="aw-input-text aw-u-block-size-48" type="search" placeholder="Search" />
						</div> 
					</div>
				</div>-->

				<div class="u-margin-block-start-48">
					<ul class="aw-grid-articles">
						{#each data.posts as post}
							{@const author = data.authors.find((author) => author.slug === post.author)}
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
				</div>

				<div class="u-flex u-main-end aw-u-margin-block-start-48">
					<div class="aw-select is-colored">
						<button class="physical-select">
							<span class="icon-moon" aria-hidden="true" />
							<span data-svelte-h="svelte-397x2m">Dark</span>
						</button>
						<span class="icon-cheveron-down" aria-hidden="true" />
					</div>
				</div>
			</div>
		</div>
		<div class="aw-big-padding-section-level-2">
			<div class="aw-container">
				<FooterNav />
				<MainFooter />
			</div>
		</div>
	</div>
</Main>
