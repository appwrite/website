<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';
    import { createFaqSchema, getInlinedScriptTag } from '$lib/utils/metadata';

    export let items: {
        question: string;
        answer: string;
    }[] = [
        {
            question: 'Can I self-host Appwrite for free?',
            answer: 'Yes! Appwrite Self Hosted will always be Open Source and free for you to use, without any limits. You can find the latest version of Appwrite in our <a rel="noopener noreferrer" class="web-link underline" href="https://github.com/appwrite/appwrite">GitHub repository</a>, and you can follow <a class="web-link underline" href="/docs/advanced/self-hosting/">Self Hosting docs</a> to learn how to install Appwrite on your server.'
        },
        // {
        //     question: 'Does Appwrite have a trial period?',
        //     answer: 'Yes, we offer a 14-day trial period for you to explore Appwrite Pro. After the 14-day trial, you can either continue using Pro plan or downgrade to a Free plan.'
        // },
        {
            question: 'What payment methods does Appwrite support?',
            answer: 'Appwrite currently supports <a class="web-link underline" href="/docs/advanced/platform/billing#payment-methods">credit and debit card payments</a>. We are actively working on adding support for more methods. Please <a class="web-link underline" href="/contact-us">contact us</a> in case this is an issue for you.'
        },
        {
            question: 'What happens if I reach a resource limit in my Pro plan?',
            answer: 'Your project will continue to run, and additional charges will apply. You can find the costs for additional resources in the <a class="web-link underline" href="/pricing">pricing plans comparison</a>. We will also send you email reminders when you hit 75% and 100% of your resource limits. To avoid unexpected payments, you can set up a <a class="web-link underline" href="/docs/advanced/platform/pro#budget-cap">budget cap</a> on your organization. <a class="web-link underline" href="/docs/advanced/platform/pro#reaching-resource-limits">Learn more in our docs</a>.'
        },
        {
            question: 'What happens if I reach a resource limit in my Free plan?',
            answer: 'Your project will freeze, and Appwrite Console will continue running in read-only mode. You need to upgrade to Pro, remove resources that exceed their limit, or wait for the next billing cycle, which resets usage limits. <a class="web-link underline" href="/docs/advanced/platform/pro#reaching-resource-limits">Learn more in our docs</a>.'
        },
        {
            question: 'Why does Appwrite ask for payment verification for up to $150?',
            answer: 'The Reserve Bank of India (RBI) mandates additional security measures for recurring payments on Indian cards. Appwrite is obligated to ask for verification before billing your card. Appwrite asks for verification for up to $150 in case you use add-ons, but will not charge more than the actual amount used or your budget cap. If you need higher limits, <a class="web-link underline" href="mailto:billing@appwrite.io">contact us</a>.'
        },
        {
            question: 'How can I join the OSS program?',
            answer: `The OSS program is exclusively for active open-source maintainers using Appwrite Cloud. You can find more information on how to join the program in our <a class="web-link underline" href="/blog/post/announcing-the-appwrite-oss-program">announcement blog</a>.`
        },
        {
            question: 'How can I join the Startups program?',
            answer: `Are you a founder looking to build with Appwrite? Learn more about our Startups program on our Startups <a class="web-link underline" href="/startups">landing page.</a>.`
        },
        {
            question: 'I have a Free plan account. How do I upgrade to a paid plan?',
            answer: 'If you want to upgrade to a paid plan, you can do so in your Appwrite dashboard, select your organization, and change your plan in the <b>Billing</b> section.'
        },
        {
            question: 'How can I apply credits to my organization?',
            answer: 'Go to the Appwrite Console and select the organization you wish to add credits to. In your organization overview, you can switch to the billing tab. Here, you need to go to the bottom of the page, where you will find the ability to add credits, as well as see the status of your credits. Credits are only relevant to Pro organizations since Free organizations are 100% free.'
        },
        {
            question: 'Where can I find an overview of my organization usage stats?',
            answer: "Go to the Appwrite Console and select the organization you wish to view. Here, you will find a usage tab with an overview of all your project's usage stats."
        },
        {
            question:
                'Where can I find information about my invoices and other billing information?',
            answer: 'Go to the Appwrite Console and use the drop-down menu in the top right corner to navigate to your organization overview by clicking on your organization. This will bring you to your overview, where you can select the billing tab. Here you will find your overview, payment history and methods, billing address, set a budget cap, and add your credits.'
        },
        {
            question:
                'I work with sensitive data and need to sign a BAA. Does Appwrite provide this?',
            answer: 'Yes, you can sign a BAA with Appwrite. Learn more about our security and compliance in our <a class="web-link underline" href="/docs/advanced/security">documentation</a>.'
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

<ul class="collapsible w-full divide-y divide-white/5" use:melt={$root} id="faq">
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
                            <span class="text-label font-aeonik-pro text-primary">
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
                <details class="collapsible-wrapper" open={index === 0}>
                    <summary class="collapsible-button appearance-none">
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
