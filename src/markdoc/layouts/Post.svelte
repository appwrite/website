<script lang="ts">
    import { Media } from '$lib/UI';
    import { scroll } from '$lib/animations';
    import { Article, FooterNav, MainFooter, Newsletter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { formatDate } from '$lib/utils/date';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import type { AuthorData, CategoryData, PostsData } from '$routes/blog/content';
    import { BLOG_TITLE_SUFFIX } from '$routes/titles';
    import { getContext } from 'svelte';

    export let title: string;
    export let description: string;
    export let author: string;
    export let date: string;
    export let timeToRead: string;
    export let cover: string;
    export let category: string;

    const authors = getContext<AuthorData[]>('authors');
    const authorData = authors.find((a) => a.slug === author);
    const categoriesList = getContext<CategoryData[]>('categories');
    const categories = getValidCategories();
    const posts = getContext<PostsData[]>('posts');

    function getValidCategories() {
        if (!category) return undefined;
        const cats = category.split(',');
        return categoriesList.filter((c) =>
            cats.some((cat) => cat.toLocaleLowerCase() === c.name.toLocaleLowerCase())
        );
    }

    let readPercentage = 0;
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title + BLOG_TITLE_SUFFIX}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={DEFAULT_HOST + cover} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={DEFAULT_HOST + cover} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div
        class="web-big-padding-section"
        use:scroll
        on:web-scroll={(e) => {
            readPercentage = e.detail.percentage;
        }}
    >
        <div class="web-big-padding-section">
            <div class="web-big-padding-section-level-1">
                <div class="web-big-padding-section-level-2">
                    <div class="web-container" style="--container-size:42.5rem">
                        <article class="web-main-article">
                            <header class="web-main-article-header">
                                <a
                                    class="web-link is-secondary web-u-color-text-secondary u-cross-baseline"
                                    href="/blog"
                                >
                                    <span class="web-icon-chevron-left" aria-hidden="true" />
                                    <span>Back to blog</span>
                                </a>
                                <ul class="web-metadata web-caption-400">
                                    <li>
                                        <time datetime={date}>{formatDate(date)}</time>
                                    </li>
                                    {#if timeToRead}
                                        <li>{timeToRead} min</li>
                                    {/if}
                                </ul>
                                <h1 class="web-title web-u-color-text-primary">{title}</h1>
                                {#if description}
                                    <p class="web-description u-margin-block-start-8">
                                        {description}
                                    </p>
                                {/if}
                                {#if authorData}
                                    <div class="web-author u-margin-block-start-16">
                                        <a
                                            href={authorData.href}
                                            class="u-flex u-cross-center u-gap-8"
                                        >
                                            {#if authorData.avatar}
                                                <img
                                                    class="web-author-image"
                                                    src={authorData.avatar}
                                                    alt={authorData.name}
                                                    loading="lazy"
                                                    width="44"
                                                    height="44"
                                                />
                                            {/if}
                                            <div class="u-flex-vertical">
                                                <h4 class="web-sub-body-400 web-u-color-text-primary">
                                                    {authorData.name}
                                                </h4>
                                                <p class="web-caption-400">{authorData.role}</p>
                                            </div>
                                        </a>
                                        <!-- <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-cross-child-center">
											{#if authorData.twitter}
												<li>
													<a
														href={authorData.twitter}
														class="web-icon-button"
														aria-label="Author twitter"
														target="_blank" rel="noopener noreferrer"

													>
														<span class="web-icon-x" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authorData.linkedin}
												<li>
													<a
														href={authorData.linkedin}
														class="web-icon-button"
														aria-label="Author LinkedIn"
														target="_blank" rel="noopener noreferrer"

													>
														<span class="web-icon-linkedin" aria-hidden="true" />
													</a>
												</li>
											{/if}
											{#if authorData.github}
												<li>
													<a
														href={authorData.github}
														class="web-icon-button"
														aria-label="Author GitHub"
														target="_blank" rel="noopener noreferrer"

													>
														<span class="web-icon-github" aria-hidden="true" />
													</a>
												</li>
											{/if}
										</ul> -->
                                    </div>
                                {/if}
                            </header>
                            {#if cover}
                                <div class="web-media-container">
                                    <Media class="u-block" src={cover} />
                                </div>
                            {/if}

                            <div class="web-article-content u-margin-block-start-32">
                                <slot />
                            </div>
                        </article>
                        <!-- {#if categories?.length}
							<div class="u-flex u-gap-16">
								{#each categories as cat}
									<a href={cat.href} class="web-tag">{cat.name}</a>
								{/each}
							</div>
						{/if} -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="web-big-padding-section-level-1 web-u-sep-block-start">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <h3 class="web-label web-u-color-text-primary">Read next</h3>
                <section class="u-margin-block-start-32">
                    <ul class="web-grid-articles">
                        {#each posts.filter((p) => p.title !== title).slice(0, 3) as post}
                            {@const author = authors.find((a) => a.slug === post.author)}
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
                </section>
            </div>
        </div>
        <div class="web-big-padding-section-level-2 u-position-relative u-overflow-hidden">
            <div class="web-container">
                <Newsletter />
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>

<div class="progress-bar" style:--percentage="{readPercentage * 100}%" />

<style lang="scss">
    .progress-bar {
        position: fixed;
        top: 0;
        height: 2px;
        width: var(--percentage);
        background: hsl(var(--web-color-accent));
        z-index: 10000;
    }
</style>
