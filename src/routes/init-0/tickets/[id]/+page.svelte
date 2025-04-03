<script lang="ts">
    import { page } from '$app/stores';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { createCopy } from '$lib/utils/copy';
    import TicketPreview from '$routes/init-0/(components)/TicketPreview.svelte';
    import Ticket from '../../(components)/Ticket.svelte';

    let { data } = $props();

    let firstName = data.ticket?.name?.split(/\s/)[0] ?? '';
    const ogImage = `${$page.url.origin}/init-0/tickets/${data.ticket.$id}/og`;

    const { copied, copy } = createCopy($page.url.href);
</script>

<svelte:head>
    <!-- Title -->
    <title>Init - {firstName}'s ticket</title>
    <meta property="og:title" content="Appwrite init_ - {firstName}'s Ticket" />
    <meta name="twitter:title" content="Appwrite init_ - {firstName}'s Ticket" />
    <!-- Description -->
    <meta
        name="description"
        content="Get your own ticket for Appwrite's brand new release event and get the chance to win prizes."
    />
    <meta
        property="og:description"
        content="Get your own ticket for Appwrite's brand new release event and get the chance to win prizes."
    />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="568" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="hero">
        <div class="desktop-left">
            <div class="header">
                <h1 class="text-display font-aeonik-pro">
                    Join <span class="text-primary" style:font-weight="500">
                        init<span class="web-u-color-text-accent">_</span>
                    </span><br />26 Feb - 1 March
                </h1>
            </div>

            <div class="info">
                <p class="text-label u-margin-block-start-16">
                    Register today and claim your Init ticket.
                </p>
                <div class="u-flex u-cross-center u-gap-16 u-margin-block-start-32">
                    <a class="web-button" href="/init-0/tickets">
                        <span class="text">Get my Init ticket</span>
                    </a>
                    <button class="web-button is-secondary" onclick={copy}>
                        <span class="web-icon-{$copied ? 'check' : 'copy'} text-primary"></span>

                        <span class="text">Copy ticket URL</span>
                    </button>
                </div>
            </div>
        </div>

        <TicketPreview>
            <div class="ticket-holder">
                <Ticket {...data.ticket} contributions={data.streamed.contributions} />
            </div>
        </TicketPreview>
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
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
                    margin-block-start: 1rem;

                    .web-button {
                        inline-size: 100%;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1023px) {
        .container {
            padding-block-start: 0;

            :global(nav) {
                margin-block-start: 0;
            }
        }
    }
</style>
