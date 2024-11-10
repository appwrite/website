<script lang="ts">
    import { getTocCtx } from './TocRoot.svelte';
    import TocTree from './TocTree.svelte';

    export let showToc = true;

    const {
        toc: {
            elements: { item },
            states: { activeHeadingIdxs, headingsTree }
        }
    } = getTocCtx();

    $: progress = Math.max(...$activeHeadingIdxs) / ($headingsTree.length - 1);
</script>

<section class="web-mobile-header">
    <div class="web-is-only-mobile">
        <button
            on:click={() => (showToc = !showToc)}
            class="flex w-full items-center justify-between"
        >
            <span class="flex w-full items-center justify-between">
                <span class="text-description">Table of contents</span>
                <span
                    aria-hidden="true"
                    class="{!showToc ? 'icon-menu-alt-4' : 'web-icon-close'} toggle-icon"
                />
            </span>
        </button>
    </div>

    <aside class="web-grid-120-1fr-auto-side" class:web-is-mobile-closed={!showToc}>
        <div class="web-page-steps">
            <div
                class="web-page-steps-location web-is-not-mobile"
                style="--location:{progress * 100}%;"
            >
                <span class="web-page-steps-location-button">
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
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="100" />
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

            <div class="toc-tree-holder">
                <TocTree
                    tree={$headingsTree}
                    activeHeadingIdxs={$activeHeadingIdxs}
                    {item}
                    bind:showToc
                />
            </div>
        </div>
    </aside>
</section>

<style>
    .web-mobile-header {
        top: 5rem;
        grid-area: side;
        background: unset;
        max-height: fit-content;
        border-block-end: unset;
        border-block-start: unset;
    }

    @media (max-width: 768px) {
        .web-mobile-header {
            top: 0;
            margin: 1rem 0;
            display: block;
            position: sticky;
            padding: 1.375rem 0;
            align-content: center;
            padding-block: 1.25rem;
            padding-inline: 1.25rem;
            background: hsl(var(--p-body-bg-color));
            border-block-end: solid 1px var(--p-mobile-header-border-color);
            border-block-start: solid 1px var(--p-mobile-header-border-color);
        }

        .toc-tree-holder {
            margin-top: 1.5rem;
            margin-left: 0.25rem;
        }

        .toggle-icon {
            max-width: 16px;
            max-height: 24px;
        }
    }

    @media (min-width: 1280px) {
        .web-mobile-header {
            top: 7rem;
            display: block;
        }
    }
</style>
