<script lang="ts">
	let carousel: HTMLElement;

	export let gap = 32;
	let scroll = 0;
	let touchStart = 0;
	let touchEnd = 0;

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

	function handleTouchStart(e: TouchEvent) {
		touchStart = e.touches[0].clientX;
	}
	function handleTouchMove(e: TouchEvent) {
		touchEnd = e.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (touchEnd > touchStart) {
			prev();
		} else {
			next();
		}
	}

	let isEnd = false;
	let isStart = true;

	function handleScroll() {
		if (carousel.scrollLeft === 0) {
			isStart = true;
			isEnd = false;
		} else if (carousel.scrollLeft + carousel.offsetWidth === carousel.scrollWidth) {
			isStart = false;
			isEnd = true;
		} else {
			isStart = false;
			isEnd = false;
		}
	}
</script>

<div class="u-flex u-main-space-between u-flex-wrap">
	<slot name="header" />
	<div class="u-flex u-gap-12 u-cross-end u-margin-block-start-8">
		<button
			class="aw-icon-button"
			aria-label="Move carousel backward"
			disabled={isStart}
			on:click={() => prev()}
		>
			<span class="aw-icon-arrow-left" aria-hidden="true" />
		</button>
		<button
			class="aw-icon-button"
			aria-label="Move carousel forward"
			disabled={isEnd}
			on:click={() => next()}
		>
			<span class="aw-icon-arrow-right" aria-hidden="true" />
		</button>
	</div>
</div>
<ul
	class="aw-grid-articles aw-u-gap-32 u-margin-block-start-32 carousel"
	bind:this={carousel}
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
	on:scroll={handleScroll}
>
	<slot />
</ul>

<style lang="scss">
	.carousel {
		grid-auto-flow: column;
		grid-auto-columns: minmax(17.5rem, 1fr);
		overflow-x: hidden;
	}
</style>
