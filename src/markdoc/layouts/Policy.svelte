<script context="module" lang="ts">
    const POLICY_KEY = Symbol();
    export type PolicyContext = boolean;

    const setCtx = (ctx: PolicyContext) => {
        setContext<PolicyContext>(POLICY_KEY, ctx);
    };

    export const getPolicyCtx = () => {
        return getContext<PolicyContext>(POLICY_KEY);
    };
</script>

<script lang="ts">
    import { FooterNav, MainFooter } from '$lib/components';

    import { Main } from '$lib/layouts';

    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    import { TITLE_SUFFIX } from '$routes/titles';

    import { getContext, setContext } from 'svelte';

    export let title: string;

    setCtx(true);

    const seo = {
        title: title + TITLE_SUFFIX,
        description: DEFAULT_DESCRIPTION,
        ogImage: DEFAULT_HOST + '/images/open-graph/website.png',

        APP_NAME: 'Appwrite'
    };
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

<Main>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">{title}</h1>
                <button
                    class="u-flex u-width-full-line u-main-space-between u-cross-center
                      aw-u-padding-20 aw-u-color-text-primary aw-is-only-mobile
                     aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
                    style="inline-size:100vw"
                >
                    <span class="aw-description">Table of contents</span>
                    <span class="icon-menu-alt-4" aria-hidden="true" />
                </button>
            </header>
            <aside class="aw-grid-120-1fr-auto-side aw-is-mobile-closed">
                <div class="aw-page-steps">
                    <div class="aw-page-steps-location aw-is-not-mobile" style="--location:0%;">
                        <button class="aw-page-steps-location-button">
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
                        </button>
                    </div>
                    <ul class="aw-page-steps-list aw-sub-body-500">
                        <li>
                            <a href="#introduction" class="is-selected">Introduction</a>
                        </li>
                        <li>
                            <a href="#subscriptions">Subscriptions</a>
                        </li>
                        <li>
                            <a href="#fee">Fee Changes</a>
                        </li>
                        <li>
                            <a href="#refunds">Refunds</a>
                        </li>
                        <li>
                            <a href="#content">Content</a>
                        </li>
                        <li>
                            <a href="#accounts">Accounts</a>
                        </li>
                        <li>
                            <a href="#property">Intellectual Property</a>
                        </li>
                        <li>
                            <a href="#other">Links To Other Web Sites</a>
                        </li>
                        <li>
                            <a href="#termination">Termination</a>
                        </li>
                        <li>
                            <a href="#liability">Limitation Of Liability</a>
                        </li>
                        <li>
                            <a href="#disclaimer">Disclaimer</a>
                        </li>
                        <li>
                            <a href="#governingLaw">Governing Law</a>
                        </li>
                        <li>
                            <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed">
                <slot />
            </main>
        </div>
        <FooterNav />
        <MainFooter />
    </div>
</Main>
