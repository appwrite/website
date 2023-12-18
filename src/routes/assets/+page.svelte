<script lang="ts">
    import { visible } from '$lib/actions';
    import { Main } from '$lib/layouts';
    import { copy } from '$lib/utils/copy';

    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';

    const title = 'Assets' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    enum Section {
        NAMING = 'Naming',
        LOGOTYPE = 'Logotype',
        LOGOMARK = 'Logomark',
        COLORS = 'Brand colors',
        VISUALS = 'Product visuals',
        CONTACT = 'Contact us'
    }

    const getSectionId = (section: Section) => section.toLowerCase().replace(/\s/g, '-');

    let selectedMap: Map<Section, boolean> = new Map(
        Object.values(Section).map((section) => [section, false])
    );

    $: selected = (function getSelected() {
        for (const [key, value] of selectedMap) {
            if (value) {
                return key;
            }
        }
        return Section.NAMING;
    })();

    $: progress = (function getProgress() {
        const sections = Object.values(Section);
        const index = sections.indexOf(selected);
        return (index / (sections.length - 1)) * 100;
    })();

    const handleVisibility = (section: Section) => {
        return (e: CustomEvent<boolean>) => {
            selectedMap.set(section, e.detail);
            selectedMap = selectedMap;
        };
    };
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

<div class="u-position-absolute" style="pointer-events:none;">
    <enhanced:img src="./bg.png" alt="" />
</div>

