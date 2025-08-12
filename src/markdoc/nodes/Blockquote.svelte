<script lang="ts">
    import { setContext, type Snippet } from 'svelte';
    interface BlockquoteProps {
        children: Snippet;
    }

    const { children }: BlockquoteProps = $props();

    setContext('no-paragraph', true);
</script>

<blockquote>
    <p>
        {@render children()}
    </p>
</blockquote>
