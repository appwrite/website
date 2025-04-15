<script lang="ts" module>
    export const MAP_BOUNDS = $state({
        west: -137,
        east: 165,
        north: 80,
        south: -60
    });
</script>

<script lang="ts">
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';
    import MapNav from './map-nav.svelte';
    import { useMousePosition } from '$lib/actions/mouse-position';
    import { useAnimateInView } from '$lib/actions/animate-in-view';
    import { pins, type PinSegment } from './data/pins';
    import MapTooltip from './map-tooltip.svelte';
    import { dev } from '$app/environment';

    let dimensions = $state({
        width: 0,
        height: 0
    });

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

    const debug = true;
</script>

{#if dev && debug}
    <div class="absolute z-1000 flex flex-col gap-4">
        {#each Object.entries(MAP_BOUNDS) as [key, value]}
            <input
                type="number"
                onchange={(e) =>
                    (MAP_BOUNDS[key as keyof typeof MAP_BOUNDS] = e.currentTarget.valueAsNumber)}
                {value}
            />
        {/each}
        <pre>{JSON.stringify(MAP_BOUNDS, null, 4)}</pre>
    </div>
{/if}

<div class="-mt-8 w-full overflow-x-hidden [scrollbar-width:none]">
    <div
        class="sticky left-0 z-10 mb-8 hidden w-screen gap-2 overflow-scroll px-8 [scrollbar-width:none]"
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
        class="relative mx-auto h-full w-[250vw] [scrollbar-width:none] md:w-fit"
        use:inView
        use:mousePosition
    >
        <div
            class="relative w-full max-w-screen origin-bottom transform-[perspective(25px)_rotateX(0.75deg)_scale3d(1.4,_1.4,_1)] transition-all [scrollbar-width:none]"
            bind:clientWidth={dimensions.width}
            bind:clientHeight={dimensions.height}
        >
            <div
                class="absolute inset-0 mask-[image:url('/images/appwrite-network/map.svg')] mask-contain mask-no-repeat"
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
                src="/images/appwrite-network/map.svg"
                class="pointer-events-none relative -z-10 max-h-[525px] w-full opacity-10"
                draggable="false"
                alt="Map of the world"
            />

            {#each pins[activeSegment as PinSegment] as pin, index}
                <MapMarker {...pin} animate={$animate} {index} bounds={MAP_BOUNDS} />
            {/each}
        </div>
    </div>
</div>
<MapTooltip coords={$position} />
<MapNav onValueChange={(value) => (activeSegment = value)} />
