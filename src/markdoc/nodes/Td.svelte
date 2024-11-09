<script lang="ts">
    import type { HTMLTdAttributes } from 'svelte/elements';

    export let align: HTMLTdAttributes['align'] = undefined;
    export let colspan: HTMLTdAttributes['colspan'] = undefined;
    export let rowspan: HTMLTdAttributes['rowspan'] = undefined;
</script>

<td class="py-[0.5625rem] px-3 text-sm leading-[1.375rem]" {align} {colspan} {rowspan}>
    <slot />
</td>
