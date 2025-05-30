<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { tick, type Snippet } from 'svelte';

    interface MasonryProps {
        colWidth?: string;
        children: Snippet;
    }

    interface GridItem {
        el: HTMLElement;
        gap: number;
        items: HTMLElement[];
        ncol: number;
        mod: number;
    }

    const { children }: MasonryProps = $props();

    let grids: GridItem[] = [];
    let masonryElement: HTMLElement;

    const refreshLayout = async (): Promise<void> => {
        grids.forEach(async (grid) => {
            const ncol = getComputedStyle(grid.el).gridTemplateColumns.split(' ').length;

            grid.items.forEach((c) => {
                const newHeight = c.getBoundingClientRect().height;
                const currentHeight = parseFloat(c.dataset.h || '0');

                if (newHeight !== currentHeight) {
                    c.dataset.h = newHeight.toString();
                    grid.mod++;
                }
            });

            if (grid.ncol !== ncol || grid.mod) {
                grid.ncol = ncol;
                grid.items.forEach((c) => c.style.removeProperty('margin-top'));

                if (grid.ncol > 1) {
                    grid.items.slice(ncol).forEach((c, i) => {
                        const prevBottom = grid.items[i].getBoundingClientRect().bottom;
                        const currTop = c.getBoundingClientRect().top;
                        c.style.marginTop = `${prevBottom + grid.gap - currTop}px`;
                    });
                }

                grid.mod = 0;
            }
        });
    };

    const calcGrid = async (masonryArr: HTMLElement[]): Promise<void> => {
        await tick();

        if (masonryArr.length && getComputedStyle(masonryArr[0]).gridTemplateRows !== 'masonry') {
            grids = masonryArr.map((grid) => ({
                el: grid,
                gap: parseFloat(getComputedStyle(grid).gridRowGap),
                items: Array.from(grid.childNodes).filter(
                    (c): c is HTMLElement =>
                        c instanceof HTMLElement && +getComputedStyle(c).gridColumnEnd !== -1
                ),
                ncol: 0,
                mod: 0
            }));

            refreshLayout();
        }
    };

    $effect(() => {
        if (masonryElement) {
            calcGrid([masonryElement]);
        }
    });
</script>

<svelte:window onresize={refreshLayout} />

<div
    bind:this={masonryElement}
    class={classNames(
        'grid grid-cols-[repeat(auto-fit,_minmax(min(20em,_100%),_1fr))] [grid-template-rows:masonry] justify-center [grid-gap:20px] *:self-start'
    )}
>
    {@render children()}
</div>
