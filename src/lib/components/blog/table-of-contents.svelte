<script lang="ts">
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { classNames } from '$lib/utils/classnames';
    import { onMount } from 'svelte';

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    export let toc: Array<TocItem> = [];

    let activeIndex: number = 0;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = toc.findIndex((item) => item.href === `#${entry.target.id}`);
                        if (index !== -1) {
                            activeIndex = index;
                        }
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        toc.forEach((item) => {
            const target = document.querySelector(item.href);
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            observer.disconnect();
        };
    });
</script>

<nav class="sticky top-32 col-span-3 -ml-4 hidden h-[600px] lg:block">
    <span class="text-micro tracking-loose text-primary pl-8 uppercase">Table of Contents</span>
    <div class="relative">
        <ul class="border-smooth mt-11 ml-7 flex flex-col gap-7 border-b pb-11">
            {#each toc as parent (parent.href)}
                <li
                    class={classNames(
                        parent.selected ? 'text-primary' : 'text-secondary',
                        'relative transition-colors'
                    )}
                >
                    <a href={parent.href} class="line-clamp-1">{parent.title}</a>

                    {#if parent.children}
                        <ul class="border-smooth mt-11 ml-9 flex flex-col gap-7 border-b pb-11">
                            {#each parent.children as child}
                                <li
                                    class={classNames(
                                        parent.selected ? 'text-primary' : 'text-secondary',
                                        'relative transition-colors'
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
            class="bg-primary absolute top-0 -left-px h-6 w-px rounded-full transition duration-500 ease-in-out"
            style:transform={`translateY(${activeIndex * 52}px)`}
        />
    </div>

    <button
        class="text-primary group mt-8 flex cursor-pointer items-center gap-2 pl-7 transition-all active:scale-95"
        on:click={backToTop}
    >
        <span class="web-icon-arrow-up transition group-hover:-translate-y-0.5" />
        Back to Top
    </button>
</nav>
