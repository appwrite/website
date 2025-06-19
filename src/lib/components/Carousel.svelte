<script lang="ts">
    import type { Snippet } from 'svelte';
    import { onMount, tick } from 'svelte';

    let carousel: HTMLElement;

    interface Props {
        size?: 'default' | 'medium' | 'big';
        gap?: number;
        header?: Snippet;
        children: Snippet;
    }

    const { size = 'default', gap = 32, header, children }: Props = $props();

    let isEnd = $state(false);
    let isStart = $state(true);

    function getScrollItemWidth(): number {
        const firstItem = carousel?.querySelector('li');
        if (firstItem) {
            return firstItem.offsetWidth + gap;
        }
        return 0;
    }

    function next() {
        const scrollAmount = getScrollItemWidth();
        if (scrollAmount > 0) {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function prev() {
        const scrollAmount = getScrollItemWidth();
        if (scrollAmount > 0) {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function handleScroll() {
        if (!carousel) return;
        isStart = carousel.scrollLeft <= 0;
        isEnd = Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >= carousel.scrollWidth;
    }

    onMount(() => {
        tick().then(() => {
            handleScroll();
        });
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
            pointer-events: none; /* Crucial: ensures clicks go through to carousel content */
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
        /* Important for your layout */
        display: grid; /* Changed from default to allow grid-auto-flow */
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
        scroll-snap-align: start; /* This was on the li in the parent, but should be here */
        scroll-margin: 48px; /* For padding if snap point is too close to edge */
        /* You might need to set a min-width on your list items for consistent sizing */
        /* min-width: 300px; */
    }
</style>
