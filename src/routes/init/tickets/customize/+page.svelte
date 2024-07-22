<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { dequal } from 'dequal/lite';
    import Ticket from '../../(components)/Ticket.svelte';
    import TicketDetails from '$routes/init/(components)/TicketDetails.svelte';
    import TicketActions from '$routes/init/(components)/TicketActions.svelte';
    import { getMockContributions } from '$routes/init/helpers';

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
        content="Join Init August 5th-10th. Register today and claim your ticket."
    />
</svelte:head>

<Main>
    <div class="content web-container">
        <div class="details">
            <h2 class="web-label web-u-color-text-secondary" style:font-size="14px">
                You've got ticket number: #{id?.toString().padStart(6, '0')}
            </h2>
            <h1 class="web-title web-u-color-text-primary">
                <span style:font-weight="500">init</span>
                will begin on August 5th<span class="web-u-color-text-accent">.</span>
            </h1>
        </div>
        <div class="ticket">
            <TicketPreview>
                <Ticket
                    {...data.ticket}
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
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 96px auto -32px auto;
        gap: 64px;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 32px;
        }
    }

    .ticket {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .item {
            height: 75px;
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
