<script lang="ts">
    import Lines from './Lines.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="hero">
    <Lockup fillColor="#171719" />
    <Lines />
</div>

<style lang="scss">
    .hero {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 24px;
        position: relative;
        background: linear-gradient(
            -45deg,
            hsl(var(--web-color-background) 20%) 0%,
            hsl(var(--web-color-background) / 0) 100%
        );
    }
</style>
