<script lang="ts">
    import { AccordionItem } from '$lib/components/Accordion';

    export let title: string;
</script>

<AccordionItem {title}>
    <slot />
</AccordionItem>
