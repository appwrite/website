<script lang="ts">
    import { createCheckbox, melt, type CreateCheckboxProps, createSync } from '@melt-ui/svelte';

    export let checked: NonNullable<CreateCheckboxProps['defaultChecked']> = false;
    export let onCheckedChange: CreateCheckboxProps['onCheckedChange'] = undefined;
    export let id: string;
    export let ariaLabel: string;

    const {
        elements: { root },
        helpers: { isChecked, isIndeterminate },
        states: { checked: innerChecked }
    } = createCheckbox({
        defaultChecked: checked,
        onCheckedChange: onCheckedChange ?? (({ next }) => next)
    });

    const sync = createSync({ checked: innerChecked });
    $: sync.checked(checked, (v) => (checked = v));
</script>

<button {id} use:melt={$root} aria-label={ariaLabel} on:click|stopPropagation>
    {#if $isIndeterminate}
        <div class="web-icon-minus"></div>
    {:else if $isChecked}
        <div class="web-icon-check"></div>
    {/if}
</button>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    button {
        @include gradients.border-gradient;
        --p-size: var(--size, 1.25rem);
        --m-border-radius: calc(var(--p-size) / 4);
        --m-border-gradient-before: linear-gradient(
            to bottom,
            hsl(0, 0%, 100%, 0.16),
            hsl(0, 0%, 100%, 0)
        );

        background-color: hsl(0, 0%, 100%, 0.12);
        block-size: var(--p-size);
        inline-size: var(--p-size);

        position: relative;

        transition: 150ms ease;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }

        &:not([data-state='unchecked']) {
            background-color: hsl(var(--web-color-accent));
        }

        > [class^='web-icon-'] {
            color: hsl(var(--web-color-primary));
            position: absolute;
            inset-block-start: 50%;
            inset-inline-start: 50%;
            transform: translate(-50%, -50%);
            font-size: calc(var(--p-size) * 0.875);
        }
    }
</style>
