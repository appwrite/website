<script lang="ts">
    import { Article, FooterNav, MainFooter } from '$lib/components';
    import { page } from '$app/state';
    import { Main } from '$lib/layouts';
    import { getContext } from 'svelte';
    import { TITLE_SUFFIX } from '$routes/titles';
    import type { PostsData, AuthorData } from '$routes/blog/content';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import FloatingHead from '$lib/components/FloatingHead.svelte';

    export let name: string;
    export let role: string;
    export let avatar: string;
    export let bio: string;
    export let twitter: string;
    export let linkedin: string;
    export let github: string;

    const posts = getContext<PostsData[]>('posts');
    const authors = getContext<AuthorData[]>('authors');
    const author = authors.find(
        (p) => page.url.pathname.substring(page.url.pathname.lastIndexOf('/') + 1) === p.slug
    );

    const seoTitle = name + TITLE_SUFFIX;
    const description = bio;
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
    <div class="border-smooth relative overflow-hidden border-b">
        <div class="web-big-padding-section-level-2 relative">
            <div class="web-u-pointer-events-none absolute inset-y-0 bottom-0">
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
            <div class="container">
                <div class="web-author-section block">
                    {#if avatar}
                        <FloatingHead --position="relative" src={avatar} alt={name} size={112} />
                    {/if}
                    <div>
                        <h1 class="text-title font-aeonik-pro text-primary">{name}</h1>
                        {#if role}
                            <div class="text-label mt-2">{role}</div>
                        {/if}
                    </div>
                    {#if bio}
                        <p class="web-author-section-info text-description">
                            {bio}
                        </p>
                    {/if}
                    <ul class="mt-4 flex justify-center gap-2">
                        {#if github}
                            <li>
                                <a
                                    href={github}
                                    class="web-icon-button"
                                    aria-label="Author GitHub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span class="web-icon-github" aria-hidden="true"></span>
                                </a>
                            </li>
                        {/if}
                        {#if twitter}
                            <li>
                                <a
                                    href={twitter}
                                    class="web-icon-button"
                                    aria-label="Author twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span class="web-icon-x" aria-hidden="true"></span>
                                </a>
                            </li>
                        {/if}
                        {#if linkedin}
                            <li>
                                <a
                                    href={linkedin}
                                    class="web-icon-button"
                                    aria-label="Author LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span class="web-icon-linkedin" aria-hidden="true"></span>
                                </a>
                            </li>
                        {/if}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="web-big-padding-section-level-2 my-0! pt-24!">
            <div class="container">
                <h2 class="text-title font-aeonik-pro text-primary">Articles</h2>

                <div class="mt-12">
                    <ul class="web-grid-articles">
                        {#each posts.filter((p) => p.author === author?.slug) as post}
                            <Article
                                title={post.title}
                                href={post.href}
                                cover={post.cover}
                                date={post.date}
                                timeToRead={post.timeToRead}
                                {avatar}
                                author={name}
                            />
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden">
            <div class="container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>
