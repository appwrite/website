<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let src: string;
    export let alt = '';
    export let controls = true;
    export let autoplay = false;
    let className = '';
    export { className as class };

    const videoExtensions = ['mp4', 'webm', 'ogg'] as const;
    $: isVideo = videoExtensions.some((ext) => src.endsWith(ext));
</script>

<div class="web-media">
    {#if isVideo}
        <!-- svelte-ignore a11y-media-has-caption-->
        <video {src} class={className} {controls} {autoplay}>
            <slot />
        </video>
    {:else}
        <img loading="lazy" {src} {alt} class={className} data-active="" />
    {/if}
</div>
