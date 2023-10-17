<script lang="ts">
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { createDialog, createTooltip, melt } from '@melt-ui/svelte';
    import { getContext, hasContext } from 'svelte';
    import { fade, scale } from 'svelte/transition';

    export let src: string;
    export let alt: string;
    export let title: string;

    const inTable = hasContext('in-table') ? getContext('in-table') : false;

    const {
        elements: { portalled, trigger, content, overlay },
        states: { open }
    } = createDialog({
        preventScroll: false,
        forceVisible: true
    });
</script>

{#if inTable}
    <img {src} {alt} {title} loading="lazy" style:vertical-align="middle" />
{:else}
    <div class="aw-media">
        <img {src} {alt} {title} loading="lazy" class="aw-u-media-ratio-16-9 u-width-full-line" />

        <div class="abs">
            <Tooltip closeOnPointerDown>
                <button class="aw-button is-secondary" use:melt={$trigger}>
                    <span class="icon-arrow-expand" aria-hidden="true" />
                </button>
                <svelte:fragment slot="tooltip">Expand</svelte:fragment>
            </Tooltip>
        </div>
    </div>

    {#if $open}
        <div use:melt={$portalled}>
            <div use:melt={$overlay} class="overlay" transition:fade={{ duration: 150 }} />
            <div
                use:melt={$content}
                class="content"
                transition:scale={{ duration: 250, start: 0.95 }}
            >
                <div class="aw-media">
                    <img {src} {alt} {title} loading="lazy" />
                </div>
            </div>
        </div>
    {/if}
{/if}

<style lang="scss">
    .aw-button {
        padding: 0.6rem !important;
    }

    .aw-media {
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
        background-color: rgba(0, 0, 0, 0.25);
    }

    .content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 90vw;
        max-width: 800px;
        max-height: 90vh;
    }
</style>
