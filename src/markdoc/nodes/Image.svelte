<script lang="ts">
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { createDialog, melt } from '@melt-ui/svelte';
    import { getContext, hasContext } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { quadInOut } from 'svelte/easing';

    export let src: string;
    export let alt: string;
    export let title: string;

    const inTable = hasContext('in-table') ? getContext('in-table') : false;
    const isAudio = /\.(wav|mp3|m4a|ogg)$/i.test(src);

    const {
        elements: { portalled, trigger, content, overlay },
        states: { open }
    } = createDialog({
        preventScroll: false,
        forceVisible: true
    });

    const handleScroll = () => {
        if ($open) open.set(false);
    };
</script>

<svelte:window on:scroll={handleScroll} />

{#if inTable || isAudio}
    {#if isAudio}
        <audio {src} controls class="w-full">
            Your browser does not support the audio element.
        </audio>
    {:else}
        <img {src} {alt} {title} loading="lazy" style:vertical-align="middle" />
    {/if}
{:else}
    <div class="web-media main">
        <img {src} {alt} {title} loading="lazy" class="web-u-media-ratio-16-9 w-full" />
        <div class="abs">
            <Tooltip closeOnPointerDown>
                <button class="web-button is-secondary cursor-pointer" use:melt={$trigger}>
                    <span class="icon-arrow-expand" aria-hidden="true" />
                </button>
                <svelte:fragment slot="tooltip">Expand</svelte:fragment>
            </Tooltip>
        </div>
    </div>

    {#if $open}
        <div use:melt={$portalled}>
            <div use:melt={$overlay} class="overlay" transition:fade={{ duration: 350 }} />

            <img
                class="web-media content"
                use:melt={$content}
                {src}
                {alt}
                {title}
                loading="lazy"
                transition:scale={{ duration: 350, start: 0.8, easing: quadInOut }}
            />
        </div>
    {/if}
{/if}

<style lang="scss">
    .web-button {
        padding: 0.6rem !important;
        [class*='icon'] {
            color: hsl(var(--web-color-primary)) !important;
        }
    }

    .main {
        position: relative;

        .abs {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            opacity: 0.25;
            transition: var(--transition);
        }

        &:hover {
            .abs {
                opacity: 1;
            }
        }
    }

    .overlay {
        inset: 0;
        /* docs side nav have a z-index of 35 */
        z-index: 36;
        position: fixed;
        background-color: rgba(228, 228, 228, 0.98);
    }

    :global(.dark) .overlay {
        background-color: rgba(27, 27, 27, 0.98);
    }

    .content {
        inset: 0;
        margin: auto;
        position: fixed;
        transform-origin: center;

        display: block;
        object-fit: contain;

        max-height: 75vh;
        max-width: calc(100% - 2.5rem);

        z-index: 1000;
    }
</style>
