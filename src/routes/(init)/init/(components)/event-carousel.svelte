<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
    import { Button, Icon } from '$lib/components/ui';

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
            <Button
                class="bg-smooth size-8 cursor-pointer rounded-xl transition active:scale-95"
                onclick={onPrev}
                disabled={!hasPrev}
            >
                <Icon name="arrow-left" aria-hidden="true"></Icon>
            </Button>
            <Button
                class="bg-smooth size-8 cursor-pointer rounded-xl transition active:scale-95"
                onclick={onNext}
                disabled={!hasNext}
            >
                <Icon name="arrow-right" aria-hidden="true"></Icon>
            </Button>
        </nav>
    </div>

    <div class="embla overflow-hidden pl-36">
        <div
            class="embla__viewport pt-8"
            use:embla={{ options, plugins }}
            on:emblaInit={onEmblaInit}
        >
            <div class="embla__container flex">
                {#each Array.from({ length: 8 }) as _}
                    <div
                        class="embla__slide bg-card/90 mr-4 h-[180px] min-w-0 [flex:0_0_33%] rounded-lg"
                    ></div>
                {/each}
            </div>
        </div>
    </div>
</div>
