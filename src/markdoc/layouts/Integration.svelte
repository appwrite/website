<script lang="ts">
    import { Root, Slide } from '$lib/components/carousel';
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import type { Integration } from '$routes/integrations/+page';
    import { isHeaderHidden } from '$lib/layouts/Main.svelte';
    import { integrationCategoryDescriptions } from '$lib/constants';
    import { Button, Icon } from '$lib/components/ui';

    export let title: Integration['title'];
    export let images: Integration['images'];
    // export let isNew: Integration['isNew'];
    export let isPartner: Integration['isPartner'];
    export let product: Integration['product'];
    export let category: Integration['category'];
    export let description: Integration['description'];
    export let cover: Integration['cover'];

    //const title = 'Integrations' + TITLE_SUFFIX;
    //const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
    const ogImage = DEFAULT_HOST + cover;
    const categoryHeading = integrationCategoryDescriptions.find(
        (key) => key.slug === category.toLowerCase()
    )?.heading;
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
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
    <div
        class="web-u-sep-block-end pb-0"
        style="background-color:rgba(23, 23, 26, 1); margin-block-end: 2.5rem"
    >
        <div class="dark container">
            <div class="web-integrations-top-section">
                <div class="web-carousel-wrapper">
                    <Button variant="text" href="/integrations" class="mb-12">
                        <Icon name="chevron-left" aria-hidden="true" />
                        <span>Back to catalog</span>
                    </Button>

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
                            class="web-carousel-item rounded-xl"
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
    <div class="pt-10">
        <div class="container">
            <article class="web-u-gap-60-not-mobile web-u-gap-40-mobile flex flex-col">
                <div class="l-grid-2-1 web-u-row-gap-56 web-u-gap-40-mobile">
                    <div class="l-grid-content">
                        <div class="flex items-start gap-5">
                            <img
                                class="web-author-image"
                                src={product.avatar}
                                alt="Christy Jacob"
                                loading="lazy"
                                width="40"
                                height="40"
                            />
                            <h1
                                class="text-title font-aeonik-pro text-primary justif"
                                style="max-width: 28.15rem;"
                            >
                                {title}
                            </h1>
                        </div>

                        <div class="web-article">
                            <div class="web-article-content">
                                <slot />
                            </div>
                        </div>
                    </div>
                    <div class="l-grid-sidebar">
                        <dl
                            class="sidebar-desc flex flex-col gap-5"
                            style:top={$isHeaderHidden ? '4rem' : '9rem'}
                        >
                            <div class="flex justify-between gap-2">
                                <dt>Vendor</dt>
                                <dd class="text-primary">{product.vendor}</dd>
                            </div>
                            <div class="web-u-sep-block-end"></div>
                            {#if isPartner}
                                <div class="flex justify-between gap-2">
                                    <dt>Partner</dt>
                                    <dd><div class="web-inline-tag">Verified</div></dd>
                                </div>
                            {/if}
                            <div class="web-u-sep-block-end"></div>
                            <div class="flex justify-between gap-2">
                                <dt>Category</dt>
                                <dd class="text-primary">{categoryHeading}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <div class="web-u-sep-block-start mt-12 overflow-hidden pt-10">
        <!-- <ProductsGrid /> -->

        <div class="container">
            <div class="web-big-padding-section-level-2 relative">
                <img
                    src="/images/bgs/pre-footer.png"
                    alt=""
                    class="web-pre-footer-bg"
                    style="z-index:-1"
                />

                <!-- <div class="relative cta"> -->
                <div class="relative">
                    <section
                        class="web-hero web-u-max-width-580 flex items-center justify-center gap-y-4"
                    >
                        <h2
                            class="text-display font-aeonik-pro text-primary max-w-[600px] text-center"
                        >
                            Become a Technology Partner
                        </h2>
                        <p class="text-body font-medium">
                            Join our Technology Partners program to integrate your solutions with
                            Appwrite’s API, enhancing functionality and expanding your reach.
                        </p>
                        <Button
                            href="/integrations/technology-partner"
                            class="mt-4 self-center"
                            event="integrations-technology_partner-click"
                        >
                            <span class="text">Get Started</span>
                        </Button>
                    </section>
                </div>
            </div>
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/functions' as f;
    @use '$scss/abstract/variables/devices';

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

    .l-grid-2-1 {
        @media #{devices.$break1} {
            display: flex;
            flex-direction: column;
        }
        @media #{devices.$break2open} {
            display: grid;
            gap: f.pxToRem(64);
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
