<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { loginGithub } from '../helpers';
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import TicketScroll from '../(components)/TicketScroll.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);

    const tickets = [
        {
            name: 'Eldad',
            title: 'Founder'
        },
        {
            name: 'Jesse',
            title: 'Design Engineer'
        },
        {
            name: 'Bradley',
            title: 'Platform Engineer'
        },
        {
            name: 'Caio',
            title: 'Visual Designer'
        },
        {
            name: 'Matej',
            title: 'Platform Engineer'
        },
        {
            name: 'Torsten',
            title: 'Product Architect'
        },
        {
            name: 'Jade',
            title: 'Visual Designer'
        },
        {
            name: 'Kushboo',
            title: 'Platform Engineer'
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
                    <h1 class="text-display font-aeonik-pro">
                        <span style:font-weight="500">init</span>
                        launches on August 19th
                    </h1>
                    <p class="text-label text-primary">Register today and claim your Init ticket</p>
                </hgroup>
                <div class="buttons">
                    <button class="web-button" on:click={loginGithub}>
                        <div class="web-icon-github" />
                        <span class="text">Register with GitHub</span>
                    </button>
                </div>
                <p class="privacy">
                    By registering, you agree to our <a href="/terms" class="web-link underline"
                        >Terms and Conditions</a
                    >
                    and <a href="/privacy" class="web-link underline">Privacy Policy</a>
                </p>
            </div>
            <div class="shadow"></div>
        </div>

        <TicketScroll />
    </div>

    <div class="container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .top {
        min-height: 80vh;
        margin: 48px 0 -96px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

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
                mask-image:
                    linear-gradient(
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
</style>
