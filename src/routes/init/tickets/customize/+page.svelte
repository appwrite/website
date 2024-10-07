<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { dequal } from 'dequal/lite';
    import {
        TicketPreview,
        Ticket,
        TicketActions,
        TicketDetails
    } from '$routes/init/(components)/ticket/index.js';

    export let data;

    let originalName = data.ticket?.name ?? '';
    let name = originalName;
    let originalTitle = data.ticket?.title ?? '';
    let title = originalTitle;
    let originalShowGitHub = data.ticket?.show_contributions ?? true;
    let showGitHub = originalShowGitHub;

    let customizing = false;
    let saving = false;

    $: modified = !dequal(
        {
            name: originalName,
            title: originalTitle,
            showGitHub: originalShowGitHub
        },
        { name, title, showGitHub }
    );

    async function saveTicket() {
        if (!modified) return;

        saving = true;

        let response = await fetch(`/init/tickets/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                title,
                showGitHub
            })
        });

        if (response.ok) {
            originalName = name;
            originalTitle = title;
            originalShowGitHub = showGitHub;
        }

        customizing = false;
        saving = false;
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
                <h1 class="text-display font-aeonik-pro">
                    Ready, set, <span class="text-primary" style:font-weight="500"> init </span>
                </h1>
            </div>

            <div class="info">
                <p class="text-label mt-4">
                    Join us during the week of August 19–23 to celebrate everything new with
                    Appwrite.
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
                <TicketActions {saveTicket} bind:customizing bind:showGitHub {modified} {saving} />
            </div>
        </div>
    </div>

    <div class="container">
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
    .container {
        padding-block-start: 0;

        :global(nav) {
            margin-block-start: 0;
        }
    }

    .text-display font-aeonik-pro {
        margin-bottom: -48px;
    }

    @media screen and (min-width: 768px) {
        .text-display font-aeonik-pro {
            margin-bottom: 0;
        }
    }
</style>
