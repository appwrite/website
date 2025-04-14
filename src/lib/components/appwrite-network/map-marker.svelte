<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { slugify } from '$lib/utils/slugify';
    import { Tooltip } from 'bits-ui';

    interface Props {
        city: string;
        code: string;
        index: number;
        lat: number;
        lng: number;
        bounds: {
            north: number;
            south: number;
            west: number;
            east: number;
        };
        available?: boolean;
        class?: string;
        animate?: boolean;
        isOpen: boolean;
    }

    const {
        city,
        code,
        index = 0,
        lat,
        lng,
        bounds,
        available = false,
        class: className = '',
        animate = false,
        isOpen = false
    }: Props = $props();

    let open = $state(isOpen);

    $effect(() => {
        if (isOpen) {
            open = true;
        } else {
            open = false;
        }
    });

    const x = $derived(((lng - bounds.west) / (bounds.east - bounds.west)) * 100);
    const y = $derived(((bounds.north - lat) / (bounds.north - bounds.south)) * 100);
</script>

<Tooltip.Root bind:open>
    <Tooltip.Trigger
        class={classNames(
            'group absolute flex size-3 cursor-pointer items-center justify-center opacity-0 [animation-delay:var(--delay)]',
            { 'animate-fade-in': animate }
        )}
        style="left:{x}%; top:{y}%; --delay:{index * 10}ms;"
        data-region={slugify(city)}
        data-active={isOpen}
    >
        <span
            class="from-accent/20 to-accent/10 border-gradient ease-spring absolute inline-flex h-5 w-5 rounded-full bg-gradient-to-b opacity-0 transition-opacity group-hover:animate-ping group-hover:opacity-75 before:rounded-full"
            style:animation-duration="1.5s"
        ></span>
        <span class="bg-accent absolute inline-flex h-full w-full rounded-full"></span>
        <span class="absolute size-1/2 rounded-full bg-white/80 transition-all"></span>
    </Tooltip.Trigger>

    <Tooltip.Content
        sideOffset={12}
        class={classNames(
            'from-card/75 to-greyscale-800/75 border-gradient relative z-100 flex w-[190px] flex-col gap-2 rounded-[10px] bg-gradient-to-tl p-2 backdrop-blur-sm before:rounded-[10px] after:rounded-[10px]',
            'data-[state="closed"]:animate-menu-out data-[state="instant-open"]:animate-menu-in data-[state="delayed-open"]:animate-menu-in',
            className
        )}
    >
        <span class="text-primary text-caption w-fit"
            >{city}
            ({code})</span
        >
        {#if available}
            <div
                class="text-caption flex h-5 items-center justify-center place-self-start rounded-md bg-[#10B981]/24 p-1 text-center text-[#B4F8E2]"
            >
                <span class="text-micro -tracking-tight">Available now</span>
            </div>
        {:else}
            <div
                class="text-caption flex h-5 items-center justify-center place-self-start rounded-md bg-white/6 p-1 text-center text-white/60"
            >
                <span class="text-micro -tracking-tight">Planned</span>
            </div>
        {/if}
    </Tooltip.Content>
</Tooltip.Root>
