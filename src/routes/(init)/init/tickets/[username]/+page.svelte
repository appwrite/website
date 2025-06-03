<script lang="ts">
    import { page } from '$app/state';
    import Spinner from '$lib/components/shared/spinner.svelte';

    import { Button, Icon } from '$lib/components/ui';
    import { createCopy } from '$lib/utils/copy';
    import TicketCard from '../(components)/ticket-card.svelte';
    import { stickerPack } from '../customize/+page.svelte';
    import { initDates } from '../../+page.svelte';
    import { enhance } from '$app/forms';
    import InitGiveaway from '$routes/(init)/init/(assets)/init-giveaway.png';
    import { Media } from '$lib/UI';
    import { FooterNav, MainFooter } from '$lib/components';

    const { data } = $props();

    let firstName = data.ticket?.name?.split(/\s/)[0] ?? '';
    let id = data.ticket?.id.toString().padStart(6, '0');
    const ticketUrl = `${page.url.origin}/init/tickets/${data.ticket.gh_user}`;
    const ogImage = `${ticketUrl}/og`;

    const { copied, copy } = createCopy(page.url.href);

    let claiming = $state<boolean>(false);

    const shareTextOptions = [
        `Join us during the week of ${initDates} to celebrate everything new with @appwrite. Claim your ticket here 👇 ${ticketUrl}`,
        `Come celebrate everything new with @appwrite from ${initDates}! Don't miss out on the latest features and updates. Get your ticket ASAP! 📅 ${ticketUrl}`,
        `Don't miss out on init @appwrite from ${initDates}. Get your ticket now and join us for a week of innovation. 🚀 ${ticketUrl}`,
        `Join us ${initDates} to explore everything new with @appwrite. Reserve your spot and be the first to know about the latest features 📌 ${ticketUrl}`,
        `Join the fun! We're celebrating everything new with @appwrite from ${initDates}. Secure your ticket here 🎟️ ${ticketUrl}`,
        `We're celebrating everything new with @appwrite from ${initDates}. Come join us and see what's in store. Get your ticket 🗓️ ${ticketUrl}`,
        `Join us for an incredible week of exploring everything new with @appwrite, ${initDates}. Get your ticket here ✨ ${ticketUrl}`,
        `Join us ${initDates} to see everything new with @appwrite. Claim your ticket and be the first to experience the FRESH updates 👇 ${ticketUrl}`,
        `Let's celebrate everything new with @appwrite from ${initDates}. Grab your ticket and join us for a week full of surprises 🎁 ${ticketUrl}`,
        `Be part of everything new with @appwrite from ${initDates}. Get your ticket here: ${ticketUrl}`,
        `Join the fun! ${initDates}, let's check out everything new with @appwrite together. Get your ticket and don't miss out 🎟️ ${ticketUrl}`,
        `I'm attending init @appwrite from ${initDates}. Come along and experience the latest features with us. Get your ticket 🎫 ${ticketUrl}`,
        `Don't miss out on the fun! Join us at @appwrite init from ${initDates}. Get your ticket here 🔥 ${ticketUrl}`,
        `My ticket looks so good! I'll be at @appwrite init from ${initDates}. Join us and be the first to explore the updates 🌐 ${ticketUrl}`,
        `Spot my GitHub contribution graph! 🔥 Let's explore everything new with @appwrite from ${initDates}. Secure your spot right away! ${ticketUrl}`,
        `I'm excited for everything new with @appwrite ${initDates}. Come check out all the cool stuff with me! ${ticketUrl}`,
        `It's finally happening! Grab your ticket here and don't miss out on everything new with @appwrite from ${initDates} 🚀 ${ticketUrl}`,
        `Join us for a week of everything new with @appwrite, ${initDates}. Get your ticket here: ${ticketUrl}`,
        `Don't miss out on everything new with @appwrite from ${initDates}. Get your ticket here: 💡 ${ticketUrl}`,
        `Let's check out everything new with @appwrite from ${initDates}. Secure your ticket and join us for a week full of awesomeness! 🎉 ${ticketUrl}`
    ];

    let twitterText = $state(
        encodeURIComponent(shareTextOptions[Math.floor(Math.random() * shareTextOptions.length)])
    );
</script>

