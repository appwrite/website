<script lang="ts">
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';

    // State
    let mouse = $state({ x: 0, y: 0 });
    let animate = $state(true);
    let activeRegion = $state<string | null>(null);
    let hasActiveMarker = $state(false);
    let activeMarker: HTMLElement | null = null;

    // Data
    const pins = [
        {
            x: 1.25,
            y: 8,
            city: 'San Francisco',
            code: 'SFO',
            available: false
        },
        {
            x: 12,
            y: 7,
            city: 'New York City',
            code: 'NYC',
            available: false
        },
        {
            x: 28,
            y: 5.5,
            city: 'Frankfurt',
            code: 'GER',
            available: true
        },
        {
            x: 28,
            y: 4.5,
            city: 'Amsterdam',
            code: 'AMS',
            available: false
        },
        {
            x: 44.5,
            y: 15,
            city: 'Bangalore',
            code: 'IND',
            available: false
        },
        {
            x: 51,
            y: 19,
            city: 'Singapore',
            code: 'SGP',
            available: false
        },
        {
            x: 62,
            y: 29,
            city: 'Sydney',
            code: 'AUS',
            available: false
        }
    ];

    // Actions
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

    // Scroll marker into view and observe intersection
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
        {#each pins as pin}
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
                        'transform-[translate3d(calc(var(--mouse-x,_-100%)_*_1_-_16rem),_calc(var(--mouse-y,_-100%)_*_1_-_24rem),0)]'
                    )}
                    style:--mouse-x="{mouse.x}px"
                    style:--mouse-y="{mouse.y}px"
                ></div>
            </div>

            <img src="/images/regions/map.svg" class="opacity-10" alt="Map of the world" />

            <div class="absolute inset-0 flex w-full">
                {#each pins.map( (pin) => ({ ...pin, isOpen: activeRegion === slugify(pin.city) }) ) as pin, index}
                    <MapMarker {...pin} {animate} {index} />
                {/each}
            </div>
        </div>
    </div>
</div>
