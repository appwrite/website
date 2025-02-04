<script lang="ts">
    import { dequal } from 'dequal/lite';
    import TicketCard from '../(components)/ticket-card.svelte';
    import { getMockContributions } from '../../(utils)/contributions';
    import Window from '../../(components)/window.svelte';

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

    console.log(name);

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
    <title>Customize Your Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<Window class="container my-10">
    <div slot="title" class="">Init Ticket<span class="text-accent">_</span></div>
    <div class="grid grid-cols-1 p-0.5 md:grid-cols-12">
        <div class="col-span-3 p-4">
            <h3 class="text-primary text-label border-offset border-b border-dashed pb-2">
                Customize ticket
            </h3>

            <input bind:value={name} type="text" />
        </div>
        <div
            class="bg-smooth col-span-9 flex w-full items-center justify-center gap-8 rounded-xl p-4 outline-2 [outline-offset:-2px] outline-[var(--color-offset)] outline-dashed"
        >
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard
                    {title}
                    {name}
                    avatar_url={data.ticket.avatar_url}
                    id={data.ticket.id}
                    contributions={getMockContributions()}
                    disableEffects
                />
                <span class="font-aeonik-fono text-x-micro text-primary">Front</span>
            </div>
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard
                    {...data.ticket}
                    title={data.ticket.title}
                    contributions={getMockContributions()}
                    disableEffects
                    flipped
                />
                <span class="font-aeonik-fono text-x-micro text-primary">Back</span>
            </div>
        </div>
    </div>
</Window>
