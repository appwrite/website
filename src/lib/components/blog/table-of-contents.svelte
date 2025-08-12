<script lang="ts" module>
    export interface TocItem {
        title: string;
        href: string;
        step?: number;
        selected?: boolean;
        level?: number;
        children?: Array<TocItem>;
    }
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    interface TableOfContentProps {
        toc?: Array<TocItem>;
        heading?: string;
    }

    let { toc = [], heading = 'Table of Contents' }: TableOfContentProps = $props();

    let height = $state<number>(0);
    let position = $state<number>(0);

    const onScroll = () => {
        const selectedIndex = toc.findIndex(
            (item) => item.selected || item.children?.some((child) => child.selected)
        );
        if (selectedIndex >= 0) {
            position = Math.min(selectedIndex * 40, height - 24);
        }
    };
</script>

<svelte:window onscroll={onScroll} />

<nav class="sticky top-32 col-span-3 mt-2 -ml-4 hidden h-[800px] flex-col gap-6 lg:flex">
    <span class="text-eyebrow text-primary font-aeonik-fono ps-6 uppercase">{heading}</span>
    <div class="relative">
        <div
            class="bg-greyscale-300 absolute top-0 -left-px h-6 w-px rounded-full transition-transform ease-linear"
            style:transform={`translateY(${position}px)`}
        ></div>
        <ul
            class="text-caption /pb-11 flex max-h-[600px] flex-col gap-4 overflow-scroll [scrollbar-width:none]"
            bind:clientHeight={height}
        >
            {#each toc as parent (parent.href)}
                <li
                    class={classNames('text-secondary relative ps-6 transition-colors', {
                        'font-medium': parent.level && parent.level === 1,
                        'pl-12': parent.level && parent.level === 2,
                        'ps-16': parent.level && parent.level >= 3,
                        'text-primary': parent.selected
                    })}
                >
                    <a href={parent.href} class="line-clamp-1">{parent.title}</a>

                    {#if parent.children}
                        <ul
                            class="border-smooth text-caption mt-11 ml-9 flex flex-col gap-7 border-b pb-10"
                        >
                            {#each parent.children as child}
                                <li
                                    class={classNames(
                                        parent.selected ? 'text-primary' : 'text-secondary',
                                        'relative transition-colors',
                                        'before:bg-primary before:absolute before:top-0 before:left-0 before:h-6 before:w-px before:rounded-full before:opacity-0 before:transition-opacity',
                                        {
                                            'before:opacity-100': parent.selected
                                        }
                                    )}
                                >
                                    <a href={child.href} class="line-clamp-1">
                                        {child.title}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
</nav>
