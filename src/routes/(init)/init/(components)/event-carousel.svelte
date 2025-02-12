<script lang="ts">
    import EmblaCarousel, {
        type EmblaCarouselType,
        type EmblaOptionsType,
        type EmblaPluginType
    } from 'embla-carousel';

    let emblaApi: EmblaCarouselType;

    let hasPrev: boolean = false;
    let hasNext: boolean = true;

    export let options: EmblaOptionsType = {
        align: 'center',
        skipSnaps: true,
        loop: true
    };

    let plugins: EmblaPluginType[] = [];

    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) hasPrev = true;
        else hasPrev = false;

        if (emblaApi.canScrollNext()) hasNext = true;
        else hasNext = false;
    };
</script>
