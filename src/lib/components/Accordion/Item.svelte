<!-- AccordionItem.svelte -->
<script>
</script>

<li class="collapsible-item">
    <details class="collapsible-wrapper" open>
        <slot name="trigger"/>
        <slot name="content"/>
    </details>
</li>

<style>
    .collapsible-item {
        border-block-end: 0.0625rem solid hsl(var(--aw-color-offset));
    }
</style>
