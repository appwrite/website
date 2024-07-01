<script lang="ts">
    let carousel: HTMLElement;

    let gap = 32;
    let scroll = 0;

    let activeIndex = 0;

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
        activeIndex++;
    }
    function prev() {
        carousel.scrollBy({
            left: calculateScrollAmount(true),
            behavior: 'smooth'
        });
        activeIndex--;
    }

    let isEnd = false;
    let isStart = true;

    function handleScroll() {
        isStart = carousel.scrollLeft <= 0;
        isEnd = Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth;
    }
</script>

<div class="web-carousel">
    {#if !isStart}
        <button class="web-carousel-button web-carousel-button-start" on:click={() => prev()}>
            <span class="web-icon-arrow-left" aria-hidden="true" />
        </button>
    {/if}
    {#if !isEnd}
        <button class="web-carousel-button web-carousel-button-end" on:click={() => next()}>
            <span class="web-icon-arrow-right" aria-hidden="true" />
        </button>
    {/if}

    <div class="web-carousel-overflow">
        <ul
            class="web-carousel-list"
            style:gap="{gap}px"
            bind:this={carousel}
            on:scroll={handleScroll}
        >
            <slot {activeIndex} />
        </ul>
    </div>
</div>
