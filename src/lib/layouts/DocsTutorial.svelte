<script lang="ts">
    import { scrollToTop } from '$lib/actions/scrollToTop';
    import { Feedback } from '$lib/components';
    import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';
    import type { TocItem } from './DocsArticle.svelte';
    import Heading from '$markdoc/nodes/heading.svelte';
    import { onMount, tick } from 'svelte';
    import { page } from '$app/state';
    import { Button, Icon } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';

    export let toc: Array<TocItem>;
    export let back: string;
    export let currentStep: number;
    export let date: string;

    export let tutorials: Array<Tutorial>;

    const firstStepItem: Tutorial | null = tutorials[0] ?? null;
    // currentStep starts from 1, the arrays start from 0.
    const currentStepItem = tutorials[currentStep - 1] ?? firstStepItem;

    $: nextStep = tutorials.find((tutorial) => tutorial.step === currentStep + 1);
    $: prevStep = tutorials.find((tutorial) => tutorial.step === currentStep - 1);

    // `any` for compatibility with reactive variables.
    function getCorrectTitle(tutorial: Tutorial, checkAt: number): string {
        if (tutorial.step === checkAt) {
            return 'Introduction';
        } else {
            return tutorial.title;
        }
    }

    let slotContent: HTMLElement | null = null;

    function scrollToElement(pageHash: string) {
        const element = document.getElementById(pageHash);
        if (element) {
            const offset = 50;
            const rect = element.getBoundingClientRect();
            window.scroll({ top: window.scrollY + rect.top - offset });
        }
    }

    /**
     * Due to underlying logic with anchor links & the auto-scroll via hash values in the URL,
     * we have an issue where if the first item is not scrolled enough it isn't marked as `selected`.
     *
     * We do below workaround for the time being without breaking things to scroll to the first item.
     */
    async function preSelectItemOnInit() {
        await tick();

        if (!page.url.hash) return;
        const tocItem = toc.slice(1);

        // no sub-items, return.
        if (!tocItem.length) return;

        const pageHash = page.url.hash.replace('#', '');
        const tocItemHref = tocItem[0].href.replace('#', '');

        if (pageHash !== tocItemHref) return;

        scrollToElement(pageHash);
    }

    // same issue as above, only happens on the first item.
    function scrollToItem(parent: TocItem, index: number) {
        const tocItem = toc.slice(1);

        if (!tocItem.length) return;
        const tocItemHref = parent.href.replace('#', '');

        const element = document.getElementById(tocItemHref);

        if (index === 0) {
            scrollToElement(tocItemHref);
        } else {
            element?.scrollIntoView();
        }

        // because we used `preventDefault`.
        history.pushState(null, '', parent.href);
    }

    onMount(() => {
        if (!slotContent) return;

        // dynamically modify all `label` headers to `body`.
        slotContent.querySelectorAll<HTMLHeadingElement>('h2.text-label').forEach((header) => {
            header.classList.replace('text-label', 'web-main-body-500');
        });

        preSelectItemOnInit();
    });
</script>

