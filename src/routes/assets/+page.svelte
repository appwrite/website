<script lang="ts">
    import { visible } from '$lib/actions';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import FooterNav from '../../lib/components/FooterNav.svelte';
    import MainFooter from '../../lib/components/MainFooter.svelte';

    const title = 'Assets' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    enum Section {
        NAMING = 'Naming',
        LOGOTYPE = 'Logotype',
        LOGOMARK = 'Logomark',
        COLORS = 'Brand colors',
        VISUALS = 'Product visuals',
        CONTACT = 'Contact us'
    }

    const getSectionId = (section: Section) => section.toLowerCase().replace(/\s/g, '-');

    let selectedMap: Map<Section, boolean> = new Map(
        Object.values(Section).map((section) => [section, false])
    );

    $: selected = (function getSelected() {
        for (const [key, value] of selectedMap) {
            if (value) {
                return key;
            }
        }
        return Section.NAMING;
    })();

    $: progress = (function getProgress() {
        const sections = Object.values(Section);
        const index = sections.indexOf(selected);
        return (index / (sections.length - 1)) * 100;
    })();

    const handleVisibility = (section: Section) => {
        return (e: CustomEvent<boolean>) => {
            console.log(selectedMap);
            selectedMap.set(section, e.detail);
            selectedMap = selectedMap;
        };
    };
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

<div class="u-position-absolute" style="pointer-events:none;">
    <img src="/images/bgs/assets-bg.svg" alt="" />
</div>

