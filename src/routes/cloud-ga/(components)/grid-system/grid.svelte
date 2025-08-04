<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { Snippet } from 'svelte';
    type Props = {
        columns?: number;
        rows?: number;
        bottomBorder?: boolean;
        solidBorder?: boolean;
        class?: string;
        children: Snippet;
    };

    const {
        children,
        columns = 4,
        rows = 4,
        bottomBorder = false,
        solidBorder = false,
        class: className = ''
    }: Props = $props();
</script>

<div
    class={classNames(
        'grid h-full w-full auto-rows-min grid-cols-1  grid-rows-[1fr] md:grid-cols-[repeat(var(--columns),_1fr)]',
        'border-smooth border-dashed md:border-l',
        'relative',
        className,
        {
            'after:border-smooth after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-[calc(50%+1px)] after:border-b':
                bottomBorder
        },
        { 'after:border-dashed': !solidBorder }
    )}
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
    {@render children()}
</div>
