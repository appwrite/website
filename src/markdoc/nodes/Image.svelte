<script lang="ts">
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { createDialog, melt } from '@melt-ui/svelte';
    import { getContext, hasContext, onDestroy, onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

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

    onMount(() => window.addEventListener('scroll', handleScroll));

    onDestroy(() => window.removeEventListener('scroll', handleScroll));
</script>

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
                <button class="web-button is-secondary" use:melt={$trigger}>
                    <span class="icon-arrow-expand" aria-hidden="true" />
                </button>
                <svelte:fragment slot="tooltip">Expand</svelte:fragment>
            </Tooltip>
        </div>
    </div>

    {#if $open}
        <div use:melt={$portalled}>
            <div use:melt={$overlay} class="overlay" transition:fade={{ duration: 250 }} />

            <img
                class="web-media content"
                use:melt={$content}
                {src}
                {alt}
                {title}
                loading="lazy"
                transition:scale={{ duration: 750, start: 0.95 }} />
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
        position: fixed;
        inset: 0;
        background-color: rgba(27, 27, 27, 0.98);
        z-index: 1000;
    }

    .content {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transform-origin: center;

        display: block;
        object-fit: contain;

        max-height: 75vh;
        max-width: calc(100% - 2.5rem);

        z-index: 1000;
    }
</style>
