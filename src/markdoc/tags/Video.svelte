<script lang="ts">
    export let src: string;
    export let type = 'video/mp4';
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    export let autoplay: boolean = false;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    export let loop: boolean = false;
</script>

<div class="aw-media">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video {src} class="aw-u-media-ratio-16-9 u-width-full-line" controls {autoplay} {loop}>
        <source {src} {type} />
    </video>
</div>
