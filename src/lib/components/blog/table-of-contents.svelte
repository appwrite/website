<script lang="ts">
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { classNames } from '$lib/utils/classnames';

    const backToTop = () => {
        window.scrollTo({ top: 0 });
    };

    export let toc: Array<TocItem> = [];
</script>

<nav class="sticky top-32 col-span-3 -ml-4 hidden h-[800px] lg:block">
    <span class="text-micro tracking-loose text-primary pl-8 uppercase">Table of Contents</span>
    <div class="relative">
        <ul
            class="border-smooth mask mt-11 flex max-h-[600px] flex-col gap-7 overflow-scroll border-b pb-11 [scrollbar-width:none]"
        >
            {#each toc as parent (parent.href)}
                <li
                    class={classNames(
                        parent.selected ? 'text-primary' : 'text-secondary',
                        'relative pl-7 transition-colors',
                        'before:bg-primary before:absolute before:top-0 before:left-0 before:h-6 before:w-px before:rounded-full before:opacity-0 before:transition-opacity',
                        {
                            'font-medium': parent.level && parent.level === 1,
                            'pl-11': parent.level && parent.level === 2,
                            'pl-16': parent.level && parent.level >= 3,
                            'before:opacity-100': parent.selected
                        }
                    )}
                >
                    <a href={parent.href} class="line-clamp-1">{parent.title}</a>

                    {#if parent.children}
                        <ul
                            class="border-smooth mt-11 ml-9 flex flex-col gap-7 border-b pb-11 text-xs"
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

    <button
        class="text-primary group mt-8 flex cursor-pointer items-center gap-2 pl-7 transition-all active:scale-95"
        on:click={backToTop}
    >
        <span class="web-icon-arrow-up transition group-hover:-translate-y-0.5" />
        Back to Top
    </button>
</nav>
