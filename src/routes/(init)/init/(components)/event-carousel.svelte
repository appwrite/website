<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';

    let emblaApi: EmblaCarouselType;

    let hasPrev: boolean = false;
    let hasNext: boolean = true;

    export let options: EmblaOptionsType = {
        align: 'center',
        skipSnaps: true,
        loop: true
    };

    let plugins: EmblaPluginType[] = [];

    const onPrev = () => {
        emblaApi.scrollPrev();
    };

    const onNext = () => {
        emblaApi.scrollNext();
    };

    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) hasPrev = true;
        else hasPrev = false;

        if (emblaApi.canScrollNext()) hasNext = true;
        else hasNext = false;
    };

    const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;

        emblaApi
            .on('init', togglePrevNextBtnsState)
            .on('select', togglePrevNextBtnsState)
            .on('reInit', togglePrevNextBtnsState);
    };
</script>

<div class="border-offset relative min-h-[45vh] border-y-2 border-dashed bg-black/14 py-24">
    <div class="container flex w-full items-center justify-between">
        <h2 class="font-aeonik-pro text-primary text-label">Upcoming Events</h2>
        <nav class="flex gap-1">
            <button
                class="bg-smooth size-8 cursor-pointer rounded-xl transition active:scale-95"
                on:click={onPrev}
                disabled={!hasPrev}
            >
                <span class="web-icon-arrow-left" aria-hidden="true"></span>
            </button>
            <button
                class="bg-smooth size-8 cursor-pointer rounded-xl transition active:scale-95"
                on:click={onNext}
                disabled={!hasNext}
            >
                <span class="web-icon-arrow-right" aria-hidden="true"></span>
            </button>
        </nav>
    </div>

    <div class="embla overflow-hidden pl-36">
        <div
            class="embla__viewport pt-8"
            use:embla={{ options, plugins }}
            on:emblaInit={onEmblaInit}
        >
            <div class="embla__container flex gap-4">
                {#each Array.from({ length: 8 }) as _}
                    <div
                        class="embla__slide h-[180px] min-w-0 [flex:0_0_33%] rounded-lg bg-white shadow-lg"
                    />
                {/each}
            </div>
        </div>
    </div>
</div>
