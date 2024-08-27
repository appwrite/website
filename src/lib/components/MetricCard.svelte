<script lang="ts">
    export let metric: string;
    export let description: string;
</script>

<div class="web-card is-normal has-border-gradient">
    <div class="web-title web-u-color-text-primary">{metric}</div>
    <div class="web-description">{description}</div>
</div>

<style lang="scss">
    .web-card {
        padding: 1.25rem;
    }
</style>
