<script lang="ts">
    import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
    import { appwriteInit } from '$lib/appwrite/init';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { dequal } from 'dequal/lite';
    import { slide } from 'svelte/transition';
    import Ticket from '../../(components)/Ticket.svelte';
    import Form from './form.svelte';
    import { createCopy } from '$lib/utils/copy';
    import { page } from '$app/stores';

    export let data;

    let name = data.ticket?.name ?? '';
    const id = data.ticket?.id ?? 0;
    let tribe: string | undefined = data.ticket?.tribe ?? undefined;
    let showGitHub = data.ticket?.show_contributions ?? true;
    let drawerOpen = false;
    let customizing = false;

    $: modified = !dequal(
        {
            name: data.ticket?.name,
            tribe: data.ticket?.tribe,
            showGitHub: data.ticket?.show_contributions
        },
        { name, tribe, showGitHub }
    );

    async function saveTicket() {
        const ticketId = data.ticket?.$id;
        if (ticketId === undefined || !modified) {
            return;
        }

        await appwriteInit.database.updateDocument(
            PUBLIC_APPWRITE_DB_INIT_ID,
            PUBLIC_APPWRITE_COL_INIT_ID,
            ticketId,
            {
                name,
                tribe,
                show_contributions: showGitHub
            }
        );
    }

    async function goBack() {
        customizing = false;
        saveTicket();
    }

    const { copied, copy } = createCopy(`${$page.url.origin}/init/ticket/${data.ticket.$id}`);
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        {#if customizing}
            <div style:margin-block-start="0.625rem">
                <button class="aw-link is-secondary u-cross-center" on:click={goBack}>
                    <span class="aw-icon-chevron-left" aria-hidden="true" />

                    <span>Back</span>
                </button>
                <h1 class="aw-title aw-u-color-text-primary" style:margin-block-start="1.5rem">
                    Customize ticket<span class="aw-u-color-text-accent">_</span>
                </h1>

                <div class="desktop">
                    <Form bind:name bind:tribe bind:showGitHub />
                </div>
            </div>
        {:else}
            <div class="desktop-left">
                <div class="header">
                    <h1 class="aw-title aw-u-color-text-primary">
                        Thank you for registering for
                        <span style:font-weight="500">
                            init<span class="aw-u-color-text-accent">_</span>
                        </span>
                    </h1>
                    <p class="aw-label u-margin-block-start-16">
                        You have received ticket #{id.toString().padStart(6, '0')}
                    </p>
                </div>

                <div class="info">
                    <button
                        on:click={() => (customizing = true)}
                        class="aw-button is-full-width u-margin-block-start-32"
                    >
                        <span class="text">Customize ticket</span>
                    </button>

                    <div class="u-flex u-cross-center u-gap-16 u-margin-block-start-16">
                        <button class="aw-button is-full-width is-secondary" on:click={copy}>
                            <div
                                class="aw-icon-{$copied ? 'check' : 'copy'} aw-u-color-text-primary"
                            />
                            <span class="text">Copy ticket URL</span>
                        </button>
                        <button class="aw-button is-full-width is-secondary" disabled>
                            <div class="aw-icon-x aw-u-color-text-primary" />
                            <span class="text">Share your ticket</span>
                        </button>
                    </div>
                </div>
            </div>
        {/if}

        <TicketPreview>
            <div class="ticket-holder">
                <Ticket {...data.ticket} {tribe} {name} show_contributions={showGitHub} />
            </div>
        </TicketPreview>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>

    {#if customizing}
        <div class="drawer" data-state={drawerOpen ? 'open' : 'closed'}>
            <button on:click={() => (drawerOpen = !drawerOpen)}>
                <div class="inner">
                    <span class="aw-label aw-u-color-text-primary">Ticket Editor</span>
                    <span class="aw-icon-chevron-down" />
                </div>
            </button>
            {#if drawerOpen}
                <hr />
                <div class="form-wrapper" transition:slide>
                    <Form bind:name bind:tribe bind:showGitHub />
                </div>
            {/if}
        </div>
    {/if}
</Main>

<style lang="scss">
    .desktop-left {
        h1 {
            margin-block-start: 3.5rem;
        }

        @media screen and (max-width: 1023px) {
            h1 {
                margin-block-start: 0;
            }

            .info {
                grid-row: 3;

                .u-flex {
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-block-start: 0.5rem;
                }
            }
        }
    }

    .desktop {
        display: contents;
    }

    .drawer {
        display: none;
    }

    @media screen and (max-width: 1024px) {
        .desktop {
            display: none;
        }

        .drawer {
            display: flex;
            flex-direction: column;

            position: sticky;
            bottom: 0;
            padding-block: 0;
            background-color: hsl(var(--aw-color-subtle));
            backdrop-filter: blur(40px);
            z-index: 9999999;

            max-height: 100vh;
            overflow-y: auto;

            [class^='aw-icon-'] {
                transition: var(--transition);
                transform: rotate(180deg);
            }

            &[data-state='open'] {
                [class^='aw-icon-'] {
                    transform: rotate(0deg);
                }
            }

            > button {
                background: linear-gradient(
                        93deg,
                        rgba(253, 54, 110, 0.2) 0.29%,
                        rgba(35, 35, 37, 0.2) 52.57%,
                        rgba(35, 35, 37, 0.2) 100%
                    ),
                    #232325;
                padding-block: 1.8125rem;
                width: 100%;

                .inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 512px;
                    margin-inline: auto;
                    padding-inline: var(--p-padding-inline);
                }
            }

            hr {
                border-block-start: 1px solid hsl(var(--aw-color-smooth));
            }

            > .form-wrapper {
                max-width: 512px;
                height: 100%;
                overflow-y: auto;

                margin-inline: auto;
                padding-block-end: 1rem;
                padding-inline: 1.25rem;
            }
        }

        .aw-container {
            padding-block-start: 0;

            :global(nav) {
                margin-block-start: 0;
            }
        }
    }
</style>
