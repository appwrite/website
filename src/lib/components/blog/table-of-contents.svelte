<script lang="ts" context="module">
    export type TocItem = {
        title: string;
        href: string;
        step?: number;
        selected?: boolean;
        level?: number;
        children?: Array<{
            title: string;
            href: string;
            selected: boolean;
            level?: number;
        }>;
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { fade } from 'svelte/transition';

    const backToTop = () => {
        window.scrollTo({ top: 0 });
    };

    let isScrolled: boolean = false;

    const handleIsScrolled = () => {
        isScrolled = !!window.scrollY;
    };

    export let toc: Array<TocItem> = [];
    export let heading: string = 'Table of Contents';
</script>

<svelte:window on:scroll={handleIsScrolled} />

<nav class="sticky top-32 col-span-3 mt-2 -ml-4 hidden h-[800px] flex-col gap-6 lg:flex">
    <span class="text-micro tracking-loose text-primary font-aeonik-fono ps-6 uppercase"
        >{heading}</span
    >
    <div class="relative">
        <ul
            class="mask text-caption flex max-h-[600px] flex-col gap-4 overflow-scroll pb-11 [scrollbar-width:none]"
        >
            {#each toc as parent (parent.href)}
                <li
                    class={classNames(
                        parent.selected ? 'text-primary' : 'text-secondary',
                        'relative ps-6 transition-colors',
                        'before:bg-greyscale-300 before:absolute before:top-0 before:left-0 before:h-6 before:w-px before:rounded-full before:opacity-0 before:transition-opacity',
                        {
                            'font-medium': parent.level && parent.level === 1,
                            'pl-12': parent.level && parent.level === 2,
                            'ps-16': parent.level && parent.level >= 3,
                            'before:opacity-100': parent.selected
                        }
                    )}
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

    {#if isScrolled}
        <button
            class="text-primary group border-smooth text-caption ms-6 -mt-4 flex cursor-pointer items-center gap-2 border-t pt-10 font-medium transition-all"
            on:click={backToTop}
            out:fade
            in:fade
        >
            <span class="web-icon-arrow-up transition group-hover:-translate-y-0.5" />
            Back to Top
        </button>
    {/if}
</nav>
