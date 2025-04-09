<script lang="ts">
    import { page } from '$app/state';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { createCopy } from '$lib/utils/copy';
    import TicketPreview from '$routes/init-0/(components)/TicketPreview.svelte';
    import { dequal } from 'dequal/lite';
    import { slide } from 'svelte/transition';
    import Ticket from '../../(components)/Ticket.svelte';
    import Form from './form.svelte';
    import type { TicketVariant } from '../constants';
    import { Button, Icon } from '$lib/components/ui';

    let { data } = $props();

    let name = $state(data.ticket?.name ?? '');
    const id = data.ticket?.id ?? 0;
    let tribe: string | undefined = $state(data.ticket?.tribe ?? undefined);
    let showGitHub = $state(data.ticket?.show_contributions ?? true);
    let drawerOpen = $state(false);
    let customizing = $state(false);
    let variant: TicketVariant = $state(data.ticket.variant ?? 'default');

    let modified = $derived(
        !dequal(
            {
                name: data.ticket?.name,
                tribe: data.ticket?.tribe,
                showGitHub: data.ticket?.show_contributions
            },
            { name, tribe, showGitHub }
        )
    );

    async function saveTicket() {
        const ticketId = data.ticket?.$id;
        if (ticketId === undefined || !modified) {
            return;
        }

        await fetch(`/init-0/tickets/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ticketId,
                name,
                tribe,
                showGitHub
            })
        });
    }

    async function goBack() {
        customizing = false;
        saveTicket();
    }

    const ticketUrl = `${page.url.origin}/init-0/tickets/${data.ticket.$id}`;
    const { copied, copy } = createCopy(ticketUrl);
    let twitterText = $derived(
        encodeURIComponent(
            [
                `Join Init and celebrate everything new with @appwrite`,
                ``,
                `Claim your ticket. ${ticketUrl}`
            ].join('\n')
        )
    );
</script>

<svelte:head>
    <title>Customize Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init February 26-March 1. Register today and claim your Init ticket."
    />
</svelte:head>

<Main>
    <div class="hero">
        {#if customizing}
            <div style:margin-block-start="0.625rem">
                <button class="web-link is-secondary u-cross-center" onclick={goBack}>
                    <span class="web-icon-chevron-left" aria-hidden="true"></span>

                    <span>Back</span>
                </button>
                <h1
                    class="text-title font-aeonik-pro text-primary"
                    style:margin-block-start="1.5rem"
                >
                    Customize ticket<span class="web-u-color-text-accent">_</span>
                </h1>

                <div class="desktop">
                    <Form bind:name bind:tribe bind:showGitHub bind:variant />
                </div>
            </div>
        {:else}
            <div class="desktop-left">
                <div class="header">
                    <h1 class="text-title font-aeonik-pro text-primary">
                        Thank you for registering for
                        <span style:font-weight="500">
                            init<span class="web-u-color-text-accent">_</span>
                        </span>
                    </h1>
                    <p class="text-label u-margin-block-start-16">
                        You have received ticket #{id?.toString().padStart(6, '0')}
                    </p>
                </div>

                <div class="info">
                    <button
                        onclick={() => (customizing = true)}
                        class="web-button is-full-width u-margin-block-start-32"
                    >
                        <span class="text">Customize ticket</span>
                    </button>

                    <div class="u-flex u-cross-center u-gap-16 u-margin-block-start-16">
                        <Button variant="secondary" class="is-full-width" onclick={copy}>
                            <Icon name={$copied ? 'check' : 'copy'} class="text-primary" />
                            <span class="text">Copy ticket URL</span>
                        </Button>
                        <Button
                            variant="secondary"
                            class="is-full-width"
                            href="https://twitter.com/intent/tweet?text={twitterText}"
                            target="_blank"
                        >
                            <Icon name="x" class="text-primary" />
                            <span class="text">Share your ticket</span>
                        </Button>
                    </div>
                </div>
            </div>
        {/if}

        <TicketPreview>
            <div class="ticket-holder">
                <Ticket
                    {...data.ticket}
                    {variant}
                    {tribe}
                    {name}
                    contributions={data.streamed.contributions}
                    show_contributions={showGitHub}
                />
            </div>
        </TicketPreview>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>

    {#if customizing}
        <div class="drawer" data-state={drawerOpen ? 'open' : 'closed'}>
            <button onclick={() => (drawerOpen = !drawerOpen)}>
                <div class="inner">
                    <span class="text-label text-primary">Ticket Editor</span>
                    <span class="web-icon-chevron-down"></span>
                </div>
            </button>
            {#if drawerOpen}
                <hr />
                <div class="form-wrapper" transition:slide>
                    <Form bind:name bind:tribe bind:showGitHub bind:variant />
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
            background-color: hsl(var(--web-color-background));
            backdrop-filter: blur(40px);
            z-index: 9999999;

            max-height: 100vh;
            overflow-y: auto;

            [class^='web-icon-'] {
                transition: var(--transition);
                transform: rotate(180deg);
            }

            &[data-state='open'] {
                [class^='web-icon-'] {
                    transform: rotate(0deg);
                }
            }

            > button {
                background:
                    linear-gradient(
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
                border-block-start: 1px solid hsl(var(--web-color-smooth));
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

        .container {
            padding-block-start: 0;

            :global(nav) {
                margin-block-start: 0;
            }
        }
    }
</style>
