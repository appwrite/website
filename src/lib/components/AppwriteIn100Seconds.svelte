<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { Button, Icon } from '$lib/components/ui';
    import { createDialog, melt } from '@melt-ui/svelte';

    const {
        elements: { portalled, trigger, content, overlay },
        states: { open }
    } = createDialog({
        forceVisible: true
    });
</script>

<Button
    action={trigger}
    event="intro-video-btn_hero-click"
    class="cursor-pointer shadow-[0_2px_40px_rgba(0,0,0,0.5)] transition-opacity hover:opacity-90 active:scale-95"
>
    Appwrite in 100 seconds

    <Icon name="play" />
</Button>
{#if $open}
    <div use:melt={$portalled}>
        <div use:melt={$overlay} class="overlay" transition:fade={{ duration: 150 }}></div>

        <div
            class="web-media content"
            use:melt={$content}
            transition:scale={{ duration: 250, start: 0.95 }}
        >
            <iframe
                src="https://www.youtube-nocookie.com/embed/L07xPMyL8sY?si=Odrwj1tHzlm12Fi2&controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
{/if}

<style lang="scss">
    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);

        transition: 200ms ease;
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

        transform: scale(0.975);
        transition: 200ms ease;

        iframe {
            display: block;
            inline-size: 100%;
            block-size: 100%;
        }
    }
</style>
