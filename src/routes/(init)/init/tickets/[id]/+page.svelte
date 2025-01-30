<script lang="ts">
    import { page } from '$app/stores';
    import { createCopy } from '$lib/utils/copy';
    import TicketCard from '../(components)/ticket-card.svelte';

    export let data;

    let firstName = data.ticket?.name?.split(/\s/)[0] ?? '';
    let id = data.ticket?.id.toString().padStart(6, '0');
    const ogImage = `${$page.url.origin}/init/tickets/${data.ticket.$id}/og`;

    const { copied, copy } = createCopy($page.url.href);
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
    <div class="grid min-h-[80vh] grid-cols-1 md:grid-cols-12">
        <div
            class="border-offset divide-offset grid grid-rows-12 place-items-center divide-y-2 divide-dashed border-l-2 border-dashed md:col-span-6"
        >
            <div class="row-span-2 h-full w-full px-8" />
            <div class="row-span-8 flex h-full w-full items-center px-12">
                <div class="flex flex-1 flex-col gap-2">
                    <h2 class="text-display text-primary">Walter's ticket</h2>
                    <span class="text-display text-primary"
                        ><span class="text-accent">#</span>{id}</span
                    >
                    <p class="text-body text-secondary mt-2 font-medium">
                        Register today and claim your Init launch week ticket and get the chance to
                        win prizes.
                    </p>
                    <button class="web-button mt-4">Register with GitHub</button>
                </div>
            </div>
            <div class="row-span-2 h-full w-full px-8" />
        </div>
        <div
            class="border-offset flex items-center justify-center border-x-2 border-dashed bg-black/24 py-8 md:col-span-6"
        >
            <TicketCard name={firstName} id={1} />
        </div>
    </div>
</div>
