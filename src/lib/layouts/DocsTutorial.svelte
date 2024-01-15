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

<main class="u-contents" id="main">
    <article class="aw-article u-contents">
        <header class="aw-article-header">
            <div class="aw-article-header-start u-flex-vertical aw-u-cross-start">
                <button
                    class="
						aw-button is-text aw-is-only-mobile
						aw-u-padding-block-0 aw-u-padding-inline-start-0 aw-u-padding-inline-end-12"
                    aria-label="previous page"
                >
                    <span class="icon-cheveron-left" aria-hidden="true" />
                </button>
                <ul class="aw-metadata aw-caption-400">
                    <slot name="metadata" />
                </ul>
                <div class="u-position-relative u-flex u-cross-center">
                    {#if back}
                        <a
                            href={back}
                            class="
						aw-button is-text is-only-icon aw-u-cross-center aw-u-size-40
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
            <div class="u-flex u-main-space-between">
                {#if prevStep}
                    <a href={prevStep.href} class="aw-button is-text">
                        <span class="icon-cheveron-left" aria-hidden="true" />
                        <span class="aw-sub-body-500">
                            Step {prevStep.step}<span class="aw-is-not-mobile"
                                >: {prevStep.title}</span
                            >
                        </span>
                    </a>
                {/if}
                {#if nextStep}
                    <a
                        href={nextStep.href}
                        class="aw-button is-secondary"
                        style:margin-left={prevStep ? undefined : 'auto'}
                    >
                        <span class="aw-sub-body-500">
                            Step {nextStep.step}<span class="aw-is-not-mobile"
                                >: {nextStep.title}</span
                            >
                        </span>
                        <span class="icon-cheveron-right" aria-hidden="true" />
                    </a>
                {/if}
            </div>

            <Feedback {date} />
        </div>
        <aside class="aw-references-menu aw-u-padding-inline-start-24">
            <div class="aw-references-menu-content">
                <div class="u-flex u-main-space-between u-cross-center u-gap-16">
                    <h5 class="aw-references-menu-title aw-eyebrow">Tutorial Steps</h5>
                </div>
                <ol class="aw-references-menu-list">
                    {#each tutorials as tutorial}
                        {@const isCurrentStep = currentStep === tutorial.step}
                        <li class="aw-references-menu-item">
                            <a
                                href={tutorial.href}
                                class="aw-references-menu-link"
                                class:tutorial-scroll-indicator={isCurrentStep && !toc.length}
                                class:is-selected={isCurrentStep}
                            >
                                <span class="aw-numeric-badge">{tutorial.step}</span>
                                <span class="aw-caption-400">{tutorial.title}</span>
                            </a>
                            {#if isCurrentStep}
                                {#each toc as parent}
                                    <ol
                                        class="aw-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                    >
                                        <li class="aw-references-menu-item">
                                            <a
                                                href={parent.href}
                                                class="aw-references-menu-link is-inner"
                                                class:tutorial-scroll-indicator={parent.selected}
                                                class:is-selected={parent.selected}
                                            >
                                                {#if parent?.step}
                                                    <span class="aw-numeric-badge"
                                                        >{parent.step}</span
                                                    >
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
                                                                <span class="aw-caption-400"
                                                                    >{child.title}</span
                                                                >
                                                            </a>
                                                        </li>
                                                    {/each}
                                                </ol>
                                            {/if}
                                        </li>
                                    </ol>
                                {/each}
                            {/if}
                        </li>
                    {/each}
                </ol>
                <div class="u-sep-block-start u-padding-block-start-20">
                    <button class="aw-link u-inline-flex u-cross-center u-gap-8" use:scrollToTop>
                        <span class="aw-icon-arrow-up" aria-hidden="true" />
                        <span class="aw-caption-400">Back to top</span>
                    </button>
                </div>
            </div>
        </aside>
    </article>
</main>

<style lang="scss">
    .tutorial-scroll-indicator {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            top: 0;
            left: -1.75rem;
            height: 100%;
            width: 1px;
            background-color: hsl(var(--p-references-menu-link-color-text));
        }

        &.is-inner {
            &::before {
                left: -4rem;
            }
        }
    }
</style>
