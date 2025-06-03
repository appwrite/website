<script lang="ts">
    import { browser } from '$app/environment';
    import { melt, type Dialog } from '@melt-ui/svelte';
    import { fade, scale } from 'svelte/transition';

    export let src: string;

    export let dialog: Dialog;

    const {
        elements: { portalled, content, overlay },
        states: { open }
    } = dialog;

    let key = 0;

    function increment() {
        key++;
    }

    let timeout: number;
    $: if (!$open && browser) {
        clearTimeout(timeout);
        timeout = window.setTimeout(increment, 200);
    }
</script>

<div use:melt={$portalled}>
    <div use:melt={$overlay} class="overlay" transition:fade={{ duration: 150 }}></div>
    <div
        class="web-media content"
        use:melt={$content}
        transition:scale={{ duration: 250, start: 0.95 }}
    >
        {#key key}
            <iframe
                {src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        {/key}
    </div>
</div>

<style lang="scss">
    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;

        opacity: 0;
        pointer-events: none;
        transition: 200ms ease;

        &[data-state='open'] {
            opacity: 1;
            pointer-events: all;
        }
    }

    .content {
        position: fixed;
        left: 50%;
        top: 50%;
        translate: -50% -50%;

        display: block;
        object-fit: contain;

        max-height: 75vh;
        width: calc(80%);
        aspect-ratio: 16 / 9;

        z-index: 1000;

        opacity: 0;
        transform: scale(0.975);
        pointer-events: none;
        transition: 200ms ease;

        &[data-state='open'] {
            opacity: 1;
            transform: scale(1);
            pointer-events: all;
        }

        iframe {
            display: block;
            inline-size: 100%;
            block-size: 100%;
        }
    }
</style>
