<script lang="ts">
	import { MainFooter } from '$lib/components';
</script>

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
						<a href="/docs/tutorials/react" class="aw-card is-normal">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-react aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">React</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Learn Appwrite Auth, Databases, and more with React.
							</p>
						</a>
					</li>
					<li class="is-mobile-col-span-2">
						<a href="/docs/tutorials/vue" class="aw-card is-normal">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-vue aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Vue</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Learn Appwrite Auth, Databases, and more with Vue.
							</p>
						</a>
					</li>
					<li class="is-mobile-col-span-2">
						<a href="/docs/tutorials/sveltekit" class="aw-card is-normal">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-svelte aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">SvelteKit</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Learn Appwrite Auth, Databases, and more with SvelteKit.
							</p>
						</a>
					</li>
					<li class="is-mobile-col-span-2">
						<article class="aw-card is-full-color">
							<header class="u-flex u-cross-baseline u-gap-4">
								<span class="icon-flutter aw-u-font-size-24" aria-hidden="true" />
								<h4 class="aw-sub-body-500 aw-u-color-text-primary">Flutter</h4>
							</header>
							<p class="aw-sub-body-400 u-margin-block-start-4">
								Coming soon...
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
								Coming soon...
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
								Coming soon...
							</p>
						</article>
					</li>
				</ul>
			</section>
		</div>
	</article>

	<MainFooter variant="docs" />
</main>
