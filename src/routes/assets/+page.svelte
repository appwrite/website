<script lang="ts">
    import { visible } from '$lib/actions';
    import TocNav from '$lib/components/TocNav.svelte';
    import TocRoot from '$lib/components/TocRoot.svelte';
    import { Main } from '$lib/layouts';

    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';
    import Copy from './Copy.svelte';

    const title: 'Assets' + TITLE_SUFFIX;
    const description =
        "This page features Appwrite's key brand assets including the logotype, colors, product visuals, and practical guidelines for their usage.";
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const Section = {
        NAMING: 'Naming',
        LOGOTYPE: 'Logotype',
        LOGOMARK: 'Logomark',
        COLORS: 'Brand colors',
        VISUALS: 'Product visuals',
        CONTACT: 'Contact us'
    } as const

    const getSectionId = (section: Section) => section.toLowerCase().replace(/\s/g, '-');

    let selectedMap: Map<Section, boolean> = new Map(
        Object.values(Section).map((section) => [section, false])
    );

    const handleVisibility = (section: Section) => {
        return (e: CustomEvent<boolean>) => {
            selectedMap.set(section, e.detail);
            selectedMap = selectedMap;
        };
    };

    let showToc = false;
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

<div class="web-u-pointer-events-none absolute">
    <enhanced:img src="./bg.png" alt="" />
</div>

