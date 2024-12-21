<script lang="ts">
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { Feedback } from '$lib/components';
    import type { TocItem } from '$lib/components/docs/table-of-contents.svelte';
    import TableOfContents from '$lib/components/docs/table-of-contents.svelte';

    export let title: string;
    export let toc: Array<TocItem>;
    export let back: string | undefined = undefined;
    export let date: string | undefined = undefined;

    const reducedArticleSize = setContext('articleHasNumericBadge', writable(false));
</script>

<main class="relative ml-24 grid [grid-template-columns:minmax(0,_1fr)_280px]" id="main">
    <article class="[max-inline-size:43.5rem]">
        <header class="mt-10 mb-6 border-b border-white/5 px-7 pb-8">
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
        <div class="web-article-content px-7" class:web-reduced-article-size={$reducedArticleSize}>
            <slot />
            <Feedback {date} />
        </div>
    </article>
    <TableOfContents {toc} />
</main>

<style>
    @media (min-width: 1280px) and (max-width: 1330px) {
        .web-reduced-article-size {
            /* original/default is 41.5rem */
            max-inline-size: 40.5rem;
        }
    }
</style>
