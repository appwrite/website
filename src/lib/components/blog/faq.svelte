<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';

    export let items: { question: string; answer: string }[] = [];

    const {
        elements: { root, heading, content, item, trigger },
        helpers: { isSelected }
    } = createAccordion({
        defaultValue: undefined,
        multiple: false,
        forceVisible: true
    });
</script>

{#if items.length}
    <section class="web-blog-faq mt-16" aria-labelledby="blog-faq-heading">
        <h2 id="blog-faq-heading" class="text-title font-aeonik-pro text-primary scroll-mt-24">
            Frequently asked questions
        </h2>

        <ul
            class="collapsible mt-6 w-full min-w-0 divide-y divide-white/5 border-t border-white/5"
            use:melt={$root}
            id="blog-faq"
        >
            {#each items as faqItem, index (index)}
                <li class="collapsible-item">
                    {#if browser}
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
                                        <span class="icon-cheveron-down" aria-hidden="true"></span>
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
                    {:else}
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
                    {/if}
                </li>
            {/each}
        </ul>
    </section>
{/if}
