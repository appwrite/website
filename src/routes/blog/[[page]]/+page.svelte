<script lang="ts">
    import { tick } from 'svelte';
    import { page } from '$app/state';
    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { createDebounce } from '$lib/utils/debounce';
    import { goto, onNavigate } from '$app/navigation';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { Button } from '$lib/components/ui';

    let { data } = $props();

    const featured = data.featured;
    const categories = data.filteredCategories.sort((a, b) => a.name.localeCompare(b.name));

    let isFirstPage = $derived(data.currentPage === 1);

    let isLastPage = $derived(data.currentPage === data.totalPages);

    let currentPageRange = $derived(data.navigation || []);

    let query = $state('');
    let isEnd = $state(false);
    let isStart = $state(true);
    let categoriesElement: HTMLElement;

    let articlesHeader: HTMLElement;

    let previousPage: number | null = null;

    onNavigate(async ({ from, type }) => {
        previousPage = type === 'link' ? parseInt(from?.params?.page ?? '1') : null;
        if (!articlesHeader || !previousPage) return;

        await tick();
        articlesHeader.scrollIntoView();
    });

    let selectedCategory = $state(page.url.searchParams.get('category') ?? 'Latest');

    const handleSearch = async () => {
        const searchQuery = query.toLowerCase();

        /**
         * Navigate to the first page on search/filter to ensure consistent
         * navigation experience when changing categories or search queries.
         */
        const url = new URL('/blog', page.url);

        if (searchQuery) {
            url.searchParams.set('search', searchQuery);
        } else {
            url.searchParams.delete('search');
        }

        if (selectedCategory && selectedCategory !== 'Latest') {
            url.searchParams.set('category', selectedCategory);
        } else {
            url.searchParams.delete('category');
        }

        await goto(url.toString(), {
            noScroll: true,
            keepFocus: true
        });
    };

    let navigationLink = $derived((pageNumber: number): string => {
        const currentUrl = page.url;
        const url = new URL(`/blog/${pageNumber}`, currentUrl);

        if (currentUrl.search) {
            url.search = currentUrl.search;
        }

        return url.toString();
    });

    const { debounce, reset } = createDebounce();

    const search = (node: HTMLInputElement) => {
        const inputHandler = () => debounce(() => handleSearch());
        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                reset();
                handleSearch();
            }
        };

        node.addEventListener('input', inputHandler);
        node.addEventListener('keydown', keydownHandler);

        return {
            destroy() {
                node.removeEventListener('input', inputHandler);
                node.removeEventListener('keydown', keydownHandler);
            }
        };
    };

    function handleScroll() {
        const { scrollLeft, offsetWidth, scrollWidth } = categoriesElement;
        isStart = scrollLeft <= 0;
        isEnd = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
    }

    const title = 'Blog' + TITLE_SUFFIX;
    const description =
        'Stay updated with the latest product news, insights, and tutorials from the Appwrite team. Our blog covers everything for hassle-free backend development.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/blog.png';
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
    <div class="web-big-padding-section" style:overflow-x="hidden">
        <div class="relative py-10">
            <div
                class="absolute"
                style="pointer-events:none;inset-inline-start:0; inset-block-end:0;"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="660"
                    height="497"
                    viewBox="0 0 660 497"
                    fill="none"
                >
                    <g opacity="0.4" filter="url(#filter0_f_2092_11792)">
                        <ellipse
                            cx="-2.5"
                            cy="609.5"
                            rx="362.5"
                            ry="309.5"
                            fill="url(#paint0_radial_2092_11792)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_2092_11792"
                            x="-665"
                            y="0"
                            width="1325"
                            height="1219"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="150"
                                result="effect1_foregroundBlur_2092_11792"
                            />
                        </filter>
                        <radialGradient
                            id="paint0_radial_2092_11792"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(-2.5 629.739) rotate(90) scale(289.261 362.5)"
                        >
                            <stop offset="0.281696" stop-color="#FE9567" />
                            <stop offset="0.59375" stop-color="#FD366E" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <div class="web-big-padding-section-level-2 relative">
                <div class="container">
                    <h1 class="text-display font-aeonik-pro text-primary">Blog</h1>
                    {#if featured}
                        {@const author = data.authors.find(
                            (author) => author.slug === featured.author
                        )}
                        <article class="web-feature-article mt-12">
                            <a href={featured.href} class="web-feature-article-image">
                                <img
                                    src={featured.cover}
                                    class="web-image-ratio-4/3"
                                    loading="lazy"
                                    alt="cover"
                                />
                            </a>
                            <div class="web-feature-article-content">
                                <header class="web-feature-article-header">
                                    <ul class="web-metadata text-caption web-is-only-mobile">
                                        <li>{featured.timeToRead} min</li>
                                    </ul>
                                    <a href={featured.href}>
                                        <h2 class="text-title font-aeonik-pro text-primary">
                                            {featured.title}
                                        </h2>
                                    </a>
                                </header>
                                <p class="text-sub-body">
                                    {featured.description}
                                </p>
                                <div class="web-author">
                                    <div class="flex items-center gap-2">
                                        <img
                                            class="web-author-image"
                                            src={author?.avatar}
                                            alt={author?.name}
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                        />
                                        <div class="web-author-info">
                                            <a href={author?.href} class="text-sub-body web-link"
                                                >{author?.name}</a
                                            >
                                            <p class="text-caption hidden">{author?.bio}</p>
                                            <ul class="web-metadata text-caption web-is-not-mobile">
                                                <li>{featured.timeToRead} min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="secondary" href={featured.href} class="mt-auto">
                                    <span>Read article</span>
                                </Button>
                            </div>
                        </article>
                    {/if}
                </div>
            </div>
        </div>

        <div class="pt-20">
            <div class="web-container">
                <h2
                    id="title"
                    class="text-title font-aeonik-pro text-primary"
                    bind:this={articlesHeader}
                >
                    Articles
                </h2>

                <div class="pt-4">
                    <div class="search-and-categories flex items-center gap-8 md:gap-[40px]">
                        <div
                            class="categories-wrapper"
                            data-state={isStart ? 'start' : isEnd ? 'end' : 'middle'}
                        >
                            <ul
                                class="categories flex gap-2 overflow-x-auto"
                                onscroll={handleScroll}
                                bind:this={categoriesElement}
                            >
                                <li class="flex items-center">
                                    <button
                                        class="web-interactive-tag web-caption-400 cursor-pointer"
                                        class:is-selected={selectedCategory === 'Latest'}
                                        onclick={() => {
                                            selectedCategory = 'Latest';
                                            handleSearch();
                                        }}
                                    >
                                        Latest
                                    </button>
                                </li>

                                {#each categories as category}
                                    <li class="flex items-center">
                                        <button
                                            class="web-interactive-tag web-caption-400 cursor-pointer"
                                            class:is-selected={selectedCategory === category.name}
                                            onclick={() => {
                                                selectedCategory = category.name;
                                                handleSearch();
                                            }}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <div
                            class="search-bar web-input-text-search-wrapper ml-auto w-full max-w-[350px]"
                        >
                            <span
                                class="web-icon-search z-[5]"
                                aria-hidden="true"
                                style="inset-block-start: 0.65rem;"
                            ></span>
                            <input
                                class="web-input-button relative z-1 w-full"
                                type="text"
                                id="search"
                                placeholder="Search"
                                use:search
                                bind:value={query}
                                data-hit="-1"
                                style="padding-inline-start: 2.5rem !important"
                            />
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <ul class:web-grid-articles={data.posts.length > 0}>
                        {#each data.posts as post (post.slug)}
                            {@const author = data.authors.find(
                                (author) => author.slug === post.author
                            )}
                            {#if author && !post.draft}
                                <Article
                                    title={post.title}
                                    href={post.href}
                                    cover={post.cover}
                                    date={post.date}
                                    timeToRead={post.timeToRead}
                                    avatar={author.avatar}
                                    author={author.name}
                                />
                            {/if}
                        {:else}
                            <div class="w-full p-8 flex flex-col gap-8 items-center">
                                <p class="web-main-body-500">
                                    No results found for "{query ? query : selectedCategory}"
                                </p>

                                <Button
                                    variant="secondary"
                                    onclick={() => {
                                        query = '';
                                        selectedCategory = 'Latest';
                                        handleSearch();
                                    }}
                                    >Clear search
                                </Button>
                            </div>
                        {/each}
                    </ul>
                </div>

                {#if data.posts.length > 0}
                    <div class="mt-12">
                        <ul class="flex items-center gap-1" style="justify-content: center">
                            {#if data.currentPage > 1}
                                <a
                                    data-sveltekit-noscroll
                                    class="navigation-button flex"
                                    href={navigationLink(data.currentPage - 1)}
                                    class:navigation-button-active={!isFirstPage}
                                >
                                    <span class="web-icon-chevron-left" style="font-size: 20px"
                                    ></span>
                                    Previous
                                </a>
                            {:else}
                                <span class="navigation-button flex">
                                    <span class="web-icon-chevron-left" style="font-size: 20px"
                                    ></span>
                                    Previous
                                </span>
                            {/if}

                            {#each currentPageRange as page}
                                {#if page === -1}
                                    <span class="pagination-ellipsis">...</span>
                                {:else}
                                    <a
                                        href={navigationLink(page)}
                                        data-sveltekit-noscroll
                                        class="pagination-number"
                                        class:pagination-number-selected={data.currentPage === page}
                                    >
                                        {page}
                                    </a>
                                {/if}
                            {/each}

                            {#if data.currentPage < data.totalPages}
                                <a
                                    data-sveltekit-noscroll
                                    class="navigation-button flex"
                                    href={navigationLink(data.currentPage + 1)}
                                    class:navigation-button-active={!isLastPage}
                                >
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px"
                                    ></span>
                                </a>
                            {:else}
                                <span class="navigation-button flex">
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px"
                                    ></span>
                                </span>
                            {/if}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
        <div>
            <div class="container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>

<style>
    .pagination-number {
        font-weight: 500;
        line-height: 140%;
        text-align: center;
        font-style: normal;
        letter-spacing: -0.063px;
        font-size: var(--font-size-S, 14px);
        font-family: var(--font-family-sansSerif, Inter);
        padding: var(--space-3, 6px) var(--space-6, 12px);
        color: var(--color-fgColor-neutral-secondary, #c3c3c6);
    }

    .pagination-number-selected {
        border-radius: var(--border-radius-S, 8px);
        color: var(--color-fgColor-accent-neutral, #fff);
        background: var(--color-bgColor-neutral-tertiary, #2d2d31);
    }

    .navigation-button {
        opacity: 0.4;
        font-weight: 500;
        line-height: 140%;
        text-align: center;
        font-style: normal;
        align-items: center;
        cursor: not-allowed;
        pointer-events: none;
        justify-content: center;
        letter-spacing: -0.063px;
        gap: var(--space-2, 4px);
        font-size: var(--font-size-S, 14px);
        border-radius: var(--border-radius-S, 8px);
        font-family: var(--font-family-sansSerif, Inter);
        color: var(--color-fgColor-neutral-secondary, #c3c3c6);
        padding: var(--space-3, 6px) var(--space-4, 8px) var(--space-3, 6px) var(--space-3, 6px);
    }

    .navigation-button-active {
        opacity: 1;
        cursor: pointer;
        pointer-events: initial;
    }

    .web-interactive-tag {
        white-space: nowrap;
    }

    .is-selected {
        color: hsl(var(--web-color-black));
        background: hsl(var(--web-color-white));
    }

    .overflow-x-auto {
        scrollbar-width: none;
    }

    .overflow-x-auto::-webkit-scrollbar {
        display: none;
    }

    .categories-wrapper {
        position: relative;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            width: 60px;
            height: 100%;
            transition: ease 250ms;
            z-index: 100;
            pointer-events: none;
        }

        &::before {
            left: 0;
            background: linear-gradient(
                to right,
                hsl(var(--web-color-background-docs)),
                transparent
            );
        }

        &[data-state='start']::before {
            opacity: 0;
        }

        &::after {
            right: 0;
            background: linear-gradient(
                to left,
                hsl(var(--web-color-background-docs)),
                transparent
            );
        }

        &[data-state='end']::after {
            opacity: 0;
        }
    }

    .search-and-categories {
        display: flex;
        align-items: center;
    }

    .categories-wrapper {
        min-width: 0;
        flex: 1 0 auto;
        max-width: 66%;
    }

    .categories {
        margin-inline-end: 6px;
    }

    .search-bar {
        min-width: 0;
        flex: 1 1 auto;
        max-width: 33%;
        margin-inline-start: 2px;
    }

    @media (max-width: 945px) {
        .categories-wrapper,
        .search-bar {
            max-width: 50%;
        }

        .categories {
            margin-inline-end: 12px;
        }

        .search-bar {
            margin-inline-start: -1.5rem;
        }
    }

    @media (min-width: 946px) {
        .search-bar {
            margin-inline-start: -0.75rem;
        }
    }

    @media (min-width: 1024px) {
        .search-bar {
            margin-inline-start: unset;
        }
    }

    .web-input-button {
        max-height: 40px;
    }

    @media (max-width: 768px) {
        .search-and-categories {
            display: flex;
            flex-wrap: wrap;
            padding-block-start: 2rem;
            flex-direction: column-reverse;
        }

        .categories-wrapper {
            max-width: 99%;
        }

        .categories {
            margin-inline-end: unset;
        }

        .search-and-categories > .search-bar {
            max-width: 100%;
            margin-inline-start: unset;
        }

        .search-and-categories > .web-input-text-search-wrapper {
            min-inline-size: unset;
        }
    }
</style>
