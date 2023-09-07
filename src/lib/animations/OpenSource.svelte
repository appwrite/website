<script lang="ts">
	import {
		spring,
		timeline,
		type AnimationListOptions,
		type SpringOptions,
		type TimelineDefinition
	} from 'motion';
	import { onMount } from 'svelte';

	const springOptions: SpringOptions = { stiffness: 58.78, mass: 1, damping: 17.14 };
	const timelineOptions: AnimationListOptions = {
		x: { easing: spring(springOptions) },
		y: { easing: spring(springOptions) }
	};

	const sequence: TimelineDefinition = [
		['#oss-discord', { x: [0, 100], y: [0, '-80vh'], rotate: 15 }, timelineOptions],
		['#oss-github', { rotate: 6.26, x: [0, 100], y: [0, '-55vh'] }, timelineOptions],
		['#oss-twitter', { rotate: -15, x: [0, 100], y: [0, '-70vh'] }, timelineOptions],
		['#oss-commits', { rotate: -10.2, x: [0, 100], y: [0, '-80vh'] }, timelineOptions]
	];

	onMount(() => {
		timeline(sequence, { delay: 1 });
		// animate(
		// 	'#oss-discord',
		// 	{ x: 0, y: 0, rotate: 15 },
		// 	{
		// 		x: { easing: glide({ velocity: 50 }) },
		// 		y: { easing: glide({ velocity: -1200 }) }
		// 	}
		// );
	});
</script>

<div id="open-source">
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
		height: 4000px;
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

		width: 100%;
		height: 100vh;

		text-align: center;

		h3 {
			max-width: 61.375rem;
		}

		p {
			max-width: 48.875rem;
		}

		.cards-wrapper {
			position: absolute;
			height: 100vh;
			width: 1440px;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			// background: hsl(0 0 0 / 0.5);
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
		bottom: -400px;
		left: 20px;
		transform: rotate(15deg);
	}

	#oss-github {
		position: absolute;
		bottom: -400px;
		left: 170px;
	}

	#oss-twitter {
		position: absolute;
		bottom: -400px;
		left: 520px;
	}

	#oss-commits {
		position: absolute;
		bottom: -400px;
		left: 950px;
	}
</style>
