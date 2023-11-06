<script lang="ts">
    export let metric: string;
    export let description: string;
</script>

<div class="aw-card is-normal has-border-gradient">
    <div class="aw-title aw-u-color-text-primary">{metric}</div>
    <div class="aw-description">{description}</div>
</div>

<style lang="scss">
    .aw-card {
        padding: 1.25rem;
    }
</style>
