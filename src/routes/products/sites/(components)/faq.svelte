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
            question: `When will Appwrite's paid plans be available?`,
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra nulla sit amet sapien sollicitudin, et rutrum ex auctor. Donec fringilla, tellus vitae vestibulum ullamcorper, lectus leo pellentesque arcu, a hendrerit purus tortor sed odio.'
        },
        {
            question: 'Can I self-host Appwrite for free?',
            answer: 'The Education plan has equal usage limits as the Appwrite Pro plan (minus email support). We also have a special channel for Education program members in the Appwrite Discord server for support, which will feature exclusive events, hackathons, etc.'
        },
        {
            question: 'What will happen to my current account when pricing is available?',
            answer: "Any student enrolled in the GitHub Student Developer Pack can apply for free and receive Appwrite's Education plan until graduation."
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
    <h2 class="text-primary mt-10 text-5xl md:col-span-4">FAQ</h2>
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
