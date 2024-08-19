<script lang="ts">
    import { goto } from '$app/navigation';
    import { Main } from '$lib/layouts';
    import { MainFooter, FooterNav, Article } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    export let data;

    const title = 'Blog' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/blog.png';

    function getPageNumbers(currentPage: number, totalPages: number): (number | string)[] {
        const delta = 2;
        const range: (number | string)[] = [];
        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            range.unshift("...");
        }
        if (currentPage + delta < totalPages - 1) {
            range.push("...");
        }

        range.unshift(1);
        if (totalPages !== 1) {
            range.push(totalPages);
        }

        return range;
    }

    async function handlePagination(pageNum: number) {
        const url = new URL(window.location.href);
        url.searchParams.set('page', pageNum.toString());
        await goto(url.toString(), { replaceState: true, noScroll: true });
    }
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
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
                <!-- SVG code here -->
            </div>

            <div class="web-big-padding-section-level-2 u-position-relative">
                <div class="web-container">
                    <h1 class="web-display web-u-color-text-primary">Blog</h1>
                    {#if data.featured}
                        {@const author = data.authors.find((author) => author.slug === data.featured?.author)}
                        <article class="web-feature-article u-margin-block-start-48">
                            <a href={data.featured?.href} class="web-feature-article-image">
                                <img src={data.featured?.cover} class="web-image-ratio-4/3" loading="lazy" alt="cover" />
                            </a>
                            <div class="web-feature-article-content">
                                <header class="web-feature-article-header">
                                    <ul class="web-metadata web-caption-400 web-is-only-mobile">
                                        <li>{data.featured?.timeToRead} min</li>
                                    </ul>
                                    <a href={data.featured?.href}>
                                        <h2 class="web-title web-u-color-text-primary">
                                            {data.featured?.title}
                                        </h2>
                                    </a>
                                </header>
                                <p class="web-sub-body-400">
                                    {data.featured?.description}
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
                                            <a href={author?.href} class="web-sub-body-400 web-link">{author?.name}</a>
                                            <p class="web-caption-400 u-hide">{author?.bio}</p>
                                            <ul class="web-metadata web-caption-400 web-is-not-mobile">
                                                <li>{data.featured?.timeToRead} min</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <a href={data.featured?.href} class="web-button is-secondary u-margin-block-start-auto">
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
                    <h2 class="web-title web-u-color-text-primary">Articles</h2>

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

                    <div class="pagination">
                        <button on:click={() => handlePagination(Math.max(1, data.currentPage - 1))} 
                                class="pagination-nav" 
                                disabled={data.currentPage === 1}>
                            &lt; Prev
                        </button>
                        
                        {#each getPageNumbers(data.currentPage, data.totalPages) as pageNum}
                            {#if pageNum === "..."}
                                <span class="pagination-ellipsis">...</span>
                            {:else if typeof pageNum === 'number'}
                                <button 
                                    on:click={() => handlePagination(pageNum)} 
                                    class="pagination-number" 
                                    class:active={data.currentPage === pageNum}
                                >
                                    {pageNum}
                                </button>
                            {/if}
                        {/each}
                        
                        <button on:click={() => handlePagination(Math.min(data.totalPages, data.currentPage + 1))} 
                                class="pagination-nav" 
                                disabled={data.currentPage === data.totalPages}>
                            Next &gt;
                        </button>
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
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }
    .pagination-nav,
    .pagination-number {
        padding: 5px 10px;
        color: inherit;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: none;
        cursor: pointer;
        font-size: inherit;
    }
    .pagination-nav:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .pagination-number.active {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
    }
    .pagination-ellipsis {
        padding: 5px;
    }
</style>