<svelte:head>
    <!-- Title -->
    <title>Init - {firstName}'s ticket</title>
    <meta property="og:title" content="Appwrite init_ - {firstName}'s Ticket" />
    <meta name="twitter:title" content="Appwrite init_ - {firstName}'s Ticket" />
    <!-- Description -->
    <meta
        name="description"
        content="Get your own ticket for Appwrite's brand new release event and get the chance to win prizes."
    />
    <meta
        property="og:description"
        content="Get your own ticket for Appwrite's brand new release event and get the chance to win prizes."
    />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="568" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="border-offset size-full border-dashed">
    <div class="outer-container border-offset border-b-2 border-dashed">
        <div class="container">
            <div class="border-offset grid min-h-[80vh] grid-cols-1 md:grid-cols-12">
                <div
                    class="border-offset divide-offset grid place-items-center border-r-2 border-l-2 border-dashed md:col-span-6 md:border-r-0"
                >
                    <div
                        class="extended-borders-top row-span-2 hidden h-full w-full px-8 md:block"
                    ></div>
                    <div class="flex h-full w-full items-center px-4 py-6 md:px-12">
                        <div class="flex flex-1 flex-col gap-2">
                            <a href="/init" class="text-primary group mb-2 flex items-center gap-2">
                                <Icon
                                    name="arrow-left"
                                    class="transition-transform group-hover:-translate-x-0.5"
                                />
                                Back to Init</a
                            >
                            <h2 class="text-display font-aeonik-pro text-primary">
                                {#if data.isCurrentUsersTicket}
                                    Here's your Init ticket
                                {:else}
                                    {data.ticket.name.split(' ')[0]}'s ticket
                                {/if}
                                <span class="text-display font-aeonik-pro text-primary"
                                    ><span class="text-accent">#</span>{id}</span
                                >
                            </h2>

                            <p class="text-body text-secondary mt-2 font-medium">
                                Thank you for registering for Init. Share your ticket on social
                                media to enter the raffle to win limited edition swag.
                            </p>
                            <div class="mt-8 flex items-center gap-4">
                                {#if data.isCurrentUsersTicket}
                                    <Button
                                        class="w-1/2! active:scale-98"
                                        variant="secondary"
                                        onclick={copy}
                                    >
                                        {#if $copied}
                                            <Icon name="check" />
                                            Copied!
                                        {:else}
                                            <Icon name="customize" />
                                            Copy ticket URL
                                        {/if}
                                    </Button>
                                    <Button
                                        class="text-primary w-1/2! active:scale-98"
                                        variant="secondary"
                                        href={`https://twitter.com/intent/tweet?text=${twitterText}`}
                                        target="_blank"
                                    >
                                        <Icon name="x" />
                                        Share
                                    </Button>
                                {:else}
                                    <form
                                        action="?/oauth"
                                        method="post"
                                        use:enhance={async () => {
                                            claiming = true;
                                        }}
                                        class="w-1/2"
                                    >
                                        <Button class="w-full!" disabled={claiming}>
                                            {#if claiming}
                                                <Spinner />
                                            {:else}
                                                <Icon name="github" class="text-primary" />
                                            {/if}Claim your Ticket</Button
                                        >
                                    </form>

                                    <Button href="/init" variant="secondary" class="w-1/2!"
                                        >Go to Init</Button
                                    >
                                {/if}
                            </div>
                        </div>
                    </div>
                    <div class="extended-borders-bottom row-span-2 h-full w-full px-8"></div>
                </div>

                <div
                    class="border-offset flex flex-col items-center justify-center border-x-2 border-dashed bg-black/24 px-4 py-8 md:col-span-6"
                >
                    <TicketCard
                        {stickerPack}
                        {...data.ticket}
                        contributions={data.streamed.contributions}
                    />

                    {#if data.isCurrentUsersTicket}
                        <Button
                            class="mt-8 active:scale-98"
                            variant="secondary"
                            href="/init/tickets/customize"
                        >
                            <Icon name="customize" />
                            Customize ticket
                        </Button>
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-[44px] flex flex-col md:mt-[87px]">
        <div class="mb-[87px] flex flex-col-reverse gap-4 md:flex-row md:justify-between">
            <div>
                <h2 class="text-title text-primary font-aeonik-pro md:mb-4">
                    Get your ticket and<br />enter our giveaway
                </h2>
                <p class="text-secondary text-body mb-10 md:mb-6">
                    Create, customize and share your ticket to<br />get the chance to win exclusive
                    Init swag.
                </p>
                <Button href="/init/tickets/customize" variant="secondary">Claim your ticket</Button
                >
            </div>

            <Media
                src={InitGiveaway}
                alt="Init giveaway"
                class="web-media mb-12 md:mb-0 md:max-h-[370px] md:max-w-[568px]"
            />
        </div>

        <div class="footer-section extended-borders-footer">
            <FooterNav />

            <MainFooter />
        </div>
    </div>
</div>

<style lang="scss">
    .extended-borders-top,
    .extended-borders-bottom,
    .extended-borders-footer {
        z-index: 0;
        position: relative;
    }

    .extended-borders-top::after,
    .extended-borders-bottom::before,
    .extended-borders-footer::before {
        content: '';
        position: absolute;
        border-top: 2px dashed var(--color-offset);
        pointer-events: none;
        z-index: -1;
        height: 0;
    }

    .extended-borders-top::after {
        right: 0;
        bottom: 0;
        left: -100%;
    }

    .extended-borders-bottom::before {
        top: 0;
        right: 0;
        left: -100%;

        @media (max-width: 768px) {
            right: -100% !important;
        }
    }

    @media (min-width: 768px) {
        .extended-borders-footer::before {
            left: -100%;
            right: -100%;
        }
    }

    .footer-section {
        & :global(.web-footer-nav) {
            border-block-start: none;
            margin-block-start: unset;

            @media (max-width: 768px) {
                border-block-start: solid 0.0625rem hsl(var(--web-color-smooth));
            }
        }
    }
</style>
