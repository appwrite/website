<script lang="ts">
    import { page } from '$app/stores';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import Ticket from '../(components)/Ticket.svelte';
    import { loginGithub } from '../helpers';
    import { buildOpenGraphImage } from '$lib/utils/metadata';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const tickets = [
        {
            name: 'Eldad',
            title: 'Founder'
        },
        {
            name: 'Sara',
            title: 'Head of Design'
        },
        {
            name: 'Jesse',
            title: 'Design Engineer'
        },
        {
            name: 'Caio',
            title: 'Visual Designer'
        },
        {
            name: 'Jade',
            title: 'Visual Designer'
        },
        {
            name: 'Snezhanna',
            title: 'Growth Content'
        },
        {
            name: 'Laura',
            title: 'Growth Lead'
        },
        {
            name: 'Tessa',
            title: 'Head of DevRel'
        }
    ];
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
    <div class="top">
        <div class="signup">
            <div class="info">
                <hgroup>
                    <h1 class="web-display">
                        <span style:font-weight="500">init</span>
                        launches on August 5th
                    </h1>
                    <p class="web-label web-u-color-text-primary">
                        Register today and claim your Init ticket
                    </p>
                </hgroup>
                <div class="buttons">
                    <button class="web-button" on:click={loginGithub}>
                        <div class="web-icon-github" />
                        <span class="text">GitHub</span>
                    </button>
                    <a
                        href="https://cloud.appwrite.io/login?forceRedirect={$page.url
                            .origin}/init/tickets"
                        class="web-button is-secondary"
                    >
                        <div class="web-icon-appwrite web-u-color-text-primary" />
                        <span class="text">Appwrite</span>
                    </a>
                </div>
                <p class="u-margin-block-start-16 privacy">
                    By registering, you agree to our <a href="/terms" class="web-link is-inline"
                        >Terms and Conditions</a
                    >
                    and <a href="/privacy" class="web-link is-inline">Privacy Policy</a>
                </p>
            </div>
            <div class="shadow"></div>
        </div>

        <div class="col">
            {#each Array.from({ length: 2 }) as _}
                <div class="ticket-preview-wrapper">
                    {#each tickets as { name, title }, i}
                        {@const id = i + 1}
                        <div style:width="300vw">
                            <Ticket disableEffects {name} {title} {id} />
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>

    <div class="web-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .col {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .top {
        min-height: 80vh;
        margin: 48px 0 -96px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .signup {
            margin: 0 auto;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 0 48px;
            transform: translateX(-50%) translateY(-50%);
            z-index: 1100;
            text-align: center;

            .info {
                position: relative;
                z-index: 11;
                display: flex;
                flex-direction: column;
                gap: 32px;
                color: #fff;

                hgroup {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .privacy {
                    font-size: 12px;
                }
                .buttons {
                    display: flex;
                    gap: 16px;
                    margin: 0 auto;
                }
            }

            .shadow {
                width: 100vw;
                height: 80vh;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                z-index: 10;
                backdrop-filter: blur(6px);
                background-color: hsl(var(--web-color-background) / 50%);
                mask-composite: intersect;
                mask-image: linear-gradient(
                        to top,
                        transparent,
                        rgba(0, 0, 0, 1) 25%,
                        rgba(0, 0, 0, 1) 75%,
                        transparent
                    ),
                    linear-gradient(
                        to right,
                        transparent,
                        rgba(0, 0, 0, 1) 25%,
                        rgba(0, 0, 0, 1) 75%,
                        transparent
                    );
            }
        }
    }

    @keyframes -global-scroll {
        0% {
            transform: translateX(-100vw);
        }
        100% {
            transform: translateX(100vw);
        }
    }

    .ticket-preview-wrapper {
        display: flex;
        width: 400vw;
        overflow: hidden;
        animation: scroll 60s linear infinite;

        &:nth-of-type(even) {
            animation-direction: reverse;
        }

        @media (prefers-reduced-motion: reduce) {
            animation-play-state: paused;
        }

        @media screen and (max-width: 768px) {
            width: 800vw;
        }

        @media screen and (max-width: 640px) {
            width: 1000vw;
        }
    }
</style>
