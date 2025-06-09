<script lang="ts">
    export let metric: string;
    export let description: string;
</script>

<div class="web-card is-normal has-border-gradient">
    <div class="text-title font-aeonik-pro text-primary">{metric}</div>
    <div class="text-description">{description}</div>
</div>

<style lang="scss">
    .web-card {
        padding: 1.25rem;
    }
</style>
