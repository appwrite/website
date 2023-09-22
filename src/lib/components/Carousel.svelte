<script lang="ts">
	let carousel: HTMLElement;

	export let gap = 32;
	let scroll = 0;

	function calculateScrollAmount(prev = false) {
		const direction = prev ? -1 : 1;
		const carouselSize = carousel?.clientWidth;
		const childSize = (carousel.childNodes[0] as HTMLUListElement)?.clientWidth + gap;

		scroll = scroll || carouselSize;

		const numberOfItems = Math.floor(carouselSize / childSize);
		const overflow = scroll % childSize;
		const amount = numberOfItems * childSize - overflow * direction;
		scroll += amount * direction;
		return amount * direction;
	}

	function next() {
		carousel.scrollBy({
			left: calculateScrollAmount(),
			behavior: 'smooth'
		});
	}
	function prev() {
		carousel.scrollBy({
			left: calculateScrollAmount(true),
			behavior: 'smooth'
		});
	}
</script>

<div class="u-flex u-main-space-between u-flex-wrap">
	<slot name="header" />
	<div class="u-flex u-gap-12 u-cross-end">
		<button class="aw-icon-button" aria-label="Move carousel backward" on:click={() => prev()}>
			<span class="icon-arrow-left" aria-hidden="true" />
		</button>
		<button class="aw-icon-button" aria-label="Move carousel forward" on:click={() => next()}>
			<span class="icon-arrow-right" aria-hidden="true" />
		</button>
	</div>
</div>
<ul class="aw-grid-articles aw-u-gap-32 u-margin-block-start-32 carousel" bind:this={carousel}>
	<slot />
</ul>

<style lang="scss">
	.carousel {
		grid-auto-flow: column;
		grid-auto-columns: minmax(17.5rem, 1fr);
		overflow-x: hidden;
	}
</style>
