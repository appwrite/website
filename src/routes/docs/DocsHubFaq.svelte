<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';
    import { createFaqSchema, getInlinedScriptTag } from '$lib/utils/metadata';

    /** Orientation for new visitors: product definition, navigation, deployment choice, support. */
    const items = [
        {
            question: 'What is Appwrite?',
            answer: 'Appwrite is an open-source backend platform: Auth, Databases, Storage, Functions, Realtime, Messaging, and hosting for sites. You can build against <a class="web-link underline" href="https://cloud.appwrite.io/">Appwrite Cloud</a> or run the same stack <a class="web-link underline" href="/docs/advanced/self-hosting">self-hosted</a>.'
        },
        {
            question: 'What is Appwrite used for, and what does Appwrite do?',
            answer: 'You use it as the server side for your app: user sign-in, persisted data, file uploads, scheduled or event-driven logic, notifications, and live updates - exposed over APIs and <a class="web-link underline" href="/docs/sdks">SDKs</a> so your client or server code stays thin. Browse <a class="web-link underline" href="/docs/products/auth">products</a> for what each service covers.'
        },
        {
            question: 'How do I use Appwrite from React, Next.js, or another framework?',
            answer: 'Appwrite is framework-agnostic: you call it from the browser or server with an SDK or plain HTTP. Pick a <a class="web-link underline" href="/docs/quick-starts">quick start</a> for your stack (for example <a class="web-link underline" href="/docs/quick-starts/react">React</a> or <a class="web-link underline" href="/docs/quick-starts/nextjs">Next.js</a>), or follow a full <a class="web-link underline" href="/docs/tutorials">tutorial</a> if you prefer a guided build.'
        },
        {
            question: 'Where should I start in the documentation?',
            answer: 'Use <a class="web-link underline" href="/docs/quick-starts">Quick starts</a> to connect a project in minutes. Use <a class="web-link underline" href="/docs/tutorials">Tutorials</a> for end-to-end apps. When you need exact request shapes and types, open the <a class="web-link underline" href="/docs/references">API references</a> for your SDK and runtime.'
        },
        {
            question: 'Should I use Appwrite Cloud or self-host?',
            answer: 'Appwrite Cloud is the convenient option: we run the stack, ship upgrades, and you pay a predictable subscription. Self-hosting suits strict regulation, full data residency, air-gapped networks, or when you prefer to pay with engineering time instead of a managed service fee - but you operate the cluster yourself: you plan <a class="web-link underline" href="/docs/advanced/self-hosting/production/updates">version upgrades and data migrations</a> between releases (including backups and rollback), instead of Appwrite doing that for you. The product surface is aligned either way; see <a class="web-link underline" href="/docs/advanced/self-hosting">self-hosting</a> and compare <a class="web-link underline" href="/pricing">pricing</a> with your ops cost.'
        },
        {
            question: 'Where can I browse the API reference?',
            answer: 'Open <a class="web-link underline" href="/docs/references">API references</a> for REST payloads, GraphQL, and Realtime, organized by platform (web, mobile, server). The <a class="web-link underline" href="/docs/sdks">SDKs</a> page lists official client and server libraries.'
        },
        {
            question: 'Where can I get help or report a bug?',
            answer: 'Ask the community on <a class="web-link underline" href="/discord">Discord</a>, check <a class="web-link underline" href="/support">support</a> for product help options, and use <a class="web-link underline" href="https://github.com/appwrite/appwrite/issues">GitHub issues</a> for reproducible bugs in the open-source server.'
        }
    ];

    const {
        elements: { root, heading, content, item, trigger },
        helpers: { isSelected }
    } = createAccordion({
        defaultValue: undefined,
        multiple: false,
        forceVisible: true
    });
</script>

<svelte:head>
    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(createFaqSchema(items))}
</svelte:head>

<section
    class="web-hero is-align-start is-no-max-width mt-12! w-full min-w-0 self-stretch"
    aria-labelledby="docs-hub-faq-heading"
>
    <h2 id="docs-hub-faq-heading" class="text-title font-aeonik-pro text-primary max-w-[600px]">
        Common questions
    </h2>
    <p class="text-description mt-4 max-w-[720px]">
        Quick answers when you are new to Appwrite or deciding how to navigate these docs.
    </p>

    <ul
        class="collapsible mt-8 w-full min-w-0 divide-y divide-white/5"
        use:melt={$root}
        id="docs-hub-faq"
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
                                class="collapsible-content"
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

                        <div class="collapsible-content">
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
