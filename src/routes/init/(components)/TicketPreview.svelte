<script>
    import { browser } from '$app/environment';
</script>

<div class="ticket-preview" style:opacity={browser ? '1' : '0.5'}>
    <slot />
    <div class="shine" />
</div>

<style lang="scss">
    .ticket-preview {
        position: relative;
        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: -10;
            width: 500px;
            height: 500px;
            opacity: 0.5;
            background-image: url('/images/tickets/shine.svg');
            background-size: cover;
            mix-blend-mode: hard-light;
            filter: blur(10px);
        }
    }
</style>
