<script lang="ts">
	let carousel: HTMLElement;

	const baseScroll = 400;
	let scroll = 0;

	function calculateScrollAmount() {
		let childSize = (carousel.childNodes[0] as HTMLUListElement)?.clientWidth;
		Math.floor(baseScroll % childSize);
		Math.floor(baseScroll % childSize);
		return 0;
	}

	function next() {
		const scrollAmount = calculateScrollAmount();
		scroll += scrollAmount;
		carousel.scrollBy({
			left: scrollAmount,
			behavior: 'smooth'
		});
		logMe();
	}
	function prev() {
		const scrollAmount = calculateScrollAmount();
		scroll -= scrollAmount;
		carousel.scrollBy({
			left: -scrollAmount,
			behavior: 'smooth'
		});
		logMe();
	}

	function logMe() {
		console.log(carousel?.clientWidth, carousel?.scrollWidth, carousel?.offsetWidth);
	}
</script>

<div class="u-flex u-main-space-between u-flex-wrap">
	<slot name="header" />
	<div class="u-flex u-gap-12 u-cross-end">
		<button class="aw-icon-button" aria-label="Move carousel backward" on:click={() => prev()}>
			<span class="aw-icon-arrow-left" aria-hidden="true" />
		</button>
		<button class="aw-icon-button" aria-label="Move carousel forward" on:click={() => next()}>
			<span class="aw-icon-arrow-right" aria-hidden="true" />
		</button>
	</div>
</div>
<div class=" wrapper">
	<ul class="aw-grid-articles aw-u-gap-32 u-margin-block-start-32 carousel" bind:this={carousel}>
		<slot />
	</ul>
</div>

<style lang="scss">
	.carousel {
		grid-auto-flow: column;
		grid-auto-columns: minmax(17.5rem, 1fr);
		overflow-x: hidden;
	}
</style>
