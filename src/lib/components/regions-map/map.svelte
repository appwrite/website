<script lang="ts">
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';
    import { classNames } from '$lib/utils/classnames';

    let mouse = { x: 0, y: 0 };
    let animate: boolean = true;

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

    export let pins: Array<{
        x: number;
        y: number;
        city: string;
        code: string;
        available: boolean;
    }> = [
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
            city: 'Signapore',
            code: 'SGP',
            available: false
        },
        {
            x: 62,
            y: 29,
            city: 'Syndey',
            code: 'AUS',
            available: false
        }
    ];

    let activeMarker: HTMLElement | null = null;
    let activeRegion: string | null = null;
    let hasActiveMarker: boolean = false;

    const handleSetActiveMarker = async (region: string) => {
        const activeRegionString = slugify(region);

        if (activeRegion === activeRegionString) {
            hasActiveMarker = false;
            activeMarker = null;
            activeRegion = null;
            return;
        }

        hasActiveMarker = true;

        activeMarker = document.querySelector(`[data-region="${activeRegionString}"]`);

        if (activeMarker) {
            return new Promise<void>((resolve) => {
                activeMarker!.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });

                const observer = new IntersectionObserver(
                    (entries) => {
                        const entry = entries[0];

                        // Only update if the marker is more than 50% in view
                        if (entry.intersectionRatio > 0.5) {
                            activeRegion = activeRegionString;
                            observer.disconnect();
                            resolve();
                        }
                    },
                    {
                        threshold: [0, 0.25, 0.5, 0.75, 1]
                    }
                );

                observer.observe(activeMarker!);
            });
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
                    'border-0.5 grow rounded-full bg-gradient-to-br px-4 py-1 text-nowrap text-white backdrop-blur-lg transition-colors',
                    {
                        'from-accent to-accent/50 border-accent':
                            activeRegion === slugify(pin.city),
                        'from-greyscale-800/30 to-greyscale-700/30 border-greyscale-700/20':
                            activeRegion !== slugify(pin.city)
                    }
                )}
                on:click={() => handleSetActiveMarker(pin.city)}>{pin.city}</button
            >
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
                class="absolute inset-0 [mask-image:url('/images/regions/map.svg')] [mask-size:contain] [mask-repeat:no-repeat]"
            >
                <div
                    class="gradient overlay relative block aspect-square size-40 rounded-full blur-3xl transition-opacity"
                    style:--mouse-x="{mouse.x}px"
                    style:--mouse-y="{mouse.y}px"
                />
            </div>
            <img src="/images/regions/map.svg" class="opacity-10" alt="Map of the world" />
            <div class="absolute inset-0 flex w-full">
                {#each pins.map((pin) => {
                    return { ...pin, isOpen: activeRegion === slugify(pin.city) };
                }) as pin, index}
                    <MapMarker {...pin} {animate} {index} />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .gradient {
        background: radial-gradient(
            circle at center,
            var(--color-accent),
            hsla(0, 0%, 100%, 0.7),
            hsla(0, 0%, 100%, 0.7)
        );
        transform: translate3d(
            calc(var(--mouse-x, -100%) * 1 - 16rem),
            calc(var(--mouse-y, -100%) * 1 - 24rem),
            0
        );
    }
</style>
