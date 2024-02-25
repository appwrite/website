<!-- AccordionRoot.svelte -->
<script>
    import { getContext, setContext } from 'svelte';
    import { writable } from 'svelte/store';
</script>

<ul class="collapsible u-width-full-line" style="--p-toggle-border-color: var(--aw-color-border);">
    <slot />
</ul>
