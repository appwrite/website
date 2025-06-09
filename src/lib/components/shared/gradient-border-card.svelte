<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    let className: string = '';

    export { className as class };
</script>

<div class={classNames('gradient-card', className)}>
    <slot />
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .gradient-card {
        @include gradients.border-gradient;
        --p-radius: 16px;

        background-color: hsl(var(--web-color-card));
        border-radius: var(--p-radius, 16px);
        --m-border-radius: var(--p-radius, 16px);
        --m-border-gradient-before: var(
            --gradient,
            linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 125.11%)
        );
    }
</style>
