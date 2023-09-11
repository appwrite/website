<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import { spring, type AnimationListOptions, type SpringOptions } from 'motion';
	import { animation, createScrollHandler, scroll, type Animation, type ScrollInfo } from '.';
	import { fly, slide } from 'svelte/transition';
	import { Phone } from '$lib/components';

	const springOptions: SpringOptions = { stiffness: 58.78, mass: 1, damping: 17.14 };
	const animationOptions: AnimationListOptions = {
		x: { easing: spring(springOptions) },
		y: { easing: spring(springOptions) }
	};
	const animations: {
		mobile: {
			main: Animation;
			reversed: Animation;
		};
		desktop: {
			main: Animation;
			reversed: Animation;
		};
	}[] = [
		// {
		// 	mobile: {
		// 		main: animation('#oss-discord', { x: 0, y: 0, rotate: 1 }, animationOptions),
		// 		reversed: animation('#oss-discord', { x: -1200, y: 0, rotate: 1 }, animationOptions)
		// 	},
		// 	desktop: {
		// 		main: animation('#oss-discord', { x: 20, y: '-80vh', rotate: 15 }, animationOptions),
		// 		reversed: animation('#oss-discord', { x: -100, y: '0vh', rotate: 15 }, animationOptions)
		// 	}
		// },
		// {
		// 	mobile: {
		// 		main: animation('#oss-github', { x: 0, y: -10, rotate: -2 }, animationOptions),
		// 		reversed: animation('#oss-github', { x: -1200, y: 10, rotate: -2 }, animationOptions)
		// 	},
		// 	desktop: {
		// 		main: animation('#oss-github', { x: -100, y: '-55vh', rotate: 6.26 }, animationOptions),
		// 		reversed: animation('#oss-github', { x: 0, y: '0vh', rotate: 6.26 }, animationOptions)
		// 	}
		// },
		// {
		// 	mobile: {
		// 		main: animation('#oss-twitter', { x: 0, y: 10, rotate: -3 }, animationOptions),
		// 		reversed: animation('#oss-twitter', { x: -1200, y: -10, rotate: -3 }, animationOptions)
		// 	},
		// 	desktop: {
		// 		main: animation('#oss-twitter', { x: 100, y: '-70vh', rotate: -15 }, animationOptions),
		// 		reversed: animation('#oss-twitter', { x: 0, y: '0vh', rotate: -15 }, animationOptions)
		// 	}
		// },
		// {
		// 	mobile: {
		// 		main: animation('#oss-youtube', { x: 0, y: 5, rotate: 2 }, animationOptions),
		// 		reversed: animation('#oss-youtube', { x: -1200, y: -5, rotate: 2 }, animationOptions)
		// 	},
		// 	desktop: {
		// 		main: animation('#oss-youtube', { x: -100, y: '-55vh', rotate: -3.77 }, animationOptions),
		// 		reversed: animation('#oss-youtube', { x: 0, y: '0vh', rotate: -3.77 }, animationOptions)
		// 	}
		// },
		// {
		// 	mobile: {
		// 		main: animation('#oss-commits', { x: 0, y: -4, rotate: -1 }, animationOptions),
		// 		reversed: animation('#oss-commits', { x: -1200, y: 4, rotate: -1 }, animationOptions)
		// 	},
		// 	desktop: {
		// 		main: animation('#oss-commits', { x: 100, y: '-80vh', rotate: -10.2 }, animationOptions),
		// 		reversed: animation('#oss-commits', { x: 0, y: '0vh', rotate: -10.2 }, animationOptions)
		// 	}
		// }
	];

	const animScale: Scale = [0, animations.length - 1];
	const percentScale: Scale = [0.1, 0.8];

	const scrollHandler = createScrollHandler(
		animations.map(({ mobile, desktop }, i) => {
			return {
				percentage: toScale(i, animScale, percentScale),
				whenAfter() {
					const { main, reversed } = isMobile() ? mobile : desktop;

					main.play();
					return reversed.play;
				}
			};
		})
	);

	const isMobile = () => {
		return window.innerWidth < 1024;
	};

	let scrollInfo: ScrollInfo = {
		percentage: 0,
		traversed: 0,
		remaning: Infinity
	};
</script>

<div
	id="products"
	use:scroll
	on:aw-scroll={({ detail }) => {
		const { percentage } = detail;
		scrollInfo = detail;
		console.log(detail);
		scrollHandler(percentage);
	}}
	on:aw-resize={({ detail }) => {
		scrollHandler.reset();
		const { percentage: scrollPercentage } = detail;
		console.log('resize', scrollPercentage);

		scrollHandler(scrollPercentage);
	}}
>
	<div class="sticky-wrapper">
		<div class="text">
			{#if scrollInfo.traversed > 0}
				<span class="aw-badges aw-eyebrow" transition:slide={{ axis: 'x' }}>Products_</span>
			{/if}
			{#if scrollInfo.traversed > 600}
				<h2 class="aw-display aw-u-color-text-primary" transition:slide={{ axis: 'x' }}>
					Your backend, minus the hassle
				</h2>
			{/if}
			{#if scrollInfo.traversed > 1500}
				<p
					class="aw-description aw-u-max-width-700 u-margin-inline-auto"
					transition:fly={{
						y: 16
					}}
				>
					Build secure and scalable applications faster with Appwrite's core backend products and
					spend more time building the best products.
				</p>
			{/if}
		</div>
		<Phone />
	</div>
</div>

<style lang="scss">
	#products {
		height: 10000px;
		position: relative;
	}

	.sticky-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		position: sticky;

		top: 0;
		height: 100vh;
		overflow: hidden;

		padding-inline: 1.25rem;
		--navbar-height: 8rem;
		--padding-block: 7.5rem;
		padding-block: calc(var(--navbar-height) + var(--padding-block)) var(--padding-block);

		width: 100%;
		height: 100vh;

		text-align: center;

		.text {
			display: flex;
			flex-direction: column;
			align-items: center;

			h2 {
				white-space: nowrap;
				margin-top: 1.5rem;
			}

			p {
				margin-top: 1.25rem;
				max-width: 48.875rem;
			}

			@media (min-width: 1024px) {
				h2 {
					max-width: 61.375rem;
				}
			}
		}
	}
</style>
