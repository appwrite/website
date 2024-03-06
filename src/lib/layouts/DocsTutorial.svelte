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
    <article class="web-article u-contents">
        <header class="web-article-header">
            <div class="web-article-header-start u-flex-vertical web-u-cross-start">
                <button
                    class="
						web-button is-text web-is-only-mobile
						web-u-padding-block-0 web-u-padding-inline-start-0 web-u-padding-inline-end-12"
                    aria-label="previous page"
                >
                    <span class="icon-cheveron-left" aria-hidden="true" />
                </button>
                <ul class="web-metadata web-caption-400">
                    <slot name="metadata" />
                </ul>
                <div class="u-position-relative u-flex u-cross-center">
                    {#if back}
                        <a
                            href={back}
                            class="
						web-button is-text is-only-icon web-u-cross-center web-u-size-40
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
            <div class="u-flex u-main-space-between">
                {#if prevStep}
                    <a href={prevStep.href} class="web-button is-text">
                        <span class="icon-cheveron-left" aria-hidden="true" />
                        <span class="web-sub-body-500">
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
                        <span class="web-sub-body-500">
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
        <aside class="web-references-menu web-u-padding-inline-start-24">
            <div class="web-references-menu-content">
                <div class="u-flex u-main-space-between u-cross-center u-gap-16">
                    <h5 class="web-references-menu-title web-eyebrow">Tutorial Steps</h5>
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
                                <span class="web-caption-400">{tutorial.title}</span>
                            </a>
                            {#if isCurrentStep}
                                {#each toc as parent}
                                    <ol
                                        class="web-references-menu-list u-margin-block-start-16 u-margin-inline-start-32"
                                    >
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
                                                                <span class="web-caption-400"
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
                    <button class="web-link u-inline-flex u-cross-center u-gap-8" use:scrollToTop>
                        <span class="web-icon-arrow-up" aria-hidden="true" />
                        <span class="web-caption-400">Back to top</span>
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
