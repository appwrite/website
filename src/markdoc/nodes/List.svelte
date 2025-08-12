<script lang="ts">
    import type { Snippet } from 'svelte';

    interface ListProps {
        ordered: boolean;
        children: Snippet;
    }

    const { children, ordered = false }: ListProps = $props();
</script>

<svelte:element this={ordered ? 'ol' : 'ul'}>{@render children()}</svelte:element>
