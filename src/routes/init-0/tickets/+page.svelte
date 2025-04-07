<script lang="ts">
    import { page } from '$app/state';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import Ticket from '../(components)/Ticket.svelte';
    import TicketPreview from '../(components)/TicketPreview.svelte';
    import { getMockContributions, loginGithub } from '../helpers';
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="hero">
        <div class="desktop-left">
            <h1 class="text-display font-aeonik-pro">
                <span style:font-weight="500">
                    <span class="text-primary">init</span><span class="web-u-color-text-accent"
                        >_</span
                    >
                </span>
                launched on February 26th, 2024
            </h1>
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

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    h1 {
        margin-block-start: 3.5rem;
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
