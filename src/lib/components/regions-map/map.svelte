<script lang="ts">
    import { inView } from 'motion';
    import MapMarker from './map-marker.svelte';

    let mouse = { x: 0, y: 0 };

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

    const pins = [
        {
            city: 'San Francisco',
            code: 'SFO',
            available: false,
            x: 55,
            y: 100
        },
        {
            city: 'New York City',
            code: 'NYC',
            available: false,
            x: 55,
            y: 80
        },
        {
            city: 'Frankfurt',
            code: 'GER',
            available: true,
            x: 55,
            y: 80
        },
        {
            city: 'Amsterdam',
            code: 'AMS',
            available: false
        },
        {
            city: 'Syndey',
            code: 'AUS',
            available: false
        },
        {
            city: 'Bangalore',
            code: 'IND',
            available: false
        },
        {
            city: 'Signapore',
            code: 'SGP',
            available: false
        }
    ];
</script>

<div
    class="container relative mx-auto flex h-full items-center justify-center"
    use:useMousePosition
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
                class="gradient aspect-square size-40 rounded-full blur-3xl"
                style:--mouse-x="{mouse.x}px"
                style:--mouse-y="{mouse.y}px"
            />
        </div>
        <img src="/images/regions/map.svg" class="opacity-10" alt="Map of the world" />
        <div class="absolute inset-0 flex justify-between">
            {#each pins as pin, index}
                <MapMarker {...pin} {index} />
            {/each}
        </div>
    </div>
</div>

<style>
    .gradient {
        background: radial-gradient(
            circle at center,
            hsla(0, 0%, 100%, 0.7),
            hsla(0, 0%, 100%, 0.7),
            hsla(0, 0%, 100%, 0.7)
        );
        transform: translate3d(
            calc(var(--mouse-x, -100%) * 1 - 18rem),
            calc(var(--mouse-y, -100%) * 1 - 25rem),
            0
        );
    }
</style>
