<script lang="ts">
	import { clamp } from '$lib/utils/clamp';

	type Head = {
		src: string;
		display: [number, number, number];
	};

	const headPositions: Array<Head['display']> = [
		[120, -25, 40],
		[120, 20, -40],
		[64, -40, 20],
		[64, 25, 35],
		[64, 10, 45],
		[64, 40, 55],
		[64, 40, -20],
		[64, 10, -55],
		[40, -45, 50],
		[40, -40, -40]
	];

	export let images: Array<string>;
</script>

<div
	class="u-position-absolute aw-u-hide-mobile"
	style:inline-size="100vw"
	style:block-size="100%"
	style:top="0"
    style:left="0"
    style:right="0"
    style:margin-left="auto"
    style:margin-right="auto"
	style:max-inline-size="1280px"
>
	{#each headPositions as [size, top, left], i}
		{@const image = clamp(0, images.length - 1, i % images.length)}
		<div
			class="head-wrapper"
			style:width="{size}px"
			style:height="{size}px"
			style:top={`calc(50% - ${size / 2}px + ${top}%)`}
			style:left={`calc(50% - ${size / 2}px + ${left}%)`}
		>
			<div style:margin-block-end="0" style:padding="10%">
				<img style:border-radius="50%" class="u-block" src={images[image]} alt="Sara Kaandorp" />
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.head-wrapper {
		display: inline-block;
		position: absolute;
		border: 1.2px solid rgba(255, 255, 255, 0.16);
		border-radius: 50%;

		background: linear-gradient(
				135.1deg,
				rgba(255, 255, 255, 0.16) 10.1%,
				rgba(255, 255, 255, 0) 120.69%
			),
			linear-gradient(132.35deg, rgba(255, 255, 255, 0.08) 12.05%, rgba(255, 255, 255, 0) 161.63%);
		box-shadow: 0px 5.35px 10.7px 0px rgba(0, 0, 0, 0.02);
	}
</style>
