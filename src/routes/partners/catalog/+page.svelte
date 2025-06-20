<script lang="ts">
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { type ResultType, Fuse } from '$lib/integrations';
    import { writable } from 'svelte/store';
    import { autoHash } from '$lib/actions/autoHash';
    import type { Partner } from './+page';
    import { goto } from '$app/navigation';
    import { onDestroy, onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { classNames } from '$lib/utils/classnames';

    import { page } from '$app/state';
    import Hero from './(components)/hero.svelte';
    import CallToAction from './(components)/call-to-action.svelte';
    import Input from '$lib/components/ui/input.svelte';
    import Icon from '$lib/components/ui/icon';

    export let data;

    const title = 'Partners' + TITLE_SUFFIX;
    const description =
        'Find the right Appwrite Partner for your projects. From freelance specialists to multifaceted agencies, there is an Appwrite expert for you.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    // search functionality
    let fuseOptions = {
        keys: ['title'],
        threshold: 0.2,
        distance: 500
    };

    let result: ResultType<Partner> = [];

    let hasQuery: boolean;
    let query = writable(decodeURIComponent(page.url.searchParams.get('search') ?? ''));

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
    <Hero />

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
                                oninput={handleQuery}
                            >
                                {#snippet icon()}
                                    <Icon name="search" aria-hidden="true" />
                                {/snippet}
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
                                                class={classNames(
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
                                            {@const integrations = data.partners.find(
                                                (i) => i.category === category.slug
                                            )}
                                            {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.partnerLevel.includes(activePlatform) ))}
                                                <option value={category.slug}>
                                                    {category.heading}
                                                </option>
                                            {/if}
                                        {/each}
                                        <option value={null}> Select category </option>
                                    </select>
                                    <Icon
                                        name="chevron-down"
                                        class="web-u-pointer-events-none absolute top-[11px] right-2"
                                        aria-hidden="true"
                                    />
                                </div>

                                <ul class="hidden flex-col gap-4 sm:flex" class:disabled={hasQuery}>
                                    {#each data.categories as category}
                                        {@const integrations = data.partners.find(
                                            (i) => i.category === category.slug
                                        )}
                                        {#if integrations && (activePlatform === 'All' || integrations.integrations.some( (i) => i.partnerLevel.includes(activePlatform) ))}
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

                                                            <Icon
                                                                name="arrow-right"
                                                                class="ml-auto"
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

                                {#each data.partners as { category, heading, description, integrations }}
                                    {#if integrations?.length > 0 && (activePlatform === 'All' || integrations.some( (i) => i.partnerLevel.includes(activePlatform) ))}
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
                                                        {#if activePlatform === 'All' || integration.partnerLevel.includes(activePlatform)}
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
                                                                        <Icon
                                                                            name="arrow-right"
                                                                            class="ml-auto"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>

                                                                    <h4 class="text-primary">
                                                                        {integration.title}
                                                                    </h4>

                                                                    <p
                                                                        class="text-sub-body mt-1 line-clamp-2"
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

    <div class="overflow-hidden pt-10">
        <CallToAction />
        <div class="container">
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
