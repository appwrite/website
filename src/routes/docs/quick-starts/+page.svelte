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
			title: 'Web app',
			quickStarts: [
				{
					title: 'Next.js',
					icon: 'icon-nextjs',
					image: '/images/blog/placeholder.png',
					href: 'nextjs'
				},
				{
					title: 'React',
					icon: 'icon-react',
					image: '/images/blog/placeholder.png',
					href: 'react'
				},
				{
					title: 'Vue.js',
					icon: 'icon-vue',
					image: '/images/blog/placeholder.png',
					href: 'vue'
				},
				{
					title: 'SvelteKit',
					icon: 'icon-svelte',
					image: '/images/blog/placeholder.png',
					href: 'sveltekit'
				},
			]
		},
		{
			title: 'Mobile and native',
			quickStarts: [
				{
					title: 'Flutter',
					icon: 'icon-flutter',
					image: '/images/blog/placeholder.png',
					href: 'flutter'
				},
				{
					title: 'Apple',
					icon: 'icon-apple',
					image: '/images/blog/placeholder.png',
					href: 'apple'
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
			quickStarts: [
				{
					title: 'Node.js',
					icon: 'icon-node',
					image: '/images/blog/placeholder.png',
					href: 'node'
				},
				{
					title: 'Python',
					icon: 'icon-python',
					image: '/images/blog/placeholder.png',
					href: 'python'
				},
				{
					title: '.NET',
					icon: 'icon-dotnet',
					image: '/images/blog/placeholder.png',
					href: 'dotnet'
				},
				{
					title: 'Dart',
					icon: 'icon-dart',
					image: '/images/blog/placeholder.png',
					href: 'dart'
				}
			]
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
