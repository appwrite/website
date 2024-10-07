<script lang="ts" context="module">
    export type AccordionCtx = Accordion;
    const CTX_KEY = Symbol('accordion');

    export const accordionCtx = {
        get() {
            return getContext<AccordionCtx>(CTX_KEY);
        },
        set(ctx: AccordionCtx) {
            setContext(CTX_KEY, ctx);
        }
    };
</script>

<script lang="ts">
    import { createAccordion, melt, type Accordion } from '@melt-ui/svelte';
    import { getContext, setContext } from 'svelte';

    const accordion = createAccordion({
        defaultValue: '0',
        forceVisible: true
    });

    accordionCtx.set(accordion);

    const {
        elements: { root }
    } = accordion;
</script>

<div use:melt={$root}>
    <slot />
</div>
