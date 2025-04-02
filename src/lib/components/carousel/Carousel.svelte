<script lang="ts">
    import embla from 'embla-carousel-svelte';
    import {
        type EmblaCarouselType,
        type EmblaEventType,
        type EmblaOptionsType,
        type EmblaPluginType
    } from 'embla-carousel';
    import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
    import AutoScrollPlugin, { type AutoScrollOptionsType } from 'embla-carousel-auto-scroll';

    let emblaApi: EmblaCarouselType;

    export let showBullets: boolean = true;
    export let showArrows: boolean = true;
    export let autoScrollOptions: AutoScrollOptionsType = {
        active: false
    };
    export let options: EmblaOptionsType = {
        align: 'center',
        skipSnaps: true,
        loop: true
    };

    let hasPrev: boolean = false;
    let hasNext: boolean = true;

    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) hasPrev = true;
        else hasPrev = false;

        if (emblaApi.canScrollNext()) hasNext = true;
        else hasNext = false;
    };

    let plugins: EmblaPluginType[] = [WheelGesturesPlugin(), AutoScrollPlugin(autoScrollOptions)];

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

    const TWEEN_FACTOR_BASE = 0.52;
    let tweenFactor = 0;
    let tweenNodes: HTMLElement[] = [];

    const numberWithinRange = (number: number, min: number, max: number) =>
        Math.min(Math.max(number, min), max);

    const setTweenNodes = (emblaApi: EmblaCarouselType): void => {
        tweenNodes = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__number') as HTMLElement;
        });
    };

    const setTweenFactor = (emblaApi: EmblaCarouselType): void => {
        tweenFactor = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    };

    const tweenScale = (emblaApi: EmblaCarouselType, eventName?: EmblaEventType): void => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === 'scroll';

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor);
                const scale = numberWithinRange(tweenValue, 0.8, 1).toString();
                const tweenNode = tweenNodes[slideIndex];
                tweenNode.style.transform = `scale(${scale})`;
            });
        });
    };

    const onEmblaInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenScale(emblaApi);

        emblaApi
            .on('scroll', () => {
                selectedScrollIndex = emblaApi.selectedScrollSnap();
            })
            .on('init', togglePrevNextBtnsState)
            .on('select', togglePrevNextBtnsState)
            .on('reInit', togglePrevNextBtnsState)
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale);
    };
</script>

<div class="embla web-carousel relative overflow-hidden">
    {#if showArrows}
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
    {/if}

    <div class="embla__viewport" use:embla={{ options, plugins }} on:emblaInit={onEmblaInit}>
        <ul class="embla__container flex">
            <slot />
        </ul>
    </div>
    <div class="shadow"></div>
</div>

{#if showBullets}
    <div class="web-carousel-bullets">
        <ul class="web-carousel-bullets-list">
            {#each Array.from({ length: emblaApi?.scrollSnapList().length }) as _, i}
                <li class="web-carousel-bullets-item rounded-full">
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
{/if}

<style>
    .shadow {
        width: 100vw;
        height: 80vh;
        position: absolute;
        top: 50%;
        left: 50%;
        pointer-events: none;
        transform: translateX(-50%) translateY(-50%);
        z-index: 10;
        backdrop-filter: blur(2px);
        background-color: hsl(var(--web-color-background) / 50%);
        mask-composite: intersect;
        mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 0%,
            transparent,
            transparent,
            rgba(0, 0, 0, 1) 100%
        );
    }
</style>
