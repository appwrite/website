<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import Lockup from '../../(components)/Lockup.svelte';
    import Window from '../../(components)/retro-ui/Window.svelte';
    import Ticket from '../../(components)/ticket/Ticket.svelte';
    import { dequal } from 'dequal/lite';
    import {
        TicketPreview,
        TicketActions,
        TicketDetails
    } from '$routes/init/(components)/ticket/index.js';
    import { BASE_URL } from '../constants.js';

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

        let response = await fetch(`${BASE_URL}/update`, {
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
    <div class="relative flex h-full w-full items-center justify-center bg-[#F4F4F7]">
        <Window mode="light" class="flex h-full flex-1 flex-col">
            <span slot="toolbar">Init_Ticket</span>
            <div
                slot="content"
                class="mt-4 flex flex-1 items-center justify-between gap-12 border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset]"
            >
                <div class="flex flex-col gap-2">
                    <Lockup class="w-3/4" />
                    <h2 class="text-title text-secondary font-aeonik-pro">
                        launches on<br /> December 5th
                    </h2>

                    <p class="text-body text-secondary font-medium">
                        Register today and claim your ticket
                    </p>
                </div>
                <Ticket />
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
