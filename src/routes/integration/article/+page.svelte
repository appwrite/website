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
	<header class="web-u-sep-block-end u-padding-block-end-0" style="background-color:rgba(23, 23, 26, 1);">
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
	</header>
	<div class="web-big-padding-section-level-1">
		<div class="web-big-padding-section-level-2">
			<div class="web-container">

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
</style>