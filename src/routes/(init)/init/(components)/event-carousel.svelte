<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
    import { Button, Icon } from '$lib/components/ui';
    import EventFutureOfAppwrite from '../(assets)/eventFutureOfAppwrite.png';
    import EventLiveDemo from '../(assets)/eventLiveDemo.png';
    import EventBuildingWithFlutter from '../(assets)/eventBuildingWithFlutter.png';
    import EventClosingParty from '../(assets)/eventClosingParty.png';
    import EventIndustryPanel from '../(assets)/eventIndustryPanel.png';

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

    const events = [
        {
            poster: EventFutureOfAppwrite,
            title: 'The future of Appwrite'
        },
        {
            poster: EventLiveDemo,
            title: 'Live demo'
        },
        {
            poster: EventBuildingWithFlutter,
            title: 'Building with Flutter'
        },
        {
            poster: EventIndustryPanel,
            title: 'Industry panel'
        },
        {
            poster: EventClosingParty,
            title: 'Closing party'
        }
    ];
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
                {#each events as _}
                    <div
                        class="embla__slide bg-card/90 mr-4 min-w-0 [flex:0_0_33%] items-center rounded-lg p-4"
                    >
                        <img src={_.poster} class="m-auto rounded-t" />
                        <h3 class="mt-0.5 text-base font-medium">{_.title}</h3>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
