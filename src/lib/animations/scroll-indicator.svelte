<script lang="ts">
	import { rect } from '$lib/actions';
	import { clamp } from '$lib/utils/clamp';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let percentage = 0;
	let easedPercentage = 0;

	const elRect = writable<DOMRect | null>(null);
	$: y = $elRect ? clamp(0, easedPercentage, 1) * $elRect.height : 0;

	onMount(() => {
		let frame: number | null = null;
		const ease = () => {
			easedPercentage += (percentage - easedPercentage);
			frame = window.requestAnimationFrame(ease);
		};
		ease();

		return () => {
			frame && window.cancelAnimationFrame(frame);
		};
	});
</script>

<div
	class="scroll-indicator"
	use:rect={elRect}
	style:--y={`${y}px`}
	style:--percentage={`${easedPercentage * 100}%`}
>
	<div class="cursor" />
</div>

<style lang="scss">
	.scroll-indicator {
		position: relative;

		width: 1px;
		flex-shrink: 0;
		height: 100%;
		background: linear-gradient(
			to bottom,
			hsl(var(--aw-color-accent)) 0%,
			hsl(var(--aw-color-greyscale-700)) var(--percentage),
			hsl(var(--aw-color-greyscale-700)) 100%
		);
		border-radius: 100%;

		.cursor {
			border-radius: 16px;
			border: 0.5px solid rgba(255, 255, 255, 0.16);
			background: linear-gradient(
				138deg,
				rgba(255, 255, 255, 0.13) 9.61%,
				rgba(255, 255, 255, 0) 105.41%
			);
			backdrop-filter: blur(100px);

			width: 16px;
			height: 16px;

			position: absolute;
			left: 50%;
			translate: -50% var(--y, 0);
			top: -8px;

			&::after {
				content: '';
				background-color: white;
				border-radius: 100%;
				width: 4px;
				height: 4px;
				position: absolute;
				left: 50%;
				top: 50%;
				translate: -50% -50%;
			}
		}
	}
</style>
