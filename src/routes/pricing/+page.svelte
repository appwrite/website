<script lang="ts">
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import ComparePlans from './compare-plans.svelte';
    import Faq from './faq.svelte';
    import BG from './bg.png?enhanced';

    const title = 'Pricing' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
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

<div
    class="u-position-absolute u-overflow-hidden web-location-for-mobile"
    style="pointer-events:none; inline-size:100%;"
>
    <enhanced:img
        src={BG}
        alt=""
        style="margin-inline:auto; display:block; width: 1369px; height: auto;"
    />
</div>

<Main>
    <div class="web-big-padding-section">
        <div class="web-big-padding-section-level-1 theme-dark">
            <div class="web-big-padding-section-level-2">
                <section class="web-container">
                    <div class="web-hero">
                        <h1
                            class="web-display web-u-max-width-700 web-u-cross-child-center web-u-opacity-90 web-u-mobile-align-text-center"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Simple, transparent pricing with no surprises
                        </h1>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="web-container">
                    <div class="web-pricing-cards">
                        <ul class="web-pricing-cards-list">
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient u-height-100-percent"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2 id="starter" class="web-label">Starter</h2>
                                            <div
                                                class="web-title web-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $0
                                            </div>
                                            <div class="u-margin-block-start-4">&nbsp;</div>
                                            <p class="web-main-body-500 u-margin-block-start-16">
                                                For personal hobby projects and students.
                                            </p>
                                            <a
                                                href="https://cloud.appwrite.io/register"
                                                class="web-button is-secondary is-full-width u-margin-block-start-32"
                                            >
                                                <span class="web-sub-body-500">Start building</span>
                                            </a>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <ul class="web-checked-list-circle">
                                                <li>
                                                    <span>Unlimited projects (never paused)</span>
                                                </li>
                                                <li><span>10GB bandwidth</span></li>
                                                <li><span>2GB storage</span></li>
                                                <li><span>750K executions</span></li>
                                                <li><span>75K monthly active users</span></li>
                                                <li><span>Community support</span></li>
                                                <li>
                                                    <span>Non-removable Appwrite branding</span>
                                                </li>
                                                <li><span>No Add-ons</span></li>
                                                <li>
                                                    <span
                                                        >1 Database, 3 Buckets, 5 Functions per
                                                        project</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article
                                    class="web-card is-transparent is-transparent-pink has-border-gradient u-height-100-percent"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2 id="pro" class="web-label">Pro</h2>
                                            <div
                                                class="web-title web-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $15
                                            </div>
                                            <div class="u-margin-block-start-4">
                                                per member/month
                                            </div>
                                            <p class="web-main-body-500 u-margin-block-start-16">
                                                For pro developers and teams that need to scale
                                                their products.
                                            </p>
                                            <a
                                                href="https://cloud.appwrite.io/console?type=createPro"
                                                class="web-button is-full-width u-margin-block-start-32"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <!-- <span class="web-sub-body-500">Start trial</span> -->
                                                <span class="web-sub-body-500">Start building</span>
                                            </a>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <ul class="web-checked-list-circle">
                                                <li>
                                                    <span>Unlimited projects (never paused)</span>
                                                </li>
                                                <li><span>300GB bandwidth</span></li>
                                                <li><span>150GB storage</span></li>
                                                <li><span>3.5M executions</span></li>
                                                <li><span>200K monthly active users</span></li>
                                                <li><span>Email support</span></li>
                                                <li><span>Removable Appwrite branding</span></li>
                                                <li><span>Add-ons</span></li>
                                                <li>
                                                    <span
                                                        >Unlimited Databases, Buckets and Functions</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient u-height-100-percent"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2 id="scale" class="web-label">Scale</h2>
                                            <div
                                                class="web-title web-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $685
                                            </div>
                                            <div class="u-margin-block-start-4">
                                                per organization/month
                                            </div>
                                            <p class="web-main-body-500 u-margin-block-start-16">
                                                For scaling teams and agencies that need dedicated
                                                support.
                                            </p>
                                            <button
                                                class="web-button is-secondary is-full-width u-margin-block-start-32"
                                                disabled
                                            >
                                                <span class="web-sub-body-500">Coming soon</span>
                                            </button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Everything in Pro and:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>5TB bandwidth</span></li>
                                                <li><span>500GB storage</span></li>
                                                <li><span>10M executions</span></li>
                                                <li><span>500K monthly active users</span></li>
                                                <li><span>Priority support</span></li>
                                                <li><span>14-day log retention</span></li>
                                                <li><span>Additional organization roles</span></li>
                                                <li><span>SSO</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <ul class="web-grid-1-1-opt-2 u-gap-32 web-u-margin-block-start-80">
                        <li>
                            <article
                                class="web-card is-transparent has-border-gradient u-min-height-100-percent"
                                style="background:rgba(35, 35, 37, 0.90);"
                            >
                                <header class="u-flex u-gap-12">
                                    <h3
                                        id="enterprises"
                                        class="web-main-body-500 web-u-color-text-primary"
                                    >
                                        Enterprises
                                    </h3>
                                    <div class="web-inline-tag is-pink">Coming Soon</div>
                                </header>
                                <p class="u-margin-block-start-8">
                                    Large scale projects seeking greater performance, collaboration
                                    and security.
                                </p>
                                <a
                                    href="/contact-us"
                                    class="web-button is-secondary u-margin-block-start-32"
                                >
                                    <span>Contact us</span>
                                </a>
                            </article>
                        </li>
                        <li>
                            <article
                                class="web-card is-transparent has-border-gradient u-min-height-100-percent"
                                style="background:rgba(35, 35, 37, 0.90);"
                            >
                                <header class="u-flex u-gap-12">
                                    <h3
                                        id="open-source-teams"
                                        class="web-main-body-500 web-u-color-text-primary"
                                    >
                                        Open-source teams
                                    </h3>
                                </header>
                                <p class="u-margin-block-start-8">
                                    We support OSS maintainers with a free Pro Plan. Read our
                                    announcement blog to find out more.
                                </p>
                                <a
                                    href="/docs/advanced/platform/oss"
                                    class="web-button is-secondary u-margin-block-start-32"
                                >
                                    <span>Learn more</span>
                                </a>
                            </article>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <ComparePlans />

        <div
            class="web-big-padding-section-level-1 theme-dark u-position-relative u-overflow-hidden"
        >
            <div class="web-big-padding-section-level-2 u-position-relative">
                <div class="web-container u-position-relative" style:z-index="10">
                    <section class="web-grid-4-6">
                        <header>
                            <div class="web-display web-u-color-text-primary">FAQ</div>
                        </header>
                        <Faq />
                    </section>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 u-position-relative">
                <div class="web-container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    @media (min-width: 360px) and (max-width: 550px) {
        .web-location-for-mobile {
            inset-block-start: 90px;
        }
    }
</style>
