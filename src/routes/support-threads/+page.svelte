<script lang="ts">
    import { goto } from '$app/navigation';
    import { Main } from '$lib/layouts';
    import { createDebounce } from '$lib/utils/debounce';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import ThreadCard from './ThreadCard.svelte';

    const title = 'Support Threads' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    export let data;

    let searching = false; // Do some sick animation

    const { debounce, reset } = createDebounce();

    const search = (node: HTMLInputElement) => {
        const inputHandler = () => {
            const value = node.value.toLowerCase();

            debounce(() => {
                goto(`/support-threads/?q=${value}`, { replaceState: true, keepFocus: true });
            });
        };

        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const value = node.value.toLowerCase();

                reset();
                goto(`/support-threads/?q=${value}`, { replaceState: true, keepFocus: true });
            }
        };

        node.addEventListener('input', inputHandler);
        node.addEventListener('keydown', keydownHandler);

        return {
            destroy() {
                node.removeEventListener('input', inputHandler);
                node.removeEventListener('keydown', keydownHandler);
            }
        };
    };
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
    <div class="aw-big-padding-section-level-1 u-position-relative" style="padding-block:1px;">
        <div
            class="u-position-absolute"
            style="pointer-events: none; inset-inline-start: 0px; inset-block-end: 0px;"
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
                        <stop offset="0.281696" stop-color="#FE9567" /><stop
                            offset="0.59375"
                            stop-color="#FD366E"
                        />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="aw-big-padding-section-level-2 u-position-relative aw-u-margin-block-80">
            <div class="aw-container">
                <h1 class="aw-display aw-u-color-text-primary">Support threads</h1>
            </div>
        </div>
    </div>

    <div class="aw-container">
        <div class="u-flex u-flex-wrap u-cross-center u-gap-32">
            <ul class="u-flex u-flex-wrap u-gap-8">
                <li>
                    <button class="aw-tag">
                        <span>Web</span>
                    </button>
                </li>
                <li>
                    <button class="aw-tag">
                        <span>Flutter</span>
                    </button>
                </li>
                <li>
                    <button class="aw-tag">
                        <span>Apple</span>
                    </button>
                </li>
                <li>
                    <button class="aw-tag">
                        <span>Android</span>
                    </button>
                </li>
            </ul>
            <div
                class="aw-input-text-search-wrapper u-width-full-line u-max-width-350 aw-u-max-inline-size-none-mobile u-margin-inline-start-auto"
            >
                <span
                    class="aw-icon-search u-z-index-5"
                    aria-hidden="true"
                    style="inset-block-start:0.9rem"
                />
                <input
                    class="aw-input-button -u-padding-block-0 u-position-relative u-z-index-1"
                    type="text"
                    id="search"
                    placeholder="Search for threads"
                    data-hit="-1"
                    use:search
                />
            </div>
        </div>

        <h2 class="u-margin-block-start-16 aw-u-color-text-primary" aria-live="polite">
            Found {data.threads.length} results.
        </h2>

        <div class="u-flex-vertical u-gap-16 u-margin-block-start-16">
            {#each data.threads as thread}
                <ThreadCard {thread} />
            {/each}
        </div>

        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
</style>
