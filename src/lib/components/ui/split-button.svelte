<script lang="ts">
    import type { Snippet } from 'svelte';
    import { setContext } from 'svelte';
    import { BUTTON_SPLIT_CONTEXT } from './button.svelte';

    type Props = {
        children: Snippet;
        class?: string;
    };

    const { children, class: className = '' }: Props = $props();

    setContext(BUTTON_SPLIT_CONTEXT, true);
</script>

<div class={`split-button inline-flex ${className}`}>
    {@render children()}
</div>

<style>
    .split-button {
        flex-direction: row;
    }
</style>
