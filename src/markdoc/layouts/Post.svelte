<script lang="ts">
    import { Media } from '$lib/UI';
    import { scroll } from '$lib/animations';
    import { Article, FooterNav, MainFooter, Newsletter, Tooltip } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { formatDate } from '$lib/utils/date';
    import {
        createBreadcrumbsSchema,
        createPostSchema,
        DEFAULT_HOST,
        getInlinedScriptTag
    } from '$lib/utils/metadata';
    import type { AuthorData, PostsData } from '$routes/blog/content';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { getContext } from 'svelte';
    import { type SocialShareOption, socialSharingOptions } from '$lib/constants';
    import { copy } from '$lib/utils/copy';
    import { page } from '$app/stores';
    import CTA from '$lib/components/BlogCta.svelte';

    export let title: string;
    export let description: string;
    export let author: string;
    export let date: string;
    export let timeToRead: string;
    export let cover: string;
    export let category: string;
    export let callToAction:
        | {
              label: string;
              url: string;
              heading: string;
          }
        | boolean;
    export let lastUpdated: string;

    const posts = getContext<PostsData[]>('posts');
    const authors = getContext<AuthorData[]>('authors');
    const authorData = authors.find((a) => a.slug === author);

    callToAction ??= true;

    let readPercentage = 0;
    const currentURL = `https://appwrite.io${$page.url.pathname}`;

    enum CopyStatus {
        Copy = 'Copy URL',
        Copied = 'Copied'
    }

    let copyText = CopyStatus.Copy;

    async function handleCopy() {
        const blogPostUrl = encodeURI(currentURL);

        await copy(blogPostUrl);

        copyText = CopyStatus.Copied;
        setTimeout(() => {
            copyText = CopyStatus.Copy;
        }, 1000);
    }

    function getShareLink(shareOption: SocialShareOption): string {
        const blogPostUrl = encodeURI(currentURL);
        return shareOption.link.replace('{TITLE}', title + '.').replace('{URL}', blogPostUrl);
    }
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title + TITLE_SUFFIX}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={DEFAULT_HOST + cover} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={DEFAULT_HOST + cover} />
    <meta name="twitter:card" content="summary_large_image" />

    {#if category}
        <!-- eslint-disable-next-line svelte/no-at-html-tags-->
        {@html getInlinedScriptTag(
            createBreadcrumbsSchema({
                title,
                category,
                url: currentURL
            })
        )}
    {/if}

    <!-- eslint-disable-next-line svelte/no-at-html-tags-->
    {@html getInlinedScriptTag(
        createPostSchema(
            {
                title: title,
                cover: cover,
                date: date,
                lastUpdated: lastUpdated
            },
            authorData
        )
    )}
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
            <div class="py-10">
                <div class="web-big-padding-section-level-2">
                    <div class="container max-w-[42.5rem]">
                        <article class="web-main-article">
                            <header class="web-main-article-header">
                                <a
                                    class="web-link is-secondary web-u-color-text-secondary items-baseline"
                                    href="/blog"
                                >
                                    <span class="web-icon-chevron-left" aria-hidden="true" />
                                    <span>Back to blog</span>
                                </a>
                                <ul class="web-metadata text-caption">
                                    <li>
                                        <time datetime={date}>{formatDate(date)}</time>
                                    </li>
                                    {#if timeToRead}
                                        <li>{timeToRead} min</li>
                                    {/if}
                                </ul>
                                <h1 class="text-title font-aeonik-pro text-primary">
                                    {title}
                                </h1>
                                {#if description}
                                    <p class="text-description mt-2">
                                        {description}
                                    </p>
                                {/if}
                                {#if authorData}
                                    <div class="web-author mt-4">
                                        <a href={authorData.href} class="flex items-center gap-2">
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
                                            <div class="flex flex-col">
                                                <h4 class="text-sub-body text-primary">
                                                    {authorData.name}
                                                </h4>
                                                <p class="text-caption">{authorData.role}</p>
                                            </div>
                                        </a>
                                    </div>
                                {/if}

                                <div class="share-post-section mt-4 flex items-center gap-4">
                                    <span class="text-micro pr-2 uppercase" style:color="#adadb0">
                                        SHARE
                                    </span>

                                    <ul class="flex gap-2">
                                        {#each socialSharingOptions as sharingOption}
                                            <li class="share-list-item">
                                                <Tooltip
                                                    placement="bottom"
                                                    disableHoverableContent={true}
                                                >
                                                    {#if sharingOption.type === 'link'}
                                                        <a
                                                            class="web-icon-button"
                                                            aria-label={sharingOption.label}
                                                            href={getShareLink(sharingOption)}
                                                            target="_blank"
                                                            rel="noopener, noreferrer"
                                                        >
                                                            <span
                                                                class={sharingOption.icon}
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    {:else}
                                                        <button
                                                            class="web-icon-button"
                                                            aria-label={sharingOption.label}
                                                            on:click={() => handleCopy()}
                                                        >
                                                            <span
                                                                class={sharingOption.icon}
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    {/if}

                                                    <svelte:fragment slot="tooltip">
                                                        {sharingOption.type === 'copy'
                                                            ? copyText
                                                            : `Share on ${sharingOption.label}`}
                                                    </svelte:fragment>
                                                </Tooltip>
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            </header>
                            {#if cover}
                                <div class="web-media-container">
                                    <Media class="web-u-media-ratio-16-9 block" src={cover} />
                                </div>
                            {/if}

                            <div class="web-article-content mt-8">
                                {#if lastUpdated}
                                    <span class="text-body last-updated-text font-medium">
                                        Updated:
                                        <time dateTime={lastUpdated}>
                                            {formatDate(lastUpdated)}
                                        </time>
                                    </span>
                                {/if}

                                <slot />
                            </div>
                        </article>

                        <!-- {#if categories?.length}
							<div class="flex gap-4">
								{#each categories as cat}
									<a href={cat.href} class="web-tag">{cat.name}</a>
								{/each}
							</div>
						{/if} -->
                    </div>
                    {#if typeof callToAction === 'boolean'}
                        <CTA />
                    {:else if typeof callToAction === 'object'}
                        <CTA {...callToAction} />
                    {/if}
                </div>
            </div>
        </div>
    </div>

    <div class="web-u-sep-block-start pt-10">
        <div class="web-big-padding-section-level-2">
            <div class="container">
                <h3 class="text-label text-primary">Read next</h3>
                <section class="mt-8">
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
        <div class="relative overflow-hidden pt-[7.5rem]">
            <div class="container">
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

    @media (min-width: 1024px) {
        .web-main-article-header {
            padding-block-end: 0;
            border-block-end: unset;
        }
    }

    .share-post-section {
        padding: 16px 0;
        border-block-end: solid 0.0625rem hsl(var(--web-color-border));
        border-block-start: solid 0.0625rem hsl(var(--web-color-border));
    }

    .web-icon-button {
        .web-icon-x {
            font-size: 16px;
        }

        .web-icon-copy {
            font-size: 24px;
        }

        .last-updated-text {
            color: var(--primary, #e4e4e7);
        }
    }
</style>
