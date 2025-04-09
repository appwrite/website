<script lang="ts">
    import type { HTMLTdAttributes } from 'svelte/elements';

    export let align: HTMLTdAttributes['align'] = undefined;
    export let width: HTMLTdAttributes['width'] = undefined;
</script>

<td
    style:width={width ? `${width}px` : undefined}
    style:min-inline-size={width ? 'unset' : undefined}
    role="columnheader"
    class="min-w-44 px-3 py-[0.5625rem]"
    {align}
>
    <span class="text-sm leading-[1.375rem] text-[hsl(var(--web-color-primary))]">
        <slot />
    </span>
</td>
