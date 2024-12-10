<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { trackEvent } from '$lib/actions/analytics';
</script>

<img
    src="/images/bgs/pre-footer.png"
    alt=""
    class="web-pre-footer-bg"
    loading="lazy"
    style="z-index:-1"
/>

<div class="web-u-row-gap-80 relative grid gap-8 md:grid-cols-2">
    <section class="web-hero flex items-center justify-center gap-y-8">
        <h2 class="text-display font-aeonik-pro text-primary max-w-[500px] text-center">
            Start building today
        </h2>
        <a
            href={PUBLIC_APPWRITE_DASHBOARD}
            class="web-button is-transparent web-self-center"
            on:click={() => trackEvent('Get started in pre footer')}
        >
            <span class="text">Get started</span>
        </a>
    </section>
    <section
        class="web-card is-transparent has-border-gradient web-u-max-inline-width-584-mobile web-mx-auto-mobile web-u-inline-width-100-percent-mobile"
    >
        <header class="web-strip-plans-header">
            <div class="web-strip-plans-header-wrapper web-u-row-gap-24">
                <h3 class="text-title font-aeonik-pro text-primary">Our plans</h3>
            </div>
        </header>

        <ul class="web-strip-plans">
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="title text-description">Free</h4>
                        <div class="text-title font-aeonik-pro text-primary">$0</div>
                        <div class="info text-caption font-medium" />
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For personal hobby projects and students.
                    </p>
                    <a
                        href={`${PUBLIC_APPWRITE_DASHBOARD}/register`}
                        class="web-button is-secondary is-full-width-mobile web-u-cross-child-end"
                        on:click={() => trackEvent('Get started Free plan')}
                    >
                        <span class="text">Get started</span>
                    </a>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="title text-description">Pro</h4>
                        <div class="text-title font-aeonik-pro text-primary">$15</div>
                        <div class="info text-caption font-medium">per member/month</div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For pro developers and teams that need to scale their products.
                    </p>
                    <a
                        href={`${PUBLIC_APPWRITE_DASHBOARD}/console?type=createPro`}
                        class="web-button is-full-width-mobile web-u-cross-child-end"
                        target="_blank"
                        rel="noopener noreferrer"
                        on:click={() => trackEvent('Get started Pro plan')}
                    >
                        <!-- <span class="text">Start trial</span> -->
                        <span class="text">Start building</span>
                    </a>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="title text-description">Scale</h4>
                        <div class="text-title font-aeonik-pro text-primary">$599</div>
                        <div class="info text-caption font-medium">per org/month</div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For pro developers and production projects that need the ability to scale.
                    </p>
                    <button
                        class="web-button is-full-width-mobile is-secondary web-u-cross-child-end"
                        disabled
                    >
                        <span class="text">Coming soon</span>
                    </button>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="title web-description">Enterprise</h4>
                        <div class="web-title web-u-color-text-primary">Custom</div>
                        <div class="info web-caption-500">per org/month</div>
                    </div>
                    <p class="web-strip-plans-info web-caption-500">
                        For enterprises that need more power and premium support.
                    </p>
                    <a
                        href="/contact-us/enterprise"
                        class="web-button is-secondary is-full-width-mobile web-u-cross-child-end"
                    >
                        <span class="text">Contact us</span>
                    </a>
                </div>
            </li>
        </ul>
    </section>
</div>

<style lang="scss">
    .web-strip-plans-info {
        flex-basis: 5rem !important;
    }

    .web-strip-plans .web-button {
        flex: 3;
    }

    .web-strip-plans-item-wrapper {
        gap: 2.65rem;
    }

    @media (min-width: 1024px) and (max-width: 1224px) {
        .web-strip-plans-info {
            flex-basis: 1rem !important;
        }

        .web-strip-plans-item-wrapper {
            gap: 1.25rem !important;
            inline-size: 100% !important;
        }
    }

    @media (max-width: 1024px) {
        .web-strip-plans-info {
            flex-basis: 3rem !important;
        }

        .web-strip-plans-item-wrapper {
            gap: 1.25rem !important;
        }
    }

    .web-pre-footer-bg {
        position: absolute;
        top: clamp(300px, 50vw, 50%);
        left: clamp(300px, 50vw, 50%);
        transform: translate(-58%, -72%);
        width: clamp(1200px, 200vw, 3000px);
        height: auto;
        max-inline-size: unset;
        max-block-size: unset;
        filter: blur(100px);
    }
</style>
