<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import {
        type EmblaCarouselType,
        type EmblaEventType,
        type EmblaOptionsType,
        type EmblaPluginType
    } from 'embla-carousel';
    import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
    import EmblaClassNames from 'embla-carousel-class-names';

    let emblaApi: EmblaCarouselType;

    let options: EmblaOptionsType = {
        loop: false,
        startIndex: 0,
        inViewThreshold: 1
    };

    let plugins: EmblaPluginType[] = [WheelGesturesPlugin(), EmblaClassNames()];

    const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;

        emblaApi.on('scroll', () => {
            selectedScrollIndex = emblaApi.selectedScrollSnap();
        });
    };

    let selectedScrollIndex = 0;
    const onSelect = (index: number) => {
        emblaApi.scrollTo(index);
        selectedScrollIndex = emblaApi.selectedScrollSnap();
    };

    const onPrev = () => {
        emblaApi.scrollPrev();
        selectedScrollIndex = emblaApi.selectedScrollSnap();
    };

    const onNext = () => {
        emblaApi.scrollNext();
        selectedScrollIndex = emblaApi.selectedScrollSnap();
    };
</script>

<div class="embla web-carousel">
    {#if emblaApi?.canScrollPrev()}
        <button class="web-carousel-button web-carousel-button-start" on:click={onPrev}>
            <span class="web-icon-arrow-left" aria-hidden="true"></span>
        </button>
    {/if}
    {#if emblaApi?.canScrollNext()}
        <button class="web-carousel-button web-carousel-button-end" on:click={onNext}>
            <span class="web-icon-arrow-right" aria-hidden="true"></span>
        </button>
    {/if}

    <div class="embla__viewport" use:embla={{ options, plugins }} on:emblaInit={onEmblaInit}>
        <div class="embla__container">
            <slot />
        </div>
    </div>
</div>

<div class="web-carousel-bullets">
    <ul class="web-carousel-bullets-list">
        {#each Array.from({ length: emblaApi?.scrollSnapList().length }) as _, i}
            <li class="web-carousel-bullets-item">
                <button
                    class="web-carousel-bullets-button"
                    class:is-selected={selectedScrollIndex === i}
                    aria-label={`gallery item ${i + 1}`}
                    on:click={() => onSelect(i)}
                ></button>
            </li>
        {/each}
    </ul>
</div>

<style>
    .embla {
        overflow: hidden;
        position: relative;
    }

    .embla__container {
        display: flex;
    }
</style>
