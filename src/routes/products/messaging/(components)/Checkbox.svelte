<script lang="ts">
    import { createCheckbox, melt, type CreateCheckboxProps, createSync } from '@melt-ui/svelte';

    export let checked: NonNullable<CreateCheckboxProps['defaultChecked']> = false;
    export let onCheckedChange: CreateCheckboxProps['onCheckedChange'] = undefined;

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

<button use:melt={$root} on:click|stopPropagation>
    {#if $isIndeterminate}
        <div class="aw-icon-minus" />
    {:else if $isChecked}
        <div class="aw-icon-check" />
    {/if}
</button>

<style lang="scss">
    button {
        @include border-gradient;
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
            background-color: hsl(var(--aw-color-accent));
        }

        > [class^='aw-icon-'] {
            color: hsl(var(--aw-color-primary));
            position: absolute;
            inset-block-start: 50%;
            inset-inline-start: 50%;
            transform: translate(-50%, -50%);
            font-size: calc(var(--p-size) * 0.875);
        }
    }
</style>
