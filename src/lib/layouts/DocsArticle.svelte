<script lang="ts" context="module">
    export type TocItem = {
        title: string;
        href: string;
        step?: number;
        selected?: boolean;
        children?: Array<{
            title: string;
            href: string;
            selected: boolean;
        }>;
    };
</script>

<script lang="ts">
    import { scrollToTop } from '$lib/actions/scrollToTop';

    import { Feedback } from '$lib/components';

    export let title: string;
    export let toc: Array<TocItem>;
    export let back: string | undefined = undefined;
    export let date: string | undefined = undefined;
</script>

<main class="u-contents" id="main">
    <article class="web-article u-contents">
        <header class="web-article-header">
            <div class="web-article-header-start u-flex-vertical web-u-cross-start">
                {#if back}
                    <a
                        href={back}
                        class="web-icon-button web-is-only-mobile"
                        aria-label="previous page"
                    >
                        <span class="icon-cheveron-left" aria-hidden="true" />
                    </a>
                {/if}
                <ul class="web-metadata web-caption-400">
                    <slot name="metadata" />
                </ul>
                <div class="u-position-relative u-flex u-cross-center">
                    {#if back}
                        <a
                            href={back}
                            class="
                        web-button is-text is-icon web-u-cross-center web-u-size-40
                        u-position-absolute u-inset-inline-start-0 web-u-translate-x-negative"
                            aria-label="previous page"
                        >
                            <span
                                class="icon-cheveron-left web-u-font-size-24 web-u-color-text-primary web-is-not-mobile"
                                aria-hidden="true"
                            />
                        </a>
                    {/if}
                    <h1 class="web-title">{title}</h1>
                </div>
            </div>
            <div class="web-article-header-end" />
        </header>
        <div class="web-article-content">
            <slot />
            <Feedback {date} />
        </div>
        <aside class="web-references-menu web-u-padding-inline-start-24">
            <div class="web-references-menu-content">
                {#if toc && toc.length > 0}
                    <div class="u-flex u-main-space-between u-cross-center u-gap-16">
                        <h5 class="web-references-menu-title web-eyebrow">On This Page</h5>
                    </div>
                    <ol class="web-references-menu-list">
                        {#each toc as parent (parent.href)}
                            <li
                                class="web-references-menu-item"
                            >
                                <a
                                    href={parent.href}
                                    class="web-references-menu-link"
                                    class:is-selected={parent.selected}
                                >
                                    {#if parent?.step}
                                        <span class="web-numeric-badge">{parent.step}</span>
                                    {/if}
                                    <span class="web-caption-400">{parent.title}</span>
                                </a>
                                {#if parent.children}
                                    <ol
                                        class="web-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                    >
                                        {#each parent.children as child}
                                            <li class="web-references-menu-item">
                                                <a
                                                    href={child.href}
                                                    class="web-references-menu-link"
                                                >
                                                    <span class="web-caption-400">{child.title}</span
                                                    >
                                                </a>
                                            </li>
                                        {/each}
                                    </ol>
                                {/if}
                            </li>
                        {/each}
                    </ol>
                    <div class="u-sep-block-start u-padding-block-start-20">
                        <button
                            class="web-link u-inline-flex u-cross-center u-gap-8"
                            use:scrollToTop
                        >
                            <span class="web-icon-arrow-up" aria-hidden="true" />
                            <span class="web-caption-400">Back to top</span>
                        </button>
                    </div>
                {/if}
            </div>
        </aside>
    </article>
</main>