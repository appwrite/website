<script lang="ts">
    import { type Snippet } from 'svelte';
    interface BlockquoteProps {
        children: Snippet;
    }

    const { children }: BlockquoteProps = $props();
</script>

<blockquote>
    <p>
        {@render children()}
    </p>
</blockquote>