<Main omitMainId>
    <TocRoot>
        <div class="container">
            <div class="web-grid-120-1fr-auto">
                <header class="web-grid-120-1fr-auto-header">
                    <h1 class="text-display font-aeonik-pro text-primary">Brand assets</h1>
                </header>

                <TocNav bind:showToc />

                <main class="web-grid-120-1fr-auto-main" id="main">
                    <div class="web-content">
                        <section>
                            <p>
                                Resources for presenting the Appwrite brand to maintain consistency
                                while using our logos, colors, and other brand elements across
                                various platforms and materials.
                            </p>

                            <a href="/assets.zip" download class="web-button">
                                <span class="web-icon-download" aria-hidden="true"></span>
                                <span>Download assets</span>
                            </a>
                        </section>

                        <section id={getSectionId(Section.NAMING)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.NAMING)}
                                >
                                    Naming
                                </h2>
                                <p>
                                    Write 'Appwrite,' with a lowercase 'w' and no space between the
                                    two words. Please refrain from using variations like 'AppWrite'
                                    or 'App Write'.
                                </p>
                            </div>
                        </section>

                        <section id={getSectionId(Section.LOGOTYPE)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.LOGOTYPE)}
                                >
                                    Logotype
                                </h2>
                                <p>
                                    The Appwrite logo stands as a prominent symbol of our brand's
                                    identity. Refrain from altering our logo and preferably use our
                                    logo on a neutral background.
                                </p>
                                <div class="web-flex flex-col-mobile mt-5 flex flex-wrap gap-8">
                                    <div
                                        class="media-wrapper | light |
                                    web-u-flex-basis-300 web-u-bg-color-neutral-100 web-u-min-block-size-320 flex flex-1 items-center justify-center rounded-lg
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logotype/white.svg"
                                            alt="Appwrite logo with black text"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/white.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/white.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="media-wrapper | dark |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logotype/black.svg"
                                            alt="Appwrite logo with white text"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/black.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logotype/black.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section>
                                <div class="web-flex flex-col gap-2">
                                    <h3 class="text-label text-primary mt-3 mb-4">
                                        Co-branding logotypes
                                    </h3>
                                    <p>
                                        Spacing is determined by the Appwrite mark. Unless otherwise
                                        noted by partner brands, each logo is optically equal as a
                                        collection of shapes.
                                    </p>
                                    <div
                                        class="web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 mt-5 flex items-center
                                                justify-center px-4"
                                    >
                                        <img
                                            src="/assets/logotype/co-brand.svg"
                                            alt="Appwrite logo besides a generic logo"
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section id={getSectionId(Section.LOGOMARK)}>
                            <div class="web-flex flex-col gap-2">
                                <h3
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.LOGOMARK)}
                                >
                                    Logomark
                                </h3>
                                <p>
                                    While prioritizing recognizability, the logotype is the
                                    recommended choice. Using the Appwrite logomark is suitable for
                                    situations where space constraints make it challenging to
                                    showcase the complete logotype.
                                </p>
                                <div class="web-flex flex-col-mobile mt-5 flex flex-wrap gap-8">
                                    <div
                                        class="media-wrapper | light |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-100 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logomark/logo.svg"
                                            alt="Appwrite's logomark"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        class="media-wrapper | dark |
                                    web-u-flex-basis-300 web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 flex flex-1 items-center justify-center
                                    ps-16 pe-16"
                                    >
                                        <img
                                            src="/assets/logomark/logo.svg"
                                            alt="Appwrite's logomark"
                                        />
                                        <div class="buttons">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.svg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>SVG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/logomark/logo.png"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="">
                                <div class="web-flex flex-col gap-2">
                                    <h3 class="text-label text-primary mt-3 mb-4">
                                        Co-branding lockups
                                    </h3>
                                    <p>
                                        Spacing is determined by the Appwrite mark. Unless otherwise
                                        noted by partner brands, each logo is optically equal as a
                                        collection of shapes.
                                    </p>
                                    <div
                                        class="web-u-border-radius-8 web-u-bg-color-neutral-800 web-u-min-block-size-320 mt-4 flex items-center
                                                justify-center px-4"
                                    >
                                        <img
                                            src="/assets/logomark/co-brand.svg"
                                            alt="Logomark cobrand example"
                                        />
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section id={getSectionId(Section.COLORS)}>
                            <h2
                                class="text-title font-aeonik-pro text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.COLORS)}
                            >
                                Brand colors
                            </h2>
                            <div class="flex flex-wrap gap-8">
                                <div
                                    class="media-wrapper | web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-text-color-neutral-900 web-u-bg-color-neutral-50 web-u-min-block-size-160 flex
                                aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Light Grey</h3>
                                    <p class="text-caption">#EDEDF0</p>
                                    <div class="buttons | light">
                                        <Copy toCopy="#EDEDF0" />
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | web-u-sep web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-min-block-size-160 web-u-text-color-neutral-50 web-u-bg-color-neutral-900
                                flex aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Dark Grey</h3>
                                    <p class="text-caption">#19191D</p>
                                    <div class="buttons">
                                        <Copy toCopy="#19191D" variant="dark" />
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | web-u-flex-basis-200 web-flex web-u-border-radius-8 web-u-text-color-neutral-50 web-u-bg-color-primary-500 web-u-min-block-size-160 flex
                                aspect-square flex-1 flex-col justify-center
                                gap-2 px-6"
                                >
                                    <h3 class="text-label">Appwrite Pink</h3>
                                    <p class="text-caption">#FD366E</p>
                                    <div class="buttons">
                                        <Copy toCopy="#FD366E" variant="pink" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id={getSectionId(Section.VISUALS)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.VISUALS)}
                                >
                                    Product visuals
                                </h2>
                                <p>
                                    Use these product visuals to enhance your articles,
                                    presentations, and content related to Appwrite.
                                </p>
                                <div class="mt-5 grid grid-cols-2 gap-8">
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/dashboard.png"
                                            alt="Dashboard"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/dashboard.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/dashboard.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/auth.png"
                                            alt="Appwrite Auth"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/auth.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/auth.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/databases.png"
                                            alt="Appwrite Databases"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/databases.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/databases.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/storage.png"
                                            alt="Appwrite Storage"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/storage.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/storage.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/functions.png"
                                            alt="Appwrite Functions"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/functions.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/functions.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="media-wrapper">
                                        <img
                                            class="web-u-border-radius-8 web-u-media-ratio-16-9 w-full"
                                            src="/assets/visuals/messaging.png"
                                            alt="Appwrite Messaging"
                                        />
                                        <div class="buttons visuals">
                                            <a
                                                class="web-button is-secondary"
                                                href="/assets/visuals/messaging.jpg"
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>JPG</span>
                                            </a>
                                            <a
                                                class="web-button is-secondary"
                                                href={'/assets/visuals/messaging.png'}
                                                download
                                            >
                                                <span
                                                    class="web-icon-download"
                                                    aria-label="download"
                                                ></span>
                                                <span>PNG</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id={getSectionId(Section.CONTACT)}>
                            <div class="web-flex flex-col gap-2">
                                <h2
                                    class="text-title font-aeonik-pro text-primary mb-4"
                                    use:visible={{ top: 48 }}
                                    on:visible={handleVisibility(Section.CONTACT)}
                                >
                                    Contact us
                                </h2>
                                <p>
                                    Should you require further assistance or have specific needs
                                    beyond what's presented on this page, please don't hesitate to
                                    <a
                                        class="web-link"
                                        href="/contact-us"
                                        target="_blank"
                                        rel="noopener noreferrer">contact us</a
                                    >.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <FooterNav />
            <MainFooter />
        </div>
    </TocRoot>
</Main>

<style lang="scss">
    .media-wrapper {
        position: relative;

        .buttons {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            position: absolute;
            bottom: 1rem;

            &.visuals {
                justify-content: left;
                top: auto;
                position: relative;
                margin-top: 2rem;
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            padding-left: 0;
            padding-right: 0;
        }

        header {
            padding-block-end: unset;
        }

        header,
        main {
            padding-left: var(--spacing-5, 1.25rem);
            padding-right: var(--spacing-5, 1.25rem);
        }
    }
</style>
