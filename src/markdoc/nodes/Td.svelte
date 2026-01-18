<script lang="ts">
    import { writable } from 'svelte/store';
    import type { HTMLTdAttributes } from 'svelte/elements';
    import { setContext } from 'svelte';

    export let align: HTMLTdAttributes['align'] = undefined;
    export let colspan: HTMLTdAttributes['colspan'] = undefined;
    export let rowspan: HTMLTdAttributes['rowspan'] = undefined;

    const isCodeInsideTd = writable(false);
    setContext('isCodeInsideTd', isCodeInsideTd);
</script>

<td class="px-3 py-[0.5625rem] text-sm leading-[1.375rem]" {align} {colspan} {rowspan}>
    <div class:center-align={isCodeInsideTd} class="td-wrapper">
        <slot />
    </div>
</td>

<style lang="scss">
    .center-align {
        display: inline;

        & :global(.web-inline-code) {
            display: unset;
            vertical-align: top;
            line-height: inherit;
        }
    }
</style>
