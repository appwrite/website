<script lang="ts">
	import { Main } from '$lib/layouts';
	import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
	import { TITLE_SUFFIX } from '$routes/titles';

	import FooterNav from '../../../lib/components/FooterNav.svelte';
	import MainFooter from '../../../lib/components/MainFooter.svelte';

	const title = 'Integrations' + TITLE_SUFFIX;
	const description = DEFAULT_DESCRIPTION;
	const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
</script>

<svelte:head>
	<!-- Titles -->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<!-- Desscription -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
	<div class="web-u-sep-block-end u-padding-block-end-0" style="background-color:rgba(23, 23, 26, 1);">
		<div class="web-container">
			<div class="web-integrations-top-section">
				<div class="web-carousel-wrapper">
					<a href="/" class="web-button is-text u-margin-block-end-48">
						<span class="icon-cheveron-left" aria-hidden="true"></span>
						<span>Back to catalog</span>
					</a>
					<div class="web-carousel">
						<button class="web-carousel-button web-carousel-button-start">
							<span class="web-icon-arrow-left" aria-hidden="true"></span>
						</button>
						<button class="web-carousel-button web-carousel-button-end">
							<span class="web-icon-arrow-right" aria-hidden="true"></span>
						</button>
						<div class="web-carousel-overflow">
							<ul class="web-carousel-list">
								<li class="web-carousel-item is-empty">
									<div>
									</div>
								</li>
								<li class="web-carousel-item">
									<div>
										<img src="/images/blog/ai-announcement.png" class="web-u-media-ratio-16-9" alt="cover" width="472">
									</div>
								</li>
								<li class="web-carousel-item is-main">
									<div>
										<img src="/images/blog/ai-announcement.png" class="web-u-media-ratio-16-9" alt="cover" width="584">
									</div>
								</li>
								<li class="web-carousel-item">
									<div>
										<img src="/images/blog/ai-announcement.png" class="web-u-media-ratio-16-9" alt="cover" width="472">
									</div>
								</li>
								<li class="web-carousel-item is-empty">
									<div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="web-carousel-bullets">
						<ul class="web-carousel-bullets-list">
							<li class="web-carousel-bullets-item">
								<button class="web-carousel-bullets-button is-selected" aria-label="selected gallery first item"></button>
							</li>
							<li class="web-carousel-bullets-item">
								<button class="web-carousel-bullets-button" aria-label="gallery second item"></button>
							</li>
							<li class="web-carousel-bullets-item">
								<button class="web-carousel-bullets-button" aria-label="gallery third item"></button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="web-big-padding-section-level-1">
		<div class="web-big-padding-section-level-2">
			<div class="web-container">
				<article class="u-flex-vertical web-u-gap-60-not-mobile  web-u-gap-40-mobile">
					<div class="web-grid-2-1 web-u-row-gap-56 web-u-gap-40-mobile">
						<header class="u-contents">
							<div class="web-grid-area-header u-flex u-cross-start u-gap-20">
								<img class="web-author-image" src="/images/avatars/christy.png" alt="Christy Jacob" loading="lazy" width="40" height="40">
								<div class="u-flex u-cross-center u-flex-wrap u-gap-16">
									<h1 class="web-title web-u-color-text-primary">Lorem ipsum</h1>
									<a href="/blog/post/announcing-appwrite-new-ai-integrations" class="web-hero-banner-button">
										<span class="web-icon-star" aria-hidden="true"></span>
										<span class="web-caption-500">New</span>
										<div class="web-hero-banner-button-sep"></div>
										<span class="web-caption-400 web-u-trim-1">Developed by Appwrite</span>
									</a>
								</div>
							</div>
							<div class="web-grid-area-buttons l-side-column">
								<button class="web-button is-secondary u-stretch is-full-width-mobile">
									<span>Source code</span>
								</button>
								<button class="web-button u-stretch is-full-width-mobile">
									<span>Deploy</span>
								</button>
							</div>
						</header>
						<div class="u-contents">
							<div class="web-grid-area-content web-article">
								<div class="web-article-content">
									<p class="web-paragraph-md">The AI hype is real and will be around for many years to come. In 2021 alone, AI startups worldwide raised nearly $50 billion in venture capital across approximately 1,500 deals, reflecting a significant increase from previous years. So it's no surprise that many of you are looking to build AI powered applications. But that's easier said than done, as building AI powered applications can be tricky. We don't want it to be. That's why we're happy to share multiple AI related announcements designed to enhance the Appwrite experience and adapt to new possibilities for devs building with Appwrite.</p>
									<p class="web-paragraph-md">Lorem ipsum dolor sit amet consectetur. Neque id vel eros sed ipsum. Nisi fames euismod egestas morbi massa eget. At viverra nibh semper arcu in. Convallis etiam dui elit mauris mattis netus sit. Auctor dolor porttitor viverra eget egestas sem auctor suspendisse. Massa phasellus condimentum nam ac quis quis duis risus. Ac ut aliquet tortor donec erat ac. Enim a eros sit purus et lacinia. Faucibus nibh donec auctor mattis enim. Elementum quam sed auctor lacus tincidunt velit semper dui. Dolor commodo consectetur mollis morbi metus arcu at.</p>
								</div>
							</div>
							<div class="web-grid-area-side">
								<dl class="u-flex-vertical u-gap-20">
									<div class="u-flex u-main-space-between u-gap-8">
										<dt>Developed by</dt>
										<dd class="web-u-color-text-primary">Appwrite</dd>
									</div>
									<div class="web-u-sep-block-end"></div>
									<div class="u-flex u-main-space-between u-gap-8">
										<dt>Partner</dt>
										<dd><div class="web-inline-tag">Verified</div></dd>
									</div>
									<div class="web-u-sep-block-end"></div>
									<div class="u-flex u-main-space-between u-gap-8">
										<dt>Category</dt>
										<dd class="web-u-color-text-primary">Category</dd>
									</div>
									<div class="web-u-sep-block-end"></div>
									<div class="u-flex u-main-space-between u-gap-8">
										<dt>Website</dt>
										<dd>
											<a class="web-link" href="/">
												<span>appwrite.io</span>
												<span class="web-icon-ext-link" aria-hidden="true"></span>
											</a>
										</dd>
									</div>
									<div class="web-u-sep-block-end"></div>
									<div class="u-flex u-main-space-between u-gap-8">
										<dt>Documentation</dt>
										<dd>
											<a class="web-link" href="/">
												<span>Read</span>
												<span class="web-icon-ext-link" aria-hidden="true"></span>
											</a>
										</dd>
									</div>
								</dl>

							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</div>

	<div class="web-big-padding-section-level-1 u-overflow-hidden">
		<div class="web-big-padding-section-level-2 u-position-relative">
			<img src="/images/bgs/pre-footer.png" alt="" class="web-pre-footer-bg" style="z-index:-1" />

			<div class="u-position-relative">
				<section class="web-hero u-flex u-row-gap-16 u-main-center u-cross-center web-u-max-width-580">
					<h2 class="web-display u-max-width-500 web-u-text-align-center web-u-color-text-primary">
						Become a partner
					</h2>
					<p class="web-main-body-500">Join our partner program to integrate your solutions with Appwrite’s API, enhancing functionality and expanding your reach.</p>
					<a
							href="/"
							class="web-button is-primary web-u-cross-child-center u-margin-block-start-16"
					>
						<span class="text">Get Started</span>
					</a>
				</section>
			</div>
		</div>
		<div class="web-container">
			<FooterNav />
			<MainFooter />
		</div>
	</div>
