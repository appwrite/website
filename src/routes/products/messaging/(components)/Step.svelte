<script lang="ts">
    import Eyebrow from '$lib/components/ui/eyebrow.svelte';

    export let title: string;
    export let hideLine = false;
</script>

<div class="step" data-hideline={hideLine}>
    <div class="web-dot" />
    <Eyebrow as="h2" class="text-primary">{title}</Eyebrow>
    <div class="step-content mt-8">
        <slot />
    </div>
</div>

<style lang="scss">
    .step {
        border-inline-start: 1px solid hsl(var(--web-color-offset));
        padding-inline-start: 2rem;
        padding-block-end: var(--padding-block-end);
        position: relative;
        @media screen and (max-width: 1024px) {
            padding: unset;
            border: none;
        }

        .web-dot {
            position: absolute;
            inset-inline-start: calc(calc(var(--p-dot-size) / 2) * -1);
            @media screen and (max-width: 1024px) {
                display: none;
            }
        }

        &-content {
            @media screen and (max-width: 1024px) {
                width: calc(100vw - 40px);
            }
        }
    }
    .step[data-hideline='true'] {
        border-inline-start: 1px solid transparent;
    }
</style>
