<script lang="ts">
	import { toScale } from '$lib/utils/toScale';
	import {
		animate,
		spring,
		type AnimationControls,
		type AnimationListOptions,
		type SpringOptions
	} from 'motion';

	const springOptions: SpringOptions = { stiffness: 58.78, mass: 1, damping: 17.14 };
	const animationOptions: AnimationListOptions = {
		x: { easing: spring(springOptions) },
		y: { easing: spring(springOptions) }
	};

	let animated = [] as AnimationControls[];

	type Animation = {
		mobile?: () => AnimationControls;
		desktop: () => AnimationControls;
	};

	const animations: Animation[] = [
		{
			mobile() {
				return animate(
					'#oss-discord',
					{ x: [-100, 20], y: [0, '-80vh'], rotate: 15 },
					animationOptions
				);
			},
			desktop() {
				return animate(
					'#oss-discord',
					{ x: [-100, 20], y: [0, '-80vh'], rotate: 15 },
					animationOptions
				);
			}
		},
		{
			desktop: function () {
				return animate(
					'#oss-github',
					{ rotate: 6.26, x: [0, -100], y: [0, '-55vh'] },
					animationOptions
				);
			}
		},
		{
			desktop: function () {
				return animate(
					'#oss-twitter',
					{ rotate: -15, x: [0, 100], y: [0, '-70vh'] },
					animationOptions
				);
			}
		},
		{
			desktop: function () {
				return animate(
					'#oss-youtube',
					{ rotate: -3.77, x: [0, -100], y: [0, '-60vh'] },
					animationOptions
				);
			}
		},
		{
			desktop: function () {
				return animate(
					'#oss-commits',
					{ rotate: -10.2, x: [0, 100], y: [0, '-80vh'] },
					animationOptions
				);
			}
		}
	];

	const executeAnimation = (index: number) => {
		if (animated[index]) return;
		const { mobile, desktop } = animations[index];
		if (isMobile()) {
			animated[index] = mobile ? mobile() : desktop();
		} else {
			animated[index] = desktop();
		}
	};

	const startPercentage = 0.05;
	const endPercentage = 0.8;

	let wrapper: HTMLElement;

	const isMobile = () => {
		return window.innerWidth < 1024;
	};
</script>

<svelte:window
	on:resize={() => {
		animated.forEach((animation) => animation.cancel());
		animated = [];
	}}
	on:scroll={() => {
		const { top, height } = wrapper.getBoundingClientRect();
		const { innerHeight } = window;

		const scrollHeight = height - innerHeight;
		const scrollPercentage = (-1 * top) / scrollHeight;

		for (let i = 0; i < animations.length; i++) {
			const animStartPercentage = toScale(
				i,
				{
					lower: 0,
					upper: animations.length - 1
				},
				{
					lower: startPercentage,
					upper: endPercentage
				}
			);

			if (scrollPercentage >= animStartPercentage) {
				executeAnimation(i);
			}
		}
	}}
/>

<div id="open-source" bind:this={wrapper}>
	<div class="sticky-wrapper">
		<h3 class="aw-display aw-u-color-text-primary">Powered by Open Source</h3>
		<p class="aw-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus. Duis
			pellentesque quis purus.
		</p>

		<div class="cards-wrapper">
			<div
				class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical oss-card"
				id="oss-discord"
				style="--card-padding:2rem"
			>
				<div class="u-flex-vertical u-main-space-between u-gap-32">
					<span class="aw-icon-discord aw-u-font-size-40" aria-hidden="true" aria-label="Discord" />
				</div>
				<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
			</div>

			<div
				class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical oss-card"
				id="oss-github"
				style="--card-padding:2rem"
			>
				<div class="u-flex-vertical u-main-space-between u-gap-32">
					<span class="aw-icon-github aw-u-font-size-40" aria-hidden="true" aria-label="GitHub" />
				</div>
				<div class="aw-title u-margin-block-start-auto">32k+ GitHub Stars</div>
			</div>

			<div
				class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical oss-card"
				id="oss-twitter"
				style="--card-padding:2rem"
			>
				<div class="u-flex-vertical u-main-space-between u-gap-32">
					<span class="aw-icon-twitter aw-u-font-size-40" aria-hidden="true" aria-label="Twitter" />
				</div>
				<div class="aw-title u-margin-block-start-auto">125k+ Twitter Followers</div>
			</div>

			<div
				class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical oss-card"
				id="oss-youtube"
				style="--card-padding:2rem"
			>
				<div class="u-flex-vertical u-main-space-between u-gap-32">
					<span class="aw-icon-youtube aw-u-font-size-40" aria-hidden="true" aria-label="YouTube" />
				</div>
				<div class="aw-title u-margin-block-start-auto">16k+ Youtube Subscribers</div>
			</div>

			<div
				class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical oss-card"
				id="oss-commits"
				style="--card-padding:2rem"
			>
				<div class="u-flex-vertical u-main-space-between u-gap-32">
					<span class="aw-icon-github aw-u-font-size-40" aria-hidden="true" aria-label="GitHub" />
				</div>
				<div class="aw-title u-margin-block-start-auto">15k+ Code Commits</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#open-source {
		height: 3500px;
		position: relative;
	}

	.sticky-wrapper {
		position: sticky;
		top: 0;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.25rem;
		padding-inline: 1.25rem;

		width: 100%;
		height: 100vh;

		text-align: center;

		p {
			max-width: 48.875rem;
		}

		.cards-wrapper {
			position: relative;
			height: 22.5rem;
		}

		@media (min-width: 1024px) {
			h3 {
				max-width: 61.375rem;
			}

			.cards-wrapper {
				position: absolute;
				height: 100vh;
				width: clamp(1024px, 90vw, 1440px);
				top: 0;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	.oss-card {
		background: linear-gradient(
			106deg,
			rgba(255, 255, 255, 0.72) 0%,
			rgba(255, 255, 255, 0.8) 41.9%,
			rgba(255, 255, 255, 0.6) 100%
		);
		backdrop-filter: blur(10px);

		width: 22.125rem;
		height: 20.125rem;
		text-align: left;

		[class*='icon'] {
			opacity: 48%;
		}
	}

	#oss-discord {
		position: absolute;
		left: 50%;
		transform: translateX(-200vw);

		@media (min-width: 1024px) {
			bottom: -400px;
			left: 1%;
			transform: rotate(15deg);
		}
	}

	#oss-github {
		position: absolute;
		opacity: 0;
		@media (min-width: 1024px) {
			bottom: -400px;
			left: 19%;
		}
	}

	#oss-twitter {
		position: absolute;
		opacity: 0;
		@media (min-width: 1024px) {
			bottom: -400px;
			left: clamp(20%, 22vw, 29%);
		}
	}

	#oss-youtube {
		position: absolute;
		opacity: 0;
		@media (min-width: 1024px) {
			bottom: -400px;
			left: clamp(64%, calc(1024px - 10vw), 70%);
		}
	}

	#oss-commits {
		position: absolute;
		opacity: 0;
		@media (min-width: 1024px) {
			bottom: -400px;
			right: 10%;
		}
	}
</style>
