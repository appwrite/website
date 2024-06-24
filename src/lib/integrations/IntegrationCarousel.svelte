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

    let isEnd = false;
    let isStart = true;

    function handleScroll() {
        isStart = carousel.scrollLeft <= 0;
        isEnd = Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth;
    }
</script>

<div class="web-carousel">
    <button
        class="web-carousel-button web-carousel-button-start"
        disabled={isStart}
        on:click={() => {
            prev(), console.log('clicked previous');
        }}
    >
        <span class="web-icon-arrow-left" aria-hidden="true"></span>
    </button>
    <button
        class="web-carousel-button web-carousel-button-end"
        disabled={isEnd}
        on:click={() => next()}
    >
        <span class="web-icon-arrow-right" aria-hidden="true"></span>
    </button>
    <div class="web-carousel-overflow">
        <ul
            class="web-carousel-list"
            on:scroll={handleScroll}
            bind:this={carousel}
            style:gap="{gap}px"
        >
            <slot />
        </ul>
    </div>
</div>

<div class="web-carousel-bullets">
    <ul class="web-carousel-bullets-list">
        <li class="web-carousel-bullets-item">
            <button
                class="web-carousel-bullets-button is-selected"
                aria-label="selected gallery first item"
            ></button>
        </li>
        <li class="web-carousel-bullets-item">
            <button class="web-carousel-bullets-button" aria-label="gallery second item"></button>
        </li>
        <li class="web-carousel-bullets-item">
            <button class="web-carousel-bullets-button" aria-label="gallery third item"></button>
        </li>
    </ul>
</div>
