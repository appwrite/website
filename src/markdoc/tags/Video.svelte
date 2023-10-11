<script lang="ts">
    export let src: string;
    export let type = 'video/mp4';
    export let autoplay = false;
</script>

<div class="aw-media">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video {src} class="aw-u-media-ratio-16-9 u-width-full-line" controls {autoplay}>
        <source {src} {type} />
    </video>
</div>
