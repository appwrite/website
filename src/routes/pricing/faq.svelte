<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';

    export let items: {
        question: string;
        answer: string;
    }[] = [
        {
            question: 'Can I self-host Appwrite for free?',
            answer: 'Yes! Appwrite Self Hosted will always be Open Source and free for you to use, without any limits. You can find the latest version of Appwrite on our GitHub repository.'
        },
        {
            question: 'Does Appwrite have a trial period?',
            answer: 'Yes, we offer a 14-day trial period for you to explore Appwrite Pro. After the 14-day trial, you can either subscribe to the Pro plan or continue on a Starter plan.'
        },
        {
            question: 'What payment methods does Appwrite support?',
            answer: 'Appwrite currently supports credit and debit card payments. We will be working to add support for more methods constantly. Please reach out to us in case this is an issue for you.'
        },
        {
            question: 'What happens if I reach a resource limit in my Pro plan?',
            answer: 'Your project will continue to run, and additional charges will apply. You can find the costs for additional resources under the pricing plans comparison. We will also notify you when you hit 75% and 100% of your resources with per email. You can also use our budget caps to avoid unexpected payments.'
        },
        {
            question: 'What happens if I reach a resource limit in my Starter plan?',
            answer: 'Your project will freeze, and you will be requested to upgrade to Pro or downgrade the resources used in your project. We will also notify you when you hit 75% and 100% of your resources with per email.'
        },
        {
            question: 'How can I join the OSS program?',
            answer: `The OSS program is exclusively for active open-source maintainers. In case you are liable for the program, 
            you can <a class="aw-link is-inline" href="/contact-us">apply here</a>.`
        },
        {
            question: 'I have a Starter plan account. How do I upgrade to a paid plan?',
            answer: 'If you want to upgrade to a paid plan, you can do so in your Appwrite dashboard, select your organization, and change your plan on the <b>Billing</b> section.'
        },
        {
            question: 'How can I apply credits to my organization?',
            answer: 'Go to the Appwrite Console and select the organization you wish to add credits to. In your organization overview, you can select the billing tab. Here, you need to go to the bottom of the page, where you will find the ability to add credits, as well as see the status of your credits. You need to be on a paid plan to add credits.'
        },
        {
            question: 'Where can I find an overview of my organization usage stats?',
            answer: "Go to the Appwrite Console and select the organization you wish to view. Here, you will find a usage tab where you can find an overview of all your project's usage stats."
        },
        {
            question:
                'Where can I find information about my invoices and other billing information?',
            answer: 'Go to the Appwrite Console and use the drop-down menu in the top right corner to navigate to your organization overview by clicking on your organization. This will bring you to your overview, where you can select the billing tab. Here you will find your overview, payment history and methods, billing address, set a budget cap, and add your credits.'
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

<ul
    class="collapsible u-width-full-line"
    style="--p-toggle-border-color: var(--aw-color-smooth);"
    use:melt={$root}
>
    {#each items as faqItem, index (index)}
        <li class="collapsible-item">
            <!-- Progressive Enhancement for kbd navigation & animations -->
            {#if browser}
                <div
                    class="collapsible-wrapper"
                    use:melt={$item(`${index}`)}
                    {...{ open: $isSelected(`${index}`) ? true : undefined }}
                >
                    <h3 use:melt={$heading({ level: 3 })}>
                        <button
                            class="collapsible-button u-width-full-line"
                            use:melt={$trigger(`${index}`)}
                        >
                            <span class="aw-label aw-u-color-text-primary">
                                {faqItem.question}
                            </span>
                            <div class="icon aw-u-color-text-primary">
                                <span class="icon-cheveron-down" aria-hidden="true" />
                            </div>
                        </button>
                    </h3>

                    {#if $isSelected(`${index}`)}
                        <div
                            class="collapsible-content"
                            use:melt={$content(`${index}`)}
                            transition:slide
                        >
                            <p class="aw-main-body-400">
                                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                {@html faqItem.answer}
                            </p>
                        </div>
                    {/if}
                </div>
            {:else}
                <details class="collapsible-wrapper" open={index === 0}>
                    <summary class="collapsible-button">
                        <span class="aw-label aw-u-color-text-primary">
                            {faqItem.question}
                        </span>
                        <div class="icon aw-u-color-text-primary">
                            <span class="icon-cheveron-down" aria-hidden="true" />
                        </div>
                    </summary>

                    <div class="collapsible-content">
                        <p class="aw-main-body-400">
                            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                            {@html faqItem.answer}
                        </p>
                    </div>
                </details>
            {/if}
        </li>
    {/each}
</ul>
