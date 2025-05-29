<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Permissions from './(components)/Permissions.svelte';
    import PreviewFiles from './(components)/PreviewFiles.svelte';
    import WhatYouCanDo from './(components)/WhatYouCanDo.svelte';
    import OpenSource from './(components)/OpenSource.svelte';
    import Hero from '$lib/components/product-pages/hero.svelte';
    import Testimonials from '$lib/components/product-pages/testimonials.svelte';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import HeroImage from './(assets)/hero-image.png';
    import ProductCards from '$lib/components/product-pages/product-cards.svelte';
    import Optimized from './(components)/Optimized.svelte';
    import { Button } from '$lib/components/ui';

    const title = 'Storage' + TITLE_SUFFIX;
    const description =
        'Get to know Appwrite Storage - our robust infrastructure allows you to store, optimize and encrypt all of your project files in one place.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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

        <div class="!mb-0 bg-right-top bg-no-repeat md:bg-[url(/images/bgs/mint-gradient.png)]">
            <PreviewFiles />
            <div
                class="relative bg-[url('/images/pages/storage/pattern-1.png')] [background-size:1200px] [background-position:center_bottom_-50%] bg-no-repeat md:[background-size:1350px] md:[background-position:center_bottom]"
            >
                <Optimized />
                <Permissions />
            </div>
        </div>

        <div class="web-big-padding-section-level-1 web-white-section light relative">
            <div class="max-lg:py-20">
                <div class="container">
                    <div class="web-hero is-center !max-w-xl">
                        <span class="web-badges web-eyebrow !text-white">Dashboard_</span>
                        <h2 class="web-title text-primary text-pretty">
                            Manage your storage infrastructure from the Console
                        </h2>
                        <p class="web-main-body-500 web-u-margin-block-start-0">
                            Organize your buckets and files with ease in your dashboard, as well as
                            manage security, permissions, compression, and more.
                        </p>
                        <Button
                            variant="secondary"
                            href="/docs/products/storage/buckets"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mx-auto mt-4 !w-full md:!w-fit"
                        >
                            <span>Learn more</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="web-big-padding-section-level-2 mt-20! mb-0!">
                <div class="container">
                    <div class="flex flex-col gap-8 lg:flex-row">
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
                                    class="l-drop-shadow u-height-auto hidden md:block"
                                    src="/images/pages/storage/settings.png"
                                    alt=""
                                    width="568"
                                    height="536"
                                    loading="lazy"
                                />
                                <img
                                    class="l-drop-shadow u-height-auto block md:hidden"
                                    src="/images/pages/storage/settings-mobile.png"
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
        <div
            class="web-big-padding-section-level-1 web-white-section light bg-[url(/images/bgs/purple-gradient.png)] bg-left bg-no-repeat pb-20"
        >
            <div class="!my-0 py-24 md:py-20">
                <div class="container">
                    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        <div class="web-hero is-align-start mx-auto md:mb-0 lg:!max-w-md">
                            <span class="web-badges web-eyebrow !text-white">APIs_</span>
                            <h2 class="web-title text-primary">
                                What you can do with Storage APIs
                            </h2>
                            <p class="text-body font-medium">
                                Appwrite's Storage APIs allow you to create and update your files,
                                apply image transformations, and more.
                            </p>
                            <Button
                                href="/docs/references/cloud/client-web/storage"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="mt-4 !w-full md:!w-fit"
                            >
                                <span>View docs</span>
                            </Button>
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
</style>
