<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet;
        class?: string;
    };

    const { children, class: className = '' }: Props = $props();
</script>

<div class={`split-button inline-flex ${className}`}>
    {@render children()}
</div>

<style>
    .split-button :global(.web-button),
    .split-button :global(.web-button)::before,
    .split-button :global(.web-button)::after {
        min-block-size: 2rem; /* 32px; scales with root font-size */
        height: 2rem;
    }

    .split-button :global(.web-button.no-right-radius),
    .split-button :global(.web-button.no-right-radius)::before,
    .split-button :global(.web-button.no-right-radius)::after {
        padding-top: 0.3125rem; /* 5px */
        padding-bottom: 0.3125rem;
        padding-right: 0.625rem; /* 10px */
        padding-left: 0.5rem; /* 8px */
    }
    .split-button :global(.web-button.no-right-radius) {
        flex-shrink: 0;
    }
    .split-button :global(.web-button.no-left-radius),
    .split-button :global(.web-button.no-left-radius)::before,
    .split-button :global(.web-button.no-left-radius)::after {
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        width: 2rem;
    }
    .split-button :global(.web-button .text) {
        font-size: 0.875rem; /* 14px */
    }
    .split-button :global([class*='icon']) {
        font-size: 0.875rem;
    }
    .split-button :global(.web-button.no-left-radius .web-icon-chevron-down),
    .split-button :global(.web-button.no-left-radius .web-icon-chevron-up) {
        font-size: 1.25rem; /* 20px */
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        color: var(--fgcolor-neutral-invert-primary);
    }
    .split-button :global(.web-button.no-left-radius),
    .split-button :global(.web-button.no-left-radius)::before,
    .split-button :global(.web-button.no-left-radius)::after {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
    }
    .split-button :global(.web-button.no-right-radius),
    .split-button :global(.web-button.no-right-radius)::before,
    .split-button :global(.web-button.no-right-radius)::after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
</style>
