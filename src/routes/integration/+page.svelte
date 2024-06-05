<script lang="ts">
	import { Main } from '$lib/layouts';
	import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
	import { TITLE_SUFFIX } from '$routes/titles';

	import FooterNav from '../../lib/components/FooterNav.svelte';
	import MainFooter from '../../lib/components/MainFooter.svelte';

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
	<header class="web-u-sep-block-end">
		<div class="web-container">
			<div class="l-integrations-hero u-flex-vertical u-main-center u-gap-20 web-u-max-width-680">
				<div class="web-eyebrow web-u-color-text-primary">
					INTEGRATIONS<span class="web-u-color-text-accent">_</span>
				</div>
				<h1 class="web-headline web-u-color-text-primary">Discover infinite possibilities</h1>
				<p class="web-description">Unlock the full potential of Appwrite by seamlessly integrating your favorite apps with your projects.</p>
			</div>
		</div>
	</header>
	<div>
		<div class="web-container">
			<div class="l-integrations-grid">
				<aside class="u-flex-vertical u-gap-32">
					<section>
						<label class="web-input-button web-u-flex-basis-400">
							<span class="web-icon-search" aria-hidden="true"></span>
							<input class="text" placeholder="Search" />
						</label>
					</section>
					<section class="u-flex-vertical">
						<section class="u-flex-vertical u-gap-16">
							<h2 class="web-side-nav-header web-eyebrow u-un-break-text">Platform</h2>
							<ul class="u-flex u-flex-wrap u-gap-8">
								<li>
									<button class="tag is-selected">Cloud</button>
								</li>
								<li>
									<button class="tag">Self-hosted</button>
								</li>
							</ul>
						</section>
						<div class="web-u-sep-block-start u-margin-block-24"></div>
						<section class="u-flex-vertical u-gap-16">
							<h2 class="web-side-nav-header web-eyebrow u-un-break-text">Categories</h2>
							<ul class="u-flex-vertical u-gap-16">
								<li>
									<a class="web-link is-pink" href="#ai">AI</a>
								</li>
								<li>
									<a class="web-link" href="#auth">Auth</a>
								</li>
								<li>
									<a class="web-link" href="#databases">Databases</a>
								</li>
							</ul>
						</section>
					</section>
				</aside>
				<section>
					<div>
						<section class="u-flex-vertical u-gap-32">
							<header class="u-flex-vertical u-gap-4">
								<h2 class="web-label web-u-color-text-primary">Featured</h2>
								<p class="web-description">Top recommended integrations</p>
							</header>
							<div>
								<ul class="l-feature-grid">
									<li class="l-feature-grid-main-item">
										<a class="web-overlay-item" href="/"></a>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</section>
			</div>
		</div>
	</div>

	<div class="web-container">
		<FooterNav />
		<MainFooter />
	</div>
</Main>

<style lang="scss">
	@use '$scss/abstract' as *;
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
	.l-integrations-hero {
		@media #{$break1} {}
		@media #{$break2open} {
			min-block-size: pxToRem(628);
		}
	}
</style>