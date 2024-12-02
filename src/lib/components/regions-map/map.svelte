<script lang="ts">
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';
    import { cn } from '$lib/utils/classnames';

    let mouse = { x: 0, y: 0 };
    let animate: boolean = false;

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
            x: 1,
            y: 11,
            city: 'San Francisco',
            code: 'SFO',
            available: false
        },
        {
            x: 13,
            y: 9,
            city: 'New York City',
            code: 'NYC',
            available: false
        },
        {
            x: 27,
            y: 8,
            city: 'Frankfurt',
            code: 'GER',
            available: true
        },
        {
            x: 28,
            y: 6.5,
            city: 'Amsterdam',
            code: 'AMS',
            available: false
        },
        {
            x: 45,
            y: 20,
            city: 'Bangalore',
            code: 'IND',
            available: false
        },
        {
            x: 53,
            y: 24,
            city: 'Signapore',
            code: 'SGP',
            available: false
        },
        {
            x: 68,
            y: 35,
            city: 'Syndey',
            code: 'AUS',
            available: false
        }
    ];
</script>

<div
    class="container relative mx-auto flex h-full items-center justify-center"
    use:useMousePosition
    use:useInView
>
    <div class="relative z-10 block w-full space-y-4 md:hidden">
        {#each pins as pin}
            <div
                class="bg-card z-100 flex w-full flex-col gap-2 rounded-[10px] border border-white/6 py-4 px-2 backdrop-blur-sm"
            >
                <span class="text-primary text-caption w-fit"
                    >{pin.city}
                    ({pin.code})</span
                >
                {#if pin.available}
                    <div
                        class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-[#10B981]/16 p-1 text-center text-[#0A714F]"
                    >
                        <span class="text-micro -tracking-tight">Available now</span>
                    </div>
                {:else}
                    <div
                        class="text-caption flex h-5 items-center justify-center place-self-start rounded-[6px] bg-black/6 p-1 text-center text-[#56565C]"
                    >
                        <span class="text-micro -tracking-tight">Coming soon</span>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
    <div class="relative hidden w-full origin-bottom transition-all md:block">
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
        <div class="absolute inset-0 flex">
            {#each pins as pin, index}
                <MapMarker {...pin} {animate} {index} />
            {/each}
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