<Main>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">Brand assets</h1>
                <button
                    class="u-flex u-width-full-line aw-u-padding-block-20
                        aw-u-color-text-primary aw-is-only-mobile
                       aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
                    style="inline-size:100vw"
                >
                    <span
                        class="aw-container u-flex u-width-full-line u-main-space-between u-cross-center"
                    >
                        <span class="aw-description">Table of contents</span>
                        <span class="icon-menu-alt-4" aria-hidden="true" />
                    </span>
                </button>
            </header>
            <aside class="aw-grid-120-1fr-auto-side aw-is-mobile-closed">
                <div class="aw-page-steps">
                    <div
                        class="aw-page-steps-location aw-is-not-mobile"
                        style="--location:{progress}%;"
                    >
                        <button class="aw-page-steps-location-button">
                            <img src="/images/animations/indicator.svg" alt="" />
                        </button>
                    </div>
                    <ul class="aw-page-steps-list aw-sub-body-500">
                        {#each Object.values(Section) as section}
                            <li>
                                <a
                                    href="#{getSectionId(section)}"
                                    class:is-selected={selected === section}>{section}</a
                                >
                            </li>
                        {/each}
                    </ul>
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed" id="main">
                <div class="aw-content">
                    <section>
                        <p>
                            Resources for presenting the Appwrite brand to maintain consistency
                            while using our logos, colors, and other brand elements across various
                            platforms and materials.
                        </p>

                        <a href="/assets.zip" download class="aw-button u-cross-child-start">
                            <span class="aw-icon-download" aria-hidden="true" />
                            <span>Download assets</span>
                        </a>
                    </section>

                    <section id={getSectionId(Section.NAMING)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.NAMING)}
                            >
                                Naming
                            </h2>
                            <p>
                                Write 'Appwrite,' with a lowercase 'w' and no space between the two
                                words. Please refrain from using variations like 'AppWrite' or 'App
                                Write'.
                            </p>
                        </div>
                    </section>

                    <section id={getSectionId(Section.LOGOTYPE)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.LOGOTYPE)}
                            >
                                Logotype
                            </h2>
                            <p>
                                The Appwrite logo stands as a prominent symbol of our brand's
                                identity. Refrain from altering our logo and preferably use our logo
                                on a neutral background.
                            </p>
                            <div class="u-flex u-flex-wrap u-gap-32 u-margin-block-start-12">
                                <div
                                    class="media-wrapper | theme-light |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-100)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logotype/white.svg"
                                        alt="Appwrite logo with black text"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/white.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/white.png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | theme-dark |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logotype/black.svg"
                                        alt="Appwrite logo with white text"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/black.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/black.png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div class="u-flex u-flex-vertical u-gap-8">
                                <h3 class="aw-label aw-u-color-text-primary">
                                    Co-branding logotypes
                                </h3>
                                <p>
                                    Spacing is determined by the Appwrite mark. Unless otherwise
                                    noted by partner brands, each logo is optically equal as a
                                    collection of shapes.
                                </p>
                                <div
                                    class="u-flex u-main-center u-cross-center u-margin-block-start-12 aw-u-border-radius-8 u-padding-inline-16"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
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
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.LOGOMARK)}
                            >
                                Logomark
                            </h3>
                            <p>
                                While prioritizing recognizability, the logotype is the recommended
                                choice. Using the Appwrite logomark is suitable for situations where
                                space constraints make it challenging to showcase the complete
                                logotype.
                            </p>
                            <div class="u-flex u-flex-wrap u-gap-32 u-margin-block-start-12">
                                <div
                                    class="media-wrapper | theme-light |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-100)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logomark/logo.svg"
                                        alt="Appwrite's logomark"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logomark/logo.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logomark/logo.png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | theme-dark |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logomark/logo.svg"
                                        alt="Appwrite's logomark"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logomark/logo.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logomark/logo.png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section id="">
                            <div class="u-flex u-flex-vertical u-gap-8">
                                <h3 class="aw-label aw-u-color-text-primary">
                                    Co-branding lockups
                                </h3>
                                <p>
                                    Spacing is determined by the Appwrite mark. Unless otherwise
                                    noted by partner brands, each logo is optically equal as a
                                    collection of shapes.
                                </p>
                                <div
                                    class="u-flex u-main-center u-cross-center u-margin-block-start-12 aw-u-border-radius-8 u-padding-inline-16"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
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
                            class="aw-title aw-u-color-text-primary"
                            use:visible={{ top: 48 }}
                            on:visible={handleVisibility(Section.COLORS)}
                        >
                            Brand colors
                        </h2>
                        <div class="u-flex u-flex-wrap u-gap-32">
                            <div
                                class="media-wrapper | u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center u-gap-8
                                aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-900)); background-color:#EDEDF0; 
                                aspect-ratio: 1/1; min-block-size: 10rem;"
                            >
                                <h3 class="aw-label">Light Grey</h3>
                                <p class="aw-caption-400">#EDEDF0</p>
                                <div class="buttons | theme-light">
                                    <button
                                        class="aw-button is-secondary"
                                        on:click={() => copy('#EDEDF0')}
                                    >
                                        <span class="aw-icon-copy" aria-label="copy" />
                                        <span>Copy</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="media-wrapper | aw-u-sep u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center
                                u-gap-8 aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-50)); background-color:#19191D;
                                aspect-ratio: 1/1; min-block-size: 10rem;"
                            >
                                <h3 class="aw-label">Dark Grey</h3>
                                <p class="aw-caption-400">#19191D</p>
                                <div class="buttons">
                                    <button
                                        class="aw-button is-secondary"
                                        on:click={() => copy('#19191D')}
                                    >
                                        <span class="aw-icon-copy" aria-label="copy" />
                                        <span>Copy</span>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="media-wrapper | u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center u-gap-8
                                aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-50)); background-color:#FD366E;
                                aspect-ratio: 1/1; min-block-size: 10rem;"
                            >
                                <h3 class="aw-label">Appwrite Pink</h3>
                                <p class="aw-caption-400">#FD366E</p>
                                <div class="buttons">
                                    <button
                                        class="aw-button is-secondary"
                                        on:click={() => copy('#FD366E')}
                                    >
                                        <span
                                            class="aw-icon-copy"
                                            aria-label="copy"
                                            style="color: white;"
                                        />
                                        <span>Copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id={getSectionId(Section.VISUALS)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.VISUALS)}
                            >
                                Product visuals
                            </h2>
                            <p>
                                Use these product visuals to enhance your articles, presentations,
                                and content related to Appwrite.
                            </p>
                            <div class="aw-grid-1-1-opt-2 u-gap-32 u-margin-block-start-12">
                                <div class="media-wrapper">
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/dashboard.png"
                                        alt="Dashboard"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/visuals/dashboard.jpg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>JPG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href={'/assets/visuals/dashboard.png'}
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="media-wrapper">
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/auth.png"
                                        alt="Appwrite Auth"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/visuals/auth.jpg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>JPG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href={'/assets/visuals/auth.png'}
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="media-wrapper">
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/databases.png"
                                        alt="Appwrite Databases"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/visuals/databases.jpg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>JPG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href={'/assets/visuals/databases.png'}
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="media-wrapper">
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/storage.png"
                                        alt="Appwrite Storage"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/visuals/storage.jpg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>JPG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href={'/assets/visuals/storage.png'}
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="media-wrapper">
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/functions.png"
                                        alt="Appwrite Functions"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/visuals/functions.jpg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>JPG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href={'/assets/visuals/functions.png'}
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id={getSectionId(Section.CONTACT)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.CONTACT)}
                            >
                                Contact us
                            </h2>
                            <p>
                                Should you require further assistance or have specific needs beyond
                                what's presented on this page, please don't hesitate to
                                <a
                                    class="aw-link"
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
</Main>

<style lang="scss">
    .media-wrapper {
        position: relative;

        .buttons {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            position: absolute;
            right: 1rem;
            bottom: 1rem;
        }
    }
</style>
