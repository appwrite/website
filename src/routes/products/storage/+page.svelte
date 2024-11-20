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
    import Hero from '$lib/components/product-pages/hero.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import HeroImage from './(assets)/hero-image.png';
    import ProductCards from '$lib/components/product-pages/product-cards.svelte';

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
    <div class="overflow-hidden">
        <Hero
            eyebrow={{
                label: 'Storage',
                icon: '/images/icons/illustrated/dark/storage.png'
            }}
            title="Robust and secure storage infrastructure"
            description="Securely store files with advanced compression, encryption and image transformations."
            image={{
                url: HeroImage
            }}
            cta={{
                label: 'Get started',
                url: PUBLIC_APPWRITE_DASHBOARD
            }}
            secondaryCta={{
                label: 'Documentation',
                url: '/docs/storage'
            }}
        />

        <PreviewFiles />
        <div class="e-bg-image-pattern-bottom relative">
            <div>
                <section class="container hero-flipped web-u-padding-block-end-0">
                    <div class="web-is-only-desktop">
                        <img src="/images/pages/storage/product-shot-3.png" width="687" alt="" />
                    </div>
                    <div class="web-u-max-width-580 mx-auto">
                        <h2 class="text-title font-aeonik-pro text-primary">
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

        <ProductCards exclude="storage" />
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

    .hero-flipped {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 30.0625rem;
        gap: 4.5rem;
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
        background-size: 1350px;
        @media (max-width: 650px) {
            background-position: center bottom -50%;
        }
    }
</style>
