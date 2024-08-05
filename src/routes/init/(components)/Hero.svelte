<script lang="ts">
    import Lines from './Lines.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="hero">
    <Lockup />
    <Lines />
</div>

<style lang="scss">
    .hero {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: linear-gradient(
            -45deg,
            hsl(var(--web-color-background) 20%) 0%,
            hsl(var(--web-color-background) / 0) 100%
        );
    }
</style>
