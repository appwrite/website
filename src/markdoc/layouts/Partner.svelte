<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import { Main } from '$lib/layouts';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { isHeaderHidden } from '$lib/layouts/Main.svelte';
    import { integrationCategoryDescriptions } from '$lib/constants';
    import { classNames } from '$lib/utils/classnames';
    import type { Partner } from '$routes/partners/catalog/+page';

    export let title: Partner['title'];
    export let isPartner: Partner['isPartner'];
    export let product: Partner['product'];
    export let category: Partner['category'];
    export let description: Partner['description'];
    export let cover: Partner['cover'];

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
        class={classNames(
            'grid-bg border-smooth relative flex items-center border-b py-28 px-5 lg:px-8 xl:px-16',
            'before:from-accent/20 before:absolute before:inset-0 before:-z-1 before:bg-linear-to-tr before:via-transparent before:via-40% before:to-transparent'
        )}
    >
        <div class="container relative w-full pb-0">
            <div class="flex flex-col gap-4">
                <a href="/partners" class="text-caption text-primary group flex gap-2">
                    <span class="web-icon-arrow-left transition group-hover:-translate-x-1" />
                    Back to Partners Catalog
                </a>
                <h1 class="text-headline font-aeonik-pro text-primary">{title}</h1>
            </div>
        </div>
    </div>

    <div class="py-10">
        <div class="container">
            <article class="web-u-gap-60-not-mobile web-u-gap-40-mobile flex flex-col">
                <div class="l-grid-2-1 web-u-row-gap-56 web-u-gap-40-mobile">
                    <div class="l-grid-content">
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

    <div class="mt-12 overflow-hidden py-10">
        <div class="container">
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/functions' as f;
    @use '$scss/abstract/variables/devices';

    .grid-bg {
        --line-color: rgba(255, 255, 255, 0.02);
        --size: calc(100vw / 16);

        position: relative;
        z-index: 1;
        overflow: hidden;
        background-image: repeating-linear-gradient(
                0deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            ),
            repeating-linear-gradient(
                90deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            );

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(
                circle at bottom right,
                rgba(25, 25, 28, 0.5) 19%,
                transparent 100%
            );
            z-index: -2;
        }
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
