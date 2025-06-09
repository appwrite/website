<script lang="ts">
    interface Props {
        src: string;
        type?: string;
        autoplay?: boolean;
        loop?: boolean;
    }

    const { src, type = 'video/mp4', autoplay = false, loop = false }: Props = $props();
</script>

<div class="web-media">
    <!-- svelte-ignore a11y_media_has_caption -->
    <video {src} class="web-u-media-ratio-16-9 w-full" controls {autoplay} {loop}>
        <source {src} {type} />
    </video>
</div>
