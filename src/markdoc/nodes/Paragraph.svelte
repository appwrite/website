<script lang="ts">
    import { getContext, hasContext, type Snippet } from 'svelte';

    interface ParagraphProps {
        children: Snippet;
    }

    const noParagraph = hasContext('no-paragraph') ? getContext('no-paragraph') : false;

    const { children }: ParagraphProps = $props();
</script>

{#if noParagraph}
    {@render children()}
{:else}
    <p>{@render children()}</p>
{/if}
