<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';
    import { createFaqSchema, getInlinedScriptTag } from '$lib/utils/metadata';

    type Props = {
        items?: Array<{
            question: string;
            answer: string;
        }>;
    };

    let { items }: Props = $props();

    items = [
        {
            question: `How do I get started with Sites?`,
            answer: 'Head to the <a href="https://cloud.appwrite.io/" class="underline">Appwrite Console</a> and find Appwrite Sites in your project overview. The documentation provides <a href="/docs/products/sites/quick-start" class="underline">quick starts</a> to easily get started with your preferred framework. '
        },
        {
            question: 'What does Appwrite Sites cost?',
            answer: "You can use Appwrite Sites for free on the Free plan, which will include one site. If you need more, you can upgrade to a Pro plan. This pricing starts at $25 a month and includes unlimited sites. Learn more about Appwrite's pricing plans on the [pricing page](/pricing)."
        },
        {
            question: 'Does Appwrite have an Enterprise plan for Appwrite Sites?',
            answer: ' Yes, we offer a custom plan for Enterprises. Head over to <a href="https://appwrite.io/contact-us/enterprise" class="underline">enterprise</a> and fill out the form to get in touch about a custom plan.'
        },
        {
            question: 'Can I use Appwrite Sites on the self-hosted version?',
            answer: 'Yes, you can! Appwrite Sites is fully open-source, and you can self-host by following the <a href="/docs/advanced/self-hosting" class="underline">documentation</a> or by visiting the <a href="https://github.com/appwrite/appwrite" class="underline">Appwrite repository</a>.'
        }
    ];

    const {
        elements: { root, heading, content, item, trigger },
        helpers: { isSelected }
    } = createAccordion({
        defaultValue: '0',
        multiple: false,
        forceVisible: true
    });
</script>

<svelte:head>
    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(createFaqSchema(items))}
</svelte:head>

<div class="container grid grid-cols-1 justify-between pt-20 md:grid-cols-12">
    <h2 class="text-primary text-title mt-10 md:col-span-4">FAQ</h2>
    <ul class="collapsible w-full divide-y divide-white/5 md:col-span-8" use:melt={$root} id="faq">
        {#each items as faqItem, index (index)}
            <li class="collapsible-item">
                <!-- Progressive Enhancement for kbd navigation & animations -->
                {#if browser}
                    <div
                        class="collapsible-wrapper py-2"
                        use:melt={$item(`${index}`)}
                        {...{ open: $isSelected(`${index}`) ? true : undefined }}
                    >
                        <h3 use:melt={$heading({ level: 3 })}>
                            <button
                                class="flex w-full items-center justify-between gap-2.5 py-6 text-left"
                                use:melt={$trigger(`${index}`)}
                            >
                                <span class="web-label web-u-color-text-primary">
                                    {faqItem.question}
                                </span>
                                <div
                                    class="icon web-u-color-text-primary self-start transition-transform"
                                    class:rotate-180={$isSelected(`${index}`)}
                                >
                                    <span class="icon-cheveron-down" aria-hidden="true"></span>
                                </div>
                            </button>
                        </h3>

                        {#if $isSelected(`${index}`)}
                            <div
                                class="collapsible-content"
                                use:melt={$content(`${index}`)}
                                transition:slide
                            >
                                <p class="web-main-body-400">
                                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                    {@html faqItem.answer}
                                </p>
                            </div>
                        {/if}
                    </div>
                {:else}
                    <details class="collapsible-wrapper" open={index === 0}>
                        <summary class="collapsible-button">
                            <span class="web-label web-u-color-text-primary">
                                {faqItem.question}
                            </span>
                            <div class="icon web-u-color-text-primary">
                                <span class="icon-cheveron-down" aria-hidden="true"></span>
                            </div>
                        </summary>

                        <div class="collapsible-content">
                            <p class="web-main-body-400">
                                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                {@html faqItem.answer}
                            </p>
                        </div>
                    </details>
                {/if}
            </li>
        {/each}
    </ul>
</div>
