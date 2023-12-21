<script context="module" lang="ts">
    const POLICY_KEY = Symbol();
    export type PolicyContext = {
        toc: TableOfContents;
        transparentTableCells?: boolean;
    };

    const setCtx = (ctx: PolicyContext) => {
        setContext<PolicyContext>(POLICY_KEY, ctx);
    };

    export const getPolicyCtx = () => {
        return getContext<PolicyContext>(POLICY_KEY);
    };

    export const isInsidePolicy = () => {
        return hasContext(POLICY_KEY);
    };
</script>

<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';

    import { Main } from '$lib/layouts';

    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    import { TITLE_SUFFIX } from '$routes/titles';
    import { createTableOfContents, type TableOfContents } from '@melt-ui/svelte';

    import { getContext, hasContext, setContext } from 'svelte';
    import PolicyTree from './PolicyTree.svelte';
    import { isHeaderHidden } from '$lib/layouts/Main.svelte';

    export let title: string;
    export let transparentTableCells = false;

    const seo = {
        title: title + TITLE_SUFFIX,
        description: DEFAULT_DESCRIPTION,
        ogImage: DEFAULT_HOST + '/images/open-graph/website.png',

        APP_NAME: 'Appwrite'
    };

    let showToc = false;

    const toc = createTableOfContents({
        exclude: ['h1', 'h3', 'h4', 'h5', 'h6'],
        selector: '#main',
        activeType: 'lowest',
        scrollOffset: 120
    });

    setCtx({ toc, transparentTableCells });

    const {
        elements: { item },
        states: { activeHeadingIdxs, headingsTree }
    } = toc;

    $: progress = Math.max(...$activeHeadingIdxs) / ($headingsTree.length - 1);
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seo.title}</title>
    <meta property="og:title" content={seo.title} />
    <meta name="twitter:title" content={seo.title} />
    <!-- Desscription -->
    <meta name="description" content={seo.description} />
    <meta property="og:description" content={seo.description} />
    <meta name="twitter:description" content={seo.description} />
    <!-- Image -->
    <meta property="og:image" content={seo.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={seo.ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main omitMainId>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">{title}</h1>
            </header>
            <button
                class="toc-btn u-position-sticky u-flex u-width-full-line u-main-space-between u-cross-center
                aw-u-padding-20 aw-u-margin-inline-20-negative aw-u-color-text-primary aw-is-only-mobile
                u-margin-block-start-24 aw-u-sep-block aw-u-filter-blur-8"
                style:--inset-block-start="4.5rem"
                style:inline-size="100vw"
                style:background-color="hsl(var(--p-body-bg-color) / 0.1)"
                style:translate="0 {$isHeaderHidden ? '-4.5rem' : '0'}"
                on:click={() => (showToc = !showToc)}
            >
                <span class="aw-description">Table of contents</span>
                <span class="icon-menu-alt-4" aria-hidden="true" />
            </button>
            <aside class="aw-grid-120-1fr-auto-side" class:aw-is-mobile-closed={!showToc}>
                <div class="aw-page-steps">
                    <div
                        class="aw-page-steps-location aw-is-not-mobile"
                        style="--location:{progress * 100}%;"
                    >
                        <span class="aw-page-steps-location-button">
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
                        </span>
                    </div>
                    <PolicyTree
                        tree={$headingsTree}
                        activeHeadingIdxs={$activeHeadingIdxs}
                        {item}
                    />
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed" id="main">
                <div class="aw-content is-count-headers" class:aw-is-mobile-closed={showToc}>
                    <!-- eslint-disable-next-line svelte/valid-compile -->
                    <h2 aria-hidden="true">Introduction</h2>
                    <slot />
                </div>
            </main>
        </div>
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    h2[aria-hidden='true'] {
        height: 0;
        opacity: 0;
    }

    .toc-btn {
        transition: translate 0.3s ease;
    }

    @media screen and (max-width: 1023px) {
        .aw-page-steps {
            margin-block-start: 2rem;
        }
    }
</style>
