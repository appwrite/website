<script lang="ts">
    import { Main } from '$lib/layouts';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { _PAGE_NAVIGATION_RANGE } from '$routes/blog/+page';

    export let data;

    const featured = data.featured;

    $: currentPage = data.currentPage;

    $: currentPageRange = (): number[] => {
        const chunkIndex = Math.floor((currentPage - 1) / _PAGE_NAVIGATION_RANGE);
        return data.navigation[chunkIndex] || [];
    };

    $: isLastPage = (): boolean => {
        return currentPage < data.totalPages;
    }

    $: nextBatchStartPage = (): number => {
        const batchIndex = Math.floor((currentPage - 1) / _PAGE_NAVIGATION_RANGE);
        const nextBatchStart = (batchIndex + 1) * _PAGE_NAVIGATION_RANGE + 1;
        return nextBatchStart <= data.posts.length ? nextBatchStart : currentPage;
    }

    $: previousBatchStartPage = (): number => {
        const batchIndex = Math.floor((currentPage - 1) / _PAGE_NAVIGATION_RANGE);
        const currentBatchStart = batchIndex * _PAGE_NAVIGATION_RANGE + 1;
        const prevBatchStart = currentBatchStart - _PAGE_NAVIGATION_RANGE;
        return prevBatchStart > 0 ? prevBatchStart : 1;
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
                                        <li>{featured?.timeToRead} min</li>
                                    </ul>
                                    <a href={featured?.href}>
                                        <h2 class="web-title web-u-color-text-primary">
                                            {featured?.title}
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
        <div class="web-big-padding-section-level-1">
            <div class="web-big-padding-section-level-2">
                <div class="web-container">
                    <h2 id="title" class="web-title web-u-color-text-primary">Articles</h2>

                    <div class="u-margin-block-start-48">
                        <ul class="web-grid-articles">
                            {#each data.posts as post}
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
                            {/each}
                        </ul>
                    </div>

                    <div class="u-margin-block-start-48">
                        <ul class="u-flex u-cross-center u-gap-4" style="justify-content: center">
                            <a
                                class="u-flex navigation-button"
                                class:navigation-button-active={currentPage > 1}
                                href="/blog?page={previousBatchStartPage()}"
                            >
                                <span class="web-icon-chevron-left" style="font-size: 20px"/>
                                Previous
                            </a>

                            {#each currentPageRange() as page}
                                <a
                                    class="pagination-number"
                                    class:pagination-number-selected={currentPage === page}
                                    href="/blog?page={page}"
                                > {page} </a>
                            {/each}

                            <a
                                class="u-flex navigation-button"
                                class:navigation-button-active={isLastPage()}
                                href="/blog?page={nextBatchStartPage()}"
                            >
                                Next
                                <span class="web-icon-chevron-right"  style="font-size: 20px"/>
                            </a>
                        </ul>
                    </div>
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
</style>