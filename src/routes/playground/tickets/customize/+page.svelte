<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import Lockup from '../../(components)/Lockup.svelte';
    import Window from '../../(components)/retro-ui/Window.svelte';
    import Ticket from '../../(components)/ticket/Ticket.svelte';
    import { dequal } from 'dequal/lite';
    import { BASE_URL } from '../constants';
    import { classNames } from '$lib/utils/classnames';

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
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<Main>
    <div
        class={classNames(
            'checkerboard relative flex h-full w-full items-center justify-center bg-[#F4F4F7] !py-10 px-8',
            'after:absolute after:inset-0 after:-z-0 after:bg-gradient-to-b after:from-white after:via-white after:via-5% after:to-transparent'
        )}
    >
        <Window theme="light" class="flex aspect-[1.28/.74] h-full flex-1 flex-col">
            <span slot="toolbar">Customize Ticket</span>
            <div
                slot="content"
                class="mt-4 grid flex-1 grid-cols-1 items-center justify-between border-b-2 border-l-2 border-black bg-white outline-2 outline-[#D8D8DB] [outline-style:inset] md:grid-cols-12 md:flex-row"
            >
                <div class="retro col-span-3 flex h-full flex-1 flex-col bg-[#EDEDF0] px-2">
                    <Lockup class="mx-auto w-3/4" />

                    <nav class="mt-auto mb-3 flex flex-col gap-2 px-3">
                        <button
                            class="bg-greyscale-100 retro font-aeonik-fono text-primary w-full py-2 text-sm uppercase"
                            >{name.split(' ')[0]}'s Ticket</button
                        >
                        <button
                            class="bg-greyscale-100 retro font-aeonik-fono text-primary w-full py-2 text-sm uppercase"
                            >My Badges</button
                        >
                        <button
                            class="bg-greyscale-100 retro font-aeonik-fono text-primary w-full py-2 text-sm uppercase"
                            >Edit Ticket</button
                        >
                    </nav>
                </div>
                <div class="col-span-9 flex h-full items-center justify-center bg-white px-20">
                    <Ticket {...data.ticket} contributions={data.streamed.contributions} />
                </div>
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
