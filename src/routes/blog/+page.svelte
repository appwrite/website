<script lang="ts">
    import { Main } from '$lib/layouts';
    import { MainFooter, FooterNav, Article } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { BLOG_POSTS_NAVIGATION_RANGE } from '$lib/constants.js';
    import { createDebounce } from '$lib/utils/debounce';

    export let data;
    const featured = data.featured;
    const categories = data.categories.sort((a, b) => a.name.localeCompare(b.name));

    let currentPage = 1;

    let query = '';
    let isEnd = false;
    let isStart = true;
    let categoriesElement: HTMLElement;

    $: isLastPage = currentPage < data.totalPages;

    $: paginatedBlogPosts = data.posts[currentPage - 1] ?? data.posts[0];

    $: chunkIndex = Math.floor((currentPage - 1) / BLOG_POSTS_NAVIGATION_RANGE);

    $: currentPageRange = data.navigation[chunkIndex] || [];

    $: nextBatchStartPage = (): number => {
        const nextBatchStart = (chunkIndex + 1) * BLOG_POSTS_NAVIGATION_RANGE + 1;
        return nextBatchStart <= data.posts.length ? nextBatchStart : currentPage;
    };

    $: previousBatchStartPage = (): number => {
        const currentBatchStart = chunkIndex * BLOG_POSTS_NAVIGATION_RANGE + 1;
        const prevBatchStart = currentBatchStart - BLOG_POSTS_NAVIGATION_RANGE;
        return prevBatchStart > 0 ? prevBatchStart : 1;
    }

    $: showNavigation = query === '' && selectedCategories.length === 0

    onMount(() => {
        return page.subscribe((page) => {
            const pageParam = page.url.searchParams.get('page') || '1';
            currentPage = Math.max(parseInt(pageParam), 1);
        });
    });

    let selectedCategories: string[] = [];
    function toggleCategory(tag: string) {
        if (tag.toLowerCase() === 'latest') {
            selectedCategories = [];
        } else {
            selectedCategories = selectedCategories.includes(tag)
                ? selectedCategories.filter((t) => t !== tag)
                : [...selectedCategories, tag];
        }

        handleSearch(query);
    }

    const handleSearch = async (value: string) => {
        query = value.toLowerCase();
        const tempCategories = selectedCategories.map((cat) =>
            cat.replace(/\s+/g, '-').toLowerCase()
        );

        paginatedBlogPosts = (!query && !tempCategories.length)
            ? data.posts[currentPage - 1] ?? data.posts[0]
            : data.allPosts.filter((post) => {
                const postTitle = post.title.toLowerCase();
                const postCategories = post.category
                    .split(',')
                    .map((cat) => cat.trim().replace(/\s+/g, '-').toLowerCase());

                return postTitle.includes(query) &&
                    (tempCategories.length === 0 || tempCategories.some((cat) => postCategories.includes(cat)));
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
    const description = 'Stay updated with the latest product news, insights, and tutorials from the Appwrite team. Discover tips and best practices for hassle-free backend development.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/blog.png';
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
    <div class="web-big-padding-section" style:overflow-x="hidden">
        <div class="web-big-padding-section-level-1 u-position-relative">
            <div
                    class="u-position-absolute"
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

            <div class="web-big-padding-section-level-2 u-position-relative">
                <div class="web-container">
                    <h1 class="web-display web-u-color-text-primary">Blog</h1>
                    {#if featured}
                        {@const author = data.authors.find((author) => author.slug === featured.author)}
                        <article class="web-feature-article u-margin-block-start-48">
                            <a href={featured.href} class="web-feature-article-image">
                                <img src={featured.cover} class="web-image-ratio-4/3" loading="lazy" alt="cover" />
                            </a>
                            <div class="web-feature-article-content">
                                <header class="web-feature-article-header">
                                    <ul class="web-metadata web-caption-400 web-is-only-mobile">
                                        <li>{featured.timeToRead} min</li>
                                    </ul>
                                    <a href={featured.href}>
                                        <h2 class="web-title web-u-color-text-primary">
                                            {featured.title}
                                        </h2>
                                    </a>
                                </header>
                                <p class="web-sub-body-400">
                                    {featured.description}
                                </p>
                                <div class="web-author">
                                    <div class="u-flex u-cross-center u-gap-8">
                                        <img
                                                class="web-author-image"
                                                src={author?.avatar}
                                                alt={author?.name}
                                                loading="lazy"
                                                width="24"
                                                height="24"
                                        />
                                        <div class="web-author-info">
                                            <a href={author?.href} class="web-sub-body-400 web-link"
                                            >{author?.name}</a
                                            >
                                            <p class="web-caption-400 u-hide">{author?.bio}</p>
                                            <ul class="web-metadata web-caption-400 web-is-not-mobile">
                                                <li>{featured.timeToRead} min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a
                                        href={featured.href}
                                        class="web-button is-secondary u-margin-block-start-auto"
                                >
                                    <span>Read article</span>
                                </a>
                            </div>
                        </article>
                    {/if}
                </div>
            </div>
        </div>
        <div class="u-padding-block-start-80">
            <div class="web-container">
                <h2 id="title" class="web-title web-u-color-text-primary">Articles</h2>

                <div class="u-padding-block-start-16">
                    <div class="u-flex u-cross-center u-gap-32 search-and-categories">
                        <div
                            class="categories-wrapper"
                            data-state={isStart ? 'start' : isEnd ? 'end' : 'middle'}
                        >
                            <ul class="categories u-flex u-gap-8 u-overflow-x-auto"
                                on:scroll={handleScroll}
                                bind:this={categoriesElement}>

                                <li class="u-flex u-cross-center u-cursor-pointer">
                                    <button
                                        class="web-interactive-tag web-caption-400"
                                        class:is-selected={ selectedCategories.length === 0}
                                        on:click={() => toggleCategory('Latest')}
                                    >
                                        Latest
                                    </button>
                                </li>

                                {#each categories as category}
                                    <li class="u-flex u-cross-center">
                                        <button
                                            class="web-interactive-tag web-caption-400"
                                            class:is-selected={ selectedCategories.includes(category.name) }
                                            on:click={() => toggleCategory(category.name)}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <div
                            class="is-only-mobile web-input-text-search-wrapper u-width-full-line"
                        >
                                <span
                                    class="web-icon-search u-z-index-5"
                                    aria-hidden="true"
                                    style="inset-block-start:0.9rem"
                                />
                            <input
                                class="web-input-button -u-padding-block-0 u-position-relative u-z-index-1"
                                type="text"
                                id="search"
                                placeholder="Search"
                                use:search
                                bind:value={query}
                                data-hit="-1"
                            />
                        </div>

                        <div
                            class="is-not-mobile web-input-text-search-wrapper u-width-full-line u-max-width-350 web-u-max-inline-size-none-mobile u-margin-inline-start-auto"
                            >
                                <span
                                    class="web-icon-search u-z-index-5"
                                    aria-hidden="true"
                                    style="inset-block-start:0.9rem"
                                />
                                <input
                                    class="web-input-button -u-padding-block-0 u-position-relative u-z-index-1"
                                    type="text"
                                    id="search"
                                    placeholder="Search"
                                    use:search
                                    bind:value={query}
                                    data-hit="-1"
                                />
                            </div>
                    </div>
                </div>

                <div class="u-margin-block-start-48">
                    <ul class:web-grid-articles={paginatedBlogPosts.length > 0}>
                        {#each paginatedBlogPosts as post}
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
                            <div class="u-padding-block-32 u-flex-vertical u-gap-32 u-cross-center">
                                <span class="web-main-body-500">no results found for "{query ? query : selectedCategories.join(', ')}"</span>

                                <button
                                    class="web-button is-secondary"
                                    on:click={() => {
                                        query = '';
                                        handleSearch('');
                                    }}>Clear search
                                </button>
                            </div>
                        {/each}
                    </ul>
                </div>

                <div class="u-margin-block-start-48" class:u-hide={!showNavigation}>
                    <ul class="u-flex u-cross-center u-gap-4" style="justify-content: center">
                        <a
                            class="u-flex navigation-button"
                            class:navigation-button-active={currentPage > 1}
                            href="/blog?page={previousBatchStartPage()}"
                        >
                            <span class="web-icon-chevron-left" style="font-size: 20px"/>
                            Previous
                        </a>

                        {#each currentPageRange as page}
                            <a
                                class="pagination-number"
                                class:pagination-number-selected={currentPage === page}
                                href="/blog?page={page}"
                            > {page} </a>
                        {/each}

                        <a
                            class="u-flex navigation-button"
                            class:navigation-button-active={isLastPage}
                            href="/blog?page={nextBatchStartPage()}"
                        >
                            Next
                            <span class="web-icon-chevron-right"  style="font-size: 20px"/>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <FooterNav />
                    <MainFooter />
                </div>
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
        color: var(--color-fgColor-neutral-secondary, #C3C3C6);
    }

    .pagination-number-selected {
        border-radius: var(--border-radius-S, 8px);
        color: var(--color-fgColor-accent-neutral, #FFF);
        background: var(--color-bgColor-neutral-tertiary, #2D2D31);
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
        color: var(--color-fgColor-neutral-secondary, #C3C3C6);
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

    .u-overflow-x-auto {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .u-overflow-x-auto::-webkit-scrollbar {
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
            flex-direction: column-reverse !important
        }

        .categories {
            max-width: 90vw;
        }

        .search-and-categories > .is-only-mobile {
            align-self: baseline;
        }

        .search-and-categories > .web-input-text-search-wrapper {
            min-inline-size: unset !important;
        }
    }
</style>