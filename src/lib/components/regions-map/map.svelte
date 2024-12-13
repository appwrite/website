<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';
    import { slugify } from '$lib/utils/slugify';

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
    let hasActiveMarker: boolean = false;

    const handleSetActiveMarker = (region: string) => {
        const activeRegion = slugify(region);

        hasActiveMarker = true;

        if (activeMarker?.dataset.region === activeRegion) {
            hasActiveMarker = false;
            activeMarker = null;
            return;
        }

        activeMarker = document.querySelector(`[data-region=${activeRegion}]`);
        if (activeMarker) {
            activeMarker.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    };

    // mobile implementation
    // - set a width that is 5x the screen width
    // hide the overflow
    // scrollTo the active element
    // scale 1.5
</script>

<div class=" w-full overflow-scroll">
    <div
        class="container relative mx-auto flex h-full w-[250vw] flex-col items-center justify-center overflow-scroll transition-all delay-250 duration-250 md:flex-row md:overflow-auto"
        use:useMousePosition
        use:useInView
    >
        <div
            class="sticky left-0 z-10 flex w-screen gap-2 space-y-4 overflow-scroll px-8 md:hidden"
        >
            {#each pins as pin}
                <button
                    class="bg-greyscale-800/30 border-greyscale-700/20 inline grow text-nowrap rounded-full border py-1 px-4 backdrop-blur-lg"
                    on:click={() => handleSetActiveMarker(pin.city)}>{pin.city}</button
                >
            {/each}
        </div>
        <div
            class="map relative w-full origin-bottom overflow-scroll transition-all"
            data-active-marker={hasActiveMarker}
        >
            <div
                class="absolute inset-0 [mask-image:url('/images/regions/map.svg')] [mask-repeat:no-repeat] [mask-size:contain]"
            >
                <div
                    class="gradient overlay relative block aspect-square size-40 rounded-full blur-3xl transition-opacity"
                    style:--mouse-x="{mouse.x}px"
                    style:--mouse-y="{mouse.y}px"
                />
            </div>
            <img src="/images/regions/map.svg" class="opacity-10" alt="Map of the world" />
            <div class="absolute inset-0 flex w-full">
                {#each pins as pin, index}
                    <MapMarker {...pin} {animate} {index} />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .map {
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
    }
    [data-active-marker='true'] {
        transform: scale(1.2);
    }
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
