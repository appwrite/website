<script lang="ts">
    let open = false;
    import NumberFlow from '@number-flow/svelte';
    import { fade } from 'svelte/transition';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { writable } from 'svelte/store';

    export let progress: number = 0;
    export let items: Array<TocItem> = [];

    let dimensions = writable({ width: 220, height: 44 });

    const toggleOpen = () => {
        open = !open;
        dimensions.set({
            width: open ? 332 : 220,
            height: open ? 240 : 44
        });
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            toggleOpen();
        }
    };

    const clamp = (num: number, lower: number, upper: number) => {
        return Math.floor(Math.min(Math.max(num, lower), upper));
    };
</script>

<svelte:window on:keydown={handleEscape} />

<div
    class="fixed top-20 left-1/2 z-20 -translate-x-1/2 overflow-auto rounded-[32px] bg-black shadow-lg shadow-black/70"
>
    <div class="blur" />
    <div
        style:width="{$dimensions.width}px"
        style:height="{$dimensions.height}px"
        style:transition-duration="{items.length * 50}ms"
        class="relative mx-auto flex flex-col transition-all ease-in-out"
    >
        <header class="sticky top-0 flex w-full items-start justify-between py-3 px-4">
            <button on:click={toggleOpen} class="relative z-10 cursor-pointer outline-none"
                >Index</button
            >
            <NumberFlow value={clamp(progress * 100, 0, 100)} suffix="%" />
        </header>
        <!-- <div class="overflow-scroll">
            {#if open}
                <ul>
                    {#each items as item}
                        <li>
                            <a
                                href={item.href}
                                class="block py-2 px-4 text-white hover:bg-gray-800"
                            >
                                {item.title}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div> -->
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
    .blur {
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
