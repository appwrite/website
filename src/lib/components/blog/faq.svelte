<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';
    import { parseInline } from '$lib/utils/markdown';

    export let items: { question: string; answer: string }[] = [];

    $: renderedItems = items.map((item) => ({
        question: item.question,
        answer: parseInline(item.answer)
    }));

    const {
        elements: { root, heading, content, item, trigger },
        helpers: { isSelected }
    } = createAccordion({
        defaultValue: undefined,
        multiple: false,
        forceVisible: true
    });

    let expanded = false;
</script>

{#if items.length}
    <section class="web-blog-faq mt-16" aria-labelledby="blog-faq-heading">
        {#if browser}
            <div class="web-blog-faq-outer rounded-xl border border-white/10 bg-white/[0.02]">
                <button
                    type="button"
                    class="flex w-full cursor-pointer items-center justify-between gap-2.5 px-5 py-4 text-left"
                    aria-expanded={expanded}
                    aria-controls="blog-faq"
                    on:click={() => (expanded = !expanded)}
                >
                    <h2
                        id="blog-faq-heading"
                        class="text-main-body font-aeonik-pro text-primary scroll-mt-24"
                    >
                        Frequently asked questions
                    </h2>
                    <div
                        class="icon text-primary self-center transition-transform"
                        class:rotate-180={expanded}
                    >
                        <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                </button>

                <div class="web-blog-faq-collapse" data-open={expanded} inert={!expanded}>
                    <div class="web-blog-faq-collapse-inner">
                        <ul
                            class="collapsible w-full min-w-0 divide-y divide-white/5 border-t border-white/10 px-5"
                            use:melt={$root}
                            id="blog-faq"
                        >
                            {#each renderedItems as faqItem, index (index)}
                                <li class="collapsible-item">
                                    <div
                                        class="collapsible-wrapper py-2"
                                        use:melt={$item(`${index}`)}
                                        {...{ open: $isSelected(`${index}`) ? true : undefined }}
                                    >
                                        <h3 use:melt={$heading({ level: 3 })}>
                                            <button
                                                class="flex w-full min-w-0 cursor-pointer items-center justify-between gap-2.5 py-6 text-left"
                                                use:melt={$trigger(`${index}`)}
                                            >
                                                <span
                                                    class="text-label font-aeonik-pro text-primary min-w-0 flex-1"
                                                >
                                                    {faqItem.question}
                                                </span>
                                                <div
                                                    class="icon text-primary self-start transition-transform"
                                                    class:rotate-180={$isSelected(`${index}`)}
                                                >
                                                    <span
                                                        class="icon-cheveron-down"
                                                        aria-hidden="true"
                                                    ></span>
                                                </div>
                                            </button>
                                        </h3>

                                        {#if $isSelected(`${index}`)}
                                            <div
                                                class="collapsible-content pb-6"
                                                use:melt={$content(`${index}`)}
                                                transition:slide
                                            >
                                                <p class="text-main-body">
                                                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                                    {@html faqItem.answer}
                                                </p>
                                            </div>
                                        {/if}
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        {:else}
            <details class="web-blog-faq-outer rounded-xl border border-white/10 bg-white/[0.02]">
                <summary
                    class="flex w-full cursor-pointer list-none items-center justify-between gap-2.5 px-5 py-4"
                >
                    <h2
                        id="blog-faq-heading"
                        class="text-main-body font-aeonik-pro text-primary scroll-mt-24"
                    >
                        Frequently asked questions
                    </h2>
                    <div class="icon text-primary self-center">
                        <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                </summary>

                <ul class="w-full min-w-0 divide-y divide-white/5 border-t border-white/10 px-5">
                    {#each renderedItems as faqItem, index (index)}
                        <li class="collapsible-item">
                            <details class="collapsible-wrapper">
                                <summary class="collapsible-button cursor-pointer appearance-none">
                                    <span class="text-label text-primary">
                                        {faqItem.question}
                                    </span>
                                    <div class="icon text-primary">
                                        <span class="icon-cheveron-down" aria-hidden="true"></span>
                                    </div>
                                </summary>

                                <div class="collapsible-content pb-6">
                                    <p class="text-main-body">
                                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                        {@html faqItem.answer}
                                    </p>
                                </div>
                            </details>
                        </li>
                    {/each}
                </ul>
            </details>
        {/if}
    </section>
{/if}

<style>
    .web-blog-faq-outer > summary::-webkit-details-marker {
        display: none;
    }
    .web-blog-faq-outer > summary::marker {
        display: none;
    }

    .web-blog-faq-collapse {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 280ms ease;
    }
    .web-blog-faq-collapse[data-open='true'] {
        grid-template-rows: 1fr;
    }
    .web-blog-faq-collapse-inner {
        overflow: hidden;
    }

    @media (prefers-reduced-motion: reduce) {
        .web-blog-faq-collapse {
            transition: none;
        }
    }
</style>
