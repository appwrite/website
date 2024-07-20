<script lang="ts">
    import { page } from '$app/stores';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { createCopy } from '$lib/utils/copy';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { dequal } from 'dequal/lite';
    import { fade } from 'svelte/transition';
    import Ticket from '../../(components)/Ticket.svelte';
    import Form from '../../(components)/Form.svelte';
    import { Drawer } from 'vaul-svelte';
    import { getMockContributions } from '$routes/init/helpers';

    export let data;

    let name = data.ticket?.name ?? '';
    let title = data.ticket?.title ?? '';
    const id = data.ticket?.id ?? 0;
    let showGitHub = data.ticket?.show_contributions ?? true;

    $: modified = !dequal(
        {
            name: data.ticket?.name,
            title: data.ticket?.title,
            showGitHub: data.ticket?.show_contributions
        },
        { name, title, showGitHub }
    );

    async function saveTicket() {
        const ticketId = data.ticket?.$id;
        if (ticketId === undefined || !modified) {
            return;
        }

        await fetch(`/init/tickets/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ticketId,
                name,
                title,
                showGitHub
            })
        });
    }

    const ticketUrl = `${$page.url.origin}/init/tickets/${data.ticket.$id}`;
    const { copied, copy } = createCopy(ticketUrl);
    $: twitterText = encodeURIComponent(
        [
            `Join Init and celebrate everything new with @appwrite`,
            ``,
            `Claim your ticket. ${ticketUrl}`
        ].join('\n')
    );
</script>

<svelte:head>
    <title>Customize Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init February 26-March 1. Register today and claim your Init ticket."
    />
</svelte:head>

<Main>
    <div class="content web-container">
        <div class="details">
            <h1 class="web-title web-u-color-text-primary">
                You're registered for
                <span style:font-weight="500">init</span>
            </h1>
        </div>
        <div class="ticket">
            <TicketPreview>
                <Ticket
                    {...data.ticket}
                    {name}
                    {title}
                    contributions={data.streamed.contributions}
                    show_contributions={showGitHub}
                />
            </TicketPreview>
            <div class="buttons">
                <button class="web-button">
                    <span class="text">Customize ticket</span>
                </button>
                <button class="web-button is-secondary" on:click={copy}>
                    <div class="web-icon-{$copied ? 'check' : 'copy'} web-u-color-text-primary" />
                    <span class="text">Copy URL</span>
                </button>
                <a
                    class="web-button is-secondary"
                    href="https://twitter.com/intent/tweet?text={twitterText}"
                    target="_blank"
                >
                    <div class="web-icon-x web-u-color-text-primary" />
                    <span class="text">Post</span>
                </a>
            </div>
        </div>
    </div>

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        gap: 64px;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    :global([data-dialog-close]) {
        cursor: pointer;
    }
    :global([data-vaul-drawer]) {
        display: flex;
        flex-direction: column;
        background-color: hsl(var(--web-color-background));
        position: fixed;
        top: 103px;
        bottom: 0;
        overflow-y: auto;
        z-index: 10;
        max-width: 40vw;
        left: 0;
        padding-inline: clamp(1.25rem, 4vw, 120rem);
        border-right: 1px solid hsl(var(--web-color-border));
        // padding-right: 40px;
    }

    .web-container {
        padding-block-start: 0;

        :global(nav) {
            margin-block-start: 0;
        }
    }
</style>
