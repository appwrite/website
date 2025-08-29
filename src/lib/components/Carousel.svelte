<script lang="ts">
    import type { Snippet } from 'svelte';

    let carousel: HTMLElement;

    interface Props {
        size?: 'default' | 'medium' | 'big';
        gap?: number;
        header?: Snippet;
        children: Snippet;
    }

    const { size = 'default', gap = 32, header, children }: Props = $props();

    function calculateScrollAmount(prev = false) {
        if (!carousel) return 0;

        const direction = prev ? -1 : 1;
        const carouselSize = carousel.clientWidth;

        const firstChild = carousel.querySelector('li') as HTMLElement;
        if (!firstChild) return 0;

        const childSize = firstChild.offsetWidth + gap;
        const numberOfItems = Math.floor(carouselSize / childSize);

        return numberOfItems * childSize * direction;
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

    let isEnd = $state(false);
    let isStart = $state(true);

    function handleScroll() {
        if (!carousel) return;

        isStart = carousel.scrollLeft <= 0;
        isEnd = Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth - 1;
    }

    $effect(() => {
        if (carousel) {
            setTimeout(() => {
                handleScroll();
            }, 0);
        }
    });
</script>

<div>
    <div class="mt-2 flex flex-wrap items-center">
        {#if header}
            {@render header()}
        {/if}
        <div class="nav ml-auto flex items-end gap-3">
            <button
                class="web-icon-button cursor-pointer"
                aria-label="Move carousel backward"
                disabled={isStart}
                onclick={prev}
            >
                <span class="web-icon-arrow-left" aria-hidden="true"></span>
            </button>
            <button
                class="web-icon-button cursor-pointer"
                aria-label="Move carousel forward"
                disabled={isEnd}
                onclick={next}
            >
                <span class="web-icon-arrow-right" aria-hidden="true"></span>
            </button>
        </div>
    </div>

    <div class="carousel-wrapper" data-state={isStart ? 'start' : isEnd ? 'end' : 'middle'}>
        <ul
            class="web-grid-articles carousel mt-8"
            class:is-medium={size === 'medium'}
            class:is-big={size === 'big'}
            style:gap="{gap}px"
            bind:this={carousel}
            onscroll={handleScroll}
            onwheel={(e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    carousel.scrollLeft += e.deltaY;
                }
            }}
        >
            {@render children()}
        </ul>
    </div>
</div>

<style lang="scss">
    .nav {
        button {
            @media screen and (max-width: 1023.9px) {
                display: none !important;
            }
        }
    }
    .carousel-wrapper {
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            width: 60px;
            height: 100%;
            transition: ease 250ms;
            z-index: 100;
        }

        &::before {
            left: 0;
            background: linear-gradient(
                to right,
                hsl(var(--web-color-background-docs)),
                transparent
            );
        }

        &[data-state='start']::before {
            opacity: 0;
        }

        &::after {
            right: 0;
            background: linear-gradient(
                to left,
                hsl(var(--web-color-background-docs)),
                transparent
            );
        }

        &[data-state='end']::after {
            opacity: 0;
        }
    }

    .carousel {
        grid-auto-flow: column;
        overflow-x: scroll;
        scroll-snap-type: x proximity;

        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .carousel :global(li) {
        scroll-margin: 48px;
    }
</style>
