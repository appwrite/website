<script lang="ts">
	import { toScale, type Scale } from '$lib/utils/toScale';

	import { browser } from '$app/environment';
	import { animation, createScrollHandler, scroll, type Animation } from '.';
	import { spring, type AnimationListOptions, type SpringOptions } from 'motion';

	const springOptions: SpringOptions = { stiffness: 58.78, mass: 1, damping: 17.14 };
	const animationOptions: AnimationListOptions = {
		x: { easing: spring(springOptions) },
		y: { easing: spring(springOptions) }
	};
	const animations: {
		mobile: Animation;
		desktop: Animation;
	}[] = browser
		? [
				{
					mobile: animation('#oss-discord', { x: [-1200, 0], y: 0, rotate: 1 }, animationOptions),
					desktop: animation(
						'#oss-discord',
						{ x: [-100, 20], y: ['0', -1030], rotate: 15 },
						animationOptions
					)
				},
				{
					mobile: animation('#oss-github', { x: [-1200, 0], y: -10, rotate: -2 }, animationOptions),
					desktop: animation(
						'#oss-github',
						{ rotate: 6.26, x: [0, -100], y: [0, -707] },
						animationOptions
					)
				},
				{
					mobile: animation('#oss-twitter', { x: [-1200, 0], y: 10, rotate: -3 }, animationOptions),
					desktop: animation(
						'#oss-twitter',
						{ rotate: -15, x: [0, 100], y: [0, -900] },
						animationOptions
					)
				},
				{
					mobile: animation('#oss-youtube', { x: [-1200, 0], y: 5, rotate: 2 }, animationOptions),
					desktop: animation(
						'#oss-youtube',
						{ rotate: -3.77, x: [0, -100], y: [0, -770] },
						animationOptions
					)
				},
				{
					mobile: animation('#oss-commits', { x: [-1200, 0], y: -4, rotate: -1 }, animationOptions),
					desktop: animation(
						'#oss-commits',
						{ rotate: -10.2, x: [0, 100], y: [0, -1030] },
						animationOptions
					)
				}
		  ]
		: [];

	const animScale: Scale = [0, animations.length - 1];
	const percentScale: Scale = [0.05, 0.8];

	const scrollHandler = createScrollHandler(
		animations.map(({ mobile, desktop }, i) => {
			return {
				percentage: toScale(i, animScale, percentScale),
				whenAfter() {
					const anim = isMobile() ? mobile : desktop;
					anim.play();
					return anim.reverse;
				}
			};
		})
	);

	const isMobile = () => {
		return window.innerWidth < 1024;
	};
</script>

<svelte:window on:resize={scrollHandler.reset} />

<div
	id="open-source"
	use:scroll
	on:aw-scroll={({ detail }) => {
		const { scrollPercentage } = detail;
		scrollHandler(scrollPercentage);
	}}
>
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
			margin-top: 80px;
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
				margin-top: 0;
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

		--w: clamp(306px, 50vw, 22.125rem);
		--h: 20.125rem;
		width: var(--w);
		height: var(--h);
		text-align: left;

		position: absolute;
		left: calc(50% - calc(var(--w) / 2));
		transform: translateX(-1200px);

		[class*='icon'] {
			opacity: 48%;
		}
	}

	@media (min-width: 1024px) {
		.oss-card {
			left: unset;
			transform: unset;
		}

		#oss-discord {
			bottom: -400px;
			left: 1%;
			transform: rotate(15deg);
		}

		#oss-github {
			bottom: -400px;
			left: 19%;
		}

		#oss-twitter {
			bottom: -400px;
			left: clamp(20%, 22vw, 29%);
		}

		#oss-youtube {
			bottom: -400px;
			left: clamp(64%, calc(1024px - 10vw), 70%);
		}

		#oss-commits {
			bottom: -400px;
			right: 10%;
		}
	}
</style>
