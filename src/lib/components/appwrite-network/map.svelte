<script lang="ts" module>
    export const MAP_BOUNDS = $state({
        west: -132,
        east: 178,
        north: 65,
        south: -65
    });
</script>

<script lang="ts">
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';
    import { Tooltip } from 'bits-ui';
    import MapNav from './map-nav.svelte';
    import { useMousePosition } from '$lib/actions/mouse-position';
    import { useAnimateInView } from '$lib/actions/animate-in-view';
    import { pins, type PinSegment } from './data/pins';
    import { latLongToSvgPosition } from './utils/projections';

    let height: number = $state(0);
    let width: number = $state(0);

    let activeRegion = $state<string | null>(null);
    let activeMarker: HTMLElement | null = null;
    let activeSegment = $state<string>('pop-locations');

    const { action: mousePosition, position } = useMousePosition();
    const { action: inView, animate } = useAnimateInView({});

    const scrollMarkerIntoView = (marker: HTMLElement) => {
        return new Promise<void>((resolve) => {
            marker.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].intersectionRatio > 0.5) {
                        observer.disconnect();
                        resolve();
                    }
                },
                { threshold: [0, 0.25, 0.5, 0.75, 1] }
            );

            observer.observe(marker);
        });
    };

    const handleSetActiveMarker = async (city: string) => {
        const citySlug = slugify(city);

        if (activeRegion === citySlug) {
            activeMarker = null;
            activeRegion = null;
            return;
        }

        activeMarker = document.querySelector(`[data-region="${citySlug}"]`);

        if (activeMarker) {
            await scrollMarkerIntoView(activeMarker);
            activeRegion = citySlug;
        }
    };
</script>

<div class="w-full overflow-scroll [scrollbar-width:none]">
    <div
        class="sticky left-0 z-10 mb-8 flex w-screen gap-2 overflow-scroll px-8 [scrollbar-width:none] md:hidden"
    >
        {#each pins[activeSegment as PinSegment] as pin}
            <button
                class={classNames(
                    'border-gradient grow rounded-full bg-gradient-to-br px-4 py-1 text-nowrap text-white backdrop-blur-lg transition-colors before:rounded-full after:rounded-full',
                    {
                        'from-accent to-accent/50': activeRegion === slugify(pin.city),
                        'from-greyscale-800/30 to-greyscale-700/30':
                            activeRegion !== slugify(pin.city)
                    }
                )}
                onclick={() => handleSetActiveMarker(pin.city)}
            >
                {pin.city}
            </button>
        {/each}
    </div>

    <div
        class="relative container mx-auto flex h-full w-[250vw] flex-col justify-center overflow-scroll px-0 py-10 transition-all delay-250 duration-250 md:w-fit md:flex-row md:overflow-auto md:py-0"
        use:inView
        use:mousePosition
    >
        <div
            class="map animate-text relative w-full origin-bottom overflow-scroll transition-all [scrollbar-width:none]"
            bind:clientWidth={width}
            bind:clientHeight={height}
        >
            <div
                class="absolute inset-0 mask-[image:url('/images/regions/map.svg')] mask-contain mask-no-repeat"
            >
                <div
                    class={classNames(
                        'relative block aspect-square size-40 rounded-full blur-3xl transition-opacity',
                        'from-accent bg-radial-[circle_at_center] via-white/70 to-white/70',
                        'transform-[translate3d(calc(var(--mouse-x,_-100%)_*_1_-_16rem),_calc(var(--mouse-y,_-100%)_*_1_-_28rem),0)]'
                    )}
                    style:--mouse-x="{$position.x}px"
                    style:--mouse-y="{$position.y}px"
                ></div>
            </div>

            <img
                src="/images/regions/map.svg"
                class="pointer-events-none opacity-10"
                draggable="false"
                alt="Map of the world"
            />

            <Tooltip.Provider delayDuration={0} skipDelayDuration={500} disableCloseOnTriggerClick>
                {#each pins[activeSegment as PinSegment].map( (pin) => ({ ...pin, isOpen: activeRegion === slugify(pin.city), position: latLongToSvgPosition( { latitude: pin.lat, longitude: pin.lng, width, height } ) }) ) as pin, index}
                    <MapMarker {...pin} animate={$animate} {index} bounds={MAP_BOUNDS} />
                {/each}
            </Tooltip.Provider>
        </div>
    </div>
</div>

<MapNav onValueChange={(value) => (activeSegment = value)} />
