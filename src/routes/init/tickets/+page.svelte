<script lang="ts">
    import { page } from '$app/stores';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';

    import Ticket from '../(components)/Ticket.svelte';
    import TicketPreview from '../(components)/TicketPreview.svelte';
    import { getMockContributions, loginGithub } from '../helpers';
</script>

<svelte:head>
    <title>Appwrite init_ - Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div class="desktop-left">
            <h1 class="aw-display">
                <span style:font-weight="500">
                    <span class="aw-u-color-text-primary">init</span><span
                        class="aw-u-color-text-accent">_</span
                    >
                </span>
                launches on February 26th
            </h1>

            <div class="info">
                <p class="aw-label aw-u-color-text-primary">
                    Register today and claim your Init ticket
                </p>
                <button
                    class="aw-button is-full-width u-margin-block-start-16"
                    on:click={loginGithub}
                >
                    <div class="aw-icon-github" />
                    <span class="text">Register with GitHub account</span>
                </button>
                <a
                    href="https://cloud.appwrite.io/login?forceRedirect={$page.url
                        .origin}/init/tickets"
                    class="aw-button is-full-width is-secondary u-margin-block-start-8"
                >
                    <div class="aw-icon-appwrite aw-u-color-text-primary" />
                    <span class="text">Register with Appwrite account</span>
                </a>
                <p class="u-margin-block-start-16">
                    By registering, you agree to our <a href="/terms" class="aw-link is-inline"
                        >Terms and Conditions</a
                    >
                    and <a href="/privacy" class="aw-link is-inline">Privacy Policy</a>
                </p>
            </div>
        </div>

        <div class="ticket-preview-wrapper">
            <TicketPreview>
                <div class="ticket-1">
                    <Ticket name="eldadfux" id={123123} />
                </div>
                <div class="ticket-2">
                    <Ticket
                        name="Walter"
                        gh_user="walterob"
                        id={1}
                        contributions={getMockContributions()}
                    />
                </div>
                <div class="ticket-3">
                    <Ticket name="Sara" gh_user="sara_k" id={10} />
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

    .info {
        p:first-child {
            margin-block-start: 4rem;
        }
    }

    .ticket-preview-wrapper {
        display: contents;
    }

    :global(.ticket-preview) {
        .ticket-1 {
            --base-width: 24.375rem;
            inset-inline-start: 50%;
            --p-translate-x: calc(-50% - 480px);
            block-size: auto;
            opacity: 0.5;
        }

        .ticket-2 {
            inset-inline-start: 50%;
            --p-translate-x: -50%;
            --base-width: min(40vw, 28.75rem);
        }

        .ticket-3 {
            --base-width: 24.375rem;
            inset-inline-start: 50%;
            --p-translate-x: calc(-50% + 480px);
            opacity: 0.25;
        }

        [class^='ticket-'] {
            position: absolute;
            inset-block-start: 50%;
            translate: var(--p-translate-x, 0) -50%;
        }
    }

    .ticket-preview-wrapper :global(.ticket-preview::after) {
        content: '';
        position: absolute;
        inset: 1px;
        background: linear-gradient(
            0deg,
            #19191c 7.06%,
            rgba(25, 25, 28, 0.9) 21.93%,
            rgba(25, 25, 28, 0) 88.57%
        );
        border-radius: var(--p-border-radius);
        z-index: 10;
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

            p:first-child {
                margin-block-start: 0;
                text-align: center;
            }
        }

        .ticket-preview-wrapper {
            :global(.ticket-preview) {
                grid-column: 1 / -1;
            }

            .ticket-1,
            .ticket-3 {
                opacity: 0;
            }

            .ticket-2 {
                --base-width: min(60vw, 300px);
            }
        }
    }
</style>
