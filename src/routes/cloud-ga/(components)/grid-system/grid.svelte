<script lang="ts">
    import { cn } from '$lib/utils/classnames';

    export let columns: number = 4;
    export let rows: number = 4;
</script>

<div
    class={cn(
        'grid h-full w-full grid-cols-[repeat(var(--columns),_1fr)] grid-rows-[repeat(var(--rows),_1fr)]',
        'border-smooth border-l border-dashed',
        'relative'
    )}
    style:--columns={columns}
    style:--rows={rows}
>
    <div class="contents">
        {#each Array.from({ length: rows * columns }) as _, index}
            {@const x = (index % columns) + 1}
            {@const y = Math.floor(index / columns) + 1}
            <div
                class={cn(
                    'absolute inset-0',
                    '[grid-column-start:var(--x)] [grid-column-end:span_1]',
                    '[grid-row-start:var(--y)] [grid-row-end:span_1]',
                    'border-smooth border-r border-dashed'
                )}
                style:--x={x}
                style:--y={y}
            />
        {/each}
    </div>
    <slot />
</div>