</Main>

<style lang="scss">
	@use '$scss/abstract' as *;
	.web-pre-footer-bg {
		position: absolute;
		top: clamp(300px, 50vw, 50%);
		left: clamp(300px, 50vw, 50%);
		transform: translate(-58%, -72%);
		width: clamp(1200px, 200vw, 3000px);
		height: auto;
		max-inline-size: unset;
		max-block-size: unset;
	}
	.l-float-button { display:none; }
	/* more tha 9 items */
	.l-max-size-list-cards-section {
		scroll-snap-align: start;
		scroll-margin-top: pxToRem(120);
	}
	.l-max-size-list-cards {
		&:where(:has(>ul>li:nth-child(10))) {
			position:relative; max-block-size:pxToRem(460); overflow:hidden;
			&::before {
				position:absolute; inset:0;
				content:""; display:block;
				background: linear-gradient(180deg, rgba(25, 25, 28, 0.00) 0%, rgba(25, 25, 28, 0.92) 90%, #19191C 100%);
				transition: var(--transition);
			}
			.l-float-button {
				position: absolute; inset-inline:0; inset-block-end:pxToRem(20); margin-inline:auto;
				display:flex;
			}
		}
	}

	:where(:target, :focus-within) {
		.l-max-size-list-cards {
			overflow:visible; max-block-size:none;
			&::before { opacity:0; pointer-events:none; }
			.l-float-button { display:none; }
		}
	}

	.l-grid-1 {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		gap: pxToRem(32);
	}
	.l-integrations-grid {
		@media #{$break1} {}
		@media #{$break2open} {
			display: grid;
			gap: pxToRem(68);
			grid-template-columns: pxToRem(240) 1fr;
			min-block-size: pxToRem(628);
			padding-block-start: pxToRem(60);
		}
	}
	.l-side-column {
		display:flex; gap: pxToRem(16);
		@media #{$break1} {
			flex-direction:column;
		}
	}
</style>