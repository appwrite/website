<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';

    export let items: {
        question: string;
        answer: string;
    }[] = [
        {
            question: 'When will Appwrite’s paid plans be available?',
            answer: 'It is our aim to release pricing in the midst of Q4 2023. Please do note that this timeline is subject to many factors and, therefore, not set in stone. Everyone with an Appwrite Cloud account will receive a notification when our paid plans are available.'
        },
        {
            question: 'Can I still self-host Appwrite for free?',
            answer: 'Yes! Appwrite Self Hosted will always be Open Source and free for you to use. You can find the latest version of Appwrite on our GitHub repository.'
        },
        {
            question: 'What will happen to my current account when pricing is available?',
            answer: 'All current Cloud users will be notified about the pricing plans being active. Depending on your situation, you will either need to upgrade your account to a Pro plan, or you can happily continue on a Starter plan. You will receive an email once this occurs.'
        },
        {
            question: 'Does Appwrite have a trial period?',
            answer: 'Yes, we offer a 14-day trial period for you to explore Appwrite Pro. After the 14-day trial, you can choose to either subscribe to the Pro plan or continue on a Starter plan.'
        },
        {
            question: 'What payment methods does Appwrite support?',
            answer: 'Appwrite currently supports credit and debit card payments. We will be working to constantly add support for more methods. Please reach out to us in case this is an issue for you.'
        },
        {
            question: 'What happens if I reach the storage limit in my Pro plan?',
            answer: 'Your project will continue to run, and additional charges will apply. You can find the costs for additional storage under the pricing plans comparsions. We will also notify you when you hit 75% and 100% of your storage with an alert in the dashboard and per email. You can also use our budget tools to avoid unexpected payments.'
        },
        {
            question: 'How can I join the OSS program?',
            answer: 'The OSS program is exclusively for active open-source maintainers. In case you are liable for the program, you can <a href="/contact-us">apply here</a>.'
        },
        {
            question: 'I have a Starter plan account, how do I upgrade to a paid plan?',
            answer: 'In case you want to upgrade to a paid plan, you can do so in your Appwrite dashboard, select your organization and change your plan on the <b>Billing</b> section.'
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
    id="faq"
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
