<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Permissions from './(components)/Permissions.svelte';
    import Testimonials from './(components)/Testimonials.svelte';
    import PreviewFiles from './(components)/PreviewFiles.svelte';
    import WhatYouCanDo from './(components)/WhatYouCanDo.svelte';
    import OpenSource from './(components)/OpenSource.svelte';

    const title = 'Storage' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
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
    <div class="web-big-padding-section overflow-hidden">
        <div class="web-big-padding-section-level-1 l-bgs-section-1 relative overflow-hidden">
            <div class="web-big-padding-section-level-2 relative">
                <section class="container hero web-u-padding-block-end-0">
                    <div class="web-u-max-width-580 mx-auto">
                        <div class="u-line-height-1 flex items-center gap-2">
                            <img
                                src="/images/icons/illustrated/dark/storage.png"
                                alt=""
                                width="48"
                                height="48"
                            />
                            <span class="web-eyebrow web-u-color-text-accent-click"
                                >Storage<span class="web-u-text-color-primary-500">_</span></span
                            >
                        </div>
                        <h1 class="text-display text-primary mt-5">
                            Robust and secure storage infrastructure
                        </h1>
                        <p class="text-body mt-5 font-medium">
                            Securely store files with advanced compression, encryption and image
                            transformations.
                        </p>
                        <div class="web-flex flex-col-mobile mt-8 flex gap-2">
                            <a href="/" class="web-button is-full-width-mobile">
                                <span class="text">Get started</span>
                            </a>
                            <a href="/" class="web-button is-secondary is-full-width-mobile">
                                <span class="text">Read the docs</span>
                            </a>
                        </div>
                    </div>
                    <div class="l-media-1 relative">
                        <div class="l-is-desktop">
                            <img
                                src="/images/pages/storage/photos.png"
                                alt=""
                                width="486"
                                height="308"
                            />
                            <section
                                class="web-media-container l-frame-parrot !absolute top-32 -right-8 z-1 w-fit"
                            >
                                <img
                                    src="/images/pages/storage/green-parrots.avif"
                                    alt="two green parrots"
                                    width="326"
                                    height="320"
                                />
                            </section>
                        </div>
                        <img
                            src="/images/pages/storage/product-shot.png"
                            class="l-is-mobile"
                            alt=""
                            width="100%"
                        />
                    </div>
                </section>
            </div>
        </div>
        <div class="web-big-padding-section-level-1 web-u-sep-block-start l-bgs-section-2 relative">
            <div class="web-big-padding-section-level-2">
                <PreviewFiles />
            </div>
        </div>
        <div class="web-big-padding-section-level-1 e-bg-image-pattern-bottom relative">
            <div class="web-big-padding-section-level-2">
                <section class="container hero-flipped web-u-padding-block-end-0">
                    <div class="web-is-only-desktop">
                        <img src="/images/pages/storage/product-shot-3.png" width="687" alt="" />
                    </div>
                    <div class="web-u-max-width-580 mx-auto">
                        <h2 class="web-title web-u-color-text-primary">
                            Optimized for small and large files
                        </h2>
                        <p class="web-main-body-500 mt-4">
                            Appwrite offers chunked uploads for large files and several compression
                            options for optimized upload times.
                        </p>
                        <div class="mt-8 flex gap-2">
                            <a href="/" class="web-button is-secondary is-full-width-mobile">
                                <span class="text">Learn more</span>
                            </a>
                        </div>
                    </div>
                    <div class="web-is-only-mobile">
                        <img
                            src="/images/pages/storage/product-shot-3.png"
                            width="100%"
                            alt=""
                            class="u-block web-u-max-width-580 mx-auto"
                        />
                    </div>
                </section>
            </div>
            <Permissions />
        </div>

        <div class="web-big-padding-section-level-1 web-white-section light relative">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-hero is-center web-u-max-width-380">
                        <span class="web-badges web-eyebrow !text-white">Dashboard_</span>
                        <h2 class="web-title text-primary">
                            Manage your storage infrastructure from the Console
                        </h2>
                        <p class="web-main-body-500 web-u-margin-block-start-0">
                            Organize your buckets and files with ease in your dashboard, as well as
                            manage security, permissions, compression, and more.
                        </p>
                        <a
                            href="https://builtwith.appwrite.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="web-button is-secondary is-full-width-mobile web-u-cross-child-center u-margin-block-start-16"
                        >
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="flex flex-col gap-8 md:flex-row">
                        <div class="flex flex-1 flex-col gap-8">
                            <div class="web-u-max-width-580 mx-auto flex flex-col gap-2">
                                <h3 class="web-main-body-500 web-u-color-text-primary">
                                    File management dashboard
                                </h3>
                                <p class="web-main-body-500">
                                    Visualize and search for files with different view options and
                                    manipulate multiple at the same time.
                                </p>
                            </div>
                            <img
                                class="u-height-auto web-u-max-width-580 mx-auto"
                                src="/images/pages/storage/console-illustration.png"
                                alt=""
                                width="568"
                                height="536"
                                loading="lazy"
                            />
                        </div>
                        <div
                            class="web-u-flex-sep"
                            style="--web-color-border: 240 5.7% 10.4% / 0.04;"
                        ></div>
                        <div class="web-u-max-width-580 mx-auto flex flex-1 flex-col gap-8">
                            <div class="flex flex-col gap-2">
                                <h3 class="web-main-body-500 web-u-color-text-primary">
                                    Extensive settings options
                                </h3>
                                <p class="web-main-body-500">
                                    Manage security, permissions, compression, and more with
                                    straightforward Bucket settings.
                                </p>
                            </div>
                            <div>
                                <img
                                    class="l-drop-shadow u-height-auto"
                                    src="/images/pages/storage/settings.png"
                                    alt=""
                                    width="568"
                                    height="536"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="web-big-padding-section-level-1 web-white-section light">
            <div class="web-big-padding-section-level-2">
                <div class="container">
                    <div class="web-grid-1-1 u-row-gap-64">
                        <div class="web-hero is-align-start web-u-max-width-580 web-mx-auto-mobile">
                            <span class="web-badges web-eyebrow !text-white">APIs_</span>
                            <h2 class="web-title web-u-color-text-primary web-u-max-width-380">
                                What you can do with Storage APIs
                            </h2>
                            <p
                                class="web-main-body-500 web-u-margin-block-start-0 web-u-max-width-380"
                            >
                                Appwrite's Storage APIs allow you to create and update your files,
                                apply image transformations, and more.
                            </p>
                            <a
                                href="/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="web-button is-full-width-mobile u-margin-block-start-16"
                            >
                                <span>View docs</span>
                            </a>
                        </div>
                        <WhatYouCanDo />
                    </div>
                </div>
            </div>
            <Testimonials />
            <OpenSource />
        </div>

        <div class="relative pt-20">
            <div class="container">
                <PreFooter />
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .l-drop-shadow {
        filter: drop-shadow(0 16px 32px rgb(55 59 77 / 0.04));
    }

    .hero {
        display: grid;
        grid-template-columns: 30.0625rem minmax(0, 1fr);
        gap: 5vw;
        justify-content: space-between;
        align-items: center;
        position: relative;

        @media (max-width: 1023px) {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            > :first-child {
                max-inline-size: 40rem;
                margin-inline: auto;
            }
        }
    }
    .hero-flipped {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 30.0625rem;
        gap: 5vw;
        justify-content: space-between;
        align-items: center;
        position: relative;

        @media (max-width: 1023px) {
            display: flex;
            flex-direction: column;

            overflow: hidden;
            gap: 3rem;

            > :first-child {
                max-width: 40rem;
                margin-inline: auto;
            }

            > :nth-child(2) {
                scale: 1;
                width: 100%;
                position: relative;
            }
        }
    }

    .e-bg-image-pattern-bottom {
        background: url('/images/pages/storage/pattern-1.png') no-repeat center bottom;
        background-size: 1500px;
        @media (max-width: 650px) {
            background-position: center bottom -50%;
        }
        @media (max-width: 1198px) {
            background-size: 1350px;
        }
    }
    .l-media-1 {
        inline-size: 100%;
        max-inline-size: 645px;
        margin-inline: auto;
        > img {
            inline-size: 100%;
        }
        @media (max-width: 640px) {
            .l-is-mobile {
                display: block;
            }
            .l-is-desktop {
                display: none;
            }
            > img {
                display: block;
                margin-inline: -20px;
                inline-size: calc(100vw + 40px) !important;
                max-inline-size: 40rem;
            }
        }
        @media (min-width: 641px) {
            .l-is-mobile {
                display: none;
            }
            .l-is-desktop {
                display: block;
            }
        }
    }
    .l-bgs-section-1::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        background-image: url('/images/pages/storage/bg-section-1-left.png'),
            url('/images/pages/storage/bg-section-1-right.png');
        background-repeat: no-repeat;
        background-position:
            left bottom,
            top right;
        background-size: 50% 50%;
        filter: blur(30px);
    }
    .l-bgs-section-2::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        background-image: url('/images/pages/storage/bg-section-2-right.png');
        background-repeat: no-repeat;
        background-position: top 160px right 0;
        background-size: 300px 640px;
        filter: blur(30px);
    }
</style>
