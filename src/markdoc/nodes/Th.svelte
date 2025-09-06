<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { HTMLTdAttributes } from 'svelte/elements';

    interface ThProps {
        align?: HTMLTdAttributes['align'];
        width?: HTMLTdAttributes['width'];
        children: Snippet;
    }

    const { align = 'left', width, children }: ThProps = $props();
</script>

<td
    style:width={width ? `${width}px` : undefined}
    style:min-inline-size={width ? 'unset' : undefined}
    role="columnheader"
    class="min-w-44 px-3 py-[0.5625rem]"
    {align}
>
    <span class="text-primary font-aeonik-fono text-eyebrow uppercase">
        {@render children()}
    </span>
</td>
