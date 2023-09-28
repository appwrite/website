<script lang="ts">
	import { MainFooter } from '$lib/components';
	import { DEFAULT_HOST } from '$lib/utils/metadata';
	import { DOCS_TITLE_SUFFIX } from '$routes/titles';

	const title = 'Tutorials' + DOCS_TITLE_SUFFIX;
	const description = '';
	const ogImage = DEFAULT_HOST + '/images/open-graph/docs.png';
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

<main class="aw-main-section">
	<article class="aw-article">
		<header class="aw-article-header">
			<div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
				<div class="u-position-relative u-flex u-cross-center">
					<h1 class="aw-title">Platforms</h1>
				</div>
			</div>
			<div class="aw-article-header-end" />
		</header>
		<div class="aw-article-content aw-u-gap-80">
			<section class="u-flex-vertical u-gap-24">
				<h2 class="aw-eyebrow">Client</h2>
				<ul class="aw-grid-row-4 aw-grid-row-4-mobile-2">
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-react aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">React</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-vue aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Vue</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-svelte aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">SvelteKit</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-flutter aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Flutter</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-apple aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Apple</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-android aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Android</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</article>
					</li>
				</ul>
			</section>
		</div>
	</article>

	<MainFooter variant="docs" />
</main>
