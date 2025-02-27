<script lang="ts">
    import { page } from '$app/stores';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import type { AuthorData, PostsData } from '$routes/blog/content';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { getContext } from 'svelte';

    export let name: string;
    export let description: string;

    const pageSlug = $page.url.pathname.substring($page.url.pathname.lastIndexOf('/') + 1);
    const authors = getContext<AuthorData[]>('authors');
    const postsList = getContext<PostsData[]>('posts');
    const posts = postsList.filter((post) => post.category.includes(pageSlug));

    const seoTitle = name + TITLE_SUFFIX;
    const ogImage = DEFAULT_HOST + '/images/open-graph/blog.png';
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seoTitle}</title>
    <meta property="og:title" content={seoTitle} />
    <meta name="twitter:title" content={seoTitle} />
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
    <div class="py-10">
        <div class="web-big-padding-section-level-2">
            <div class="container">
                <a class="web-link web-u-color-text-secondary items-baseline" href="/blog">
                    <span class="web-icon-chevron-left" aria-hidden="true" />
                    <span>Back to blog</span>
                </a>
                <div class="web-category-header mt-6">
                    <div class="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                        <h1 class="text-display font-aeonik-pro text-primary">
                            {name}
                        </h1>
                        <p class="text-secondary text-description">
                            {description}
                        </p>
                    </div>
                </div>

                <div class="mt-12">
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
                <div class="relative overflow-hidden pt-[7.5rem]">
                    <div class="container">
                        <FooterNav />
                        <MainFooter />
                    </div>
                </div>
            </div>
        </div>
    </div></Main
>
