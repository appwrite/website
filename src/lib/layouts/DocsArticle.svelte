<script lang="ts" context="module">
    export type TocItem = {
        title: string;
        href: string;
        step?: number;
        selected?: boolean;
        level: number;
        children?: Array<{
            title: string;
            href: string;
            selected: boolean;
            level?: number;
        }>;
    };

    export type HeaderSectionInfoAlert = {
        title?: string;
        description?: string;
    };
</script>

<script lang="ts">
    import { getContext, hasContext, setContext } from 'svelte';
    import { readable, type Readable, writable } from 'svelte/store';
    import { Feedback } from '$lib/components';
    import TableOfContents from '$lib/components/blog/table-of-contents.svelte';
    import { Button, Icon } from '$lib/components/ui';
    import Info from '$markdoc/tags/Info.svelte';
    import CopyAsMarkdown from '$lib/components/blog/copy-as-markdown.svelte';
    import { hasRoutePrompt } from '$lib/utils/routePrompts';

    export let title: string;
    export let toc: Array<TocItem>;
    export let back: string | undefined = undefined;
    export let date: string | undefined = undefined;

    const reducedArticleSize = setContext('articleHasNumericBadge', writable(false));
    const headerSectionInfoAlert = hasContext('headerSectionInfoAlert')
        ? getContext<Readable<HeaderSectionInfoAlert | null>>('headerSectionInfoAlert')
        : readable(null);

    const showCopyPage = !hasRoutePrompt();
</script>

<main class="contents" id="main">
    <article class="web-article contents">
        <header class="web-article-header flex items-start justify-between">
            <div class="web-article-header-start web-u-cross-start flex flex-col">
                <div class="mobile-header-row mb-2 flex w-full items-center lg:hidden">
                    {#if back}
                        <a
                            href={back}
                            class="web-icon-button docs-article-back-mobile"
                            aria-label="previous page"
                        >
                            <span class="web-icon-chevron-left" aria-hidden="true"></span>
                        </a>
                    {/if}
                    {#if showCopyPage}
                        <div class="copy-button-wrapper-mobile ml-auto">
                            <CopyAsMarkdown class="ml-0" />
                        </div>
                    {/if}
                </div>
                <ul class="web-metadata text-caption">
                    <slot name="metadata" />
                </ul>
                <div class="relative flex items-center">
                    {#if back}
                        <Button
                            href={back}
                            class="docs-article-back-desktop absolute items-center justify-center"
                            aria-label="previous page"
                            variant="icon"
                        >
                            <Icon
                                name="chevron-left"
                                class="text-primary hidden text-[18px] md:flex"
                                aria-hidden="true"
                            />
                        </Button>
                    {/if}

                    <h1 class="text-title font-aeonik-pro text-primary">{title}</h1>
                </div>
            </div>
            {#if showCopyPage}
                <div class="web-article-header-end copy-button-wrapper hidden lg:block">
                    <CopyAsMarkdown class="ml-0" />
                </div>
            {/if}
        </header>
        <div class="web-article-content prose" class:web-reduced-article-size={$reducedArticleSize}>
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

    /* Mobile header row with back button and copy button */
    @media (max-width: 1023.9px) {
        .mobile-header-row {
            align-items: center;
            width: 100vw;
            position: relative;
            margin-left: calc(-1 * var(--p-grid-huge-navs-padding-inline, 1.25rem));
            margin-right: calc(-1 * var(--p-grid-huge-navs-padding-inline, 1.25rem));
            padding-left: var(--p-grid-huge-navs-padding-inline, 1.25rem);
            padding-right: var(--p-grid-huge-navs-padding-inline, 1.25rem);
        }

        .copy-button-wrapper-mobile {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: 0;
        }
    }

    /* Desktop copy button wrapper */
    @media (min-width: 1024px) {
        .copy-button-wrapper {
            align-self: center;
            width: auto;
        }
    }

    /* Back control: compact square (1:1), smaller than default icon / size-10 */
    .mobile-header-row a.docs-article-back-mobile.web-icon-button {
        box-sizing: border-box;
        aspect-ratio: 1;
        inline-size: 1.5rem;
        block-size: 1.5rem;
        flex-shrink: 0;
    }

    /*
     * Back control sits left of the title’s start (same anchor as body text). From md, nudge a
     * few px further left for a hairline gap — no h1 padding so the title lines up with `.prose`.
     */
    :global(
        .web-article-header-start
            .relative.flex.items-center
            > a.web-button.is-icon.is-text.docs-article-back-desktop
    ) {
        box-sizing: border-box;
        aspect-ratio: 1;
        inline-size: 2rem;
        block-size: 2rem;
        min-block-size: 0;
        min-inline-size: 0;
        padding: 0;
        padding-inline: 0;
        padding-block: 0;
        transform: translateX(-100%);
    }

    @media (min-width: 768px) {
        :global(
            .web-article-header-start
                .relative.flex.items-center
                > a.web-button.is-icon.is-text.docs-article-back-desktop
        ) {
            transform: translateX(calc(-100% - 3px));
        }
    }
</style>
