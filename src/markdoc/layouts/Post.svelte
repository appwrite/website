<script lang="ts">
    import { page } from '$app/state';
    import { Media } from '$lib/UI';
    import { FooterNav, MainFooter } from '$lib/components';
    import CTA from '$lib/components/BlogCta.svelte';
    import Article from '$lib/components/blog/article.svelte';
    import Breadcrumbs from '$lib/components/blog/breadcrumbs.svelte';
    import Newsletter from '$lib/components/blog/newsletter.svelte';
    import PostMeta from '$lib/components/blog/post-meta.svelte';
    import TableOfContents from '$lib/components/blog/table-of-contents.svelte';
    import { Main } from '$lib/layouts';
    import type { TocItem } from '$lib/layouts/DocsArticle.svelte';
    import { formatDate } from '$lib/utils/date';
    import {
        createBreadcrumbsSchema,
        createPostSchema,
        DEFAULT_HOST,
        getInlinedScriptTag
    } from '$lib/utils/metadata';
    import type { AuthorData, PostsData } from '$routes/blog/content';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { getContext, setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import type { LayoutContext } from './Article.svelte';

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

    const posts = getContext<PostsData[]>('posts')?.filter(
        (post) => !(post.unlisted ?? false) && !(post.draft ?? false)
    );
    const authors = getContext<AuthorData[]>('authors');
    const authorData = authors.find((a) => a.slug === author);

    setContext<LayoutContext>('headings', writable({}));

    const headings = getContext<LayoutContext>('headings');

    let selected: string | undefined = undefined;
    headings.subscribe((n) => {
        const noVisible = Object.values(n).every((n) => !n.visible);
        if (selected && noVisible) {
            return;
        }
        for (const key in n) {
            if (n[key].visible) {
                selected = key;
                break;
            }
        }
    });

    $: entries = Object.entries($headings);
    $: toc = entries.reduce<Array<TocItem>>((carry, [id, heading]) => {
        carry.push({
            title: heading.title,
            href: `#${id}`,
            selected: selected === id,
            level: heading.level
        });
        return carry;
    }, []);

    callToAction ??= true;

    const currentURL = `https://appwrite.io${page.url.pathname}`;
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
    <div class="pt-10">
        <div class="container">
            <Breadcrumbs {title} />
            <article class="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div class="border-smooth md:border-r md:pr-12 lg:col-span-9">
                    <PostMeta {authorData} {title} {timeToRead} {currentURL} {date} {description} />
                    {#if cover}
                        <div class="web-media aspect-video">
                            <Media class="block aspect-video object-cover" src={cover} />
                        </div>
                    {/if}

                    <div class="web-article-content text-secondary mt-8 flex flex-col gap-8">
                        {#if lastUpdated}
                            <span class="text-main-body last-updated-text font-medium">
                                Updated:
                                <time dateTime={lastUpdated}>
                                    {formatDate(lastUpdated)}
                                </time>
                            </span>
                        {/if}

                        <slot />
                    </div>
                </div>

                <TableOfContents {toc} />
            </article>
        </div>
        {#if typeof callToAction === 'boolean'}
            <CTA />
        {:else if typeof callToAction === 'object'}
            <CTA {...callToAction} />
        {/if}
    </div>

    <div class="border-smooth border-t pt-10">
        <div class="web-big-padding-section-level-2">
            <div class="container">
                <h3 class="text-label text-primary">Read next</h3>
                <section class="mt-8">
                    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
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
                    </div>
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
