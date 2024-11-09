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
    import { loginGithub } from '$routes/playground/helpers';
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
        content="Join Init August 19th-23rd. Register today and claim your ticket."
    />
</svelte:head>

<Main>
    <div
        class={classNames(
            'checkerboard relative flex h-full w-full items-center justify-center bg-[#F4F4F7] !py-20 px-8',
            'after:absolute after:inset-0 after:-z-0 after:bg-gradient-to-t after:from-transparent after:via-white after:via-75% after:to-white'
        )}
    >
        <Window theme="light" class="flex aspect-[12.8/7.4] h-full flex-1 flex-col">
            <span slot="toolbar">Init_Ticket</span>
            <div
                slot="content"
                class="mt-4 flex flex-1 flex-col items-center justify-between gap-24 border-b-2 border-l-2 border-black bg-white p-8 outline-2 outline-[#D8D8DB] [outline-style:inset] md:flex-row"
            >
                <div class="flex flex-col">
                    <Lockup class="w-3/4" />
                    <h2 class="text-title text-secondary font-aeonik-pro">
                        launches on<br /> December 5th
                    </h2>

                    <div class="my-6 h-px w-full bg-black/8" />

                    <p class="text-body text-secondary mb-2 font-medium">
                        Register today and claim your ticket
                    </p>
                    <div class="my-2">
                        <button class="web-button !w-full cursor-pointer" on:click={loginGithub}>
                            <div class="web-icon-github" />
                            <span class="text">Register with GitHub account</span>
                        </button>

                        <p class="text-caption text-secondary mt-2">
                            By registering, you agree to our <a
                                href="/terms"
                                class="web-link underline">Terms and Conditions</a
                            >
                            and <a href="/privacy" class="web-link underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
                <Ticket {...data.ticket} contributions={data.streamed.contributions} />
            </div>
        </Window>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>
