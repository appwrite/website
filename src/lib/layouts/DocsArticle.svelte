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
    import { getContext, hasContext, onMount, setContext } from 'svelte';
    import { readable, type Readable, writable } from 'svelte/store';
    import { Feedback } from '$lib/components';
    import TableOfContents from '$lib/components/blog/table-of-contents.svelte';
    import { Button, Icon } from '$lib/components/ui';

    export let title: string;
    export let toc: Array<TocItem>;
    export let back: string | undefined = undefined;
    export let date: string | undefined = undefined;

    const reducedArticleSize = setContext('articleHasNumericBadge', writable(false));
    const docsSubtitle = hasContext('docsSubtitle')
        ? getContext<Readable<string | null>>('docsSubtitle')
        : readable(null);
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
                        <span class="icon-cheveron-left" aria-hidden="true"></span>
                    </a>
                {/if}
                <ul class="web-metadata text-caption">
                    <slot name="metadata" />
                </ul>
                <div class="relative flex items-center">
                    {#if back}
                        <Button
                            href={back}
                            class="web-u-translate-x-negative absolute top-0 size-10 items-center"
                            aria-label="previous page"
                            variant="icon"
                        >
                            <Icon
                                name="chevron-left"
                                class="text-primary hidden text-[24px] md:flex"
                                aria-hidden="true"
                            />
                        </Button>
                    {/if}

                    <div class="flex flex-col gap-6">
                        <h1 class="text-title font-aeonik-pro text-primary">{title}</h1>

                        {#if $docsSubtitle}
                            <p>{@html $docsSubtitle}</p>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="web-article-header-end"></div>
        </header>
        <div class="web-article-content" class:web-reduced-article-size={$reducedArticleSize}>
            <slot />

            <Feedback {date} />
        </div>
        <aside class="web-references-menu ps-6">
            <div class="web-references-menu-content">
                {#if toc && toc.length > 0}
                    <TableOfContents heading="On This Page" {toc} />
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