<Main>
    <div class="aw-container">
        <div class="aw-grid-120-1fr-auto">
            <header class="aw-grid-120-1fr-auto-header">
                <h1 class="aw-title aw-u-color-text-primary">Brand assets</h1>
                <button
                    class="u-flex u-width-full-line aw-u-padding-block-20
                        aw-u-color-text-primary aw-is-only-mobile
                       aw-u-margin-inline-32-negative u-margin-block-start-24 aw-u-sep-block"
                    style="inline-size:100vw"
                >
                    <span
                        class="aw-container u-flex u-width-full-line u-main-space-between u-cross-center"
                    >
                        <span class="aw-description">Table of contents</span>
                        <span class="icon-menu-alt-4" aria-hidden="true" />
                    </span>
                </button>
            </header>
            <aside class="aw-grid-120-1fr-auto-side aw-is-mobile-closed">
                <div class="aw-page-steps">
                    <div
                        class="aw-page-steps-location aw-is-not-mobile"
                        style="--location:{progress}%;"
                    >
                        <button class="aw-page-steps-location-button">
                            <img src="/images/animations/indicator.svg" alt="" />
                        </button>
                    </div>
                    <ul class="aw-page-steps-list aw-sub-body-500">
                        {#each Object.values(Section) as section}
                            <li>
                                <a
                                    href="#{getSectionId(section)}"
                                    class:is-selected={selected === section}>{section}</a
                                >
                            </li>
                        {/each}
                    </ul>
                </div>
            </aside>
            <main class="aw-grid-120-1fr-auto-main /aw-is-mobile-closed">
                <div class="aw-content">
                    <section>
                        <p>
                            Resources for presenting the Appwrite brand to maintain consistency
                            while using our logos, colors, and other brand elements across various
                            platforms and materials.
                        </p>
                        <button class="aw-button u-cross-child-start">
                            <span class="aw-icon-download" aria-hidden="true" />
                            <span>Download assets</span>
                        </button>
                    </section>

                    <section id={getSectionId(Section.NAMING)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.NAMING)}
                            >
                                Naming
                            </h2>
                            <p>
                                Write 'Appwrite,' with a lowercase 'w' and no space between the two
                                words. Please refrain from using variations like 'AppWrite' or 'App
                                Write'.
                            </p>
                        </div>
                    </section>

                    <section id={getSectionId(Section.LOGOTYPE)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.LOGOTYPE)}
                            >
                                Logotype
                            </h2>
                            <p>
                                The Appwrite logo stands as a prominent symbol of our brand's
                                identity. Refrain from altering our logo and preferably use our logo
                                on a neutral background.
                            </p>
                            <div class="u-flex u-flex-wrap u-gap-32 u-margin-block-start-12">
                                <div
                                    class="media-wrapper | theme-light |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-100)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logotype/white.svg"
                                        alt="Appwrite logo with black text"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/white.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/api/image?img=/assets/logotype/white.svg&format=png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    class="media-wrapper | theme-dark |
                                    u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <img
                                        src="/assets/logotype/black.svg"
                                        alt="Appwrite logo with white text"
                                    />
                                    <div class="buttons">
                                        <a
                                            class="aw-button is-secondary"
                                            href="/assets/logotype/black.svg"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>SVG</span>
                                        </a>
                                        <a
                                            class="aw-button is-secondary"
                                            href="/api/image?img=/assets/logotype/black.svg&format=png"
                                            download
                                        >
                                            <span class="aw-icon-download" aria-label="download" />
                                            <span>PNG</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section>
                            <div class="u-flex u-flex-vertical u-gap-8">
                                <h3 class="aw-label aw-u-color-text-primary">
                                    Co-branding logotypes
                                </h3>
                                <p>
                                    Spacing is determined by the Appwrite mark. Unless otherwise
                                    noted by partner brands, each logo is optically equal as a
                                    collection of shapes.
                                </p>
                                <div
                                    class="u-flex u-main-center u-cross-center u-margin-block-start-12 aw-u-border-radius-8 u-padding-inline-16"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <svg
                                        style="max-inline-size:100%;"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="460"
                                        height="80"
                                        viewBox="0 0 460 80"
                                        fill="none"
                                    >
                                        <path
                                            d="M63.8414 52.727C67.4152 52.727 69.2217 50.8979 70.0071 49.6526H70.3606C70.5177 50.9758 71.4602 52.2211 73.306 52.2211H76.8012V48.3294H75.8979C75.2696 48.3294 74.9554 47.9792 74.9554 47.4343V31.8288H70.3213V34.3194H69.9679C69.0646 33.0741 67.1795 31.3228 63.7236 31.3228C58.2255 31.3228 54.1412 35.8372 54.1412 42.0249C54.1412 48.2127 58.3041 52.727 63.8414 52.727ZM64.6661 48.2905C61.4066 48.2905 58.8539 45.9166 58.8539 42.0638C58.8539 38.2889 61.328 35.7204 64.6269 35.7204C67.7686 35.7204 70.3999 38.0165 70.3999 42.0638C70.3999 45.5274 68.1614 48.2905 64.6661 48.2905Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M79.5372 60.1285H84.1713V49.6526H84.5247C85.3887 50.8979 87.2345 52.727 90.8868 52.727C96.3849 52.727 100.391 48.1348 100.391 42.0249C100.391 35.8761 96.11 31.3228 90.5727 31.3228C87.0382 31.3228 85.3102 33.2298 84.4855 34.2805H84.132V31.8288H79.5372V60.1285ZM89.905 48.4073C86.724 48.4073 84.0928 46.0723 84.0928 42.0249C84.0928 38.5613 86.3313 35.6426 89.8265 35.6426C93.0861 35.6426 95.6387 38.1722 95.6387 42.0249C95.6387 45.7998 93.1646 48.4073 89.905 48.4073Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M102.782 60.1285H107.416V49.6526H107.769C108.633 50.8979 110.479 52.727 114.132 52.727C119.63 52.727 123.254 48.1348 123.254 42.0249C123.254 35.8761 119.355 31.3228 113.817 31.3228C110.283 31.3228 108.555 33.2298 107.73 34.2805H107.377V31.8288H102.782V60.1285ZM113.15 48.4073C109.969 48.4073 107.337 46.0723 107.337 42.0249C107.337 38.5613 109.576 35.6426 113.071 35.6426C116.331 35.6426 118.883 38.1722 118.883 42.0249C118.883 45.7998 116.409 48.4073 113.15 48.4073Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M129.379 52.6946H135.938L139.669 36.6999H139.904L143.635 52.6946H150.154L155.375 32.3023H150.704L146.973 48.336H146.62L142.889 32.3023H136.723L132.953 48.336H132.6L128.908 32.3023H123.96L129.379 52.6946Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M157.722 52.6946H162.356V42.6152C162.356 38.7625 164.163 36.3885 167.54 36.3885H169.582V31.7964H168.051C165.42 31.7964 163.417 33.5865 162.631 35.2989H162.317V32.3023H157.722V52.6946Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M192.579 52.6946H196.192V48.6084H192.619C191.205 48.6084 190.616 47.9857 190.616 46.5458V36.3496H196.428V32.3023H190.616V26.5815H186.217V32.3023H182.369V36.3496H185.942V46.5847C185.942 50.9045 188.573 52.6946 192.579 52.6946Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M208.625 52.727C212.905 52.727 216.676 50.6255 218.011 46.3836L213.769 45.3718C213.023 47.6289 210.863 48.7964 208.585 48.7964C205.208 48.7964 202.97 46.6171 202.93 43.1924H218.521V41.9082C218.521 35.8372 214.712 31.3228 208.428 31.3228C202.891 31.3228 198.139 35.6426 198.139 42.0638C198.139 48.2905 202.341 52.727 208.625 52.727ZM202.97 39.8456C203.244 37.3938 205.483 35.3313 208.428 35.3313C211.256 35.3313 213.573 37.0825 213.809 39.8456H202.97Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M180.308 52.6946H175.674V36.3496H172.061V32.3023H180.308V52.6946Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M177.706 28.8177C179.309 28.8177 180.501 27.6006 180.501 26.0031C180.501 24.4437 179.309 23.2266 177.706 23.2266C176.103 23.2266 174.91 24.4437 174.91 26.0031C174.91 27.6006 176.103 28.8177 177.706 28.8177Z"
                                            fill="#EDEDF0"
                                        />
                                        <path
                                            d="M40.7224 47.5483V56.7737H18.174C11.6048 56.7737 5.86883 53.0634 2.79999 47.5483C2.35387 46.7465 1.9634 45.9053 1.63587 45.0323C0.992896 43.3214 0.588719 41.4855 0.466095 39.57V37.0758C0.492717 36.6489 0.534668 36.2254 0.589526 35.8069C0.701663 34.9481 0.871078 34.1077 1.09374 33.2908C3.20014 25.5465 10.0494 19.8721 18.174 19.8721C26.2987 19.8721 33.1471 25.5465 35.2535 33.2908H25.6122C24.0294 30.7664 21.2897 29.0975 18.174 29.0975C15.0584 29.0975 12.3187 30.7664 10.7359 33.2908C10.2535 34.0582 9.87913 34.9045 9.63389 35.8069C9.41607 36.607 9.2999 37.4507 9.2999 38.3229C9.2999 40.9672 10.3696 43.3507 12.0848 45.0323C13.674 46.5931 15.8167 47.5483 18.174 47.5483H40.7224Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M40.7224 35.8071V45.0325H24.2633C25.9785 43.351 27.0482 40.9675 27.0482 38.3232C27.0482 37.4509 26.932 36.6072 26.7142 35.8071H40.7224Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M257.521 49V58H235.677C229.312 58 223.755 54.3804 220.782 49C220.35 48.2178 219.972 47.3972 219.655 46.5455C219.032 44.8764 218.64 43.0854 218.521 41.2166V38.7834C218.547 38.3669 218.588 37.9537 218.641 37.5454C218.75 36.7076 218.914 35.8878 219.129 35.0909C221.17 27.5358 227.806 22 235.677 22C243.548 22 250.182 27.5358 252.223 35.0909H242.883C241.349 32.6282 238.695 31 235.677 31C232.658 31 230.004 32.6282 228.471 35.0909C228.003 35.8395 227.641 36.6651 227.403 37.5454C227.192 38.326 227.079 39.1491 227.079 40C227.079 42.5797 228.116 44.905 229.777 46.5455C231.317 48.0681 233.393 49 235.677 49H257.521Z"
                                            fill="#434347"
                                        />
                                        <path
                                            d="M257.521 37.5454V46.5454H241.576C243.237 44.905 244.274 42.5797 244.274 40C244.274 39.149 244.161 38.326 243.95 37.5454H257.521Z"
                                            fill="#434347"
                                        />
                                        <path
                                            d="M257.534 0L257.521 80"
                                            stroke="#98989C"
                                            stroke-width="0.471656"
                                        />
                                        <path
                                            d="M298.522 49V58H276.117C269.589 58 263.89 54.3804 260.841 49C260.397 48.2178 260.009 47.3972 259.684 46.5455C259.045 44.8764 258.643 43.0854 258.522 41.2166V38.7834C258.548 38.3669 258.59 37.9537 258.644 37.5454C258.756 36.7076 258.924 35.8878 259.145 35.0909C261.238 27.5358 268.044 22 276.117 22C284.19 22 290.994 27.5358 293.087 35.0909H283.508C281.935 32.6282 279.213 31 276.117 31C273.021 31 270.299 32.6282 268.726 35.0909C268.247 35.8395 267.875 36.6651 267.631 37.5454C267.415 38.326 267.299 39.1491 267.299 40C267.299 42.5797 268.362 44.905 270.066 46.5455C271.645 48.0681 273.774 49 276.117 49H298.522Z"
                                            fill="#434347"
                                        />
                                        <path
                                            d="M298.522 37.5454V46.5454H282.167C283.872 44.905 284.934 42.5797 284.934 40C284.934 39.149 284.819 38.326 284.603 37.5454H298.522Z"
                                            fill="#434347"
                                        />
                                        <rect
                                            x="297.534"
                                            y="17"
                                            width="162"
                                            height="46"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_2590_19866"
                                                    transform="matrix(0.00190476 0 0 0.00670807 0 -0.00310559)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_2590_19866"
                                                width="525"
                                                height="150"
                                                xlink:href="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id={getSectionId(Section.LOGOMARK)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h3
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.LOGOMARK)}
                            >
                                Logomark
                            </h3>
                            <p>
                                While prioritizing recognizability, the logotype is the recommended
                                choice. Using the Appwrite logomark is suitable for situations where
                                space constraints make it challenging to showcase the complete
                                logotype.
                            </p>
                            <div class="u-flex u-flex-wrap u-gap-32 u-margin-block-start-12">
                                <div
                                    class="u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-100)); block-size:20rem;"
                                >
                                    <svg
                                        class="u-max-width-100-percent"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="98"
                                        viewBox="0 0 112 98"
                                        fill="none"
                                    >
                                        <path
                                            d="M111.1 73.4729V97.9638H48.8706C30.7406 97.9638 14.9105 88.114 6.44112 73.4729C5.2099 71.3444 4.13229 69.1113 3.22835 66.7935C1.45387 62.2516 0.338421 57.3779 0 52.2926V45.6712C0.0734729 44.5379 0.189248 43.4135 0.340647 42.3025C0.650124 40.0227 1.11768 37.7918 1.73218 35.6232C7.54544 15.0641 26.448 0 48.8706 0C71.2932 0 90.1935 15.0641 96.0068 35.6232H69.3985C65.0302 28.9216 57.4692 24.491 48.8706 24.491C40.272 24.491 32.711 28.9216 28.3427 35.6232C27.0113 37.6604 25.9782 39.9069 25.3014 42.3025C24.7002 44.4266 24.3796 46.6664 24.3796 48.9819C24.3796 56.0019 27.3319 62.3295 32.0653 66.7935C36.4515 70.9369 42.3649 73.4729 48.8706 73.4729H111.1Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M111.1 42.3027V66.7937H65.6759C70.4094 62.3297 73.3616 56.0021 73.3616 48.9821C73.3616 46.6666 73.041 44.4268 72.4399 42.3027H111.1Z"
                                            fill="#FD366E"
                                        />
                                    </svg>
                                </div>
                                <div
                                    class="u-stretch aw-u-flex-basis-300 u-flex u-main-center u-cross-center aw-u-border-radius-8 aw-u-padding-inline-64"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <svg
                                        class="u-max-width-100-percent"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="112"
                                        height="98"
                                        viewBox="0 0 112 98"
                                        fill="none"
                                    >
                                        <path
                                            d="M111.1 73.4729V97.9638H48.8706C30.7406 97.9638 14.9105 88.114 6.44112 73.4729C5.2099 71.3444 4.13229 69.1113 3.22835 66.7935C1.45387 62.2516 0.338421 57.3779 0 52.2926V45.6712C0.0734729 44.5379 0.189248 43.4135 0.340647 42.3025C0.650124 40.0227 1.11768 37.7918 1.73218 35.6232C7.54544 15.0641 26.448 0 48.8706 0C71.2932 0 90.1935 15.0641 96.0068 35.6232H69.3985C65.0302 28.9216 57.4692 24.491 48.8706 24.491C40.272 24.491 32.711 28.9216 28.3427 35.6232C27.0113 37.6604 25.9782 39.9069 25.3014 42.3025C24.7002 44.4266 24.3796 46.6664 24.3796 48.9819C24.3796 56.0019 27.3319 62.3295 32.0653 66.7935C36.4515 70.9369 42.3649 73.4729 48.8706 73.4729H111.1Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M111.1 42.3027V66.7937H65.6759C70.4094 62.3297 73.3616 56.0021 73.3616 48.9821C73.3616 46.6666 73.041 44.4268 72.4399 42.3027H111.1Z"
                                            fill="#FD366E"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <section id="">
                            <div class="u-flex u-flex-vertical u-gap-8">
                                <h3 class="aw-label aw-u-color-text-primary">
                                    Co-branding lockups
                                </h3>
                                <p>
                                    Spacing is determined by the Appwrite mark. Unless otherwise
                                    noted by partner brands, each logo is optically equal as a
                                    collection of shapes.
                                </p>
                                <div
                                    class="u-flex u-main-center u-cross-center u-margin-block-start-12 aw-u-border-radius-8 u-padding-inline-16"
                                    style="background-color:hsl(var(--aw-color-greyscale-800)); block-size:20rem;"
                                >
                                    <svg
                                        class="u-max-width-100-percent"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="198"
                                        height="96"
                                        viewBox="0 0 198 96"
                                        fill="none"
                                    >
                                        <path
                                            d="M67.7889 65.5976V80.6721H30.0988C19.1182 80.6721 9.53048 74.6094 4.40087 65.5976C3.65516 64.2875 3.00249 62.913 2.45501 61.4864C1.38027 58.6907 0.704684 55.6909 0.499715 52.5609V48.4853C0.544215 47.7877 0.614335 47.0957 0.706032 46.4118C0.893471 45.0085 1.17665 43.6354 1.54883 42.3006C5.06971 29.6462 16.5183 20.374 30.0988 20.374C43.6794 20.374 55.1266 29.6462 58.6475 42.3006H42.5318C39.8861 38.1757 35.3067 35.4486 30.0988 35.4486C24.891 35.4486 20.3116 38.1757 17.6659 42.3006C16.8595 43.5545 16.2338 44.9373 15.8238 46.4118C15.4597 47.7192 15.2656 49.0978 15.2656 50.5231C15.2656 54.844 17.0537 58.7387 19.9205 61.4864C22.577 64.0367 26.1586 65.5976 30.0988 65.5976H67.7889Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M67.7889 46.4116V61.4862H40.2772C43.1441 58.7385 44.9322 54.8438 44.9322 50.5229C44.9322 49.0976 44.738 47.719 44.3739 46.4116H67.7889Z"
                                            fill="#FD366E"
                                        />
                                        <path
                                            d="M135.621 65.5961V80.6707H97.9306C86.9499 80.6707 77.3622 74.608 72.2326 65.5961C71.4869 64.286 70.8343 62.9115 70.2868 61.4849C69.212 58.6893 68.5364 55.6894 68.3315 52.5594V48.4838C68.376 47.7863 68.4461 47.0942 68.5378 46.4104C68.7252 45.0071 69.0084 43.6339 69.3806 42.2991C72.9015 29.6448 84.3501 20.3726 97.9306 20.3726C111.511 20.3726 122.958 29.6448 126.479 42.2991H110.364C107.718 38.1742 103.138 35.4471 97.9306 35.4471C92.7228 35.4471 88.1433 38.1742 85.4976 42.2991C84.6912 43.5531 84.0655 44.9358 83.6556 46.4104C83.2915 47.7177 83.0973 49.0964 83.0973 50.5216C83.0973 54.8425 84.8854 58.7372 87.7523 61.4849C90.4088 64.0352 93.9903 65.5961 97.9306 65.5961H135.621Z"
                                            fill="#434347"
                                        />
                                        <path
                                            d="M135.621 46.4102V61.4847H108.109C110.976 58.737 112.764 54.8423 112.764 50.5214C112.764 49.0962 112.57 47.7175 112.206 46.4102H135.621Z"
                                            fill="#434347"
                                        />
                                        <g clip-path="url(#clip0_2590_19924)">
                                            <rect
                                                x="134.5"
                                                y="19"
                                                width="216"
                                                height="63"
                                                fill="url(#pattern0)"
                                            />
                                        </g>
                                        <path
                                            d="M102.163 0.457031V95.5426"
                                            stroke="#98989C"
                                            stroke-width="0.471656"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlink:href="#image0_2590_19924"
                                                    transform="matrix(0.00190476 0 0 0.00653061 -7.2338e-05 0.0102041)"
                                                />
                                            </pattern>
                                            <clipPath id="clip0_2590_19924">
                                                <rect
                                                    width="62"
                                                    height="62"
                                                    fill="white"
                                                    transform="translate(135.5 20)"
                                                />
                                            </clipPath>
                                            <image
                                                id="image0_2590_19924"
                                                width="525"
                                                height="150"
                                                xlink:href="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </section>
                    </section>

                    <section id={getSectionId(Section.COLORS)}>
                        <h2
                            class="aw-title aw-u-color-text-primary"
                            use:visible={{ top: 48 }}
                            on:visible={handleVisibility(Section.COLORS)}
                        >
                            Brand colors
                        </h2>
                        <div class="u-flex u-flex-wrap u-gap-32">
                            <div
                                class="u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center u-gap-8 aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-900)); background-color:hsl(var(--aw-color-greyscale-50)); block-size:13.5rem;"
                            >
                                <h3 class="aw-label">Light Grey</h3>
                                <p class="aw-caption-400">#EDEDF0</p>
                            </div>
                            <div
                                class="aw-u-sep u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center u-gap-8 aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-50)); block-size:13.5rem;"
                            >
                                <h3 class="aw-label">Dark Grey</h3>
                                <p class="aw-caption-400">#19191D</p>
                            </div>
                            <div
                                class="u-stretch aw-u-flex-basis-200 u-flex-vertical u-main-center u-gap-8 aw-u-border-radius-8 u-padding-inline-24"
                                style="color:hsl(var(--aw-color-greyscale-50)); background-color:hsl(var(--aw-color-pink-500)); block-size:13.5rem;"
                            >
                                <h3 class="aw-label">Appwrite Pink</h3>
                                <p class="aw-caption-400">#FD366E</p>
                            </div>
                        </div>
                    </section>

                    <section id={getSectionId(Section.VISUALS)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.VISUALS)}
                            >
                                Product visuals
                            </h2>
                            <p>
                                Use these product visuals to enhance your articles, presentations,
                                and content related to Appwrite.
                            </p>
                            <div class="aw-grid-1-1-opt-2 u-gap-32 u-margin-block-start-12">
                                <div>
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/dashboard.png"
                                        alt="Dashboard"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/auth.png"
                                        alt="Appwrite Auth"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/databases.png"
                                        alt="Appwrite Databases"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/storage.png"
                                        alt="Appwrite Storage"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="aw-u-border-radius-8 aw-u-media-ratio-16-9 u-width-full-line"
                                        src="/assets/visuals/functions.png"
                                        alt="Appwrite Functions"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id={getSectionId(Section.CONTACT)}>
                        <div class="u-flex u-flex-vertical u-gap-8">
                            <h2
                                class="aw-title aw-u-color-text-primary"
                                use:visible={{ top: 48 }}
                                on:visible={handleVisibility(Section.CONTACT)}
                            >
                                Contact us
                            </h2>
                            <p>
                                Should you require further assistance or have specific needs beyond
                                what's presented on this page, please don't hesitate to
                                <a
                                    class="aw-link"
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer">contact us</a
                                >.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>

        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .media-wrapper {
        position: relative;

        .buttons {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            position: absolute;
            right: 1rem;
            bottom: 1rem;
        }
    }
</style>
