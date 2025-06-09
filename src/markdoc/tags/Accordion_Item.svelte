<script lang="ts">
    import { AccordionItem } from '$lib/components/Accordion';
    import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        children: Snippet;
    }

    const { title, children }: Props = $props();
</script>

<AccordionItem {title}>
    {@render children()}
</AccordionItem>
