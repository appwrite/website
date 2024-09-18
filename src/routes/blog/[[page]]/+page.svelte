<script lang="ts">
    import { page } from '$app/stores';
    import { Main } from '$lib/layouts';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { onMount, tick } from 'svelte';
    import { beforeNavigate } from '$app/navigation';
    import { createDebounce } from '$lib/utils/debounce';

    export let data;

    let blogPosts = data.posts;
    const featured = data.featured;
    const categories = data.categories.sort((a, b) => a.name.localeCompare(b.name));

    $: isFirstPage = data.currentPage === 1;

    $: isLastPage = data.currentPage === data.totalPages;

    $: currentPageRange = data.navigation || [];

    $: showNavigation = query === '' && !selectedCategory;

    let query = '';
    let isEnd = false;
    let isStart = true;
    let categoriesElement: HTMLElement;

    let articlesHeader: HTMLElement;

    let previousPage: number | null = null;

    beforeNavigate(({ from, type }) => {
        previousPage = type === 'link' ? parseInt(from?.params?.page ?? '1') : null;
    });

    onMount(() => {
        return page.subscribe(async () => {
            if (articlesHeader && previousPage) {
                await tick();
                articlesHeader?.scrollIntoView();
            }
        });
    });

    let selectedCategory: string | null;
    function toggleCategory(tag: string) {
        if (tag.toLowerCase() === 'latest') {
            selectedCategory = null;
        } else {
            selectedCategory = tag;
        }

        handleSearch(query);
    }

    const handleSearch = async (value: string) => {
        query = value.toLowerCase();
        const tempCategory = selectedCategory?.replace(/\s+/g, '-').toLowerCase();

        blogPosts =
            !query && !tempCategory
                ? data.posts
                : data.allPosts.filter((post) => {
                      const postTitle = post.title.toLowerCase();
                      const postCategories = post.category
                          .split(',')
                          .map((cat) => cat.trim().replace(/\s+/g, '-').toLowerCase());

                      return (
                          postTitle.includes(query) &&
                          (!tempCategory || postCategories.includes(tempCategory))
                      );
                  });
    };

    const { debounce, reset } = createDebounce();

    const search = (node: HTMLInputElement) => {
        const inputHandler = () => debounce(() => handleSearch(node.value.toLowerCase()));
        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                reset();
                handleSearch(node.value.toLowerCase());
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
        'Stay updated with the latest product news, insights, and tutorials from the Appwrite team. Discover tips and best practices for hassle-free backend development.';
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
                                <a href={featured.href} class="web-button is-secondary mt-auto">
                                    <span>Read article</span>
                                </a>
                            </div>
                        </article>
                    {/if}
                </div>
            </div>
        </div>

        <div class="pt-10">
            <div class="web-container">
                <h2
                    id="title"
                    class="text-title font-aeonik-pro text-primary"
                    bind:this={articlesHeader}
                >
                    Articles
                </h2>

                <div class="pt-4">
                    <div class="flex items-center gap-8 search-and-categories">
                        <div
                            class="categories-wrapper"
                            data-state={isStart ? 'start' : isEnd ? 'end' : 'middle'}
                        >
                            <ul
                                class="categories flex gap-2 overflow-x-auto"
                                on:scroll={handleScroll}
                                bind:this={categoriesElement}
                            >
                                <li class="flex items-center">
                                    <button
                                        class="web-interactive-tag web-caption-400 cursor-pointer"
                                        class:is-selected={!selectedCategory}
                                        on:click={() => toggleCategory('Latest')}
                                    >
                                        Latest
                                    </button>
                                </li>

                                {#each categories as category}
                                    <li class="flex items-center">
                                        <button
                                            class="web-interactive-tag web-caption-400 cursor-pointer"
                                            class:is-selected={selectedCategory === category.name}
                                            on:click={() => toggleCategory(category.name)}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <div
                            class="block md:hidden mobile-search-bar web-input-text-search-wrapper w-full"
                        >
                            <span
                                class="web-icon-search z-[5]"
                                aria-hidden="true"
                                style="inset-block-start:0.9rem"
                            />
                            <input
                                class="web-input-button w-full relative z-1"
                                type="text"
                                id="search"
                                placeholder="Search"
                                use:search
                                bind:value={query}
                                data-hit="-1"
                                style="padding-inline-start: 2.5rem !important"
                            />
                        </div>

                        <div
                            class="web-input-text-search-wrapper web-u-max-inline-size-none-mobile ml-auto w-full max-w-[350px] hidden md:block"
                        >
                            <span
                                class="web-icon-search z-[5]"
                                aria-hidden="true"
                                style="inset-block-start: 0.9rem;"
                            />
                            <input
                                class="web-input-button w-full relative z-1"
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
                    <ul class:web-grid-articles={blogPosts.length > 0}>
                        {#each blogPosts as post (post.slug)}
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

                                <button
                                    class="web-button is-secondary"
                                    on:click={() => {
                                        query = '';
                                        selectedCategory = null;
                                        handleSearch('');
                                    }}
                                    >Clear search
                                </button>
                            </div>
                        {/each}
                    </ul>
                </div>

                {#if showNavigation}
                    <div class="mt-12">
                        <ul class="flex items-center gap-1" style="justify-content: center">
                            {#if data.currentPage > 1}
                                <a
                                    data-sveltekit-noscroll
                                    class="flex navigation-button"
                                    href="/blog/{data.currentPage - 1}"
                                    class:navigation-button-active={!isFirstPage}
                                >
                                    <span class="web-icon-chevron-left" style="font-size: 20px" />
                                    Previous
                                </a>
                            {:else}
                                <span class="flex navigation-button">
                                    <span class="web-icon-chevron-left" style="font-size: 20px" />
                                    Previous
                                </span>
                            {/if}

                            {#each currentPageRange as page}
                                {#if page === -1}
                                    <span class="pagination-ellipsis">...</span>
                                {:else}
                                    <a
                                        href="/blog/{page}"
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
                                    class="flex navigation-button"
                                    href="/blog/{data.currentPage + 1}"
                                    class:navigation-button-active={!isLastPage}
                                >
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px" />
                                </a>
                            {:else}
                                <span class="flex navigation-button">
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px" />
                                </span>
                            {/if}
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
        <div class="pt-[7.5rem]">
            <div class="container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div></Main
>

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
        -ms-overflow-style: none;
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

    .categories {
        max-width: calc(0.5 * 100vw);
    }

    @media (min-width: 1024px) and (max-width: 1280px) {
        .categories {
            max-width: calc(0.55 * 100vw);
        }
    }

    @media (min-width: 1280px) and (max-width: 1359px) {
        .categories {
            max-width: calc(0.6 * 100vw);
        }
    }

    @media (max-width: 768px) {
        .search-and-categories {
            flex-wrap: wrap;
            display: flex !important;
            padding-block-start: 2rem;
            flex-direction: column-reverse !important;
        }

        .categories {
            max-width: 90vw;
        }

        .search-and-categories > .mobile-search-bar {
            align-self: baseline;
        }

        .search-and-categories > .web-input-text-search-wrapper {
            min-inline-size: unset !important;
        }
    }
</style>
