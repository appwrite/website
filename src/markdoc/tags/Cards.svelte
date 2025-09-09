<script lang="ts">
    import { type Snippet } from 'svelte';

    interface CardsProps {
        children: Snippet;
    }

    const { children }: CardsProps = $props();
</script>

<div class="not-prose my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
    {@render children()}
</div>
