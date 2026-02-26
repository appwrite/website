<script lang="ts">
    import { page } from '$app/state';
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { getPostAuthors } from '$lib/utils/blog-authors';
    import type { AuthorData, PostsData } from '$routes/blog/content';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { getContext } from 'svelte';

    export let name: string;
    export let description: string;

    const pageSlug = page.url.pathname.substring(page.url.pathname.lastIndexOf('/') + 1);
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
    <div class="pt-6">
        <div class="web-big-padding-section-level-2 web-category-page">
            <div class="container">
                <div class="web-category-header">
                    <div class="web-category-header-content">
                        <h1
                            class="web-category-header-title text-display font-aeonik-pro text-primary"
                        >
                            {name}
                        </h1>
                        <p class="web-category-header-description text-secondary text-description">
                            {description}
                        </p>
                    </div>
                </div>

                <div class="mt-12">
                    <ul class="web-grid-articles">
                        {#each posts as post}
                            {@const { postAuthors, authorAvatars, primaryAuthor } = getPostAuthors(
                                post.author,
                                authors
                            )}
                            {#if primaryAuthor}
                                <Article
                                    title={post.title}
                                    href={post.href}
                                    cover={post.cover}
                                    date={post.date}
                                    timeToRead={post.timeToRead}
                                    avatars={authorAvatars}
                                    authors={postAuthors}
                                />
                            {/if}
                        {/each}
                    </ul>
                </div>
            </div>
            <div class="relative mt-0 overflow-hidden">
                <div class="container">
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>
