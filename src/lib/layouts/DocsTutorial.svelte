<script lang="ts">
    import { scrollToTop } from '$lib/actions/scrollToTop';
    import { Feedback } from '$lib/components';
    import type { Tutorial } from '$markdoc/layouts/Tutorial.svelte';
    import type { TocItem } from './DocsArticle.svelte';

    export let title: string;
    export let toc: Array<TocItem>;
    export let currentStep: number;
    export let back: string;
    export let date: string;

    export let tutorials: Array<Tutorial>;

    $: nextStep = tutorials.find((tutorial) => tutorial.step === currentStep + 1);
    $: prevStep = tutorials.find((tutorial) => tutorial.step === currentStep - 1);
</script>

<main class="contents" id="main">
    <article class="web-article contents">
        <header class="web-article-header">
            <div class="web-article-header-start web-u-cross-start flex flex-col">
                <button class="web-icon-button web-is-only-mobile" aria-label="previous page">
                    <span class="icon-cheveron-left" aria-hidden="true" />
                </button>
                <ul class="web-metadata text-caption">
                    <slot name="metadata" />
                </ul>
                <div class="relative flex items-center">
                    {#if back}
                        <a
                            href={back}
                            class="
						web-button is-text is-only-icon web-items-center web-u-size-40
						web-u-translate-x-negative absolute top-0"
                            aria-label="previous page"
                        >
                            <span
                                class="icon-cheveron-left web-u-font-size-24 text-primary web-is-not-mobile"
                                aria-hidden="true"
                            />
                        </a>
                    {/if}
                    <h1 class="text-title font-aeonik-pro">{title}</h1>
                </div>
            </div>
            <div class="web-article-header-end" />
        </header>
        <div class="web-article-content">
            <slot />
            <div class="flex justify-between">
                {#if prevStep}
                    <a href={prevStep.href} class="web-button is-text">
                        <span class="icon-cheveron-left" aria-hidden="true" />
                        <span class="text-sub-body font-medium">
                            Step {prevStep.step}<span class="web-is-not-mobile"
                                >: {prevStep.title}</span
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
                        <span class="text-sub-body font-medium">
                            Step {nextStep.step}<span class="web-is-not-mobile"
                                >: {nextStep.title}</span
                            >
                        </span>
                        <span class="icon-cheveron-right" aria-hidden="true" />
                    </a>
                {/if}
            </div>

            <Feedback {date} />
        </div>
        <aside class="web-references-menu ps-6">
            <div class="web-references-menu-content">
                <div class="flex items-center justify-between gap-4">
                    <h5 class="web-references-menu-title text-micro uppercase">Tutorial Steps</h5>
                </div>
                <ol class="web-references-menu-list">
                    {#each tutorials as tutorial}
                        {@const isCurrentStep = currentStep === tutorial.step}
                        <li class="web-references-menu-item">
                            <a
                                href={tutorial.href}
                                class="web-references-menu-link"
                                class:tutorial-scroll-indicator={isCurrentStep && !toc.length}
                                class:is-selected={isCurrentStep}
                            >
                                <span class="web-numeric-badge">{tutorial.step}</span>
                                <span class="text-caption">{tutorial.title}</span>
                            </a>
                            {#if isCurrentStep}
                                <ol class="web-references-menu-list mt-4 ml-8">
                                    {#each toc as parent}
                                        <li class="web-references-menu-item">
                                            <a
                                                href={parent.href}
                                                class="web-references-menu-link is-inner"
                                                class:tutorial-scroll-indicator={parent.selected}
                                                class:is-selected={parent.selected}
                                            >
                                                {#if parent?.step}
                                                    <span class="web-numeric-badge"
                                                        >{parent.step}</span
                                                    >
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
                <div class="border-greyscale-900/[0.04] border-t pt-5">
                    <button class="web-link inline-flex items-center gap-2" use:scrollToTop>
                        <span class="web-icon-arrow-up" aria-hidden="true" />
                        <span class="text-caption">Back to top</span>
                    </button>
                </div>
            </div>
        </aside>
    </article>
</main>
