<script lang="ts" context="module">
    export const ACCORDION_CTX_KEY = Symbol('accordion');
    export const isInAccordion = () => getContext<boolean>(ACCORDION_CTX_KEY) ?? false;
</script>

<script lang="ts">
    import { AccordionItem } from '$lib/components/Accordion';
    import { getContext, setContext } from 'svelte';

    setContext(ACCORDION_CTX_KEY, true);
    export let title: string;
</script>

<AccordionItem {title}>
    <slot />
</AccordionItem>
