<script lang="ts">
    export let src: string;
    export let alt = '';
    export let controls = true;
    export let autoplay = false;
    let className = '';
    export { className as class };

    export let height: number | undefined = undefined;
    export let width: number | undefined = undefined;

    const videoExtensions = ['mp4', 'webm', 'ogg'] as const;
    $: isVideo = videoExtensions.some((ext) => src.endsWith(ext));
</script>

{#if isVideo}
    <!-- svelte-ignore a11y-media-has-caption-->
    <video {src} class={className} {controls} {autoplay} {height} {width}>
        <slot />
    </video>
{:else}
    <img loading="lazy" {src} {alt} class={className} {height} {width} data-active="" />
{/if}
