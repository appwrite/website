<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { slugify } from '$lib/utils/slugify';
    import { melt, createTooltip } from '@melt-ui/svelte';
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    interface Props {
        city: string;
        code: string;
        index: number;
        x: number;
        y: number;
        available?: boolean;
        class?: string;
        animate?: boolean;
        isOpen: boolean;
    }

    const {
        city,
        code,
        index = 0,
        x = 0,
        y = 0,
        available = false,
        class: className = '',
        animate = false,
        isOpen = false
    }: Props = $props();

    const {
        elements: { trigger, content },
        states: { open }
    } = createTooltip({
        escapeBehavior: 'ignore',
        positioning: {
            placement: 'top-start',
            offset: {
                crossAxis: 20,
                mainAxis: 20
            }
        },
        openDelay: 0,
        closeDelay: 0,
        closeOnPointerDown: false,
        forceVisible: true
    });

    $effect(() => {
        console.log(isOpen);
    });

    open.set(isOpen);
</script>

<div
    class={classNames(
        'group relative flex size-4 translate-x-[var(--x-mobile)] translate-y-[var(--y)] cursor-pointer items-center justify-center opacity-0 [animation-delay:var(--delay)] md:translate-x-[var(--x-desktop)]',
        { 'animate-fade-in': animate }
    )}
    use:melt={$trigger}
    style:--x-desktop="{x}vw"
    style:--x-mobile="{x * 3.25}vw"
    style:--y="{y}vh"
    style:--delay="{index * 100}ms"
    data-region={slugify(city)}
    data-active={isOpen}
>
    <span
        class="bg-accent absolute inline-flex h-10 w-10 rounded-full opacity-75 group-hover:animate-ping group-data-[active=true]:animate-ping"
    ></span>
    <span class="bg-accent absolute inline-flex h-full w-full rounded-full"></span>
    <span
        class="absolute size-1/2 rounded-full bg-white transition-all group-hover:scale-110 group-data-[active=true]:size-2/3"
    ></span>
</div>

{#if $open}
    <div
        use:melt={$content}
        transition:fly={{ duration: 200, easing: cubicInOut, y: 6 }}
        class={classNames(
            'from-card/75 to-greyscale-800/75 flex w-[190px] flex-col gap-2 rounded-[10px] border border-white/3 bg-gradient-to-tl p-2 backdrop-blur-sm',
            className
        )}
    >
        <span class="text-primary text-caption w-fit"
            >{city}
            ({code})</span
        >
        {#if available}
            <div
                class="text-caption flex h-5 items-center justify-center place-self-start rounded-md bg-[#10B981]/16 p-1 text-center text-[#0A714F]"
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
    </div>
{/if}
