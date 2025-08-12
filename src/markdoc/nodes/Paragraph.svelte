<script lang="ts">
    import { getContext, hasContext, type Snippet } from 'svelte';

    interface ParagraphProps {
        children: Snippet;
    }

    const { children }: ParagraphProps = $props();

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;
</script>

{#if noParagraph}
    {@render children()}
{:else}
    <p>{@render children()}</p>
{/if}
