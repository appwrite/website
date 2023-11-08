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
    <div class="aw-big-padding-section-level-1">
        <div class="aw-big-padding-section-level-2">
            <div class="aw-container">
                <h2 class="aw-title aw-u-color-text-primary">Changelog</h2>




                <div class="u-position-relative aw-page-steps is-full-width aw-u-column-gap-48-desktop-16-mobile u-margin-block-start-48">
                        <div class="aw-page-steps-location aw-u-margin-block-0" style="--location:0%;">

                        </div>
                        <ol class="u-grid aw-u-row-gap-160-desktop-80-mobile">
                            <li>
                                <div class="aw-page-steps-location-button u-position-absolute u-inset-inline-start-0">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                    >
                                        <g clip-path="url(#clip0_1684_10747)">
                                            <g filter="url(#filter0_b_1684_10747)">
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="8"
                                                        fill="url(#paint0_linear_1684_10747)"
                                                        fill-opacity="0.32"
                                                />
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="7.75"
                                                        stroke="url(#paint1_linear_1684_10747)"
                                                        stroke-width="0.5"
                                                />
                                            </g>
                                            <circle cx="8" cy="7.99219" r="3" fill="white" />
                                        </g>
                                        <defs>
                                            <filter
                                                    id="filter0_b_1684_10747"
                                                    x="-200"
                                                    y="-200"
                                                    width="416"
                                                    height="416"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                            >
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="100"
                                                />
                                                <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1684_10747"
                                                />
                                                <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1684_10747"
                                                        result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                    id="paint0_linear_1684_10747"
                                                    x1="2.02105"
                                                    y1="1.10843"
                                                    x2="16.3872"
                                                    y2="17.2901"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.4" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                    id="paint1_linear_1684_10747"
                                                    x1="7.45643"
                                                    y1="-1.10615"
                                                    x2="5.53812"
                                                    y2="17.9973"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.16" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <clipPath id="clip0_1684_10747">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <article class="aw-feature-article">
                                    <a href="/" class="aw-feature-article-image">
                                        <img src="/images/blog/logo.png" class="aw-image-ratio-4/3" alt="">
                                    </a>
                                    <div class="aw-feature-article-content">
                                        <header class="aw-feature-article-header">
                                            <ul class="aw-metadata aw-caption-400 aw-is-only-mobile">
                                                <li>5 min</li>
                                            </ul>
                                            <a href="/blog/post/meet-the-new-appwrite">
                                                <h2 class="aw-title aw-u-color-text-primary">Meet the new Appwrite</h2>
                                            </a>
                                        </header>
                                        <p class="aw-sub-body-400">Unveiling Appwrite's new fresh look and feel with a new brand, website and experience.</p>
                                        <div class="aw-author">
                                            <div class="u-flex u-cross-center u-gap-8">
                                                <img class="aw-author-image" src="/images/avatars/sara.png" width="24" height="24" alt="">
                                                <div class="aw-author-info"><a href="/blog/author/sara-kaandorp" class="aw-sub-body-400 aw-link">Sara Kaandorp</a>
                                                    <p class="aw-caption-400 u-hide">Leading Appwrite's product and visual design teams.</p>
                                                    <ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
                                                        <li>5 min</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-hide">
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author twitter" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-x" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author LinkedIn" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-linkedin" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/blog/post/meet-the-new-appwrite" class="aw-button is-secondary u-margin-block-start-auto">
                                            <span>Read article</span>
                                        </a>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <div class="aw-page-steps-location-button u-position-absolute u-inset-inline-start-0">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                    >
                                        <g clip-path="url(#clip0_1684_10747)">
                                            <g filter="url(#filter0_b_1684_10747)">
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="8"
                                                        fill="url(#paint0_linear_1684_10747)"
                                                        fill-opacity="0.32"
                                                />
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="7.75"
                                                        stroke="url(#paint1_linear_1684_10747)"
                                                        stroke-width="0.5"
                                                />
                                            </g>
                                            <circle cx="8" cy="7.99219" r="3" fill="white" />
                                        </g>
                                        <defs>
                                            <filter
                                                    id="filter0_b_1684_10747"
                                                    x="-200"
                                                    y="-200"
                                                    width="416"
                                                    height="416"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                            >
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="100"
                                                />
                                                <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1684_10747"
                                                />
                                                <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1684_10747"
                                                        result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                    id="paint0_linear_1684_10747"
                                                    x1="2.02105"
                                                    y1="1.10843"
                                                    x2="16.3872"
                                                    y2="17.2901"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.4" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                    id="paint1_linear_1684_10747"
                                                    x1="7.45643"
                                                    y1="-1.10615"
                                                    x2="5.53812"
                                                    y2="17.9973"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.16" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <clipPath id="clip0_1684_10747">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <article class="aw-feature-article">
                                    <a href="/" class="aw-feature-article-image">
                                        <img src="/images/blog/logo.png" class="aw-image-ratio-4/3" alt="">
                                    </a>
                                    <div class="aw-feature-article-content">
                                        <header class="aw-feature-article-header">
                                            <ul class="aw-metadata aw-caption-400 aw-is-only-mobile">
                                                <li>5 min</li>
                                            </ul>
                                            <a href="/blog/post/meet-the-new-appwrite">
                                                <h2 class="aw-title aw-u-color-text-primary">Meet the new Appwrite</h2>
                                            </a>
                                        </header>
                                        <p class="aw-sub-body-400">Unveiling Appwrite's new fresh look and feel with a new brand, website and experience.</p>
                                        <div class="aw-author">
                                            <div class="u-flex u-cross-center u-gap-8">
                                                <img class="aw-author-image" src="/images/avatars/sara.png" width="24" height="24" alt="">
                                                <div class="aw-author-info"><a href="/blog/author/sara-kaandorp" class="aw-sub-body-400 aw-link">Sara Kaandorp</a>
                                                    <p class="aw-caption-400 u-hide">Leading Appwrite's product and visual design teams.</p>
                                                    <ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
                                                        <li>5 min</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-hide">
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author twitter" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-x" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author LinkedIn" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-linkedin" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/blog/post/meet-the-new-appwrite" class="aw-button is-secondary u-margin-block-start-auto">
                                            <span>Read article</span>
                                        </a>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <div class="aw-page-steps-location-button u-position-absolute u-inset-inline-start-0">
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                    >
                                        <g clip-path="url(#clip0_1684_10747)">
                                            <g filter="url(#filter0_b_1684_10747)">
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="8"
                                                        fill="url(#paint0_linear_1684_10747)"
                                                        fill-opacity="0.32"
                                                />
                                                <circle
                                                        cx="8"
                                                        cy="8"
                                                        r="7.75"
                                                        stroke="url(#paint1_linear_1684_10747)"
                                                        stroke-width="0.5"
                                                />
                                            </g>
                                            <circle cx="8" cy="7.99219" r="3" fill="white" />
                                        </g>
                                        <defs>
                                            <filter
                                                    id="filter0_b_1684_10747"
                                                    x="-200"
                                                    y="-200"
                                                    width="416"
                                                    height="416"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                            >
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur
                                                        in="BackgroundImageFix"
                                                        stdDeviation="100"
                                                />
                                                <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur_1684_10747"
                                                />
                                                <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur_1684_10747"
                                                        result="shape"
                                                />
                                            </filter>
                                            <linearGradient
                                                    id="paint0_linear_1684_10747"
                                                    x1="2.02105"
                                                    y1="1.10843"
                                                    x2="16.3872"
                                                    y2="17.2901"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.4" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient
                                                    id="paint1_linear_1684_10747"
                                                    x1="7.45643"
                                                    y1="-1.10615"
                                                    x2="5.53812"
                                                    y2="17.9973"
                                                    gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.16" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                            <clipPath id="clip0_1684_10747">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <article class="aw-feature-article">
                                    <a href="/" class="aw-feature-article-image">
                                        <img src="/images/blog/logo.png" class="aw-image-ratio-4/3" alt="">
                                    </a>
                                    <div class="aw-feature-article-content">
                                        <header class="aw-feature-article-header">
                                            <ul class="aw-metadata aw-caption-400 aw-is-only-mobile">
                                                <li>5 min</li>
                                            </ul>
                                            <a href="/blog/post/meet-the-new-appwrite">
                                                <h2 class="aw-title aw-u-color-text-primary">Meet the new Appwrite</h2>
                                            </a>
                                        </header>
                                        <p class="aw-sub-body-400">Unveiling Appwrite's new fresh look and feel with a new brand, website and experience.</p>
                                        <div class="aw-author">
                                            <div class="u-flex u-cross-center u-gap-8">
                                                <img class="aw-author-image" src="/images/avatars/sara.png" width="24" height="24" alt="">
                                                <div class="aw-author-info"><a href="/blog/author/sara-kaandorp" class="aw-sub-body-400 aw-link">Sara Kaandorp</a>
                                                    <p class="aw-caption-400 u-hide">Leading Appwrite's product and visual design teams.</p>
                                                    <ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
                                                        <li>5 min</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <ul class="u-flex u-gap-8 u-margin-inline-start-auto u-hide">
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author twitter" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-x" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/appwrite" class="aw-icon-button" aria-label="Author LinkedIn" target="_blank" rel="noopener noreferrer">
                                                        <span class="aw-icon-linkedin" aria-hidden="true"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="/blog/post/meet-the-new-appwrite" class="aw-button is-secondary u-margin-block-start-auto">
                                            <span>Read article</span>
                                        </a>
                                    </div>
                                </article>
                            </li>
                        </ol>
                    </div>


            </div>
        </div>
        <div class="aw-big-padding-section-level-2">
            <div class="aw-container">
                <FooterNav />
                <MainFooter />
            </div>
        </div>
    </div>
</Main>
