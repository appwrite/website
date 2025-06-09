<script lang="ts">
    import { Accordion } from '$lib/components/Accordion';
    import type { Snippet } from 'svelte';
    interface Props {
        children: Snippet;
    }

    const { children }: Props = $props();
</script>

<span class="web-u-only-dark">{@render children()}</span>
