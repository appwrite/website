<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { trackEvent } from '$lib/actions/analytics';

    let show = false;

    function handleKeypress(event: KeyboardEvent) {
        if (event.key.toLowerCase() === 'escape' || event.key.toLowerCase() === 'esc') {
            event.preventDefault();
            show = false;
        }
    }
</script>

<svelte:window on:keydown={handleKeypress} />

<button
    on:click={() => {
        show = true;
        trackEvent('Appwrite in 100 seconds');
    }}
    class="web-button is-secondary cursor-pointer"
>
    <span class="web-icon-play" style:color="unset" />
    <span>Appwrite in 100 seconds</span>
</button>

{#if show}
    <!-- `on:keypress={null}` silences the a11y warnings -->
    <div
        tabindex="0"
        role="button"
        class="overlay"
        on:keypress={null}
        on:click={() => (show = false)}
        transition:fade={{ duration: 150 }}
    />

    <div class="web-media content" transition:scale={{ duration: 250, start: 0.95 }}>
        <iframe
            src="https://www.youtube-nocookie.com/embed/L07xPMyL8sY?si=Odrwj1tHzlm12Fi2&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        />
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
