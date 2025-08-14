<script lang="ts">
    import type { Snippet } from 'svelte';

    interface StrongProps {
        children: Snippet;
    }

    const { children }: StrongProps = $props();
</script>

<strong>{@render children()}</strong>
