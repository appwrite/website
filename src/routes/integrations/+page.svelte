<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { type ResultType, Fuse } from '$lib/integrations';
    import { writable } from 'svelte/store';
    import { autoHash } from '$lib/actions/autoHash';
    import type { Integration } from './+page';
    import { goto } from '$app/navigation';
    import { onDestroy, onMount } from 'svelte';
    import { browser } from '$app/environment';

    export let data;

    const title = 'Integrations' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    // search functionality
    let fuseOptions = {
        keys: ['title'],
        threshold: 0.3
    };

    let result: ResultType<Integration> = [];

    let hasQuery: boolean;
    let query = writable('');

    $: query.subscribe((value) => {
        hasQuery = value.length > 0;
    });

    // platform filters
    const platforms = ['All', ...data.platforms];

    let activePlatform = 'All';

    // categories
    let activeCategory: string | null = null;

    onMount(() => {
        if (browser) document.documentElement.setAttribute('data-scroll-smooth', '');
    });

    onDestroy(() => {
        if (browser) document.documentElement.removeAttribute('data-scroll-smooth');
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

<!-- binding for fuse -->
<Fuse list={data.list} options={fuseOptions} bind:query={$query} bind:result />
<Main>
    <header class="web-u-sep-block-end u-padding-block-end-0 u-position-relative u-overflow-hidden">
        <div class="web-container u-position-relative hero web-u-padding-block-end-0">
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

            <div>
                <img src="/images/integrations/rubiks-cube.png" alt="" />
            </div>
        </div>
    </header>

    <div class="web-big-padding-section-level-1">
        <div>
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
                                <ul class="u-flex u-flex-wrap u-gap-8" class:disabled={hasQuery}>
                                    {#each platforms as platform}
                                        <li>
                                            <button
                                                class="tag"
                                                class:is-selected={activePlatform === platform}
                                                class:active-tag={activePlatform === platform}
                                                on:click={() => (activePlatform = platform)}
                                                >{platform}</button
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                            <div class="web-u-sep-block-start u-margin-block-24"></div>
                            <section class="u-flex-vertical u-gap-16">
                                <h2 class="web-side-nav-header web-eyebrow u-un-break-text">
                                    Categories
                                </h2>

                                <div class="u-position-relative is-not-desktop">
                                    <select
                                        class="web-input-text"
                                        bind:value={activeCategory}
                                        on:change={() => {
                                            goto(`#${activeCategory?.toLowerCase()}`);
                                        }}
                                    >
                                        {#each data.categories as category}
                                            {@const integrations = data.integrations.find(
                                                (i) => i.category === category
                                            )}
                                            {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                                <option value={category.toLowerCase()}>
                                                    {category}
                                                </option>
                                            {/if}
                                        {/each}
                                        <option value={null}> Select category </option>
                                    </select>
                                    <span
                                        class="icon-cheveron-down u-position-absolute u-inset-inline-end-8 u-inset-block-start-8 web-u-pointer-events-none"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ul
                                    class="u-flex-vertical u-gap-16 is-only-desktop"
                                    class:disabled={hasQuery}
                                >
                                    {#each data.categories as category}
                                        {@const integrations = data.integrations.find(
                                            (i) => i.category === category
                                        )}
                                        {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                            <li>
                                                <a
                                                    href={`#${category.toLowerCase()}`}
                                                    class="web-link"
                                                    class:is-pink={category.toLowerCase() ===
                                                        activeCategory}
                                                    on:click={() =>
                                                        activeCategory === category.toLowerCase()}
                                                    >{category}</a
                                                >
                                            </li>
                                        {/if}
                                    {/each}
                                </ul>
                            </section>
                        </section>
                    </aside>

                    <section>
                        <div class="u-flex-vertical u-gap-64">
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
                                                        href={item.href}
                                                        class="web-card is-normal u-height-100-percent"
                                                        style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                                                    >
                                                        <div class="u-flex u-cross-center u-gap-8">
                                                            <img
                                                                class="web-user-box-image is-32px"
                                                                src={item.product.avatar}
                                                                alt={item.product.vendor}
                                                                width="32"
                                                                height="32"
                                                            />
                                                            <h4 class="web-u-color-text-primary">
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
                                        <ul class="web-feature-grid" style="gap: 1rem">
                                            {#each data.featured as item}
                                                <li
                                                    class="web-feature-grid-item is-two-columns-desktop-only"
                                                >
                                                    <a class="web-overlay-item" href={item.href}>
                                                        <img
                                                            src={item.cover}
                                                            alt={item.title}
                                                            class="u-block web-u-media-ratio-16-9 web-u-media-cover"
                                                        />
                                                        <div
                                                            class="web-user-box u-column-gap-8 u-row-gap-0"
                                                        >
                                                            <img
                                                                class="web-user-box-image"
                                                                src={item.product.avatar}
                                                                alt={`Avatar for ${item.product.vendor}`}
                                                                width="40"
                                                                height="40"
                                                                style="border-radius: 50%;"
                                                            />
                                                            <div
                                                                class="web-user-box-name web-main-body-500 u-flex u-gap-8"
                                                            >
                                                                <span
                                                                    class="web-u-color-text-primary"
                                                                >
                                                                    {item.title}
                                                                </span>
                                                                <!-- {#if item.isNew}
                                                                    <span
                                                                        class="web-inline-tag is-pink"
                                                                    >
                                                                        New
                                                                    </span>
                                                                {/if} -->
                                                            </div>
                                                            <div
                                                                class="web-user-box-username web-caption-400 web-u-color-text-secondary"
                                                            >
                                                                {item.category}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </section>

                                {#each data.integrations as { category, description, integrations }}
                                    {#if integrations?.length > 0 && (activePlatform === 'All' || integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                        <section
                                            class="l-max-size-list-cards-section u-flex-vertical u-gap-32"
                                            id={category.toLowerCase()}
                                            use:autoHash={(entries) => {
                                                entries.forEach((entry) => {
                                                    if (
                                                        entry.isIntersecting &&
                                                        activeCategory !== category.toLowerCase()
                                                    ) {
                                                        activeCategory = category.toLowerCase();
                                                    }
                                                });
                                            }}
                                        >
                                            <header class="u-flex-vertical u-gap-4">
                                                <h2 class="web-label web-u-color-text-primary">
                                                    {category}
                                                </h2>
                                                <p class="web-description">
                                                    {description}
                                                </p>
                                            </header>
                                            <div
                                                class="l-max-size-list-cards u-flex-vertical u-gap-32"
                                            >
                                                <ul class="l-grid-1">
                                                    {#each integrations as integration, index (`${integration.title}-${index}`)}
                                                        {#if activePlatform === 'All' || integration.platform.includes(activePlatform)}
                                                            <li>
                                                                <a
                                                                    href={integration.href}
                                                                    class="web-card is-normal u-height-100-percent"
                                                                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem; --card-border-radius: 1.5rem"
                                                                >
                                                                    <div
                                                                        class="u-flex u-cross-center u-gap-8"
                                                                    >
                                                                        <img
                                                                            class="web-user-box-image is-32px"
                                                                            src={integration.product
                                                                                .avatar}
                                                                            alt={integration.product
                                                                                .vendor}
                                                                            width="32"
                                                                            height="32"
                                                                        />
                                                                        <span
                                                                            class="icon-arrow-right u-margin-inline-start-auto"
                                                                            aria-hidden="true"
                                                                        ></span>
                                                                    </div>

                                                                    <h4
                                                                        class="web-u-color-text-primary u-margin-block-start-12"
                                                                    >
                                                                        {integration.title}
                                                                    </h4>
                                                                    <p
                                                                        class="web-sub-body-400 u-margin-block-start-4"
                                                                    >
                                                                        {integration.description}
                                                                    </p>
                                                                </a>
                                                            </li>
                                                        {/if}
                                                    {/each}
                                                </ul>
                                                <a
                                                    href={`#${category.toLowerCase()}`}
                                                    class="l-float-button web-button is-text"
                                                >
                                                    <span>Show more</span>
                                                </a>
                                            </div>
                                        </section>
                                    {/if}
                                {/each}
                            {/if}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <div class="web-big-padding-section-level-1 u-overflow-hidden" style:margin-top="160px">
        <div class="web-container">
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
                            class="web-display u-max-width-600 web-u-text-align-center web-u-color-text-primary"
                        >
                            Become a Technology Partner
                        </h2>
                        <p class="web-main-body-500">
                            Join our Technology Partners program to integrate your solutions with
                            Appwrite’s API, enhancing functionality and expanding your reach.
                        </p>
                        <a
                            href="/integrations/technology-partner"
                            class="web-button is-primary web-u-cross-child-center u-margin-block-start-16"
                        >
                            <span class="text">Get Started</span>
                        </a>
                    </section>
                </div>
            </div>
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract' as *;
    :global([data-scroll-smooth]) {
        scroll-behavior: smooth;
    }
    .hero {
        min-height: pxToRem(620);
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 60% minmax(0, 1fr);
            gap: pxToRem(32);
            justify-content: space-between;
            align-items: center;
            position: relative;

            > :nth-child(5) {
                transform-origin: left center;
                scale: 1.25;
                position: relative;
                left: pxToRem(-30);
            }
        }

        @media (max-width: 768px) {
            > :nth-child(5) {
                transform-origin: left center;
                scale: 2;
                left: 0;
            }
        }

        @media (max-width: 767.9px) {
            display: block;
            overflow: hidden;
            gap: 2rem;

            > :first-child {
                max-width: 40rem;
                margin-inline: auto;
            }

            > :nth-child(5) {
                scale: 1;
                width: 100%;
                height: 24rem;
                position: relative;

                img {
                    position: absolute;
                    display: block;
                    width: 40rem;

                    left: 50%;
                    top: 50%;
                    transform: translate(-30%, -40%);

                    max-block-size: unset;
                    max-inline-size: unset;
                }
            }
        }
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

            &::before {
                position: absolute;
                bottom: 0;
                height: 100%;
                width: 100%;
                max-height: pxToRem(350);
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

    :where(:target) {
        .l-max-size-list-cards {
            overflow: visible;
            max-block-size: none;
            scroll-margin: 100px;
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
        gap: 1rem;
        @media #{$break1} {
            gap: 1.25rem;
        }
    }
    .l-integrations-grid {
        position: relative;

        @media #{$break1} {
            gap: 0;
            padding-block-start: pxToRem(80);
        }

        .disabled {
            & > li {
                pointer-events: none;
                opacity: 0.4;
            }
        }

        .sidebar {
            margin-bottom: pxToRem(60);
            @media #{$break2open} {
                position: sticky;
                top: 50px;
                height: 500px;
            }

            .tag {
                min-width: pxToRem(42);
                &.active-tag {
                    background-color: #fff;
                    color: #000;
                }
            }
        }

        @media #{$break2open} {
            display: grid;
            gap: pxToRem(68);
            grid-template-columns: pxToRem(240) 1fr;
            padding-block-start: pxToRem(40);
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
        opacity: 0.5;
    }
    .l-bg-2 {
        inset-block-start: 0;
        inset-inline-start: 0;
        opacity: 0.5;
    }

    .web-feature-grid {
        @media #{$break1} {
            gap: 1rem;
        }
    }
    .web-feature-grid {
        @media #{$break1} {
            gap: 1rem;
        }
    }
</style>
