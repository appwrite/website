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
	<header class="">
		<div class="web-container">
			<div class="l-integrations u-flex-vertical u-main-center u-gap-20 web-u-max-width-680">
				<div class="web-eyebrow web-u-color-text-primary">
					INTEGRATIONS<span class="web-u-color-text-accent">_</span>
				</div>
				<h1 class="web-headline web-u-color-text-primary">Discover infinite possibilities</h1>
				<p class="web-description">Unlock the full potential of Appwrite by seamlessly integrating your favorite apps with your projects.</p>
			</div>
		</div>
	</header>

	<div class="web-container">
		<FooterNav />
		<MainFooter />
	</div>
</Main>

<style lang="scss">
	@use '$scss/abstract' as *;
	.l-integrations {
		@media #{$break1} {}
		@media #{$break2open} {
			min-block-size: pxToRem(628);
		}
	}
</style>