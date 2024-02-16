<script>
    import { FooterNav, MainFooter } from '$lib/components';
    import Main from '$lib/layouts/Main.svelte';
    import Draft from './(components)/Draft.svelte';
    import Schedule from './(components)/Schedule.svelte';
    import Step from './(components)/Step.svelte';
    import Target from './(components)/Target.svelte';
</script>

<svelte:head>
    <title>Appwrite - Messaging</title>
</svelte:head>

<Main>
    <div class="hero">
        <enhanced:img src="./(assets)/blur-left.png" alt="" class="blur-left" />
        <enhanced:img src="./(assets)/blur-right.png" alt="" class="blur-right" />

        <div class="aw-container">
            <div>
                <div class="product">
                    <img src="/images/icons/illustrated/dark/messaging.png" alt="" />
                    <span class="aw-eyebrow aw-u-color-text-primary">
                        Messaging<span class="aw-u-color-text-accent">_</span>
                    </span>
                    <span class="aw-hero-banner-button aw-eyebrow">BETA</span>
                </div>
                <h1 class="aw-display aw-u-color-text-primary">
                    Open source messaging service for developers
                </h1>
                <p class="aw-description u-margin-block-start-20">
                    Set up messaging within minutes and send push notifications, emails, and SMS
                    directly from the Appwrite Console.
                </p>
                <div class="u-flex u-items-center u-gap-8 u-margin-block-start-32">
                    <a class="aw-button" href="https://cloud.appwrite.io" target="_blank"
                        >Get started</a
                    >
                    <a
                        class="aw-button is-secondary"
                        href="https://appwrite.io/docs/products/messaging"
                        target="_blank">Read the docs</a
                    >
                </div>
            </div>

            <div class="phone-wrapper">
                <enhanced:img class="phone" src="./(assets)/phone.png" alt="" />
            </div>
        </div>
    </div>

    <div class="steps aw-container">
        <Draft />
        <Target />
        <Schedule />
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .hero {
        overflow: hidden;
        position: relative;
        border-block-end: 1px solid hsl(var(--aw-color-offset));
        margin-block-start: -5rem;
        padding-block-start: 5rem;

        .aw-container {
            display: grid;
            grid-template-columns: 580px 700px;
            align-items: center;
            gap: 5.625rem;
            block-size: 800px;
            // block-size: 90vh;

            .phone-wrapper {
                position: relative;
                block-size: 100%;
                inline-size: 100%;

                .phone {
                    max-inline-size: unset;
                    max-block-size: unset;

                    position: absolute;
                    display: block;
                    block-size: 800px;
                    translate: 0 100px;
                    inline-size: auto;
                }
            }
        }

        [class^='blur-'] {
            max-inline-size: unset;
            max-block-size: unset;
            pointer-events: none;
        }

        .blur-left {
            position: absolute;
            block-size: 1200px;
            inline-size: auto;
            inset-inline-start: -600px;
            inset-block-start: -250px;
        }

        .blur-right {
            position: absolute;
            block-size: 1200px;
            inline-size: auto;
            inset-inline-end: -500px;
            inset-block-end: -600px;
        }

        .product {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            img {
                $size: 2rem;
                block-size: $size;
                inline-size: $size;
            }
        }

        h1 {
            margin-block-start: 1.25rem;
        }
    }

    .steps {
        position: relative;
        padding-block-start: 5rem;

        --padding-block-end: 7.5rem;
    }
</style>
