<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { dequal } from 'dequal/lite';
    import Ticket from '../../(components)/Ticket.svelte';
    import TicketDetails from '$routes/init/(components)/TicketDetails.svelte';
    import TicketActions from '$routes/init/(components)/TicketActions.svelte';

    export let data;

    let name = data.ticket?.name ?? '';
    let title = data.ticket?.title ?? '';
    const id = data.ticket?.id ?? 0;
    let showGitHub = data.ticket?.show_contributions ?? true;

    let customizing = false;

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
        customizing = false;
    }
</script>

<svelte:head>
    <title>Customize Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init August 19th-23rd. Register today and claim your ticket."
    />
</svelte:head>

<Main>
    <div class="hero">
        <div class="desktop-left">
            <div class="header">
                <h1 class="web-display">
                    Join <span class="web-u-color-text-primary" style:font-weight="500">
                        init
                    </span><br />August 19th-23rd
                </h1>
            </div>

            <div class="info">
                <p class="web-label u-margin-block-start-16">
                    Join us from August 19th-23rd to learn about what we've been up to at Appwrite.
                </p>
            </div>
        </div>

        <div class="ticket">
            <TicketPreview>
                <Ticket
                    {...data.ticket}
                    {name}
                    {title}
                    contributions={data.streamed?.contributions}
                    show_contributions={showGitHub}
                />
            </TicketPreview>
            <div class="item">
                <TicketDetails bind:customizing bind:name bind:title />
                <TicketActions {saveTicket} bind:customizing bind:showGitHub />
            </div>
        </div>
    </div>

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .desktop-left {
        h1 {
            margin-block-start: 3.5rem;
        }
    }
    .ticket {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;

        .item {
            min-height: 75px;
            width: 100%;
        }
    }
    .web-container {
        padding-block-start: 0;

        :global(nav) {
            margin-block-start: 0;
        }
    }
</style>
