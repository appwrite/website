<script lang="ts">
    import { page } from '$app/stores';
    import Spinner from '$lib/components/shared/spinner.svelte';
    import { Button, Icon } from '$lib/components/ui';
    import { createCopy } from '$lib/utils/copy';
    import TicketCard from '../(components)/ticket-card.svelte';
    import { loginGithub } from '../../(utils)/github';
    import { stickerPack } from '../customize/+page.svelte';

    export let data;

    let firstName = data.ticket?.name?.split(/\s/)[0] ?? '';
    let id = data.ticket?.id.toString().padStart(6, '0');
    const ogImage = `${$page.url.origin}/init/tickets/${data.ticket.$id}/og`;

    const { copied, copy } = createCopy($page.url.href);

    let claiming: boolean = false;

    const handleLogin = () => {
        claiming = true;
        loginGithub();
    };
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
                                href="/init/tickets/customize"
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
<!-- <button
                        class="text-primary flex cursor-pointer items-center gap-2 transition active:scale-98"
                        onclick={copy}
                    >
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.15 7H6.35C5.78995 7 5.50992 7 5.29601 7.10899C5.10785 7.20487 4.95487 7.35785 4.85899 7.54601C4.75 7.75992 4.75 8.03995 4.75 8.6V14.4C4.75 14.9601 4.75 15.2401 4.85899 15.454C4.95487 15.6422 5.10785 15.7951 5.29601 15.891C5.50992 16 5.78995 16 6.35 16H12.15C12.7101 16 12.9901 16 13.204 15.891C13.3922 15.7951 13.5451 15.6422 13.641 15.454C13.75 15.2401 13.75 14.9601 13.75 14.4V8.6C13.75 8.03995 13.75 7.75992 13.641 7.54601C13.5451 7.35785 13.3922 7.20487 13.204 7.10899C12.9901 7 12.7101 7 12.15 7Z"
                                stroke="#E4E4E7"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.75 5.125V5C7.75 4.44772 8.19772 4 8.75 4H15.75C16.3023 4 16.75 4.44772 16.75 5V12C16.75 12.5523 16.3023 13 15.75 13H15.625"
                                stroke="#E4E4E7"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {#if $copied}
                            Copied
                        {:else}
                            Copy ticket URL
                        {/if}</button
                    > -->
