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
    export let date: string;
</script>

<main class="u-contents" id="main">
    <article class="aw-article u-contents">
        <header class="aw-article-header">
            <div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
                {#if back}
                    <a
                        href={back}
                        class="
                        aw-button is-text aw-is-only-mobile
                        aw-u-padding-block-0 aw-u-padding-inline-start-0 aw-u-padding-inline-end-12"
                        aria-label="previous page"
                    >
                        <span class="icon-cheveron-left" aria-hidden="true" />
                    </a>
                {/if}
                <ul class="aw-metadata aw-caption-400">
                    <slot name="metadata" />
                </ul>
                <div class="u-position-relative u-flex u-cross-center">
                    {#if back}
                        <a
                            href={back}
                            class="
                        aw-button is-text is-icon aw-u-cross-center aw-u-size-40
                        u-position-absolute u-inset-inline-start-0 aw-u-translate-x-negative"
                            aria-label="previous page"
                        >
                            <span
                                class="icon-cheveron-left aw-u-font-size-24 aw-u-color-text-primary aw-is-not-mobile"
                                aria-hidden="true"
                            />
                        </a>
                    {/if}
                    <h1 class="aw-title">{title}</h1>
                </div>
            </div>
            <div class="aw-article-header-end" />
        </header>
        <div class="aw-article-content">
            <slot />
            <Feedback {date} />
        </div>
        <aside class="aw-references-menu aw-u-padding-inline-start-24">
            <div class="aw-references-menu-content">
                {#if toc && toc.length > 0}
                    <div class="u-flex u-main-space-between u-cross-center u-gap-16">
                        <h5 class="aw-references-menu-title aw-eyebrow">On This Page</h5>
                    </div>
                    <ol class="aw-references-menu-list">
                        {#each toc as parent (parent.href)}
                            <li
                                class="aw-references-menu-item"
                                class:article-scroll-indicator={parent.selected}
                            >
                                <a
                                    href={parent.href}
                                    class="aw-references-menu-link"
                                    class:is-selected={parent.selected}
                                >
                                    {#if parent?.step}
                                        <span class="aw-numeric-badge">{parent.step}</span>
                                    {/if}
                                    <span class="aw-caption-400">{parent.title}</span>
                                </a>
                                {#if parent.children}
                                    <ol
                                        class="aw-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                    >
                                        {#each parent.children as child}
                                            <li class="aw-references-menu-item">
                                                <a
                                                    href={child.href}
                                                    class="aw-references-menu-link"
                                                >
                                                    <span class="aw-caption-400">{child.title}</span
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
                            class="aw-link u-inline-flex u-cross-center u-gap-8"
                            use:scrollToTop
                        >
                            <span class="aw-icon-arrow-up" aria-hidden="true" />
                            <span class="aw-caption-400">Back to top</span>
                        </button>
                    </div>
                {/if}
            </div>
        </aside>
    </article>
</main>

<style lang="scss">
    .article-scroll-indicator {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            top: 0;
            left: -1.8rem;
            height: 100%;
            width: 2px;
            background-color: hsl(var(--p-references-menu-link-color-text));
        }
    }
</style>
