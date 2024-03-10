<script lang="ts">
    import { page } from '$app/stores';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import type { AuthorData, PostsData } from '$routes/blog/content';
    import { BLOG_TITLE_SUFFIX } from '$routes/titles';
    import { getContext } from 'svelte';

    export let name: string;
    export let description: string;

    const pageSlug = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
    const authors = getContext<AuthorData[]>('authors');
    const postsList = getContext<PostsData[]>('posts');
    const posts = postsList.filter((post) => post.category.includes(pageSlug));

    const seoTitle = name + BLOG_TITLE_SUFFIX;
    const ogImage = DEFAULT_HOST + '/images/open-graph/blog.png';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seoTitle}</title>
    <meta property="og:title" content={seoTitle} />
    <meta name="twitter:title" content={seoTitle} />
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
    <div class="web-big-padding-section-level-1">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <a class="web-link web-u-color-text-secondary u-cross-baseline" href="/blog">
                    <span class="web-icon-chevron-left" aria-hidden="true" />
                    <span>Back to blog</span>
                </a>
                <div class="web-category-header u-margin-block-start-24">
                    <div class="web-category-header-content">
                        <h1 class="web-display web-u-color-text-primary">{name}</h1>
                        <p class="web-category-header-description web-description">
                            {description}
                        </p>
                    </div>
                    <!-- <div class="web-input-text-search-wrapper u-inline-width-100-percent-mobile">
						<span class="icon-search" aria-hidden="true" />
						<input class="web-input-text web-u-block-size-48" type="search" placeholder="Search" />
					</div> -->
                </div>

                <div class="u-margin-block-start-48">
                    <ul class="web-grid-articles">
                        {#each posts as post}
                            {@const author = authors.find((a) => a.slug.includes(post.author))}
                            {#if author}
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
                <div
                    class="web-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
                >
                    <div class="web-container">
                        <FooterNav />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div></Main
>
