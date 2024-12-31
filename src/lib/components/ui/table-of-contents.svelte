<script lang="ts">
    import { spring } from 'svelte/motion';
    let open = false;
    import NumberFlow from '@number-flow/svelte';
    import { fade } from 'svelte/transition';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';

    let dimensions = spring(
        {
            target: { width: 220, height: 44 }
        },
        { stiffness: 0.05, damping: 0.2 }
    );

    const toggleOpen = () => {
        open = !open;
        dimensions.set({
            target: { width: open ? 332 : 220, height: open ? 240 : 44 }
        });
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            toggleOpen();
        }
    };

    export let progress: number = 0;
    export let items: Array<TocItem> = [];

    const clamp = (num: number, lower: number, upper: number) => {
        return Math.floor(Math.min(Math.max(num, lower), upper));
    };
</script>

<svelte:window on:keydown={handleEscape} />

<div
    class="fixed top-20 left-1/2 z-20 -translate-x-1/2 overflow-hidden rounded-[32px] shadow-lg shadow-black/70"
    style:--duration="{items.length * 100}ms"
>
    <div class="drop" />
    <div
        style:width="{$dimensions.target.width}px"
        style:height="{$dimensions.target.height}px"
        class="relative mx-auto flex bg-black"
    >
        <div class="flex w-full items-start justify-between py-2 px-4">
            <button on:click={toggleOpen} class="cursor-pointer outline-none"> Index</button>
            <NumberFlow
                value={clamp(progress * 100, 0, 100)}
                format={{
                    roundingMode: 'ceil'
                }}
                suffix="%"
            />
        </div>
    </div>
</div>
{#if open}
    <div
        class="fixed inset-0 z-10 h-screen w-screen backdrop-blur-sm"
        in:fade={{ duration: 250 }}
        out:fade={{ duration: 250 }}
    />
{/if}

<style lang="scss">
    .drop {
        position: absolute;
        width: 100%;
        height: 40px;
        transform: translateX(-50%) translateY(-50%);
        z-index: -2;
        backdrop-filter: blur(6px);
        background-color: hsl(var(--web-color-background) / 50%);
        mask-image: linear-gradient(
            to top,
            transparent,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 1) 75%,
            transparent
        );
    }
</style>
