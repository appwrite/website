<script lang="ts">
    import Root from '$lib/components/Accordion/Root.svelte';
    import { Carousel } from '$lib/integrations';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '../../../lib/components/FooterNav.svelte';
    import MainFooter from '../../../lib/components/MainFooter.svelte';

    const title = 'Integrations' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    const slides = Array.from({ length: 10 });
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
    <div
        class="web-u-sep-block-end u-padding-block-end-0"
        style="background-color:rgba(23, 23, 26, 1);"
    >
        <div class="web-container">
            <div class="web-integrations-top-section">
                <div class="web-carousel-wrapper">
                    <a href="/integrations" class="web-button is-text u-margin-block-end-48">
                        <span class="icon-cheveron-left" aria-hidden="true"></span>
                        <span>Back to catalog</span>
                    </a>

                    <Carousel.Root>
                        {#each slides as _}
                            <Carousel.Slide>
                                <img
                                    src="/images/blog/ai-announcement.png"
                                    class="web-u-media-ratio-16-9"
                                    alt="cover"
                                    width="472"
                                />
                            </Carousel.Slide>
                        {/each}
                    </Carousel.Root>
                </div>
            </div>
        </div>
    </div>
    <div class="web-big-padding-section-level-1">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <article class="u-flex-vertical web-u-gap-60-not-mobile web-u-gap-40-mobile">
                    <div class="l-grid-2-1 web-u-row-gap-56 web-u-gap-40-mobile">
                        <header class="u-contents">
                            <div class="l-grid-area-header u-flex u-cross-start u-gap-20">
                                <img
                                    class="web-author-image"
                                    src="/images/avatars/christy.png"
                                    alt="Christy Jacob"
                                    loading="lazy"
                                    width="40"
                                    height="40"
                                />
                                <div class="u-flex u-cross-center u-flex-wrap u-gap-16">
                                    <h1 class="web-title web-u-color-text-primary">Lorem ipsum</h1>
                                    <a
                                        href="/blog/post/announcing-appwrite-new-ai-integrations"
                                        class="web-hero-banner-button"
                                    >
                                        <span class="web-icon-star" aria-hidden="true"></span>
                                        <span class="web-caption-500">New</span>
                                        <div class="web-hero-banner-button-sep"></div>
                                        <span class="web-caption-400 web-u-trim-1"
                                            >Developed by Appwrite</span
                                        >
                                    </a>
                                </div>
                            </div>
                            <div class="l-grid-area-buttons l-side-column">
                                <button class="web-button u-stretch is-full-width-mobile">
                                    <span>Add integrations</span>
                                </button>
                            </div>
                        </header>
                        <div class="u-contents">
                            <div class="l-grid-area-content web-article">
                                <div class="web-article-content">
                                    <p class="web-paragraph-md">
                                        The AI hype is real and will be around for many years to
                                        come. In 2021 alone, AI startups worldwide raised nearly $50
                                        billion in venture capital across approximately 1,500 deals,
                                        reflecting a significant increase from previous years. So
                                        it's no surprise that many of you are looking to build AI
                                        powered applications. But that's easier said than done, as
                                        building AI powered applications can be tricky. We don't
                                        want it to be. That's why we're happy to share multiple AI
                                        related announcements designed to enhance the Appwrite
                                        experience and adapt to new possibilities for devs building
                                        with Appwrite.
                                    </p>
                                    <p class="web-paragraph-md">
                                        Lorem ipsum dolor sit amet consectetur. Neque id vel eros
                                        sed ipsum. Nisi fames euismod egestas morbi massa eget. At
                                        viverra nibh semper arcu in. Convallis etiam dui elit mauris
                                        mattis netus sit. Auctor dolor porttitor viverra eget
                                        egestas sem auctor suspendisse. Massa phasellus condimentum
                                        nam ac quis quis duis risus. Ac ut aliquet tortor donec erat
                                        ac. Enim a eros sit purus et lacinia. Faucibus nibh donec
                                        auctor mattis enim. Elementum quam sed auctor lacus
                                        tincidunt velit semper dui. Dolor commodo consectetur mollis
                                        morbi metus arcu at.
                                    </p>
                                </div>
                            </div>
                            <div class="l-grid-area-side">
                                <dl class="u-flex-vertical u-gap-20">
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Developed by</dt>
                                        <dd class="web-u-color-text-primary">Appwrite</dd>
                                    </div>
                                    <div class="web-u-sep-block-end"></div>
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Partner</dt>
                                        <dd><div class="web-inline-tag">Verified</div></dd>
                                    </div>
                                    <div class="web-u-sep-block-end"></div>
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Category</dt>
                                        <dd class="web-u-color-text-primary">Category</dd>
                                    </div>
                                    <div class="web-u-sep-block-end"></div>
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Website</dt>
                                        <dd>
                                            <a class="web-link" href="/">
                                                <span>appwrite.io</span>
                                                <span class="web-icon-ext-link" aria-hidden="true"
                                                ></span>
                                            </a>
                                        </dd>
                                    </div>
                                    <div class="web-u-sep-block-end"></div>
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Documentation</dt>
                                        <dd>
                                            <a class="web-link" href="/">
                                                <span>Read</span>
                                                <span class="web-icon-ext-link" aria-hidden="true"
                                                ></span>
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <div class="web-big-padding-section-level-1 u-overflow-hidden">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <h3 class="web-label web-u-color-text-primary u-text-center">
                    Keep exploring similar integrations
                </h3>
                <ul class="u-margin-block-start-32 l-grid-1">
                    <li>
                        <a
                            href="/docs/products/auth"
                            class="web-card is-transparent u-block u-height-100-percent"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="u-flex u-cross-center u-gap-8">
                                <img
                                    src="/images/icons/illustrated/dark/auth.png"
                                    alt=""
                                    class=""
                                    width="32"
                                    height="32"
                                />
                                <h4 class="web-main-body-400 web-u-color-text-primary">Auth</h4>
                                <span
                                    class="icon-arrow-right u-margin-inline-start-auto"
                                    aria-hidden="true"
                                ></span>
                            </div>
                            <p class="web-sub-body-400 u-margin-block-start-4">
                                Build secure authentication and manage your users.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/functions"
                            class="web-card is-transparent u-block u-height-100-percent"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="u-flex u-cross-center u-gap-8">
                                <img
                                    src="/images/icons/illustrated/dark/functions.png"
                                    alt=""
                                    class=""
                                    width="32"
                                    height="32"
                                />
                                <h4 class="web-main-body-400 web-u-color-text-primary">
                                    Functions
                                </h4>
                                <span
                                    class="icon-arrow-right u-margin-inline-start-auto"
                                    aria-hidden="true"
                                ></span>
                            </div>
                            <p class="web-sub-body-400 u-margin-block-start-4">
                                Scale big and unlock limitless potential with Appwrite functions.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/databases"
                            class="web-card is-transparent u-block u-height-100-percent"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="u-flex u-cross-center u-gap-8">
                                <img
                                    src="/images/icons/illustrated/dark/databases.png"
                                    alt=""
                                    class=""
                                    width="32"
                                    height="32"
                                />
                                <h4 class="web-main-body-400 web-u-color-text-primary">
                                    Databases
                                </h4>
                                <span
                                    class="icon-arrow-right u-margin-inline-start-auto"
                                    aria-hidden="true"
                                ></span>
                            </div>
                            <p class="web-sub-body-400 u-margin-block-start-4">
                                Store and query structured data, ensuring scalable storage.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/products/messaging"
                            class="web-card is-transparent u-block u-height-100-percent"
                            style="--card-padding:1.5rem;--card-padding-mobile:1.5rem;"
                        >
                            <div class="u-flex u-cross-center u-gap-8">
                                <img
                                    src="/images/icons/illustrated/dark/messaging.png"
                                    alt=""
                                    class=""
                                    width="32"
                                    height="32"
                                />
                                <h4 class="web-main-body-400 web-u-color-text-primary">
                                    Messaging
                                </h4>
                                <span
                                    class="icon-arrow-right u-margin-inline-start-auto"
                                    aria-hidden="true"
                                ></span>
                            </div>
                            <p class="web-sub-body-400 u-margin-block-start-4">
                                Manage your files’ project, using convenient APIs and utilities.
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/docs/apis/realtime"
                            class="web-card is-transparent u-block u-height-100-percent"
                            style="--card-padding:1.5rem; --card-padding-mobile:1.5rem;"
                        >
                            <div class="u-flex u-cross-center u-gap-8">
                                <img
                                    src="/images/icons/illustrated/dark/realtime.png"
                                    alt=""
                                    class=""
                                    width="32"
                                    height="32"
                                />
                                <h4 class="web-main-body-400 web-u-color-text-primary">Realtime</h4>
                                <span
                                    class="icon-arrow-right u-margin-inline-start-auto"
                                    aria-hidden="true"
                                ></span>
                            </div>
                            <p class="web-sub-body-400 u-margin-block-start-4">
                                Utilize realtime information from all Appwrite services.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="web-big-padding-section-level-2 u-position-relative">
            <img
                src="/images/bgs/pre-footer.png"
                alt=""
                class="web-pre-footer-bg"
                style="z-index:-1"
            />

            <div class="u-position-relative">
                <section
                    class="web-hero u-flex u-row-gap-16 u-main-center u-cross-center web-u-max-width-580"
                >
                    <h2
                        class="web-display u-max-width-500 web-u-text-align-center web-u-color-text-primary"
                    >
                        Become a partner
                    </h2>
                    <p class="web-main-body-500">
                        Join our partner program to integrate your solutions with Appwrite’s API,
                        enhancing functionality and expanding your reach.
                    </p>
                    <a
                        href="/"
                        class="web-button is-primary web-u-cross-child-center u-margin-block-start-16"
                    >
                        <span class="text">Get Started</span>
                    </a>
                </section>
            </div>
        </div>
        <div class="web-container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract' as *;
    .web-pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-58%, -72%);
        width: clamp(1200px, 200vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
    }
    /* more tha 9 items */
    .l-max-size-list-cards-section {
        scroll-snap-align: start;
        scroll-margin-top: pxToRem(120);
    }
    .l-max-size-list-cards {
        @mixin hide-items {
            position: relative;
            overflow: hidden;
            &::before {
                position: absolute;
                inset: 0;
                content: '';
                display: block;
                background: linear-gradient(
                    180deg,
                    rgba(25, 25, 28, 0) 0%,
                    rgba(25, 25, 28, 0.92) 90%,
                    #19191c 100%
                );
                transition: var(--transition);
            }
            .l-float-button {
                position: absolute;
                inset-inline: 0;
                inset-block-end: pxToRem(20);
                margin-inline: auto;
                display: flex;
            }
        }
        &:where(:has(> ul > li:nth-child(10))) {
            @media #{$break2open} {
                max-block-size: pxToRem(460);
                @include hide-items();
            }
        }

        &:where(:has(> ul > li:nth-child(7))) {
            @media #{$break1} {
                max-block-size: pxToRem(920);
                @include hide-items();
            }
        }
    }

    :where(:target, :focus-within) {
        .l-max-size-list-cards {
            overflow: visible;
            max-block-size: none;
            &::before {
                opacity: 0;
                pointer-events: none;
            }
            .l-float-button {
                display: none;
            }
        }
    }

    .l-side-column {
        display: flex;
        gap: pxToRem(16);
        @media #{$break1} {
            flex-direction: column;
        }
    }

    .l-grid-2-1 {
        @media #{$break1} {
            display: flex;
            flex-direction: column;
        }
        @media #{$break2open} {
            display: grid;
            gap: pxToRem(32);
            grid-template-columns: 7fr 1fr 4fr;
            grid-template-areas:
                'header  . buttons'
                'content . side';
            .l-grid-area-header {
                grid-area: header;
            }
            .l-grid-area-buttons {
                grid-area: buttons;
            }
            .l-grid-area-content {
                grid-area: content;
            }
            .l-grid-area-side {
                grid-area: side;
            }
        }
    }

    .l-grid-1 {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        @media (max-width: 600px) {
            gap: 1.25rem;
        }
    }
</style>
