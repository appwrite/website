<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import integrations from '../../integrations.json';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import SvelteFuse from '$lib/integrations/SvelteFuse.svelte';
    import type { ResultType } from '$lib/integrations';
    import { writable } from 'svelte/store';

    const title = 'Integrations' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    // search functionality
    type Integrations = (typeof integrations)[number];
    type Integration = Integrations['items'][number];

    const list = integrations.reduce(
        (acc, category) => acc.concat(category.items),
        [] as Integration[]
    );

    const categories = integrations.map((integration) => integration.category);

    const getFeaturedIntegrations = () => {
        const featuredIntegrations: Array<Integration> = [];

        integrations.forEach((integration) => {
            integration.items.forEach((item) => {
                if (item.featured) {
                    featuredIntegrations.push(item);
                }
            });
        });

        return featuredIntegrations.slice(0, 4);
    };

    const featuredIntegrations = getFeaturedIntegrations();

    let fuseOptions = {
        keys: ['title'],
        threshold: 0.3
    };

    let result: ResultType<(typeof list)[number]> = [];

    // search term
    let hasQuery: boolean;
    let query = writable('');

    $: query.subscribe((value) => {
        hasQuery = value.length > 0;
    });
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
    <header class="web-u-sep-block-end u-padding-block-end-0 u-position-relative u-overflow-hidden">
        <div class="web-container u-position-relative">
            <img
                src="/images/pages/integration/integration-bg-top-1.png"
                alt=""
                width="983"
                height="985"
                class="l-bg-1 u-position-absolute web-is-not-mobile"
            />
            <img
                src="/images/pages/integration/net-desktop.png"
                alt=""
                width="895"
                height="560"
                class="l-bg-2 u-position-absolute web-is-not-mobile"
            />
            <img
                src="/images/pages/integration/net-desktop.png"
                alt=""
                width="360"
                height="560"
                class="l-bg-2 u-position-absolute web-is-only-mobile"
            />
            <div class="web-integrations-top-section">
                <div
                    class="l-integrations-hero u-flex-vertical u-main-center u-gap-20 web-u-max-width-680"
                >
                    <div class="web-eyebrow web-u-color-text-primary">
                        INTEGRATIONS<span class="web-u-color-text-accent">_</span>
                    </div>
                    <h1 class="web-headline web-u-color-text-primary">
                        Discover infinite possibilities
                    </h1>
                    <p class="web-description">
                        Unlock the full potential of Appwrite by seamlessly integrating your
                        favorite apps with your projects.
                    </p>
                </div>
            </div>
        </div>
    </header>

    <div class="web-big-padding-section-level-1">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <div class="l-integrations-grid">
                    <aside class="u-flex-vertical u-gap-32 sidebar">
                        <section>
                            <label class="web-input-button web-u-flex-basis-400">
                                <span class="web-icon-search" aria-hidden="true"></span>
                                <input class="text" placeholder="Search" bind:value={$query} />
                            </label>
                        </section>
                        <section class="u-flex-vertical">
                            <section class="u-flex-vertical u-gap-16">
                                <h2 class="web-side-nav-header web-eyebrow u-un-break-text">
                                    Platform
                                </h2>
                                <ul class="u-flex u-flex-wrap u-gap-8">
                                    <li>
                                        <button class="tag is-selected">Cloud</button>
                                    </li>
                                    <li>
                                        <button class="tag">Self-hosted</button>
                                    </li>
                                </ul>
                            </section>
                            <div class="web-u-sep-block-start u-margin-block-24"></div>
                            <section class="u-flex-vertical u-gap-16">
                                <h2 class="web-side-nav-header web-eyebrow u-un-break-text">
                                    Categories
                                </h2>
                                <ul class="u-flex-vertical u-gap-16">
                                    {#each categories as category}
                                        <li>
                                            <a class="web-link" href={`#${category.toLowerCase()}`}
                                                >{category}</a
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                        </section>
                    </aside>

                    <SvelteFuse {list} options={fuseOptions} bind:query={$query} bind:result />

                    <section>
                        <div class="u-flex-vertical u-gap-80">
                            {#if hasQuery}
                                <section
                                    class="l-max-size-list-cards-section u-flex-vertical u-gap-32"
                                >
                                    <header class="u-flex-vertical u-gap-4">
                                        <h2 class="web-label web-u-color-text-primary">
                                            Search results
                                        </h2>
                                        <p class="web-description">
                                            {result.length > 0 ? result.length : 'No'} results found
                                            for "{$query}"
                                        </p>
                                    </header>
                                    <div class="l-max-size-list-cards u-flex-vertical u-gap-32">
                                        <ul class="l-grid-1">
                                            {#each result.map((d) => d.item) as item}
                                                <li>
                                                    <a
                                                        href={item.url}
                                                        class="web-card is-normal u-height-100-percent"
                                                        style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                                                    >
                                                        <div class="u-flex u-cross-center u-gap-8">
                                                            <img
                                                                class="web-user-box-image is-32px"
                                                                src={item.author.avatar}
                                                                alt={item.author.name}
                                                                width="32"
                                                                height="32"
                                                            />
                                                            <h4
                                                                class="web-main-body-400 web-u-color-text-primary"
                                                            >
                                                                {item.title}
                                                            </h4>
                                                            <span
                                                                class="icon-arrow-right u-margin-inline-start-auto"
                                                                aria-hidden="true"
                                                            ></span>
                                                        </div>
                                                        <p
                                                            class="web-sub-body-400 u-margin-block-start-4"
                                                        >
                                                            {item.description}
                                                        </p>
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </section>
                            {:else}
                                <section class="u-flex-vertical u-gap-32">
                                    <header class="u-flex-vertical u-gap-4">
                                        <h2 class="web-label web-u-color-text-primary">Featured</h2>
                                        <p class="web-description">Top recommended integrations</p>
                                    </header>

                                    <div>
                                        <ul class="web-feature-grid">
                                            {#each featuredIntegrations as item}
                                                <li
                                                    class="web-feature-grid-item is-two-columns-desktop-only"
                                                >
                                                    <a class="web-overlay-item" href={item.url}>
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            class="u-block web-u-media-ratio-16-9 web-u-media-cover"
                                                        />
                                                        <div
                                                            class="web-user-box u-column-gap-8 u-row-gap-0"
                                                        >
                                                            <img
                                                                class="web-user-box-image"
                                                                src={item.author.avatar}
                                                                alt={`Avatar for ${item.author.name}`}
                                                                width="40"
                                                                height="40"
                                                            />
                                                            <div
                                                                class="web-user-box-name web-main-body-500 u-flex u-gap-8"
                                                            >
                                                                <span
                                                                    class="web-u-color-text-primary"
                                                                    >{item.author.name}</span
                                                                >
                                                                {#if item.new}
                                                                    <span
                                                                        class="web-inline-tag is-pink"
                                                                        >New</span
                                                                    >
                                                                {/if}
                                                            </div>
                                                            <div
                                                                class="web-user-box-username web-caption-400 web-u-color-text-secondary"
                                                            >
                                                                {item.author.username}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </section>
                                {#each integrations as integration (integration.category)}
                                    <section
                                        class="l-max-size-list-cards-section u-flex-vertical u-gap-32"
                                        id={integration.category.toLowerCase()}
                                    >
                                        <header class="u-flex-vertical u-gap-4">
                                            <h2 class="web-label web-u-color-text-primary">
                                                {integration.category}
                                            </h2>
                                            <p class="web-description">{integration.description}</p>
                                        </header>
                                        <div class="l-max-size-list-cards u-flex-vertical u-gap-32">
                                            <ul class="l-grid-1">
                                                {#each integration.items as item, index (`${item.title}-${index}`)}
                                                    <li>
                                                        <a
                                                            href={item.url}
                                                            class="web-card is-normal u-height-100-percent"
                                                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                                                        >
                                                            <div
                                                                class="u-flex u-cross-center u-gap-8"
                                                            >
                                                                <img
                                                                    class="web-user-box-image is-32px"
                                                                    src={item.author.avatar}
                                                                    alt={item.author.name}
                                                                    width="32"
                                                                    height="32"
                                                                />
                                                                <h4
                                                                    class="web-main-body-400 web-u-color-text-primary"
                                                                >
                                                                    {item.title}
                                                                </h4>
                                                                <span
                                                                    class="icon-arrow-right u-margin-inline-start-auto"
                                                                    aria-hidden="true"
                                                                ></span>
                                                            </div>
                                                            <p
                                                                class="web-sub-body-400 u-margin-block-start-4"
                                                            >
                                                                {item.description}
                                                            </p>
                                                        </a>
                                                    </li>
                                                {/each}
                                            </ul>
                                            <a
                                                href={`#${integration.category.toLowerCase()}`}
                                                class="l-float-button web-button is-text"
                                            >
                                                <span>Show more</span>
                                            </a>
                                        </div>
                                    </section>
                                {/each}
                            {/if}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <div class="web-big-padding-section-level-1 u-overflow-hidden">
        <div class="web-big-padding-section-level-2 u-position-relative">
            <img
                src="/images/bgs/pre-footer.png"
                alt=""
                class="web-pre-footer-bg"
                style="z-index:-1"
            />

            <div class="u-position-relative">
                <section
                    class="web-hero u-flex u-row-gap-16 u-main-center u-cross-center web-u-max-width-580"
                >
                    <h2
                        class="web-display u-max-width-500 web-u-text-align-center web-u-color-text-primary"
                    >
                        Become a partner
                    </h2>
                    <p class="web-main-body-500">
                        Join our partner program to integrate your solutions with Appwrite’s API,
                        enhancing functionality and expanding your reach.
                    </p>
                    <a
                        href="/"
                        class="web-button is-primary web-u-cross-child-center u-margin-block-start-16"
                    >
                        <span class="text">Get Started</span>
                    </a>
                </section>
            </div>
        </div>
        <div class="web-container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract' as *;

    .sidebar {
        position: sticky;
        top: 100px;
    }
    .web-pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-58%, -72%);
        width: clamp(1200px, 200vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
    }
    .l-float-button {
        display: none;
    }
    /* more tha 9 items */
    .l-max-size-list-cards-section {
        scroll-snap-align: start;
        scroll-margin-top: pxToRem(120);
    }
    .l-max-size-list-cards {
        &:where(:has(> ul > li:nth-child(10))) {
            position: relative;
            max-block-size: pxToRem(460);
            overflow: hidden;
            &::before {
                position: absolute;
                inset: 0;
                content: '';
                display: block;
                background: linear-gradient(
                    180deg,
                    rgba(25, 25, 28, 0) 0%,
                    rgba(25, 25, 28, 0.92) 90%,
                    #19191c 100%
                );
                transition: var(--transition);
            }
            .l-float-button {
                position: absolute;
                inset-inline: 0;
                inset-block-end: pxToRem(20);
                margin-inline: auto;
                display: flex;
            }
        }
    }

    :where(:target, :focus-within) {
        .l-max-size-list-cards {
            overflow: visible;
            max-block-size: none;
            &::before {
                opacity: 0;
                pointer-events: none;
            }
            .l-float-button {
                display: none;
            }
        }
    }

    .l-grid-1 {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        gap: pxToRem(32);
    }
    .l-integrations-grid {
        position: relative;
        @media #{$break2open} {
            display: grid;
            gap: pxToRem(68);
            grid-template-columns: pxToRem(240) 1fr;
            padding-block-start: pxToRem(60);
        }
    }
    .l-integrations-hero {
        @media #{$break1} {
        }
        @media #{$break2open} {
        }
    }
    .l-bg-1 {
        max-inline-size: none;
        max-block-size: none;
        inset-block-end: -600px;
        inset-inline-start: -600px;
    }
    .l-bg-2 {
        inset-block-start: 0;
        inset-inline-start: 0;
    }
</style>
