<script lang="ts">
    import type { Snippet } from 'svelte';

    interface ListItemProps {
        children: Snippet;
    }

    const { children }: ListItemProps = $props();
</script>

<li><p>{@render children()}</p></li>
