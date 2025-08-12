<script lang="ts">
    import { type Snippet } from 'svelte';
    interface BlockquoteProps {
        children: Snippet;
    }

    const { children }: BlockquoteProps = $props();
</script>

<blockquote>
    <p class="leading-sm text-primary text-lg font-medium tracking-tight">
        {@render children()}
    </p>
</blockquote>
