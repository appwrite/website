<script lang="ts">
    import type { Snippet } from 'svelte';

    interface ParagraphProps {
        children: Snippet;
    }

    const { children }: ParagraphProps = $props();
</script>

<p>{@render children()}</p>
