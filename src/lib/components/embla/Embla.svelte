<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import {
        type EmblaCarouselType,
        type EmblaOptionsType,
        type EmblaPluginType
    } from 'embla-carousel';
    import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
    import EmblaClassNames from 'embla-carousel-class-names';

    let emblaApi: EmblaCarouselType;

    let options: EmblaOptionsType = {
        align: 'center',
        skipSnaps: true
    };

    let hasPrev: boolean = false;
    let hasNext: boolean = true;

    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) hasPrev = true;
        else hasPrev = false;

        if (emblaApi.canScrollNext()) hasNext = true;
        else hasNext = false;
    };

    let plugins: EmblaPluginType[] = [WheelGesturesPlugin(), EmblaClassNames()];

    const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;

        emblaApi
            .on('scroll', () => {
                selectedScrollIndex = emblaApi.selectedScrollSnap();
            })
            .on('init', togglePrevNextBtnsState)
            .on('select', togglePrevNextBtnsState)
            .on('reInit', togglePrevNextBtnsState);
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
    {#if hasPrev}
        <button class="web-carousel-button web-carousel-button-start" on:click={onPrev}>
            <span class="web-icon-arrow-left" aria-hidden="true"></span>
        </button>
    {/if}
    {#if hasNext}
        <button class="web-carousel-button web-carousel-button-end" on:click={onNext}>
            <span class="web-icon-arrow-right" aria-hidden="true"></span>
        </button>
    {/if}

    <div class="embla__viewport" use:embla={{ options, plugins }} on:emblaInit={onEmblaInit}>
        <ul class="embla__container">
            <slot />
        </ul>
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
