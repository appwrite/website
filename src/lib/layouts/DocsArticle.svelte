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
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { Feedback } from '$lib/components';
    import { scrollToTop } from '$lib/actions/scrollToTop';

    export let title: string;
    export let toc: Array<TocItem>;
    export let back: string | undefined = undefined;
    export let date: string | undefined = undefined;

    const reducedArticleSize = setContext('articleHasNumericBadge', writable(false));
</script>

<main class="contents" id="main">
    <article class="web-article contents">
        <header class="web-article-header">
            <div class="web-article-header-start web-u-cross-start flex flex-col">
                {#if back}
                    <a
                        href={back}
                        class="web-icon-button web-is-only-mobile"
                        aria-label="previous page"
                    >
                        <span class="icon-cheveron-left" aria-hidden="true" />
                    </a>
                {/if}
                <ul class="web-metadata text-caption">
                    <slot name="metadata" />
                </ul>
                <div class="relative flex items-center">
                    {#if back}
                        <a
                            href={back}
                            class="
                        web-button is-text is-icon web-items-center web-u-size-40
                        web-u-translate-x-negative absolute top-0"
                            aria-label="previous page"
                        >
                            <span
                                class="icon-cheveron-left web-u-font-size-24 text-primary web-is-not-mobile"
                                aria-hidden="true"
                            />
                        </a>
                    {/if}
                    <h1 class="text-title font-aeonik-pro text-primary">{title}</h1>
                </div>
            </div>
            <div class="web-article-header-end" />
        </header>
        <div class="web-article-content" class:web-reduced-article-size={$reducedArticleSize}>
            <slot />

            <Feedback {date} />
        </div>
        <aside class="web-references-menu ps-6">
            <div class="web-references-menu-content">
                {#if toc && toc.length > 0}
                    <div class="flex items-center justify-between gap-4">
                        <h5 class="web-references-menu-title text-micro uppercase">On This Page</h5>
                    </div>
                    <ol class="web-references-menu-list">
                        {#each toc as parent (parent.href)}
                            <li class="web-references-menu-item">
                                <a
                                    href={parent.href}
                                    class="web-references-menu-link"
                                    class:is-selected={parent.selected}
                                >
                                    {#if parent?.step}
                                        <span class="web-numeric-badge">{parent.step}</span>
                                    {/if}
                                    <span class="text-caption">{parent.title}</span>
                                </a>
                                {#if parent.children}
                                    <ol class="web-references-menu-list mt-4 ml-8">
                                        {#each parent.children as child}
                                            <li class="web-references-menu-item">
                                                <a
                                                    href={child.href}
                                                    class="web-references-menu-link"
                                                >
                                                    <span class="text-caption">{child.title}</span>
                                                </a>
                                            </li>
                                        {/each}
                                    </ol>
                                {/if}
                            </li>
                        {/each}
                    </ol>
                    <div class="border-greyscale-900/4 border-t pt-5">
                        <button class="web-link inline-flex items-center gap-2" use:scrollToTop>
                            <span class="web-icon-arrow-up" aria-hidden="true" />
                            <span class="text-caption">Back to top</span>
                        </button>
                    </div>
                {/if}
            </div>
        </aside>
    </article>
</main>

<style>
    @media (min-width: 1280px) and (max-width: 1330px) {
        .web-reduced-article-size {
            /* original/default is 41.5rem */
            max-inline-size: 40.5rem;
        }
    }
</style>
