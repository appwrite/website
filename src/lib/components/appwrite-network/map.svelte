<script lang="ts">
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';
    import { Tooltip } from 'bits-ui';
    import MapNav from './map-nav.svelte';

    const showDebugInfo = false;

    const MAP_BOUNDS = {
        west: -220, // Left edge of map (Pacific Ocean)
        east: 180, // Right edge of map (Pacific Ocean)
        north: 70, // Top edge of map (Arctic)
        south: -55 // Bottom edge of map (Antarctica)
    };

    const MAP_WIDTH = 1111;
    const MAP_HEIGHT = 336;

    // Function to convert lat/long to x/y coordinates on the map
    function latLngToPoint(lat: number, lng: number): { x: number; y: number } {
        // Simple equirectangular projection
        const x = ((lng - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * MAP_WIDTH;
        const y = ((MAP_BOUNDS.north - lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * MAP_HEIGHT;

        return { x, y };
    }

    const pins = $state({
        'pop-locations': [
            {
                lat: 40.71,
                lng: -74.01,
                city: 'New York City',
                code: 'NYC',
                available: false
            }
        ],
        edges: [
            {
                lat: 37.77,
                lng: -122.42,
                city: 'San Francisco',
                code: 'SFO',
                available: false
            }
        ],
        regions: [
            {
                lat: 37.77,
                lng: -122.42,
                city: 'San Francisco',
                code: 'SFO',
                available: false
            },
            {
                lat: 40.71,
                lng: -74.01,
                city: 'New York City',
                code: 'NYC',
                available: false
            },
            {
                lat: 52.37,
                lng: 4.9,
                city: 'Amsterdam',
                code: 'AMS',
                available: false
            },
            {
                lat: 50.11,
                lng: 8.68,
                city: 'Frankfurt',
                code: 'GER',
                available: true
            },
            {
                lat: 12.97,
                lng: 77.59,
                city: 'Bangalore',
                code: 'IND',
                available: false
            },
            {
                lat: 1.35,
                lng: 103.82,
                city: 'Singapore',
                code: 'SGP',
                available: false
            },
            {
                lat: -33.87,
                lng: 151.21,
                city: 'Sydney',
                code: 'AUS',
                available: false
            }
        ]
    });

    type PinSegment = keyof typeof pins;

    let mouse = $state({ x: 0, y: 0 });
    let animate = $state(true);
    let activeRegion = $state<string | null>(null);
    let hasActiveMarker = $state(false);
    let activeMarker: HTMLElement | null = null;

    let activeSegment = $state<string>('regions');

    $effect(() => {
        console.log(pins[activeSegment as PinSegment]);
    });

    const useMousePosition = (node: HTMLElement) => {
        const handleMouseMove = (event: MouseEvent) => {
            mouse = {
                x: event.clientX,
                y: event.clientY
            };
        };

        inView(
            node,
            () => {
                node.addEventListener('mousemove', handleMouseMove);
            },
            { amount: 'all' }
        );

        return {
            destroy() {
                node.removeEventListener('mousemove', handleMouseMove);
            }
        };
    };

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate = true;
            },
            { amount: 'all' }
        );
    };

    const scrollMarkerIntoView = (marker: HTMLElement): Promise<void> => {
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

    // Handle marker click
    const handleSetActiveMarker = async (city: string) => {
        const citySlug = slugify(city);

        // Toggle off if already active
        if (activeRegion === citySlug) {
            hasActiveMarker = false;
            activeMarker = null;
            activeRegion = null;
            return;
        }

        hasActiveMarker = true;
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
        class="relative container mx-auto flex h-full w-[250vw] flex-col justify-center overflow-scroll py-10 transition-all delay-250 duration-250 md:w-fit md:flex-row md:overflow-auto md:py-0"
        use:useMousePosition
        use:useInView
        data-active-marker={hasActiveMarker}
    >
        <div
            class="map relative w-full origin-bottom overflow-scroll transition-all [scrollbar-width:none]"
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
                    style:--mouse-x="{mouse.x}px"
                    style:--mouse-y="{mouse.y}px"
                ></div>
            </div>

            <img src="/images/regions/map.svg" class="opacity-10" alt="Map of the world" />

            <Tooltip.Provider delayDuration={0} skipDelayDuration={500} disableCloseOnTriggerClick>
                {#each pins[activeSegment as PinSegment].map( (pin) => ({ ...pin, isOpen: activeRegion === slugify(pin.city), position:  // Calculate x/y position from lat/lng
                        latLngToPoint(pin.lat, pin.lng) }) ) as pin, index}
                    <MapMarker {...pin} {animate} {index} bounds={MAP_BOUNDS} {showDebugInfo} />
                {/each}
            </Tooltip.Provider>
        </div>
    </div>
</div>

<MapNav onValueChange={(value) => (activeSegment = value)} />
