<script lang="ts">
    import { scrollToTop } from '$lib/actions/scrollToTop';
    import Feedback from '$lib/components/Feedback.svelte';
    import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';
    import type { TocItem } from './DocsArticle.svelte';
    import Heading from '$markdoc/nodes/Heading.svelte';
    import { onMount } from 'svelte';

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

    onMount(() => {
        if (!slotContent) return;

        // dynamically modify all `label` headers to `body`.
        slotContent.querySelectorAll<HTMLHeadingElement>('h2.web-label').forEach((header) => {
            header.classList.replace('web-label', 'web-main-body-500');
        });
    });
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
                        <a
                            href={back}
                            class="
						web-button is-text is-only-icon web-u-cross-center
						web-is-not-mobile -translate-x-1/2"
                            aria-label="previous page"
                        >
                            <span
                                class="icon-cheveron-left web-u-font-size-24 web-u-color-text-primary"
                                aria-hidden="true"
                            />
                        </a>
                    {/if}
                    <h1 class="web-title lg:-ml-5">{firstStepItem?.title}</h1>
                </div>
            </div>
            <div class="web-article-header-end" />
        </header>
        <div class="web-article-content">
            <section class="web-article-content-section">
                <section class="web-article-content-sub-section">
                    <header class="web-article-content-header">
                        <span class="web-numeric-badge">{currentStep}</span>
                        <Heading level={1} id={currentStepItem.href} step={currentStep}>
                            {getCorrectTitle(currentStepItem, 1)}
                        </Heading>
                    </header>

                    <div class="u-padding-block-start-32" bind:this={slotContent}>
                        <slot />
                    </div>

                    <div class="flex justify-between">
                        {#if prevStep}
                            <a href={prevStep.href} class="web-button is-text previous-step-anchor">
                                <span class="icon-cheveron-left" aria-hidden="true" />
                                <span class="web-sub-body-500">
                                    Step {prevStep.step}<span class="web-is-not-mobile"
                                        >: {getCorrectTitle(prevStep, 1)}</span
                                    >
                                </span>
                            </a>
                        {/if}
                        {#if nextStep}
                            <a
                                href={nextStep.href}
                                class="web-button is-secondary"
                                style:margin-left={prevStep ? undefined : 'auto'}
                            >
                                <span class="web-sub-body-500">
                                    Step {nextStep.step}<span class="web-is-not-mobile"
                                        >: {nextStep.title}</span
                                    >
                                </span>
                                <span class="icon-cheveron-right" aria-hidden="true" />
                            </a>
                        {/if}
                    </div>
                </section>
            </section>

            <Feedback {date} />
        </div>
        <aside class="web-references-menu ps-6">
            <div class="web-references-menu-content">
                <div class="flex items-center justify-between gap-4">
                    <h5 class="web-references-menu-title text-micro uppercase">Tutorial Steps</h5>
                </div>
                <ol class="web-references-menu-list">
                    {#each tutorials as tutorial, index}
                        {@const isCurrentStep = currentStep === tutorial.step}
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
                            {#if isCurrentStep && toc.length}
                                <ol
                                    class="web-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                >
                                    {#each toc.slice(1) as parent}
                                        <li class="web-references-menu-item">
                                            <a
                                                href={parent.href}
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
                        <span class="web-icon-arrow-up" aria-hidden="true" />
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

    .previous-step-anchor {
        border: unset;
        outline: unset;
        background: unset;
        padding-inline-start: unset;
    }
</style>
