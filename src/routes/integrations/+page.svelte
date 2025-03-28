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
    import { cn } from '$lib/utils/classnames';
    import Input from '$lib/components/ui/input.svelte';
    import { page } from '$app/stores';

    export let data;

    const title = 'Integrations' + TITLE_SUFFIX;
    const description =
        'Connect your favorite apps to Appwrite for one unified tech stack. Explore our catalog of integrations now.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    // search functionality
    let fuseOptions = {
        keys: ['title'],
        threshold: 0.2,
        distance: 500
    };

    let result: ResultType<Integration> = [];

    let hasQuery: boolean;
    let query = writable(decodeURIComponent($page.url.searchParams.get('search') ?? ''));

    $: query.subscribe((value) => {
        hasQuery = value.length > 0;
    });

    // platform filters
    const platforms = ['All', ...data.platforms];

    let activePlatform = 'All';

    // categories
    let activeCategory: string | null = null;

    const handleQuery = (e: Event) => {
        const value = (e.currentTarget as HTMLInputElement).value;
        query.set(value);
    };

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
    <header class="web-u-sep-block-end web-u-padding-block-end-0 relative overflow-hidden pb-0">
        <div class="hero web-u-padding-block-end-0 relative container">
            <img
                src="/images/pages/integration/integration-bg-top-1.png"
                alt=""
                width="983"
                height="985"
                class="l-bg-1 web-is-not-mobile absolute"
            />
            <img
                src="/images/pages/integration/net-desktop.png"
                alt=""
                width="895"
                height="560"
                class="l-bg-2 web-is-not-mobile absolute"
            />
            <img
                src="/images/pages/integration/net-desktop.png"
                alt=""
                width="360"
                height="560"
                class="l-bg-2 web-is-only-mobile absolute"
            />
            <div class="web-integrations-top-section">
                <div
                    class="l-integrations-hero web-u-max-width-680 flex flex-col justify-center gap-5"
                >
                    <div class="text-micro text-primary uppercase">
                        INTEGRATIONS<span class="web-u-color-text-accent">_</span>
                    </div>
                    <h1 class="text-headline font-aeonik-pro text-primary">
                        Discover infinite possibilities
                    </h1>
                    <p class="text-description">
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

    <div class="py-10">
        <div>
            <div class="container">
                <div class="l-integrations-grid">
                    <aside class="sidebar flex flex-col gap-8" id="integrations-side">
                        <section>
                            <Input
                                label="Search"
                                name="search"
                                placeholder="Search"
                                bind:value={$query}
                                autocomplete="off"
                                on:input={handleQuery}
                            >
                                <span class="web-icon-search" aria-hidden="true" slot="icon" />
                            </Input>
                        </section>
                        <section class="flex flex-col">
                            <section class="flex flex-col gap-4">
                                <h2
                                    class="web-side-nav-header text-micro whitespace-nowrap uppercase"
                                >
                                    Platform
                                </h2>
                                <ul class="flex flex-wrap gap-2" class:disabled={hasQuery}>
                                    {#each platforms as platform}
                                        <li>
                                            <button
                                                class={cn(
                                                    'tag bg-greyscale-800 border-greyscale-700 h-8 cursor-pointer rounded-full border px-3 text-sm font-light',
                                                    {
                                                        'bg-white text-black':
                                                            activePlatform === platform
                                                    }
                                                )}
                                                class:active-tag={activePlatform === platform}
                                                on:click={() => (activePlatform = platform)}
                                                >{platform}</button
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            </section>
                            <div class="web-u-sep-block-start my-6"></div>
                            <section class="flex flex-col gap-4">
                                <h2
                                    class="web-side-nav-header text-micro whitespace-nowrap uppercase"
                                >
                                    Categories
                                </h2>

                                <div class="relative block sm:hidden">
                                    <select
                                        class="web-input-text w-full appearance-none"
                                        disabled={hasQuery}
                                        on:change={(e) =>
                                            goto(`#${e.currentTarget.value.toLowerCase()}`)}
                                    >
                                        {#each data.categories as category}
                                            {@const integrations = data.integrations.find(
                                                (i) => i.category === category.slug
                                            )}
                                            {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                                <option value={category.slug}>
                                                    {category.heading}
                                                </option>
                                            {/if}
                                        {/each}
                                        <option value={null}> Select category </option>
                                    </select>
                                    <span
                                        class="icon-cheveron-down web-u-pointer-events-none absolute top-[11px] right-2"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ul class="hidden flex-col gap-4 sm:flex" class:disabled={hasQuery}>
                                    {#each data.categories as category}
                                        {@const integrations = data.integrations.find(
                                            (i) => i.category === category.slug
                                        )}
                                        {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                            <li>
                                                <a
                                                    href={`#${category.slug}`}
                                                    class="web-link"
                                                    class:is-pink={category.slug === activeCategory}
                                                    on:click={() =>
                                                        activeCategory === category.slug}
                                                    >{category.heading}</a
                                                >
                                            </li>
                                        {/if}
                                    {/each}
                                </ul>
                            </section>
                        </section>
                    </aside>

                    <section>
                        <div class="flex flex-col gap-16">
                            {#if hasQuery}
                                <section class="l-max-size-list-cards-section flex flex-col gap-8">
                                    <header class="flex flex-col gap-1">
                                        <h2 class="text-label text-primary">Search results</h2>
                                        <p class="text-description">
                                            {result.length > 0 ? result.length : 'No'} results found
                                            for "{$query}"
                                        </p>
                                    </header>
                                    <div class="l-max-size-list-cards flex flex-col gap-8">
                                        <ul class="l-grid-1">
                                            {#each result.map((d) => d.item) as item}
                                                <li>
                                                    <a
                                                        href={item.href}
                                                        class="web-card is-normal h-full"
                                                        style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                                                    >
                                                        <div
                                                            class="mb-3 flex items-center justify-between"
                                                        >
                                                            <img
                                                                class="web-user-box-image is-32px"
                                                                src={item.product.avatar}
                                                                alt={item.product.vendor}
                                                                width="32"
                                                                height="32"
                                                            />

                                                            <span
                                                                class="icon-arrow-right ml-auto"
                                                                aria-hidden="true"
                                                            />
                                                        </div>

                                                        <h4 class="text-primary">
                                                            {item.title}
                                                        </h4>
                                                        <p class="text-sub-body mt-1">
                                                            {item.description}
                                                        </p>
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </section>
                            {:else}
                                <section class="flex flex-col gap-8">
                                    <header class="flex flex-col gap-1">
                                        <h2 class="text-label text-primary">Featured</h2>
                                        <p class="text-description">Top recommended integrations</p>
                                    </header>

                                    <div>
                                        <ul class="web-feature-grid grid gap-4 sm:grid-cols-2">
                                            {#each data.featured as item}
                                                <li
                                                    class="web-feature-grid-item is-two-columns-desktop-only relative"
                                                >
                                                    <a
                                                        class="block overflow-hidden rounded-2xl before:absolute before:inset-x-0 before:bottom-0 before:block before:h-80 before:rounded-[inherit] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-black"
                                                        href={item.integration.href}
                                                    >
                                                        <img
                                                            src={item.integration.cover}
                                                            alt={item.integration.title}
                                                            class="web-u-media-cover block aspect-video"
                                                        />
                                                        <div
                                                            class="web-user-box absolute bottom-4 left-4 z-10 gap-x-2"
                                                        >
                                                            <img
                                                                class="row-span-2 block size-12 rounded-full"
                                                                src={item.integration.product
                                                                    .avatar}
                                                                alt={`Avatar for ${item.integration.product.vendor}`}
                                                                width="40"
                                                                height="40"
                                                            />
                                                            <div
                                                                class="text-body gap-2 font-medium"
                                                            >
                                                                <span class="text-primary mt-3">
                                                                    {item.integration.title}
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="text-caption web-u-color-text-secondary"
                                                            >
                                                                {item.heading}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                </section>

                                {#each data.integrations as { category, heading, description, integrations }}
                                    {#if integrations?.length > 0 && (activePlatform === 'All' || integrations.some( (i) => i.platform.includes(activePlatform) ))}
                                        <section
                                            class="l-max-size-list-cards-section flex flex-col gap-8"
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
                                            <header class="flex flex-col gap-1">
                                                <h2 class="text-label text-primary">
                                                    {heading}
                                                </h2>
                                                <p class="text-description">
                                                    {description}
                                                </p>
                                            </header>
                                            <div class="l-max-size-list-cards flex flex-col gap-8">
                                                <ul class="l-grid-1">
                                                    {#each integrations as integration, index (`${integration.title}-${index}`)}
                                                        {#if activePlatform === 'All' || integration.platform.includes(activePlatform)}
                                                            <li>
                                                                <a
                                                                    href={integration.href}
                                                                    class="web-card is-normal h-full"
                                                                    style="--card-padding:1.5rem; --card-padding-mobile:1.5rem; --card-border-radius: 1.5rem"
                                                                >
                                                                    <div
                                                                        class="mb-3 flex items-center justify-between"
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
                                                                            class="icon-arrow-right ml-auto"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>

                                                                    <h4 class="text-primary">
                                                                        {integration.title}
                                                                    </h4>

                                                                    <p class="text-sub-body mt-1">
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

    <div class="overflow-hidden pt-10" style:margin-top="160px">
        <div class="container">
            <div class="web-big-padding-section-level-2 relative">
                <img
                    src="/images/bgs/pre-footer.png"
                    alt=""
                    class="web-pre-footer-bg"
                    style="z-index:-1"
                />

                <div class="relative">
                    <section
                        class="web-hero web-u-max-width-580 flex items-center justify-center gap-4"
                    >
                        <h2
                            class="text-display font-aeonik-pro text-primary max-w-[600px] text-center"
                        >
                            Become a Technology Partner
                        </h2>
                        <p class="text-body font-medium">
                            Join our Technology Partners program to integrate your solutions with
                            Appwrite’s API, enhancing functionality and expanding your reach.
                        </p>
                        <a
                            href="/integrations/technology-partner"
                            class="web-button is-primary mt-4 self-center"
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
    @use '$scss/abstract/functions' as f;
    @use '$scss/abstract/variables/devices';

    :global([data-scroll-smooth]) {
        scroll-behavior: smooth;
    }
    .hero {
        min-height: f.pxToRem(620);
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 60% minmax(0, 1fr);
            gap: f.pxToRem(32);
            justify-content: space-between;
            align-items: center;
            position: relative;

            > :nth-child(5) {
                transform-origin: left center;
                scale: 1.25;
                position: relative;
                left: f.pxToRem(-30);
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
        scroll-margin-top: f.pxToRem(120);
    }
    .l-max-size-list-cards {
        &:where(:has(> ul > li:nth-child(10))) {
            position: relative;

            &::before {
                position: absolute;
                bottom: 0;
                height: 100%;
                width: 100%;
                max-height: f.pxToRem(350);
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
                inset-block-end: f.pxToRem(20);
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
        @media #{devices.$break1} {
            gap: 1.25rem;
        }
    }
    .l-integrations-grid {
        position: relative;

        @media #{devices.$break1} {
            gap: 0;
            padding-block-start: f.pxToRem(80);
        }

        .disabled {
            & > li {
                pointer-events: none;
                opacity: 0.4;
            }
        }

        .sidebar {
            margin-bottom: f.pxToRem(60);
            @media #{devices.$break2open} {
                position: sticky;
                top: 90px;
                height: 500px;
                transition: top 0.3s ease;

                &.menu-visible {
                    top: 122px;
                }
            }

            .tag {
                min-width: f.pxToRem(42) !important;

                &.active-tag {
                    background-color: #fff;
                    color: #000;
                }
            }
        }

        @media #{devices.$break2open} {
            display: grid;
            gap: f.pxToRem(68);
            grid-template-columns: f.pxToRem(240) 1fr;
            padding-block-start: f.pxToRem(40);
        }
    }
    .l-integrations-hero {
        @media #{devices.$break1} {
        }
        @media #{devices.$break2open} {
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
        @media #{devices.$break1} {
            gap: 1rem;
        }
    }
    .web-feature-grid {
        @media #{devices.$break1} {
            gap: 1rem;
        }
    }
</style>
