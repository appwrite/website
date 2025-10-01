<script lang="ts">
    import { type Snippet } from 'svelte';

    interface CardsProps {
        children: Snippet;
    }

    const { children }: CardsProps = $props();
</script>

<div class="not-prose my-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
    {@render children()}
</div>
