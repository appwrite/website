<script lang="ts">
    export let title: string;
</script>

<div class="step">
    <div class="aw-dot" />
    <h2 class="aw-eyebrow aw-u-color-text-primary">{title}</h2>
    <div class="u-margin-block-start-32">
        <slot />
    </div>
</div>

<style lang="scss">
    .step {
        border-inline-start: 1px solid hsl(var(--aw-color-offset));
        padding-inline-start: 2rem;
        padding-block-end: var(--padding-block-end);
        position: relative;

        .aw-dot {
            position: absolute;
            inset-inline-start: calc(calc(var(--p-dot-size) / 2) * -1);
        }
    }
</style>
