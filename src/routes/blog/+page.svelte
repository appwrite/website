<script lang="ts">
    import { Main } from '$lib/layouts';
    import { MainFooter, FooterNav, Article } from '$lib/components';
    import { TITLE_SUFFIX } from '$routes/titles.js';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    export let data;

    const featured = data.posts.find((post) => post.featured);

    const title = 'Blog' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
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
                                <img src={featured.cover} class="web-image-ratio-4/3" alt="cover" />
                            </a>
                            <div class="web-feature-article-content">
                                <header class="web-feature-article-header">
                                    <ul class="web-metadata web-caption-400 web-is-only-mobile">
                                        <li>{featured.timeToRead} min</li>
                                    </ul>
                                    <a href={featured.href}>
                                        <h2 class="web-title web-u-color-text-primary">
                                            {featured.title}
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
                                                width="24"
                                                height="24"
                                                alt=""
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
                                    <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-hide">
                                        <li>
                                            <a
                                                    href="https://twitter.com/appwrite"
                                                    class="web-icon-button"
                                                    aria-label="Author twitter"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                            >
                                                <span class="web-icon-x" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                    href="https://twitter.com/appwrite"
                                                    class="web-icon-button"
                                                    aria-label="Author LinkedIn"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                            >
                                                <span class="web-icon-linkedin" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
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
