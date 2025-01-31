<script lang="ts">
    import { dequal } from 'dequal/lite';
    import { BASE_URL, getMockContributions } from '$routes/(init)/init/utils';
    import TicketCard from '../(components)/ticket-card.svelte';

    export let data;

    let originalName = data.ticket?.name ?? '';
    let name = originalName;
    let originalTitle = data.ticket?.title ?? '';
    let title = originalTitle;
    let originalShowGitHub = data.ticket?.show_contributions ?? true;
    let showGitHub = originalShowGitHub;
    let id = data.ticket?.id.toString().padStart(6, '0');

    console.log({ data });

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
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<div class="container">
    <div class="grid min-h-[80vh] grid-cols-1 md:grid-cols-12">
        <div
            class="border-offset divide-offset grid grid-rows-12 place-items-center divide-y-2 divide-dashed border-l-2 border-dashed md:col-span-6"
        >
            <div class="row-span-2 h-full w-full px-8" />
            <div class="row-span-8 flex h-full w-full items-center px-12">
                <div class="flex flex-1 flex-col gap-2">
                    <h2 class="text-display text-primary">{data.ticket.name}'s ticket</h2>
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
            <TicketCard
                name={data.ticket.name}
                id={data.ticket.id}
                contributions={getMockContributions()}
            />
        </div>
    </div>
</div>
