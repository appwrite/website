<script lang="ts">
    import { page } from '$app/stores';
    import { Main } from '$lib/layouts';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { onMount, tick } from 'svelte';
    import { beforeNavigate } from '$app/navigation';
    import { AuthorCover, BlogPostCover } from '$lib/UI';

    export let data;

    const featured = data.featured;

    $: isFirstPage = data.currentPage === 1;

    $: isLastPage = data.currentPage === data.totalPages;

    $: currentPageRange = data.navigation || [];

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
                                <BlogPostCover
                                    alt="cover"
                                    isFeatured
                                    src={featured.cover}
                                    class="web-image-ratio-4/3"
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
                                        <AuthorCover
                                            thumbnail={true}
                                            author={author?.name}
                                            avatar={author?.avatar}
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
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <h2
                        id="title"
                        class="text-title font-aeonik-pro text-primary"
                        bind:this={articlesHeader}
                    >
                        Articles
                    </h2>

                    <div class="mt-12">
                        <ul class="web-grid-articles">
                            {#each data.posts as post (post.slug)}
                                {@const author = data.authors.find(
                                    (author) => author.slug === post.author
                                )}
                                {#if author && !post.draft}
                                    <Article
                                        thumbnail
                                        title={post.title}
                                        href={post.href}
                                        cover={post.cover}
                                        date={post.date}
                                        timeToRead={post.timeToRead}
                                        avatar={author.avatar}
                                        author={author.name}
                                    />
                                {/if}
                            {/each}
                        </ul>
                    </div>

                    <div class="mt-12">
                        <ul class="flex items-center gap-1" style="justify-content: center">
                            {#if data.currentPage > 1}
                                <a
                                    data-sveltekit-noscroll
                                    class="navigation-button flex"
                                    href="/blog/{data.currentPage - 1}"
                                    class:navigation-button-active={!isFirstPage}
                                >
                                    <span class="web-icon-chevron-left" style="font-size: 20px" />
                                    Previous
                                </a>
                            {:else}
                                <span class="navigation-button flex">
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
                                    class="navigation-button flex"
                                    href="/blog/{data.currentPage + 1}"
                                    class:navigation-button-active={!isLastPage}
                                >
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px" />
                                </a>
                            {:else}
                                <span class="navigation-button flex">
                                    Next
                                    <span class="web-icon-chevron-right" style="font-size: 20px" />
                                </span>
                            {/if}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pt-[7.5rem]">
                <div class="container">
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
</style>
