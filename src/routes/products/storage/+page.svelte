<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import PreFooter from '$lib/components/PreFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import Permissions from './(components)/Permissions.svelte';
    import Testimonials from './(components)/Testimonials.svelte';

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
                                class="web-media-container l-frame-parrot absolute top-20 -right-8 z-1 w-fit"
                            >
                                <img
                                    src="images/pages/storage/green-parrots.avif"
                                    alt="two green parrots"
                                    width="326"
                                    height="320"
                                />
                            </section>
                            <section
                                class="web-card is-normal web-code-console web-u-max-width-380 u-margin-block-start-56 relative z-5"
                                style="--card-padding:0.25rem; --card-padding-mobile:0.25rem;"
                            >
                                <header class="web-code-console-header web-u-gap-6 flex">
                                    <span class="web-code-console-button is-red"></span>
                                    <span class="web-code-console-button is-yellow"></span>
                                    <span class="web-code-console-button is-green"></span>
                                </header>
                                <div class="web-code-console-content" style="min-block-size:166px">
                                    [CODE WILL BE HERE]
                                </div>
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
                <section class="container hero web-u-padding-block-end-0">
                    <div class="web-u-max-width-580 mx-auto">
                        <h2 class="web-title web-u-color-text-primary">
                            Preview media files however you want
                        </h2>
                        <p class="web-main-body-500 mt-4">
                            Appwrite Storage's preview endpoint lets you manipulate image previews
                            while also managing different formats and compression algorithms.
                        </p>
                        <div class="mt-8 flex gap-2">
                            <a href="/" class="web-button is-secondary is-full-width-mobile">
                                <span class="text">Learn more</span>
                            </a>
                        </div>
                    </div>
                    <div class="l-media-2 relative">
                        <section class="web-media-container l-media-2-1 relative z-0 w-fit">
                            <img
                                src="images/pages/storage/exploring-the-world.png"
                                alt=""
                                width="326"
                                height="320"
                                loading="lazy"
                            />
                        </section>
                        <div class="l-box-image-1 l-media-2-2 z-1">
                            <img
                                src="/images/pages/storage/corner-circle.svg"
                                width="12"
                                height="12"
                                class="web-u-inset-inline-start-6-negative web-u-inset-block-start-6-negative absolute"
                                alt=""
                            />
                            <img
                                src="/images/pages/storage/corner-circle.svg"
                                width="12"
                                height="12"
                                class="web-u-inset-inline-end-6-negative web-u-inset-block-start-6-negative absolute"
                                alt=""
                            />
                            <img
                                src="/images/pages/storage/corner-circle.svg"
                                width="12"
                                height="12"
                                class="web-u-inset-inline-start-6-negative web-u-inset-block-end-6-negative absolute"
                                alt=""
                            />
                            <img
                                src="/images/pages/storage/corner-circle.svg"
                                width="12"
                                height="12"
                                class="web-u-inset-inline-end-6-negative web-u-inset-block-end-6-negative absolute"
                                alt=""
                            />

                            <img
                                src="/images/pages/storage/mountain.avif"
                                class="u-block"
                                alt=""
                                width="409"
                                height="294"
                                style="filter: drop-shadow(-4px 4px 42px rgba(0, 0, 0, 0.16)) drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.32));"
                            />
                        </div>
                        <section
                            class="web-card is-normal web-code-console web-u-max-width-380 u-margin-block-start-56-negative l-media-2-3 relative z-5"
                            style="--card-padding:0.25rem; --card-padding-mobile:0.25rem; margin-block-start:-200px;margin-inline-start:-40px;"
                        >
                            <header class="web-code-console-header web-u-gap-6 flex">
                                <span class="web-code-console-button is-red"></span>
                                <span class="web-code-console-button is-yellow"></span>
                                <span class="web-code-console-button is-green"></span>
                            </header>
                            <div class="web-code-console-content" style="min-block-size:260px">
                                [CODE WILL BE HERE]
                            </div>
                        </section>
                        <!--<img src="/images/pages/storage/product-shot-2.png" width="708" alt="" />-->
                    </div>
                </section>
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
                            Easily manage your storage infrastructure
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
                        <div
                            class="web-u-gap-20 u-min-width-0 u-max-width-100-percent flex flex-col"
                        >
                            <div
                                class="l-scroll-in-mobile u-min-width-0 u-overflow-x-auto flex gap-2"
                                style=""
                            >
                                <button class="tag is-selected"> List files </button>
                                <button class="tag"> Create file </button>
                                <button class="tag"> Get file </button>
                                <button class="tag"> Delete file </button>
                            </div>
                            <section
                                class="theme-dark web-code-snippet"
                                aria-label="code-snippet panel"
                            >
                                <header class="web-code-snippet-header">
                                    <div class="web-code-snippet-header-start">
                                        <div class="flex gap-4">
                                            <div class="web-tag">
                                                <span class="text">Node.js</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="web-code-snippet-header-end">
                                        <ul class="buttons-list flex gap-2">
                                            <li class="buttons-list-item">
                                                <!-- REPLACE with dynamic partial used in Header of docs -->
                                                <button class="web-select is-colored">
                                                    <div class="physical-select">
                                                        <span>Web</span>
                                                    </div>
                                                    <span
                                                        class="icon-cheveron-down"
                                                        aria-hidden="true"
                                                    ></span>
                                                </button>
                                            </li>
                                            <li class="buttons-list-item u-padding-inline-start-8">
                                                <button
                                                    aria-describedby="SESItRlYoy"
                                                    id="zSXaeTV-HF"
                                                    data-state="closed"
                                                    data-melt-tooltip-trigger=""
                                                    class="web-icon-button"
                                                    aria-label="copy code from code-snippet"
                                                >
                                                    <span class="web-icon-copy" aria-hidden="true"
                                                    ></span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                <div class="web-code-snippet-content" style="block-size:13rem">
                                    <pre><code class="web-code language-text"
                                            ><span class="line">[code]</span></code
                                        ></pre>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <div class="web-big-padding-section-level-2 light">
                <div class="container">
                    <div class="web-hero is-center web-u-max-width-580 mx-auto">
                        <h2 class="web-display web-u-color-text-primary">Powered by open source</h2>
                        <p
                            class="web-main-body-500 web-u-margin-block-start-0 web-u-max-width-580 mx-auto"
                        >
                            Appwrite is a 100% open source project, giving you the flexibility and
                            support you need to get your project started.
                        </p>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="web-button is-secondary is-full-width-mobile web-u-cross-child-center u-margin-block-start-16"
                        >
                            <span>Join the community</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 light">
                <div class="container web-u-max-width-993">
                    <div class="web-u-margin-block-start-80 overflow-hidden">
                        <ul
                            class="web-info-boxes is-one-inline-mobile items-centered web-sub-body-500 u-margin-inline-start-0"
                        >
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/community.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">
                                    Join the community and share knowledge
                                </h3>
                                <p class="web-info-boxes-content">Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/self-hosted.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">
                                    Self-host or go Cloud
                                </h3>
                                <p class="web-info-boxes-content">
                                    Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.
                                </p>
                            </li>
                            <li class="web-info-boxes-item">
                                <img
                                    src="/images/icons/gradients/lock.svg"
                                    width="40"
                                    height="40"
                                    alt=""
                                />
                                <h3 class="web-info-boxes-title u-main-center">
                                    No vendor lock-in
                                </h3>
                                <p class="web-info-boxes-content">
                                    Lorem ipsum dolor sit amet consectetur. Nullam ligula blandit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
    input[type='checkbox'] {
        --p-icon-color-default: var(--web-color-greyscale-100);
        --p-bg-color-default: var(--web-color-greyscale-750);
        --p-border-color-default: var(--web-color-greyscale-750);
        --p-bg-color-checked: var(--web-color-accent);
        --p-border-color-checked: var(--web-color-accent);
        --p-bg-color-hover-checked: var(--web-color-accent);
        --p-border-color-hover-checked: var(--web-color-accent);
        --p-bg-color-active-checked: var(--web-color-accent);
        --p-border-color-active-checked: var(--web-color-accent);
    }
    .table {
        --p-table-border-color: var(--web-color-offset) !important;
        :where(.table-thead-col) {
            padding-block: 1.33rem;
        }
        :where(.table-col) {
            padding-block: 0.66rem;
        }
        &.is-light {
            --p-table-bg-color: var(--color-neutral-0);
            --p-table-bg-color-focus: var(--color-neutral-5);
            //--p-table-bg-even-row-color: var(--color-neutral-0);
            --p-table-border-color: var(--color-neutral-10);
            --p-tbody-color-text: var(--color-neutral-60);
            box-shadow: none;
            border-radius: 16px 0 16px 0;
        }
    }
    .e-console-card {
        &-content {
            border-radius: 0 0 16px 16px;
        }
        .tag {
            box-sizing: content-box;
            block-size: 15px;
            padding: 2.46px 8.45px;
            border: none;
        }
        &.is-light {
            .e-console-card {
                background-color: hsl(var(--color-neutral-5));
            }
        }
    }
    .e-header-console {
        padding: 1.5rem;
        border-radius: 16px 16px 0 0;
        border-block-end: solid 1px hsl(var(--web-color-border));
        &.is-light {
            background-color: #fff;
        }
        &.is-dark {
            background-color: #27272a;
        }
    }
    .tabs.is-light {
        --p-tabs-text-color: var(--p-tabs-text-color-default);
        --p-tabs-text-color-default: var(--color-neutral-50);
        --p-tabs-text-color-hover: var(--color-neutral-80);
        --p-tabs-text-color-active: var(--color-neutral-80);
        --p-tabs-text-color-selected: var(--color-neutral-80);

        --p-tabs-bg-color: var(--p-tabs-bg-defalut);
        --p-tabs-bg-defalut: var(--transparent);
        --p-tabs-bg-color-hover: var(--color-neutral-10);

        --p-tabs-outline-color: var(--p-tabs-outline-color-default);
        --p-tabs-outline-color-default: var(--transparent);
        --p-tabs-outline-color-focus: var(--color-neutral-1000) / 0.16;

        --p-tabs-border-color: var(--p-tabs-border-color-default);
        --p-tabs-border-color-default: var(--transparent);
        --p-tabs-border-color-selected: var(--color-neutral-80);

        --tabs-shadow-color: var(--color-neutral-0);
        --tabs-button-arrow-color: var(--color-neutral-80);
    }
    .button {
        &.is-light {
            /* Light Theme */
            --p-text-color-default: var(--color-neutral-60);
            --p-button-color-default: var(--color-neutral-5);
            --p-border-color-default: var(--color-neutral-15);

            --p-text-color-hover: var(--p-text-color-default);
            --p-button-color-hover: var(--color-neutral-10);
            --p-border-color-hover: var(--p-border-color-default);

            --p-text-color-focus: var(--p-text-color-default);
            --p-button-color-focus: var(--p-button-color-default);
            --p-border-color-focus: var(--transparent);

            --p-text-color-active: var(--color-neutral-90);
            --p-button-color-active: var(--color-neutral-15);
            --p-border-color-active: var(--color-neutral-15);
        }
    }
    .tag {
        --p-tag-text-color-default: var(--color-neutral-70);
        --p-tag-bg-color-default: var(--web-color-offset);
        --p-tag-border-color-default: var(--web-color-offset);

        --p-tag-text-color-clickable: var(--color-neutral-60);
        --p-tag-bg-color-clickable: var(--color-neutral-5);
        --p-tag-border-color-clickable: var(--color-neutral-10);

        --p-tag-text-color-hover: var(--color-neutral-70);
        --p-tag-bg-color-hover: var(--color-neutral-10);
        --p-tag-border-color-hover: var(--p-tag-bg-color-hover);

        --p-tag-text-color-active: var(--color-neutral-70);
        --p-tag-bg-color-active: var(--color-neutral-15);
        --p-tag-border-color-active: var(--p-tag-bg-color-active);

        --p-tag-text-color-selected: var(--p-tag-text-color-clickable);
        --p-tag-bg-color-selected: var(--p-tag-bg-color-clickable);
        --p-tag-border-color-selected: var(--color-neutral-50);

        --p-tag-text-color-disabled: var(--color-neutral-20);
        --p-tag-bg-color-disabled: var(--color-neutral-5);
        --p-tag-border-color-disabled: var(--color-neutral-10);
    }
    .switch {
        --p-bg-color: var(--color-neutral-1000);
        &:where(:checked) {
            --p-bg-color: var(--web-color-accent);
        }
    }

    .inline-tag {
        --p-inline-tag-text-color-default: var(--p-text-color, var(--color-neutral-60));
        --p-inline-tag-bg-color-default: var(--color-neutral-10);
    }
    .heading-level-5 {
        --p-heading-text-color: var(--color-neutral-80);
    }

    .e-pink-input-light {
        --p-text-color-default: var(--color-neutral-60);
        --p-bg-color-default: var(--color-neutral-0);
        --p-border-color-default: var(--color-neutral-15);

        --p-text-color-hover: var(--p-text-color-default);
        --p-bg-color-hover: var(--p-bg-color-default);
        --p-border-color-hover: var(--color-neutral-20);

        --p-text-color-focus: var(--p-text-color-default);
        --p-bg-color-focus: var(--p-bg-color-default);
        --p-border-color-focus: var(--color-neutral-20);

        --p-text-color-readonly: var(--color-neutral-20);
        --p-bg-color-readonly: var(--color-neutral-5);
        --p-border-color-readonly: var(--p-border-color-default);

        --p-text-color-disabled: var(--color-neutral-20);
        --p-bg-color-disabled: var(--color-neutral-0);
        --p-border-color-disabled: var(--p-border-color-default);
    }

    .l-box-image-1 {
        inline-size: 427px;
        padding: 0.5rem;
        border: solid 1px #85dbd8;
    }
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
                //height: 24rem;
                position: relative;
            }
        }
    }

    .web-multi-columns-1 {
        .web-card {
            border: 1px solid hsl(var(--web-color-offset));
        }
        @media (max-width: 1235px) {
            --p-col-gap: 2rem !important;
            .web-card {
                rotate: none !important;
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
            //background-position: center bottom -100px;
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
    .l-media-2 {
        @media (max-width: 1023px) {
            inline-size: 100%;
            &-1 {
                display: none !important;
            }
            &-2 {
                position: relative;
                margin-inline: auto;
                inline-size: 342px;
            }
            &-3 {
                position: static !important;
                margin-block-start: 0 !important;
                margin-inline: auto !important;
                margin-block-start: -60px !important;
            }
        }
        @media (min-width: 1024px) {
            &-2 {
                position: absolute;
                inset-inline-end: 0;
                inset-block-start: -2.5rem;
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

    .l-bgs-purple::before {
        content: '';
        display: block;
        position: absolute;
        inset-inline-start: -150px;
        inset-block-start: -150px;
        background-image: url('/images/pages/storage/purple-gradient.png');
        background-repeat: no-repeat;
        background-size: 100%;
        inline-size: 517px;
        block-size: 542px;
        //filter: blur(30px);
    }

    .l-dark-table {
        color: hsl(var(--web-color-greyscale-400));
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(30px);
        .table-thead-col {
            padding-block: 16px;
        }
        .table-col {
            padding-block: 8px;
        }
        .table-tbody {
            color: hsl(var(--web-color-greyscale-400));
        }
        .table-row {
            border-block-start-width: 0;
        }
        img {
            inline-size: 40px;
            block-size: 40px;
            border-radius: 12px;
            border-width: 0;
        }
    }
    .l-permission-card {
        .table * {
            font-size: 14px;
        }
        .heading-level-5 {
            padding: 24px;
        }
        .l-permission-table-wrapper {
            padding-inline: 20px;
        }
        .web-button {
            block-size: 32px;
            padding-inline-start: 0;
            margin-block: 12px;
        }
        @media (max-width: 764px) {
            margin-inline-start: 0 !important;
            .heading-level-5 {
                padding: 12px 16px;
                line-height: 1.3;
            }
            .table * {
                font-size: 10px;
            }
            .table-thead-col:first-child {
                inline-size: 80px !important;
            }
            .l-permission-table-wrapper {
                padding-inline: 12px;
            }
            .table-thead-col,
            .table-col {
                padding-block: 12px;
            }
            .table-col {
                block-size: 18px;
            }
            .web-button {
                block-size: 18px;
                line-height: 18px;
                padding-block: 4px;
                padding-inline-end: 6px;
                margin-block: 0;
                margin-block-end: 4px;
                font-size: 12px;
            }
            input[type='checkbox'] {
                inline-size: 14px;
                block-size: 14px;
                &::before {
                    font-size: 10px;
                }
            }
        }
    }
    .l-grid-1 {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        @media (max-width: 600px) {
            gap: 1.25rem;
        }
    }
    .l-scroll-in-mobile {
        @media (max-width: 600px) {
            inline-size: calc(100vw - 20px) !important;
        }
    }
</style>
