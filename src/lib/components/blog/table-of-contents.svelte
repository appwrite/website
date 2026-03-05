<script lang="ts" module>
    export interface TocItem {
        title: string;
        href: string;
        selected?: boolean;
        level: number;
        children?: Array<Omit<TocItem, 'children' | 'level'>>;
    }
</script>

<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import CopyAsMarkdown from './copy-as-markdown.svelte';
    interface TableOfContentProps {
        toc?: Array<TocItem>;
        heading?: string;
    }

    let { toc = [], heading = 'Table of Contents' }: TableOfContentProps = $props();

    let height = $state<number>(0);
    let position = $state<number>(0);
    let listEl = $state<HTMLUListElement | null>(null);
    let showBottomFade = $state(false);

    const checkOverflow = () => {
        if (!listEl) return;
        const hasMoreBelow = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight > 1;
        showBottomFade = hasMoreBelow;
    };

    // Find the parent section item for a given index (looks for the nearest item with lower level)
    const findParentSectionIndex = (index: number, itemLevel: number): number => {
        for (let i = index - 1; i >= 0; i--) {
            if (toc[i].level < itemLevel) return i;
        }
        return -1;
    };

    // Check if a section or any of its children are selected
    const isSectionActive = (sectionIndex: number, sectionLevel: number): boolean => {
        if (toc[sectionIndex]?.selected) return true;
        // Check if any children are selected
        for (let i = sectionIndex + 1; i < toc.length; i++) {
            if (toc[i].level <= sectionLevel) break; // Hit next sibling or parent
            if (toc[i].selected) return true;
        }
        return false;
    };

    // Determine if an item should be visible
    // Level 1, 2 always visible; level 3+ only if parent section is active
    const shouldShowItem = (item: TocItem, index: number): boolean => {
        if (item.level <= 2) return true;
        const parentIndex = findParentSectionIndex(index, item.level);
        if (parentIndex === -1) return true;
        return isSectionActive(parentIndex, toc[parentIndex].level);
    };

    // Calculate position reactively based on toc selection
    const calculatePosition = () => {
        let visibleIndex = 0;
        for (let i = 0; i < toc.length; i++) {
            const item = toc[i];
            if (item.selected || item.children?.some((child) => child.selected)) {
                return Math.min(visibleIndex * 38, height - 22);
            }
            if (shouldShowItem(item, i)) visibleIndex++;
        }
        return 0;
    };

    $effect(() => {
        position = calculatePosition();
    });

    $effect(() => {
        if (listEl && toc) checkOverflow();
    });
</script>

<nav class="sticky top-32 col-span-3 mt-2 -ml-4 hidden h-[800px] flex-col gap-6 lg:flex">
    <span class="text-eyebrow text-primary font-aeonik-fono ps-6 uppercase">{heading}</span>
    <div class="relative">
        <ul
            class="text-caption flex max-h-[calc(100vh-12rem)] flex-col gap-4 overflow-scroll [scrollbar-width:none]"
            bind:clientHeight={height}
            bind:this={listEl}
            onscroll={checkOverflow}
        >
            {#each toc as item, i (item.href)}
                {@const isVisible = shouldShowItem(item, i)}
                {@const isCollapsible = item.level >= 3}
                <li
                    class={cn('text-secondary hover:text-accent relative transition-colors', {
                        'ps-6': !item.level || item.level === 1,
                        'ps-12': item.level === 2,
                        'ps-16': item.level >= 3,
                        'text-primary': item.selected
                    })}
                    class:toc-item-collapsed={isCollapsible && !isVisible}
                    class:toc-item-expanded={isCollapsible && isVisible}
                >
                    <div class="toc-item-content">
                        <a href={item.href} class="line-clamp-1">{item.title}</a>
                    </div>

                    {#if item.children}
                        <ul
                            class="border-smooth text-caption mt-11 ml-9 flex flex-col gap-7 border-b pb-10"
                        >
                            {#each item.children as child}
                                <li
                                    class={cn(
                                        'text-secondary hover:text-accent relative transition-colors',
                                        {
                                            'text-primary': item.selected
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
        {#if showBottomFade}
            <div
                class="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-[hsl(var(--p-body-bg-color))] to-transparent"
            ></div>
        {/if}
        <div
            class="bg-primary absolute top-0 -left-px h-6 w-px transition-transform ease-linear"
            style:transform={`translateY(${position}px)`}
        ></div>
    </div>
</nav>

<style>
    .toc-item-collapsed {
        display: grid;
        grid-template-rows: 0fr;
        margin-top: -1rem; /* Compensate for gap-4 */
        transition:
            grid-template-rows 200ms cubic-bezier(0.4, 0, 0.2, 1) 50ms,
            margin 200ms cubic-bezier(0.4, 0, 0.2, 1) 50ms;
    }

    .toc-item-expanded {
        display: grid;
        grid-template-rows: 1fr;
        transition:
            grid-template-rows 200ms cubic-bezier(0.4, 0, 0.2, 1),
            margin 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toc-item-collapsed .toc-item-content,
    .toc-item-expanded .toc-item-content {
        overflow: hidden;
        min-height: 0;
    }
</style>
