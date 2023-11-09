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
            <div class="aw-container aw-u-max-width-800">
                <h2 class="aw-display aw-u-color-text-primary">Changelog</h2>




                <div class="u-position-relative aw-page-steps aw-u-gap-32 is-full-width aw-u-margin-block-80w-40s">
                        <div class="aw-page-steps-location is-end-fade aw-u-margin-block-0 aw-is-not-mobile">

                        </div>
                        <ol class="u-grid aw-u-row-gap-160-desktop-80-mobile">
                            <li>
                                <div class="aw-page-steps-location-button u-position-absolute u-inset-inline-start-0 aw-is-not-mobile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_5870_28029)">
                                            <g filter="url(#filter0_b_5870_28029)">
                                                <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_5870_28029)" fill-opacity="0.32"/>
                                                <circle cx="8" cy="8" r="7.75" stroke="url(#paint1_linear_5870_28029)" stroke-width="0.5"/>
                                            </g>
                                            <circle cx="8" cy="7.99219" r="3" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_b_5870_28029" x="-200" y="-200" width="416" height="416" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="100"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5870_28029"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5870_28029" result="shape"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_5870_28029" x1="2.02105" y1="1.10843" x2="16.3872" y2="17.2901" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0.4"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_5870_28029" x1="7.45643" y1="-1.10615" x2="5.53812" y2="17.9973" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0.16"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            <clipPath id="clip0_5870_28029">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <article class="u-flex-vertical u-gap-32">
                                    <ul class="aw-metadata aw-caption-400 aw-u-margin-block-start-8-minus">
                                        <li>5 min</li>
                                    </ul>

                                    <a href="/" class="aw-media-container is-border-radius-16">
                                        <img class="u-block" src="/images/blog/Behind_the_pull_request_Stories_from_contributors.png" alt="">
                                    </a>

                                    <div class="u-flex-vertical u-gap-32 u-padding-block-8 aw-u-padding-inline-d-16-m-8">
                                        <div class="u-flex-vertical u-gap-16">
                                            <header class="u-flex-vertical u-gap-16">
                                                <div class="aw-author">
                                                    <div class="u-flex u-cross-center u-gap-8">
                                                        <img class="aw-author-image" src="/images/avatars/sara.png" width="24" height="24" alt="">
                                                        <div class="aw-author-info">
                                                            <a href="/blog/author/sara-kaandorp" class="aw-sub-body-400 aw-link">Sara Kaandorp</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/blog/post/meet-the-new-appwrite">
                                                    <h2 class="aw-title aw-u-color-text-primary">Meet the new Appwrite</h2>
                                                </a>
                                            </header>
                                            <p class="aw-paragraph-lg">Unveiling Appwrite's new fresh look and feel with a new brand, website and experience.</p>
                                        </div>

                                        <a href="/blog/post/meet-the-new-appwrite" class="aw-link">
                                            <span>Read full article</span>
                                            <span class="aw-icon-arrow-right" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                </article>
                            </li>

                            <li>
                                <div class="aw-page-steps-location-button u-position-absolute u-inset-inline-start-0 aw-is-not-mobile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_5870_28029)">
                                            <g filter="url(#filter0_b_5870_28029)">
                                                <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_5870_28029)" fill-opacity="0.32"/>
                                                <circle cx="8" cy="8" r="7.75" stroke="url(#paint1_linear_5870_28029)" stroke-width="0.5"/>
                                            </g>
                                            <circle cx="8" cy="7.99219" r="3" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_b_5870_28029" x="-200" y="-200" width="416" height="416" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="100"/>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5870_28029"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5870_28029" result="shape"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_5870_28029" x1="2.02105" y1="1.10843" x2="16.3872" y2="17.2901" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0.4"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_5870_28029" x1="7.45643" y1="-1.10615" x2="5.53812" y2="17.9973" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white" stop-opacity="0.16"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            <clipPath id="clip0_5870_28029">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <article class="u-flex-vertical u-gap-32">
                                    <ul class="aw-metadata aw-caption-400 aw-u-margin-block-start-8-minus">
                                        <li>[date]</li>
                                    </ul>

                                    <a href="/" class="aw-media-container is-border-radius-16">
                                        <img class="u-block" src="/images/blog/Behind_the_pull_request_Stories_from_contributors.png" alt="">
                                    </a>

                                    <div class="u-flex-vertical u-gap-32 u-padding-block-8 aw-u-padding-inline-d-16-m-8">
                                        <div class="u-flex-vertical u-gap-16">
                                            <header class="u-flex-vertical u-gap-16">
                                                <div class="aw-author">
                                                    <div class="u-flex u-cross-center u-gap-8">
                                                        <img class="aw-author-image" src="/images/avatars/sara.png" width="24" height="24" alt="">
                                                        <div class="aw-author-info">
                                                            <a href="/blog/author/sara-kaandorp" class="aw-sub-body-400 aw-link">Sara Kaandorp</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/blog/post/meet-the-new-appwrite">
                                                    <h2 class="aw-title aw-u-color-text-primary">Lorem ipsum dolor sit amet</h2>
                                                </a>
                                            </header>
                                            <div class="aw-paragraph-lg">
                                                Lorem ipsum dolor sit amet consectetur. Cursus dui mattis feugiat et mattis a. Condimentum in dolor pulvinar orci sed. Sed eu bibendum in eu sed lectus morbi suspendisse. Et arcu enim velit magna at ut. Pellentesque aliquam amet laoreet adipiscing proin rutrum orci porttitor urna. Scelerisque justo donec lectus scelerisque.
                                                <br><br>
                                                Lorem ipsum dolor sit <a class="aw-link is" href="/" target="_blank">amet consectetur</a>. Cursus dui mattis feugiat et mattis a. Condimentum in dolor pulvinar orci sed.
                                            </div>
                                        </div>
                                        <a href="/blog/post/meet-the-new-appwrite" class="aw-link">
                                        <span>Read full article</span>
                                        <span class="aw-icon-arrow-right" aria-hidden="true"></span>
                                    </a>
                                    </div>

                                </article>
                            </li>
                        </ol>
                    </div>

                <div class="u-flex u-main-center aw-u-margin-block-start-80">
                    <button class="aw-button is-secondary u-padding-inline-32">
                        <span>Load more</span>
                    </button>
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
