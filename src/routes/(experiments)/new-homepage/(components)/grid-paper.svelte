<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { Snippet } from 'svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        children: Snippet;
    } & SvelteHTMLElements['div'];

    const { children, class: className, ...rest }: Props = $props();
</script>

<div class={classNames('grid-paper', 'bg-size-(--grid-size)', className)} {...rest}>
    {@render children?.()}
</div>

<style>
    .grid-paper {
        --grid-size: 42px;
        --grid-strength: 1px;
        --grid-dash: 4px;
        --grid-gap: 8px;
        --grid-color: var(--color-smooth);
        --paper-color: hsl(240, 9%, 94%);

        background-color: var(--paper-color);
        background-position: center center;
        background-size:
            var(--grid-gap) var(--grid-gap),
            var(--grid-size) var(--grid-size);
        background-image:
            linear-gradient(
                to bottom,
                transparent var(--grid-dash),
                var(--paper-color) var(--grid-dash)
            ),
            linear-gradient(
                to right,
                var(--grid-color) var(--grid-strength),
                transparent var(--grid-strength)
            ),
            linear-gradient(
                to right,
                transparent var(--grid-dash),
                var(--paper-color) var(--grid-dash)
            ),
            linear-gradient(
                to bottom,
                var(--grid-color) var(--grid-strength),
                transparent var(--grid-strength)
            );
    }
</style>
