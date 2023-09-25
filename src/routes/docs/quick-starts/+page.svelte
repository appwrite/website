<script lang="ts">
	import { MainFooter } from '$lib/components';

	type QuickStart = {
		title: string;
		icon: string;
		image: string;
		href: string;
	};

	type QuickStarts = Array<{
		title: string;
		quickStarts: QuickStart[];
	}>;

	const quickStarts: QuickStarts = [
		{
			title: 'Web App',
			quickStarts: [
				{
					title: 'Next.js',
					icon: 'icon-next_js',
					image: '/images/blog/placeholder.png',
					href: 'nextjs'
				},
				{
					title: 'Vue.js',
					icon: 'icon-vue_js',
					image: '/images/blog/placeholder.png',
					href: 'vue'
				},
				{
					title: 'SvelteKit',
					icon: 'icon-svelte',
					image: '/images/blog/placeholder.png',
					href: 'sveltekit'
				},
				{
					title: 'Nuxt',
					icon: 'icon-nuxt_js',
					image: '/images/blog/placeholder.png',
					href: 'nuxt'
				},
				{
					title: 'Angular',
					icon: 'icon-angular',
					image: '/images/blog/placeholder.png',
					href: 'angular'
				},
				{
					title: 'Astro',
					icon: 'icon-astro',
					image: '/images/blog/placeholder.png',
					href: 'astro'
				}
			]
		},
		{
			title: 'Mobile and Native',
			quickStarts: [
				{
					title: 'Flutter',
					icon: 'icon-flutter',
					image: '/images/blog/placeholder.png',
					href: 'flutter'
				},
				{
					title: 'Android',
					icon: 'icon-android',
					image: '/images/blog/placeholder.png',
					href: 'android'
				},
			]
		},
		{
			title: 'Server',
			quickStarts: []
		}
	];
</script>

<main class="aw-main-section">
	<article class="aw-article">
		<header class="aw-article-header">
			<div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
				<div class="u-position-relative u-flex u-cross-center">
					<h1 class="aw-title">Quick start</h1>
				</div>
			</div>
			<div class="aw-article-header-end" />
		</header>
		<div class="aw-article-content aw-u-gap-80">
			{#each quickStarts as category}
				<section class="u-flex-vertical u-gap-24">
					<h2 class="aw-eyebrow">{category.title}</h2>
					<ul class="aw-grid-row-4 aw-grid-row-4-mobile-2">
						{#each category.quickStarts as quickStart}
							<li class="is-mobile-col-span-2">
								<a href={`/docs/quick-starts/${quickStart.href}`}>
									<img class="aw-media" src={quickStart.image} alt="" />
									<div class="u-flex u-cross-baseline u-gap-4">
										<span class="{quickStart.icon} aw-u-font-size-24" aria-hidden="true" />
										<h4 class="aw-sub-body-500 aw-u-color-text-primary">{quickStart.title}</h4>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</article>

	<MainFooter variant="docs" />
</main>

<style lang="scss">
	.aw-media {
		aspect-ratio: 16/9;
	}
</style>
