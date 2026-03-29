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
    import { SHOW_SCALE_PLAN } from '$lib/constants/feature-flags';

    const title = 'Pricing' + TITLE_SUFFIX;
    const description =
        'All your cloud services under one subscription. Build, deploy, and observe your app from a unified stack under one subscription.';
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
                            class="text-title font-aeonik-pro web-u-max-width-900 web-u-opacity-90 web-u-mobile-align-text-center self-center"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Everything your app needs,<br />one subscription
                        </h1>
                        <p
                            class="text-description max-w-xl self-center text-center opacity-90"
                            style="background: linear-gradient(90deg, #F47298 0%, #E4E1E5 61.98%, #E4E4E7 100%);
                                -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; padding-block-end:2px;"
                        >
                            Build, deploy, and observe your app from one platform, all under one
                            subscription.
                        </p>
                    </div>
                </section>
            </div>
            <div class="web-big-padding-section-level-2">
                <section class="container">
                    <div
                        class="web-pricing-cards"
                        style:--columns-template={SHOW_SCALE_PLAN
                            ? 'repeat(4, 1fr)'
                            : 'repeat(3, 1fr)'}
                    >
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
                                            <p class="text-main-body mt-4 h-[5rem] font-medium">
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
                                                <li><span>5GB bandwidth</span></li>
                                                <li><span>2GB storage</span></li>
                                                <li><span>750K executions</span></li>
                                                <li><span>75K monthly active users</span></li>
                                                <li><span>Community support</span></li>
                                                <li>
                                                    <span
                                                        >1 Database, 1 Bucket, 2 Functions per
                                                        project</span
                                                    >
                                                </li>
                                            </ul>
                                            <p class="text-caption text-secondary mt-4">
                                                Free projects are paused after 1 week of inactivity.
                                                Limit of 2 projects.
                                            </p>
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
                                                        $25
                                                    </div>
                                                    <div class="mt-1">/month</div>
                                                </div>
                                            </div>
                                            <p class="text-main-body mt-4 h-[5rem] font-medium">
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
                                            <p>Dedicated resources per project:</p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>2TB bandwidth</span></li>
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
                            {#if SHOW_SCALE_PLAN}
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

                                                <p class="text-main-body mt-4 h-[5rem] font-medium">
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
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            {/if}
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
                                            <p class="text-main-body mt-4 h-[5rem] font-medium">
                                                For enterprises that need more power, premium
                                                support, and advanced security features.
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
                                            <p>
                                                Everything in {SHOW_SCALE_PLAN ? 'Scale' : 'Pro'},
                                                plus:
                                            </p>
                                            <ul class="web-checked-list-circle">
                                                <li><span>Uptime SLAs</span></li>
                                                <li><span>Designated Success Manager</span></li>
                                                <li><span>Up to 24/7 support</span></li>
                                                <li>
                                                    <span>Option for private Slack channel</span>
                                                </li>
                                                <li><span>Volume discounts</span></li>
                                                <li><span>Log drains</span></li>
                                                <li><span>90-day log retention</span></li>
                                                <li><span>Advanced observability</span></li>
                                                <li><span>Bring your own Cloud</span></li>
                                                <li>
                                                    <span>SOC-2, HIPAA, and BAA</span>
                                                </li>
                                                <li><span>Custom organization roles</span></li>
                                                <li><span>Single Sign-On (SSO)</span></li>
                                                <li><span>Activity logs</span></li>
                                                <li><span>Custom backup policies</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <section class="mt-20">
                        <article class="cta-card stack-card p-6 md:p-8">
                            <div class="stack-card__header">
                                <h3
                                    class="text-display text-primary font-aeonik-pro stack-card__title"
                                >
                                    One platform. One subscription.
                                </h3>
                                <div class="stack-card__badge">
                                    1 vendor • 1 subscription • 1 bill
                                </div>
                            </div>
                            <p class="text-main-body text-secondary/90 mt-4 max-w-3xl">
                                Replace fragmented backend, hosting, storage, and delivery tooling
                                with a single platform built for the full application lifecycle.
                                Reduce integration surface area, simplify procurement, and give your
                                team one system to operate and scale.
                            </p>
                            <div class="stack-card__compare mt-6">
                                <div class="stack-state-card">
                                    <p class="stack-state-card__label">Before</p>
                                    <ul class="stack-state-card__list">
                                        <li>Multiple tools with overlapping responsibilities</li>
                                        <li>
                                            Separate subscriptions, invoices, and renewal cycles
                                        </li>
                                        <li>
                                            More integration, maintenance, and ownership overhead
                                        </li>
                                    </ul>
                                </div>
                                <div class="stack-state-card stack-state-card--after">
                                    <p class="stack-state-card__label">After</p>
                                    <ul class="stack-state-card__list">
                                        <li>One platform across the app lifecycle</li>
                                        <li>
                                            One subscription with simpler billing and procurement
                                        </li>
                                        <li>Fewer systems to integrate, secure, and maintain</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mt-6 flex flex-wrap items-center gap-4">
                                <Button
                                    href="#compare-plans"
                                    variant="secondary"
                                    event="pricing-cards-stack_consolidation-see_included-click"
                                >
                                    See what's included
                                </Button>
                                <span class="stack-card__helper text-caption text-secondary">
                                    Compare plan limits, included capabilities, and scaling options.
                                </span>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
        </div>

        <div id="compare-plans">
            <ComparePlans />
        </div>

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
        grid-template-columns: var(--columns-template);
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

    .stack-card {
        position: relative;
        overflow: hidden;
        border-radius: var(--p-radius);
        isolation: isolate;
        background-clip: padding-box;
        background:
            radial-gradient(
                120% 80% at 100% 0%,
                rgba(253, 54, 110, 0.14) 0%,
                rgba(253, 54, 110, 0) 60%
            ),
            radial-gradient(
                140% 90% at 0% 100%,
                rgba(96, 165, 250, 0.08) 0%,
                rgba(96, 165, 250, 0) 60%
            ),
            hsl(var(--web-color-card));
    }

    .stack-card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .stack-card__title {
        max-width: 34ch;
        text-wrap: balance;
        margin: 0;
    }

    .stack-card__badge {
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.04);
        border-radius: 9999px;
        padding: 0.35rem 0.75rem;
        font-size: 0.75rem;
        line-height: 1;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
        white-space: nowrap;
    }

    .stack-card__compare {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
    }

    .stack-state-card {
        border-radius: 0.9rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.2);
        padding: 1rem;
    }

    .stack-state-card--after {
        border-color: rgba(253, 54, 110, 0.35);
        background: linear-gradient(180deg, rgba(253, 54, 110, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);
    }

    .stack-state-card__label {
        font-size: 0.72rem;
        line-height: 1;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: hsl(var(--web-color-text-secondary));
        margin-block-end: 0.65rem;
        font-weight: 500;
    }

    .stack-state-card__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 0.5rem;
        color: hsl(var(--web-color-text-secondary));
        font-size: 0.95rem;
        line-height: 1.4;
    }

    .stack-state-card__list li {
        position: relative;
        padding-inline-start: 1rem;
    }

    .stack-state-card__list li::before {
        content: '';
        position: absolute;
        inline-size: 0.35rem;
        block-size: 0.35rem;
        border-radius: 999px;
        inset-inline-start: 0;
        inset-block-start: 0.4rem;
        background: rgba(255, 255, 255, 0.35);
    }

    .stack-state-card--after .stack-state-card__list li::before {
        background: rgba(253, 54, 110, 0.8);
    }

    .stack-card__helper {
        max-inline-size: 32rem;
    }

    @media (max-width: 768px) {
        .stack-card__compare {
            grid-template-columns: 1fr;
        }
    }
</style>
