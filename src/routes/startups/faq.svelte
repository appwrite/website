<script lang="ts">
    import { browser } from '$app/environment';
    import { createAccordion, melt } from '@melt-ui/svelte';
    import { slide } from 'svelte/transition';

    export let items: {
        question: string;
        answer: string;
    }[] = [
        {
            question: 'How do I apply?',
            answer: 'Please fill out the form at the bottom of this page. We need your full name, email, company name, and website.'
        },
        {
            question: 'What happens after I apply?',
            answer: 'Once you submit the form, our team will evaluate your application. If selected, you will receive an email with a special code to redeem your cloud credits and a detailed how-to guide on applying them. After you redeem your code, you will officially be part of the Startups program and can get started with your project!'
        },
        {
            question: 'I am a Pro user. Can I apply?',
            answer: "Yes, if you are currently on a Free or Pro plan, you can apply for the program."
        },
         {
            question: 'I am already a Scale user. Can I apply?',
            answer: "If you are currently on a Scale plan, you can't apply for the program as the program is intended for Startups to help them relieve financial burdens at an early stage. If you're able to pay for a Scale plan, we will consider you uneligible."
        },
        {
            question: 'Who is eligible to apply?',
            answer: "We're supporting startups established in the last decade with VC funding or bootstrapped/self-funded. If you don't meet these requirements yet but are in the process of meeting them, feel free to reach out so we can see how we can support your startup."
        },
        {
            question: 'What are the limits of the Scale plan?',
            answer: 'The Appwrite Scale plan has ample room for growth and can handle production applications of all sizes. We have set generous limits to ensure most applications can grow comfortably within those limits without incurring high bills. Please review our <a class="web-link is-inline" href="/pricing">pricing page</a> for a full overview of the Scale plan limits.'
        },
        {
            question: 'What happens if we scale overnight?',
            answer: `Appwrite has the resources to handle large amounts of traffic, ensuring stability and room for scale for your application. We can also offer increased support and on-call help during your launch.`
        },
        {
            question: "What's included in the Appwrite for Startups program?",
            answer: 'Startups joining the program get access to everything Appwrite Scale offers. This includes Cloud credits, unlimited team members, and premium email support. In addition, we provide you with special swag, and you get a program manager and a private Discord channel. Read more about it in our <a class="web-link is-inline" href="/blog/post/announcing-appwrite-startups-program">announcement</a>.'
        },
        {
            question: 'What kind of support do we get?',
            answer: 'When building with Appwrite, you have access to one of the most active communities that can help you when you have questions. As part of the Startup program, we also provide you with a private Discord channel where you get access to our support team, and you will have a dedicated program manager for non-technical questions.'
        },
        {
            question:
                'What if we need more resources than what is offered in the Startups program?',
            answer: 'If you need more resources than Appwrite Scale, we can discuss your needs and create a more tailored and custom plan.'
        },
        {
            question:
                'I am already using another backend as a service provider. How do I migrate to Appwrite?',
            answer: 'We have a <a class="web-link is-inline" href="/docs/advanced/migrations">migration tool</a> to help you transition from other platforms. If you need additional assistance, we are here to help.'
        },
        {
            question: 'What happens after the 12 months run out?',
            answer: 'A month before the end of the term, we will re-evaluate your situation together and provide you with a fitting plan. Depending on your situation, this could mean you have to start paying full price, a reduced price, or nothing at all.'
        },
         {
            question: 'I need to sign a BAA. Can I do this with Appwrite?',
            answer: 'Yes, we can provide you with this.'
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
    style="--p-toggle-border-color: var(--web-color-smooth);"
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
                            <span class="web-label web-u-color-text-primary">
                                {faqItem.question}
                            </span>
                            <div class="icon web-u-color-text-primary">
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
                            <span class="icon-cheveron-down" aria-hidden="true" />
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
