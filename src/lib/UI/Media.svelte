<script lang="ts">
    export let src: string;
    export let alt = '';
    export let controls = true;
    export let autoplay = false;
    /** When true (e.g. blog post hero), use eager load + `fetchpriority="high"` for LCP. */
    export let priority = false;
    let className = '';
    export { className as class };

    const videoExtensions = ['mp4', 'webm', 'ogg'] as const;
    $: isVideo = videoExtensions.some((ext) => src.endsWith(ext));
</script>

{#if isVideo}
    <!-- svelte-ignore a11y-media-has-caption-->
    <video {src} class={className} {controls} {autoplay}>
        <slot />
    </video>
{:else}
    <img
        {src}
        {alt}
        class={className}
        data-active=""
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
    />
{/if}
