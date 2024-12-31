<script lang="ts">
    import NumberFlow from '@number-flow/svelte';
    import { fade } from 'svelte/transition';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { writable } from 'svelte/store';
    import { classNames } from '$lib/utils/classnames';
    import { clickOutside } from '$lib/actions/clickOutside';

    let open = false;
    export let progress: number = 0;
    export let items: Array<TocItem> = [];

    $: height = 0;
    $: dimensions = writable({ width: 220, height: 44 });

    const toggleOpen = () => {
        open = !open;
        dimensions.set({
            width: open ? 332 : 220,
            height: open ? 44 + items.length * 44 : 44
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

    const useClickOutside = (node: HTMLElement) => {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                toggleOpen();
            }
        };

        document.addEventListener('click', handleClick);

        return {
            destroy() {
                document.removeEventListener('click', handleClick);
            }
        };
    };
</script>

<svelte:window on:keydown={handleEscape} />

<div
    class="fixed top-20 left-1/2 isolate z-200 -translate-x-1/2 overflow-auto rounded-[32px] bg-black shadow-lg shadow-black/70"
>
    <div class="blur" />
    <div
        style:width="{$dimensions.width}px"
        style:height="{$dimensions.height}px"
        style:transition-duration="{items.length * 100}ms"
        class="relative mx-auto flex flex-col justify-center overflow-hidden transition-all ease-in-out"
        use:useClickOutside
    >
        <header class="sticky top-0 flex w-full items-center justify-between py-3 px-4">
            <button
                on:click={toggleOpen}
                class="text-micro relative z-10 flex cursor-pointer items-center outline-none"
                >On this page <span
                    class={classNames('web-icon-chevron-down transition-transform duration-250', {
                        '-rotate-180': open
                    })}
                /></button
            >
            <NumberFlow
                class="text-micro text-primary relative z-10 cursor-pointer rounded-xl py-1 px-2 font-bold outline-none"
                value={clamp(progress * 100, 0, 100)}
                suffix="%"
            />
        </header>

        <div
            class="flex flex-col gap-2 overflow-scroll px-4 pb-4 text-left"
            bind:clientHeight={height}
        >
            {#each items as item, i}
                {@const n = i < 9 ? `0${i + 1}` : i + 1}
                <button on:click={toggleOpen} class="relative text-left">
                    <a
                        href={item.href}
                        class="text-micro text-primary hover:bg-greyscale-900 -mx-2 flex items-center gap-2 rounded-lg py-2 px-2 transition-colors"
                    >
                        <span class="text-secondary font-bold">{n}</span>
                        {item.title}
                    </a>
                </button>
            {/each}
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
