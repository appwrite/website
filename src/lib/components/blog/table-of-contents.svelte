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
    import { onMount, tick } from 'svelte';
    import CopyAsMarkdown from './copy-as-markdown.svelte';
    interface TableOfContentProps {
        toc?: Array<TocItem>;
        heading?: string;
    }

    let { toc = [], heading = 'Table of Contents' }: TableOfContentProps = $props();

    let height = $state<number>(0);
    let position = $state<number>(0);

    const onScroll = () => {
        for (let i = 0; i < toc.length; i++) {
            const item = toc[i];
            if (item.selected || item.children?.some((child) => child.selected)) {
                position = Math.min(i * 38, height - 22);
                return;
            }
        }
    };
</script>

<svelte:window onscroll={onScroll} on:hashchange={onScroll} />

<nav class="sticky top-32 col-span-3 mt-2 -ml-4 hidden h-[800px] flex-col gap-6 lg:flex">
    <span class="text-eyebrow text-primary font-aeonik-fono ps-6 uppercase">{heading}</span>
    <div class="relative">
        <ul
            class="text-caption flex max-h-[600px] flex-col gap-4 overflow-scroll pb-11 [scrollbar-width:none]"
            bind:clientHeight={height}
        >
            {#each toc as parent (parent.href)}
                <li
                    class={cn('text-secondary hover:text-accent relative transition-colors', {
                        'ps-6': !parent.level || parent.level === 1,
                        'ps-12': parent.level === 2,
                        'ps-16': parent.level >= 3,
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
                                    class={cn(
                                        'text-secondary hover:text-accent relative transition-colors',
                                        {
                                            'text-primary': parent.selected
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
        <div
            class="bg-primary absolute top-0 -left-px h-6 w-px transition-transform ease-linear"
            style:transform={`translateY(${position}px)`}
        ></div>
    </div>
    <CopyAsMarkdown />
</nav>
