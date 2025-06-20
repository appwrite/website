<script lang="ts">
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { DEFAULT_HOST } from '$lib/utils/metadata';

    import { Main } from '$lib/layouts';
    import { TITLE_SUFFIX } from '$routes/titles';
    import ComparePlans from './compare-plans.svelte';
    import Faq from './faq.svelte';
    import BG from './bg.png?enhanced';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, BadgeTransparent, Icon } from '$lib/components/ui';

    const title = 'Pricing' + TITLE_SUFFIX;
    const description = 'Explore our straightforward pricing plans that scale with your project.';
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';
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

<div
    class="web-location-for-mobile absolute overflow-hidden"
    style:pointer-events="none"
    style:inline-size="100%"
>
    <enhanced:img
        src={BG}
        alt=""
        style="margin-inline:auto; display:block; width: 1369px; height: auto;"
    />
</div>

<Main>
    <div class="web-big-padding-section mt-2">
        <div class="dark pt-8">
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div class="web-hero">
                        <h1
                            class="text-display font-aeonik-pro web-u-max-width-900 web-u-opacity-90 web-u-mobile-align-text-center self-center"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Pricing
                        </h1>
                        <p
                            class="text-description max-w-sm self-center text-center opacity-90"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Appwrite offers simple and transparent pricing plans with no surprises.
                        </p>
                        <div class="mt-4 flex flex-col items-center text-white">
                            <a href="/products/sites">
                                <BadgeTransparent class="hover:scale-105 transition-all duration-300 transform"
                                    ><img
                                        src="/images/icons/illustrated/light/sites.png"
                                        alt="Sites icon"
                                        class="h-8 w-8"
                                    />
                                    <span class="text-white"
                                        >Appwrite Sites is free during launch</span
                                    >
                                    <Icon name="arrow-right" aria-hidden="true"
                                    ></Icon></BadgeTransparent
                                ></a
                            >
                            <span class="mt-2 text-sm text-[var(--color-primary)] opacity-64"
                                >Pricing will be revealed July 1st, 2025</span
                            >
                        </div>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div class="web-pricing-cards">
                        <ul class="web-pricing-cards-list">
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient h-full"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2
                                                id="starter"
                                                class="text-label text-primary font-aeonik-pro"
                                            >
                                                Free
                                            </h2>
                                            <div
                                                class="text-title font-aeonik-pro text-primary mt-12 -mb-6"
                                            >
                                                $0
                                            </div>
                                            <div class="mt-1">&nbsp;</div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                A great fit for passion projects and small
                                                applications.
                                            </p>
                                            <Button
                                                variant="secondary"
                                                class="is-full-width mt-8"
                                                href={getAppwriteDashboardUrl('/register')}
                                                event="pricing-cards-free-click"
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Start building</span
                                                >
                                            </Button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <ul class="web-checked-list-circle">
                                                <li><span>5GB API bandwidth</span></li>
                                                <li><span>2GB storage</span></li>
                                                <li><span>750K executions</span></li>
                                                <li><span>75K monthly active users</span></li>
                                                <li><span>Community support</span></li>
                                                <li>
                                                    <span>Non-removable email branding</span>
                                                </li>
                                                <li>
                                                    <span
                                                        >1 Database, 1 Bucket, 5 Functions per
                                                        project</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <div
                                    class="web-card is-transparent has-border-gradient is-transparent-pink -m-1 h-full p-1! backdrop-blur-none!"
                                    style:--m-border-radius="1.25rem"
                                >
                                    <article
                                        class="web-card is-transparent is-transparent-pink has-border-gradient h-full"
                                        style="background: linear-gradient(180deg, rgba(253, 54, 110, 0.12) 38.59%, rgba(253, 54, 110, 0) 99.04%);"
                                    >
                                        <header class="web-pricing-cards-header">
                                            <header class="flex gap-3">
                                                <h2
                                                    id="pro"
                                                    class="text-label text-primary font-aeonik-pro"
                                                >
                                                    Pro
                                                </h2>
                                                <div class="web-inline-tag is-pink">
                                                    Most popular
                                                </div>
                                            </header>
                                            <div class="mt-4 flex flex-col gap-2">
                                                <span class="-mb-4">From</span>
                                                <div class="flex items-end gap-2">
                                                    <div
                                                        class="text-title font-aeonik-pro text-primary mt-3"
                                                    >
                                                        $15
                                                    </div>
                                                    <div class="mt-1">/month</div>
                                                </div>
                                            </div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                For production applications that need powerful
                                                functionality and resources to scale.
                                            </p>
                                            <Button
                                                href={getAppwriteDashboardUrl(
                                                    '/console?type=create&plan=tier-1'
                                                )}
                                                class="is-full-width mt-11"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                event="pricing-cards-pro-click"
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Start building</span
                                                >
                                            </Button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Everything in Free, plus:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>300GB API bandwidth</span></li>
                                                <li><span>150GB storage</span></li>
                                                <li><span>3.5M executions</span></li>
                                                <li><span>200K monthly active users</span></li>
                                                <li><span>Organization roles</span></li>
                                                <li><span>Email support</span></li>
                                                <li>
                                                    <span>Daily backups stored for 7 days</span>
                                                </li>
                                                <li><span>Add-ons</span></li>
                                                <li>
                                                    <span
                                                        >Unlimited Databases, Buckets, and Functions</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </li>
                            <li>
                                <article
                                    class="web-card is-transparent has-border-gradient h-full"
                                    style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 63.19%, rgba(255, 255, 255, 0.00) 100%);"
                                >
                                    <div class="web-pricing-cards-item">
                                        <header class="web-pricing-cards-header">
                                            <h2
                                                id="scale"
                                                class="text-label text-primary font-aeonik-pro"
                                            >
                                                Scale
                                            </h2>

                                            <div class="mt-4 flex flex-col gap-2">
                                                <span class="-mb-4">From</span>
                                                <div class="flex items-end gap-2">
                                                    <div
                                                        class="text-title font-aeonik-pro text-primary mt-3"
                                                    >
                                                        $599
                                                    </div>
                                                    <div class="mt-1">/month</div>
                                                </div>
                                            </div>

                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                For teams that handle more complex and large
                                                projects and need more control and support.
                                            </p>
                                            <Button
                                                variant="secondary"
                                                href={getAppwriteDashboardUrl(
                                                    '/console?type=create&plan=tier-2'
                                                )}
                                                event="pricing-cards-scale-click"
                                                class="is-full-width mt-10"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span class="text-sub-body font-medium"
                                                    >Start building</span
                                                >
                                            </Button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Everything in Pro, plus:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>Unlimited seats</span></li>
                                                <li><span>SOC-2</span></li>
                                                <li><span>BAA</span></li>
                                                <li><span>Network logs</span></li>
                                                <li><span>28-day log retention</span></li>
                                                <li><span>Custom organization roles</span></li>
                                                <li><span>SSO</span></li>
                                                <li><span>Activity logs</span></li>
                                                <li><span>Custom backup policies</span></li>
                                                <li><span>Priority support</span></li>
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
                                            <h2
                                                id="enterprise"
                                                class="text-label text-primary font-aeonik-pro"
                                            >
                                                Enterprise
                                            </h2>
                                            <div
                                                class="text-title font-aeonik-pro text-primary mt-10 -mb-6"
                                            >
                                                Custom
                                            </div>
                                            <div class="mt-1">&nbsp;</div>
                                            <p class="text-body mt-4 h-[5rem] font-medium">
                                                For enterprises that need more power and premium
                                                support.
                                            </p>
                                            <Button
                                                variant="secondary"
                                                href="/contact-us/enterprise"
                                                class="is-full-width mt-10"
                                                rel="noopener noreferrer"
                                                event="pricing-cards-enterprise-click"
                                            >
                                                <!-- <span class="web-sub-body-500">Start trial</span> -->
                                                <span class="web-sub-body-500">Contact us</span>
                                            </Button>
                                        </header>
                                        <div class="web-pricing-cards-content">
                                            <p>Everything in Scale, plus:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>Uptime SLAs</span></li>
                                                <li><span>Designated Success Manager</span></li>
                                                <li><span>24/7 enterprise support</span></li>
                                                <li><span>Private Slack channel</span></li>
                                                <li><span>Volume discounts</span></li>
                                                <li><span>Log drains</span></li>
                                                <li><span>90-day log retention</span></li>
                                                <li><span>Advanced observability</span></li>
                                                <li><span>Bring your own Cloud</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-24 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
                        <div class="cta-card w-full p-6">
                            <h6
                                class="text-body text-primary mb-2 flex items-center gap-3 font-medium"
                            >
                                Enterprises
                            </h6>
                            <p class="text-body text-secondary font-medium">
                                Large scale projects seeking greater performance, collaboration and
                                security.
                            </p>
                            <Button
                                class="mt-8"
                                variant="secondary"
                                href="/contact-us"
                                event="pricing-cards-alternate_enterprise-click">Contact us</Button
                            >
                        </div>
                        <div class="cta-card w-full p-6">
                            <h6
                                class="text-body text-primary mb-2 flex items-center gap-3 font-medium"
                            >
                                Open Source
                            </h6>
                            <p class="text-body text-secondary font-medium">
                                We support open-source teams with free access to Pro and Scale
                                plans.
                            </p>
                            <Button
                                variant="secondary"
                                href="/docs/advanced/platform/oss"
                                event="pricing-cards-oss_learn_more-click"
                                class="mt-8">Learn More</Button
                            >
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <ComparePlans />

        <div class="dark relative overflow-hidden pt-10">
            <div class="web-big-padding-section-level-2 relative">
                <div class="relative container" style:z-index="10">
                    <section class="web-grid-4-6">
                        <header>
                            <div class="text-display font-aeonik-pro text-primary">FAQ</div>
                        </header>
                        <Faq />
                    </section>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 relative !mb-0">
                <div class="container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .web-card {
        --web-color-border: 240, 4%, 18%;
        --p-card-padding: 1.25rem;
    }
    @media (min-width: 360px) and (max-width: 550px) {
        .web-location-for-mobile {
            inset-block-start: 90px;
        }
    }

    .web-pricing-cards-list {
        gap: 1rem;
        grid-template-columns: repeat(4, 1fr);
    }

    .cta-card {
        @include gradients.border-gradient;
        --p-radius: 16px;

        background-color: hsl(var(--web-color-card));
        border-radius: var(--p-radius);
        --m-border-radius: var(--p-radius);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
    }
</style>
