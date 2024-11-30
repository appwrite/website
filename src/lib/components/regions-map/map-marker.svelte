<script lang="ts">
    import { cn } from '$lib/utils/classnames';
    import { melt, createTooltip } from '@melt-ui/svelte';
    import { cubicInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    type $$Props = {
        city: string;
        code: string;
        available?: boolean;
        class?: string;
        index: number;
    };

    let className: $$Props['class'] = '';

    export let city: $$Props['city'];
    export let code: $$Props['code'];
    export let index: $$Props['index'] = 0;
    export let available: $$Props['available'] = false;
    export { className as class };

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
</script>

<div
    class="animate-fade-in group relative flex size-5 cursor-pointer items-center justify-center opacity-0 [animation-delay:var(--delay)]"
    role="presentation"
    use:melt={$trigger}
    style:--delay="{index * 100}ms"
>
    <span
        class="bg-accent absolute inline-flex h-full w-full rounded-full opacity-75 group-hover:animate-ping"
    />
    <span class="bg-accent absolute inline-flex h-full w-full rounded-full" />
    <span
        class="absolute size-1/2 rounded-full bg-white transition-transform group-hover:scale-110"
    />
</div>
{#if $open}
    <div
        use:melt={$content}
        transition:fly={{ duration: 200, easing: cubicInOut, y: 6 }}
        class={cn(
            'bg-card flex w-[190px] flex-col gap-2 rounded-[10px] border border-white/6 p-2 backdrop-blur-sm',
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
