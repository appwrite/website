<script lang="ts">
    import Video from '$routes/init/(components)/Video.svelte';

    export let src: string;
    export let thumbnail: string;    
</script>

<div class="aw-media">
    <!-- svelte-ignore a11y-media-has-caption -->
    <Video
        {thumbnail}
        src={src}
    />
</div>
