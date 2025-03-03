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

<td class="py-[0.5625rem] px-3 text-sm leading-[1.375rem]" {align} {colspan} {rowspan}>
    {#if $isCodeInsideTd}
        <div
            class:flex={$isCodeInsideTd}
            class:gap-1={$isCodeInsideTd}
            class:items-center={$isCodeInsideTd}
        >
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</td>
