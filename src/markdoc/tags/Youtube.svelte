<script lang="ts">
    import Video from '$lib/components/shared/video/player.svelte';

    interface Props {
        src: string;
        thumbnail: string;
    }

    const { src, thumbnail }: Props = $props();
</script>

<div class="web-media">
    <Video {thumbnail} {src} --p-aspect-ratio="16/9" />
</div>