<svelte:head>
    {#if prevStep}
        <link rel="prev" href={prevStep.href} />
    {/if}
    {#if nextStep}
        <link rel="next" href={nextStep.href} />
    {/if}
</svelte:head>
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
                <ul class="web-metadata web-caption-400">
                    {#if currentStepItem.difficulty}
                        <li>{currentStepItem.difficulty}</li>
                    {/if}
                    {#if currentStepItem.readtime}
                        <li>{currentStepItem.readtime} min</li>
                    {/if}
                </ul>
                <div class="u-cross-center relative flex">
                    {#if back}
                        <Button
                            href={back}
                            variant="text"
                            class="is-only-icon web-u-cross-center web-is-not-mobile -translate-x-1/2"
                            aria-label="previous page"
                        >
                            <Icon
                                name="chevron-left"
                                class="text-primary text-2xl"
                                aria-hidden="true"
                            />
                        </Button>
                    {/if}
                    <h1 class="web-title {currentStep === 1 ? 'lg:-ml-5' : ''}">
                        {firstStepItem?.title}
                    </h1>
                </div>
            </div>
            <div class="web-article-header-end"></div>
        </header>
        <div class="web-article-content">
            <section class="web-article-content-section">
                <section class="web-article-content-sub-section">
                    <header class="web-article-content-header">
                        <span class="web-numeric-badge">{currentStep}</span>
                        <div class="tutorial-heading">
                            <Heading level={1} id={currentStepItem.href} step={currentStep}>
                                {getCorrectTitle(currentStepItem, 1)}
                            </Heading>
                        </div>
                    </header>

                    <div class="web-u-padding-block-start-32 prose" bind:this={slotContent}>
                        <slot />
                    </div>

                    <div class="web-u-padding-block-start-32 flex justify-between">
                        {#if prevStep}
                            <Button
                                variant="text"
                                href={prevStep.href}
                                class="previous-step-anchor"
                            >
                                <Icon name="chevron-left" aria-hidden="true" />
                                <span class="web-sub-body-500">
                                    Step {prevStep.step}<span class="web-is-not-mobile"
                                        >: {getCorrectTitle(prevStep, 1)}</span
                                    >
                                </span>
                            </Button>
                        {/if}
                        {#if nextStep}
                            <Button
                                variant="secondary"
                                href={nextStep.href}
                                class={classNames({
                                    'ml-auto': prevStep
                                })}
                            >
                                <span class="web-sub-body-500">
                                    Step {nextStep.step}<span class="web-is-not-mobile"
                                        >: {nextStep.title}</span
                                    >
                                </span>
                                <span class="icon-cheveron-right" aria-hidden="true"></span>
                            </Button>
                        {/if}
                    </div>
                </section>
            </section>

            <Feedback {date} />
        </div>
        <aside class="web-references-menu ps-6">
            <div class="web-references-menu-content">
                <div class="flex items-center justify-between gap-4">
                    <h5 class="web-references-menu-title text-eyebrow uppercase">Tutorial Steps</h5>
                </div>
                <ol class="web-references-menu-list">
                    {#each tutorials as tutorial, index}
                        {@const isCurrentStep = currentStep === tutorial.step}
                        {@const absoluteToc = toc.slice(1)}
                        <li class="web-references-menu-item">
                            <a
                                href={tutorial.href}
                                class="web-references-menu-link"
                                class:tutorial-scroll-indicator={isCurrentStep && !toc.length}
                                class:is-selected={isCurrentStep}
                            >
                                <span class="web-numeric-badge">{tutorial.step}</span>
                                <!-- first item will always be introduction -->
                                <span class="web-caption-400"
                                    >{index === 0 ? 'Introduction' : tutorial.title}</span
                                >
                            </a>
                            {#if isCurrentStep && absoluteToc.length}
                                <ol
                                    class="web-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                >
                                    {#each absoluteToc as parent, innerIndex}
                                        <li class="web-references-menu-item">
                                            <a
                                                href={parent.href}
                                                on:click|preventDefault={() =>
                                                    scrollToItem(parent, innerIndex)}
                                                class="web-references-menu-link is-inner"
                                                class:tutorial-scroll-indicator={parent.selected}
                                                class:is-selected={parent.selected}
                                            >
                                                <span class="web-caption-400">{parent.title}</span>
                                            </a>
                                            {#if parent.children}
                                                <ol class="web-references-menu-list mt-4 ml-8">
                                                    {#each parent.children as child}
                                                        <li class="web-references-menu-item">
                                                            <a
                                                                href={child.href}
                                                                class="web-references-menu-link"
                                                            >
                                                                <span class="text-caption"
                                                                    >{child.title}</span
                                                                >
                                                            </a>
                                                        </li>
                                                    {/each}
                                                </ol>
                                            {/if}
                                        </li>
                                    {/each}
                                </ol>
                            {/if}
                        </li>
                    {/each}
                </ol>
                <div class="border-greyscale-900/4 border-t pt-5">
                    <button class="web-link inline-flex items-center gap-2" use:scrollToTop>
                        <span class="web-icon-arrow-up" aria-hidden="true"></span>
                        <span class="text-caption">Back to top</span>
                    </button>
                </div>
            </div>
        </aside>
    </article>
</main>

<style>
    .web-article-header {
        margin-block-end: 2rem;
        padding-inline-start: unset;
    }

    .u-margin-block-start-16 {
        margin-block-start: 1rem;
    }

    .u-margin-inline-start-32 {
        margin-inline-start: 2rem;
    }

    .web-references-menu-item:has(.is-selected)::before {
        /* maintains the distance correctly for the children items */
        inset-inline-start: -3.55rem;
    }

    /* Static slider: default slider for each selected link */
    .web-references-menu-list > .web-references-menu-item > .is-selected::before {
        content: ' ';
        position: absolute;
        inset-block-start: 0;
        block-size: 1.375rem;
        inline-size: 0.0625rem;
        inset-inline-start: -1.3125rem;
        background-color: hsl(var(--p-references-menu-link-color-text));
    }

    /* Hide static slider if any child menu item is selected */
    .web-references-menu-list
        > .web-references-menu-item:has(.web-references-menu-list .is-selected)
        > .is-selected::before {
        background-color: transparent;
    }

    /* Transparent slider for selected child items because we use parent level */
    .web-references-menu-list
        > .web-references-menu-item
        > .web-references-menu-list
        > .web-references-menu-item
        > .is-selected::before {
        content: '';
        background-color: transparent;
    }

    :global(.tutorial-heading h2) {
        margin-bottom: unset;
    }
</style>
