<script lang="ts">
    import type { HTMLTdAttributes } from 'svelte/elements';

    export let align: HTMLTdAttributes['align'] = undefined;
    export let colspan: HTMLTdAttributes['colspan'] = undefined;
    export let rowspan: HTMLTdAttributes['rowspan'] = undefined;
</script>

<td class="aw-table-col" {align} {colspan} {rowspan}>
    <slot />
</td>
