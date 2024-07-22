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
    }
</script>

<svelte:head>
    <title>Customize Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init August 5th-10th. Register today and claim your ticket."
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
            <div class="item">
                <TicketDetails bind:customizing bind:name bind:title />
            </div>
            <TicketPreview>
                <Ticket
                    {...data.ticket}
                    {name}
                    {title}
                    contributions={data.streamed.contributions}
                    show_contributions={showGitHub}
                />
            </TicketPreview>
            <div class="item">
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
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        gap: 64px;
    }

    .ticket {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .item {
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
        }
    }
    .web-container {
        padding-block-start: 0;

        :global(nav) {
            margin-block-start: 0;
        }
    }
</style>
