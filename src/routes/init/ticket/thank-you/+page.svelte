<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import Ticket from '../../(components)/Ticket.svelte';

    export let data;

    let name = data.ticket?.name ?? '';
    const id = data.ticket?.id ?? 0;
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
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
                <a
                    href="/init/ticket/customize"
                    class="aw-button is-full-width u-margin-block-start-32"
                >
                    <span class="text">Customize ticket</span>
                </a>

                <div class="u-flex u-cross-center u-gap-16 u-margin-block-start-16">
                    <button class="aw-button is-full-width is-secondary" disabled>
                        <div class="aw-icon-copy aw-u-color-text-primary" />
                        <span class="text">Copy ticket URL</span>
                    </button>
                    <button class="aw-button is-full-width is-secondary" disabled>
                        <div class="aw-icon-x aw-u-color-text-primary" />
                        <span class="text">Share your ticket</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="ticket-preview-wrapper">
            <TicketPreview>
                <div class="ticket-holder">
                    <Ticket
                        {name}
                        user={data.ticket?.gh_user}
                        id={data.ticket?.id ?? 0}
                        contributions={data.contributions}
                    />
                </div>
            </TicketPreview>
        </div>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    h1 {
        margin-block-start: 3.5rem;
    }

    @media screen and (max-width: 511px) {
        .ticket-preview-wrapper {
            :global(.ticket-preview) {
                border-radius: 0;
            }
        }
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

        .ticket-preview-wrapper {
            grid-column: 1 / -1;
        }
    }
</style>
