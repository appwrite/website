<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import TicketPreview from '$routes/init/(components)/TicketPreview.svelte';
    import Ticket from '../../(components)/ticket.svelte';

    export let data;

    let name = data.user?.name ?? '';
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div>
            <h1 class="aw-title aw-u-color-text-primary" style:margin-block-start="3.5rem">
                Thank you for registering for
                <span style:font-weight="500">
                    init<span class="aw-u-color-text-accent">_</span>
                </span>
            </h1>

            <p class="aw-label u-margin-block-start-16">You have received ticket #0013371</p>

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
        <TicketPreview>
            <div class="ticket-holder">
                <Ticket
                    {name}
                    user={data.user?.login}
                    id="0013371"
                    contributions={data.contributions}
                />
            </div>
        </TicketPreview>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .hero {
        display: grid;
        grid-template-columns: minmax(420px, 30%) min(65%, 700px);
        gap: 7.5rem;
        justify-content: space-between;

        padding-inline: clamp(1.25rem, 4vw, 120rem);
        padding-block-start: 4rem;

        @media screen and (max-width: 1023px) {
            grid-template-columns: 1fr;
            gap: 4rem;
        }
    }
</style>
