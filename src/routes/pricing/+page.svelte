<script lang="ts">
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';

    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import ComparePlans from './compare-plans.svelte';
    import Faq from './faq.svelte';

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

<div class="u-position-absolute u-overflow-hidden" style="pointer-events:none; inline-size:100%;">
    <enhanced:img
        src="./bg.png"
        alt=""
        style="margin-inline:auto; display:block; width: 1369px; height: auto;"
    />
</div>

<Main>
    <div class="aw-big-padding-section">
        <div class="aw-big-padding-section-level-1 theme-dark">
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <div class="aw-hero">
                        <h1
                            class="aw-display aw-u-max-width-700 aw-u-cross-child-center aw-u-opacity-90 aw-u-mobile-align-text-center"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Simple, transparent pricing with no surprises
                        </h1>
                    </div>
                </section>
            </div>
            <div class="aw-big-padding-section-level-2">
                <section class="aw-container">
                    <div class="aw-pricing-cards">
                        <ul class="aw-pricing-cards-list">
                            <li>
                                <article
                                    class="aw-card is-transparent has-border-gradient u-height-100-percent"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="aw-pricing-cards-item">
                                        <header class="aw-pricing-cards-header">
                                            <h2 id="starter" class="aw-label">Starter</h2>
                                            <div
                                                class="aw-title aw-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $0
                                            </div>
                                            <div class="u-margin-block-start-4">&nbsp;</div>
                                            <p class="aw-main-body-500 u-margin-block-start-16">
                                                For personal hobby projects and students.
                                            </p>
                                            <a
                                                href="https://cloud.appwrite.io/register"
                                                class="aw-button is-secondary is-full-width u-margin-block-start-32"
                                            >
                                                <span class="aw-sub-body-500">Start building</span>
                                            </a>
                                        </header>
                                        <div class="aw-pricing-cards-content">
                                            <ul class="aw-checked-list-circle">
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
                                    class="aw-card is-transparent is-transparent-pink has-border-gradient u-height-100-percent"
                                >
                                    <div class="aw-pricing-cards-item">
                                        <header class="aw-pricing-cards-header">
                                            <h2 id="pro" class="aw-label">Pro</h2>
                                            <div
                                                class="aw-title aw-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $15
                                            </div>
                                            <div class="u-margin-block-start-4">
                                                per member/month
                                            </div>
                                            <p class="aw-main-body-500 u-margin-block-start-16">
                                                For pro developers and teams that need to scale
                                                their products.
                                            </p>
                                            <button
                                                class="aw-button is-full-width u-margin-block-start-32"
                                                disabled
                                            >
                                                <span class="aw-sub-body-500">Coming soon</span>
                                            </button>
                                        </header>
                                        <div class="aw-pricing-cards-content">
                                            <ul class="aw-checked-list-circle">
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
                                    class="aw-card is-transparent has-border-gradient u-height-100-percent"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="aw-pricing-cards-item">
                                        <header class="aw-pricing-cards-header">
                                            <h2 id="scale" class="aw-label">Scale</h2>
                                            <div
                                                class="aw-title aw-u-color-text-primary u-margin-block-start-8"
                                            >
                                                $685
                                            </div>
                                            <div class="u-margin-block-start-4">
                                                per organization/month
                                            </div>
                                            <p class="aw-main-body-500 u-margin-block-start-16">
                                                For scaling teams and agencies that need dedicated
                                                support.
                                            </p>
                                            <button
                                                class="aw-button is-secondary is-full-width u-margin-block-start-32"
                                                disabled
                                            >
                                                <span class="aw-sub-body-500">Coming soon</span>
                                            </button>
                                        </header>
                                        <div class="aw-pricing-cards-content">
                                            <p>Everything in Pro and:</p>
                                            <ul class="aw-checked-list-circle">
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

                    <ul class="aw-grid-1-1-opt-2 u-gap-32 aw-u-margin-block-start-80">
                        <li>
                            <article
                                class="aw-card is-transparent has-border-gradient u-min-height-100-percent"
                                style="background:rgba(35, 35, 37, 0.90);"
                            >
                                <header class="u-flex u-gap-12">
                                    <h3 id="enterprises" class="aw-main-body-500 aw-u-color-text-primary">
                                        Enterprises
                                    </h3>
                                    <div class="aw-inline-tag is-pink">Coming Soon</div>
                                </header>
                                <p class="u-margin-block-start-8">
                                    Large scale projects seeking greater performance, collaboration
                                    and security.
                                </p>
                                <a
                                    href="/contact-us"
                                    class="aw-button is-secondary u-margin-block-start-32"
                                >
                                    <span>Contact us</span>
                                </a>
                            </article>
                        </li>
                        <li>
                            <article
                                class="aw-card is-transparent has-border-gradient u-min-height-100-percent"
                                style="background:rgba(35, 35, 37, 0.90);"
                            >
                                <header class="u-flex u-gap-12">
                                    <h3 id="open-source-teams" class="aw-main-body-500 aw-u-color-text-primary">
                                        Open-source teams
                                    </h3>
                                </header>
                                <p class="u-margin-block-start-8">
                                    We support OSS maintainers with a free Pro Plan. Get in touch to
                                    find out more.
                                </p>
                                <a
                                    href="/contact-us"
                                    class="aw-button is-secondary u-margin-block-start-32"
                                >
                                    <span>Contact us</span>
                                </a>
                            </article>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <ComparePlans />

        <div
            class="aw-big-padding-section-level-1 theme-dark u-position-relative u-overflow-hidden"
        >
            <div class="aw-big-padding-section-level-2 u-position-relative">
                <div class="aw-container u-position-relative" style:z-index="10">
                    <section class="aw-grid-4-6">
                        <header>
                            <div class="aw-display aw-u-color-text-primary">FAQ</div>
                        </header>
                        <Faq />
                    </section>
                </div>
            </div>
            <div class="aw-big-padding-section-level-2 u-position-relative">
                <div class="aw-container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>
