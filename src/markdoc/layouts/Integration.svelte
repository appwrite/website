<script lang="ts">
    import { Root, Slide } from '$lib/components/carousel';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import ProductsGrid from '$lib/components/ProductsGrid.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import type { Integration } from '$routes/integrations/+page';
    import { isHeaderHidden } from '$lib/layouts/Main.svelte';

    export let title: Integration['title'];
    export let images: Integration['images'];
    export let isNew: Integration['isNew'];
    export let isPartner: Integration['isPartner'];
    export let product: Integration['product'];
    export let category: Integration['category'];
    export let description: Integration['description'];

    //const title = 'Integrations' + TITLE_SUFFIX;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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

                    {#if images.length > 1}
                        <Root>
                            {#each images as slide}
                                <Slide>
                                    <img
                                        src={slide}
                                        class="web-u-media-ratio-16-9"
                                        alt="cover"
                                        width="472"
                                    />
                                </Slide>
                            {/each}
                        </Root>
                    {:else}
                        <div
                            class="web-carousel-item"
                            style:max-width="584px"
                            style:margin="0 auto"
                        >
                            <img
                                src={images[0]}
                                class="web-u-media-ratio-16-9"
                                alt="cover"
                                width="472"
                            />
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="web-big-padding-section-level-1">
        <div class="web-big-padding-section-level-2">
            <div class="web-container">
                <article class="u-flex-vertical web-u-gap-60-not-mobile web-u-gap-40-mobile">
                    <div class="l-grid-2-1 web-u-row-gap-56 web-u-gap-40-mobile">
                        <div class="l-grid-content">
                            <div class="u-flex u-cross-start u-gap-20">
                                <img
                                    class="web-author-image"
                                    src={product.avatar}
                                    alt="Christy Jacob"
                                    loading="lazy"
                                    width="40"
                                    height="40"
                                />
                                <div class="u-flex u-cross-center u-flex-wrap u-gap-16">
                                    <h1 class="web-title web-u-color-text-primary">{title}</h1>
                                    <div
                                        class="web-hero-banner-button"
                                        style="padding-inline: 0.75rem"
                                    >
                                        <!-- <span class="web-icon-star" aria-hidden="true"></span> -->
                                        <!-- {#if isNew}<span class="web-caption-500">New</span>{/if} -->
                                        <!-- <div class="web-hero-banner-button-sep"></div> -->
                                        <span class="web-caption-400 web-u-trim-1">
                                            Developed by Appwrite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="web-article">
                                <div class="web-article-content">
                                    <slot />
                                </div>
                            </div>
                        </div>
                        <div class="l-grid-sidebar">
                            <dl
                                class="u-flex-vertical u-gap-20 sidebar-desc"
                                style:top={$isHeaderHidden ? '4rem' : '9rem'}
                            >
                                <div class="u-flex u-main-space-between u-gap-8">
                                    <dt>Developed by</dt>
                                    <dd class="web-u-color-text-primary">{product.developer}</dd>
                                </div>
                                <div class="web-u-sep-block-end"></div>
                                {#if isPartner}
                                    <div class="u-flex u-main-space-between u-gap-8">
                                        <dt>Partner</dt>
                                        <dd><div class="web-inline-tag">Verified</div></dd>
                                    </div>
                                {/if}
                                <div class="web-u-sep-block-end"></div>
                                <div class="u-flex u-main-space-between u-gap-8">
                                    <dt>Category</dt>
                                    <dd class="web-u-color-text-primary">{category}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

    <div class="web-big-padding-section-level-1 u-overflow-hidden web-u-sep-block-start">
        <ProductsGrid />
        <div class="web-big-padding-section-level-2 u-position-relative">
            <img
                src="/images/bgs/pre-footer.png"
                alt=""
                class="web-pre-footer-bg"
                style="z-index:-1"
            />

            <div class="u-position-relative cta">
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
                        href="/integrations/contact-us"
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

    .cta {
        min-height: pxToRem(560);
        display: flex;
        align-items: center;
    }

    .web-pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-58%, -52%);
        width: clamp(1200px, 200vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
    }
    /* more tha 9 items */

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
            gap: pxToRem(64);
            grid-template-columns: repeat(12, 1fr);
        }

        .l-grid-content {
            display: flex;
            flex-direction: column;
            gap: 32px;
            grid-column: span 7 / span 7;
        }

        .l-grid-sidebar {
            display: flex;
            flex-direction: column;
            gap: 32px;
            grid-column: span 5 / span 5;
            position: relative;
            .sidebar-desc {
                position: sticky;
                left: 0;
            }
        }
    }
</style>
