<script lang="ts">
	import { MainFooter } from '$lib/components';
	import { Main } from '$lib/layouts';

	export let title: string;
	export let description: string;
	export let difficulty: string;
	export let author: string;
	export let date: string;
	export let timeToRead: string;
	export let cover: string;
</script>

<div class="aw-big-padding-section">
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container" style="--container-size:42.5rem">
					<article class="aw-main-article">
						<header class="aw-main-article-header">
							<a class="aw-link aw-u-color-text-secondary" href="/blog">
								<span class="aw-icon-chevron-left" aria-hidden="true" />
								<span class="">Back to blog</span>
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
							<div class="aw-author u-margin-block-start-16">
								<div class="u-flex u-cross-center u-gap-8">
									<img
										class="aw-author-image"
										src="/images/blog/placeholder.png"
										width="44"
										height="44"
										alt=""
									/>
									<div class="aw-author-info">
										<h4 class="aw-sub-body-400 aw-u-color-text-primary">{author}</h4>
										<p class="aw-caption-400 u-hide">Author's role or bio</p>
									</div>
								</div>
								<ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
									<li>
										<a
											href="https://twitter.com/appwrite"
											class="aw-icon-button"
											aria-label="Author twitter"
											target="_blank"
										>
											<span class="aw-icon-twitter" aria-hidden="true" />
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
