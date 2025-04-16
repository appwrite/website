<script lang="ts">
    import { page } from '$app/state';
    import Spinner from '$lib/components/shared/spinner.svelte';

    import { Button, Icon } from '$lib/components/ui';
    import { createCopy } from '$lib/utils/copy';
    import TicketCard from '../(components)/ticket-card.svelte';
    import { loginGithub } from '../../(utils)/github';
    import { stickerPack } from '../customize/+page.svelte';
    import { initDates } from '../../+page.svelte';

    const { data } = $props();

    let firstName = data.ticket?.name?.split(/\s/)[0] ?? '';
    let id = data.ticket?.id.toString().padStart(6, '0');
    const ticketUrl = `${page.url.origin}/init/tickets/${data.ticket.$id}`;
    const ogImage = `${ticketUrl}/og`;

    const { copied, copy } = createCopy(page.url.href);

    let claiming = $state<boolean>(false);

    const handleLogin = () => {
        claiming = true;
        loginGithub();
    };

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

<div class="container">
    <div
        class="border-offset grid min-h-[80vh] grid-cols-1 border-b-2 border-dashed md:grid-cols-12"
    >
        <div
            class="border-offset divide-offset grid place-items-center divide-y-2 divide-dashed border-r-2 border-l-2 border-dashed md:col-span-6 md:border-r-0"
        >
            <div class="row-span-2 h-full w-full px-8"></div>
            <div class="row-span-8 flex h-full w-full items-center px-8 py-6 md:px-12">
                <div class="flex flex-1 flex-col gap-2">
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
                        Register today and claim your Init launch week ticket and get the chance to
                        win prizes.
                    </p>
                    <div class="mt-4 flex items-center gap-4">
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
                            <Button onclick={handleLogin} class="w-1/2!" disabled={claiming}>
                                {#if claiming}
                                    <Spinner />
                                {:else}
                                    <Icon name="github" class="text-primary" />
                                {/if}Register with GitHub</Button
                            >
                            <Button href="/init" variant="secondary" class="w-1/2!"
                                >Go to Init</Button
                            >
                        {/if}
                    </div>
                </div>
            </div>
            <div class="row-span-2 h-full w-full px-8"></div>
        </div>
        <div
            class="border-offset flex flex-col items-center justify-center border-x-2 border-dashed bg-black/24 py-8 md:col-span-6"
        >
            <TicketCard {stickerPack} {...data.ticket} />

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
