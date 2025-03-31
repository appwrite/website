<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { trackEvent } from '$lib/actions/analytics';
    import { createDialog, melt } from '@melt-ui/svelte';

    const {
        elements: { portalled, trigger, content, overlay },
        states: { open }
    } = createDialog({
        forceVisible: true
    });
</script>

<button
    use:melt={$trigger}
    on:click={() => {
        trackEvent({
            plausible: { name: 'Appwrite in 100 seconds' },
            posthog: { name: 'intro-video-btn_hero_click' }
        });
    }}
    class="web-button cursor-pointer transition-opacity hover:opacity-90 active:scale-95"
    style:box-shadow="0 2px 40px rgba(0, 0, 0, 0.5)"
>
    <span class="web-icon-play"></span>
    <span>Appwrite in 100 seconds</span>
</button>

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
