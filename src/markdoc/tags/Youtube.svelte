<script lang="ts">
    import Video from '$routes/init/(components)/Video.svelte';

    export let src: string;
    export let thumbnail: string;
</script>

<div class="web-media">
    <Video {thumbnail} {src} --p-aspect-ratio="16/9" />
</div>
