<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import ShineSVG from '../(assets)/shine.svg';
    import TicketPNG from '../(assets)/ticket.png';
</script>

<svelte:head>
    <title>Appwrite init_ - Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div>
            <h1 class="aw-display" style:margin-block-start="3.5rem">
                <span style:font-weight="500">
                    <span class="aw-u-color-text-primary">init</span><span
                        class="aw-u-color-text-accent">_</span
                    >
                </span>
                kicks off on January 15th
            </h1>
            <p class="aw-label aw-u-color-text-primary" style:margin-block-start="4rem">
                Register today and claim your Init ticket
            </p>
            <button class="aw-button is-full-width u-margin-block-start-16">
                <div class="aw-icon-github" />
                <span class="text">Register with GitHub Account</span>
            </button>
            <button class="aw-button is-full-width is-secondary u-margin-block-start-8">
                <div class="aw-icon-appwrite aw-u-color-text-primary" />
                <span class="text">Register with Appwrite Account</span>
            </button>
            <a
                href="/init_/ticket/customize"
                class="aw-button is-full-width is-secondary u-margin-block-start-8"
            >
                <span class="text">(DEBUG) Customize ticket without logging in</span>
            </a>
            <p class="u-margin-block-start-16">
                By registering, you agree to our <a href="/terms" class="aw-link is-inline"
                    >Terms and Conditions</a
                >
                and <a href="/privacy" class="aw-link is-inline">Privacy Policy</a>
            </p>
        </div>
        <div class="ticket-preview">
            <img class="ticket-1" src={TicketPNG} alt="" />
            <img class="ticket-2" src={TicketPNG} alt="" />
            <img class="ticket-3" src={TicketPNG} alt="" />
            <img class="shine" src={ShineSVG} alt="" />
        </div>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .hero {
        display: grid;
        grid-template-columns: minmax(500px, 40%) min(60%, 700px);
        gap: 7.5rem;
        justify-content: space-between;

        padding-inline: clamp(1.25rem, 4vw, 120rem);
        padding-block-start: 4rem;
    }

    .ticket-preview {
        --p-border-radius: 1rem;
        border: 1px solid hsl(var(--aw-color-subtle));
        border-radius: var(--p-border-radius);

        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 0.925 / 1;

        .ticket-1 {
            inset-inline-start: -15.625rem;
            inline-size: 50%;
            block-size: auto;
        }

        .ticket-2 {
            inset-inline-start: 50%;
            --p-translate-x: -50%;
            inline-size: 60%;
            block-size: auto;
        }

        .ticket-3 {
            inset-inline-end: -15.625rem;
            inline-size: 50%;
            block-size: auto;
        }

        [class^='ticket-'] {
            position: absolute;
            inset-block-start: 50%;
            translate: var(--p-translate-x, 0) -50%;
        }

        &::after {
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

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 20;
        }
    }
</style>
