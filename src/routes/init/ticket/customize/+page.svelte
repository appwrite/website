<script lang="ts">
    import { goto } from '$app/navigation';
    import { PUBLIC_APPWRITE_COL_INIT_ID, PUBLIC_APPWRITE_DB_INIT_ID } from '$env/static/public';
    import { appwriteInit } from '$lib/appwrite/init';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import { slide } from 'svelte/transition';
    import Ticket from '../../(components)/Ticket.svelte';
    import { invalidateTicket } from '../constants';
    import Form from './form.svelte';
    import { dequal } from 'dequal/lite';

    export let data;

    let name = data.ticket?.name ?? '';
    let tribe: string | null = data.ticket?.tribe ?? null;
    let showGitHub = data.ticket?.show_contributions ?? true;

    $: modified = !dequal(
        {
            name: data.ticket?.name,
            tribe: data.ticket?.tribe,
            showGitHub: data.ticket?.show_contributions
        },
        { name, tribe, showGitHub }
    );

    let drawerOpen = false;

    let saving = false;

    async function goBack(e: Event) {
        e.preventDefault();
        const href = '/init/ticket';

        const ticketId = data.ticket?.$id;
        if (ticketId === undefined || !modified) {
            return goto(href);
        }

        saving = true;
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
        await invalidateTicket();
        await goto(href);
    }
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div style:margin-block-start="0.625rem">
            <button class="aw-link is-secondary u-cross-center" on:click={goBack} disabled={saving}>
                {#if saving}
                    <div class="loader is-small" style:margin-inline-end="0.25rem" />
                {:else}
                    <span class="aw-icon-chevron-left" aria-hidden="true" />
                {/if}
                <span>
                    {#if saving}
                        Saving...
                    {:else if modified}
                        Save and go back
                    {:else}
                        Back
                    {/if}
                </span>
            </button>
            <h1 class="aw-title aw-u-color-text-primary" style:margin-block-start="1.5rem">
                Customize ticket<span class="aw-u-color-text-accent">_</span>
            </h1>

            <div class="desktop">
                <Form bind:name bind:tribe bind:showGitHub />
            </div>
        </div>
        <TicketPreview>
            <div class="ticket-holder">
                <Ticket
                    {name}
                    user={data.ticket?.gh_user}
                    id={data.ticket?.id ?? 0}
                    {tribe}
                    contributions={showGitHub ? data.contributions : undefined}
                    variant="pink"
                />
            </div>
        </TicketPreview>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>

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
                <Form bind:name bind:tribe />
            </div>
        {/if}
    </div>
</Main>

<style lang="scss">
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
