<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let columns: number = 4;
    export let rows: number = 4;
    export let bottomBorder: boolean = false;

    let className: string = '';

    export { className as class };
</script>

<div
    class={classNames(
        'grid h-full w-full auto-rows-min grid-cols-1 grid-rows-[1fr] md:grid-cols-[repeat(var(--columns),_1fr)]',
        'border-smooth border-dashed md:border-l',
        'relative',
        className
    )}
    class:border-b={bottomBorder}
    style:--columns={columns}
    style:--rows={rows}
>
    <div class="contents">
        {#each Array.from({ length: rows * columns }) as _, index}
            {@const x = (index % columns) + 1}
            {@const y = Math.floor(index / columns) + 1}
            <div
                class={classNames(
                    'animate-fade-in absolute inset-0',
                    '[grid-column-start:var(--x)] [grid-column-end:span_1]',
                    '[grid-row-start:var(--y)] [grid-row-end:span_1]',
                    'border-smooth border-dashed md:border-r'
                )}
                style:--x={x}
                style:--y={y}
            ></div>
        {/each}
    </div>
    <slot />
</div>
