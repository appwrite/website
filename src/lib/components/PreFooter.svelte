<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';

    const action = (node: HTMLElement) => {
        console.log(node, 'mounted');
    };
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
            Start building with Appwrite today
        </h2>
        <Button
            variant="transparent"
            href={getAppwriteDashboardUrl()}
            class="self-center"
            onclick={() => trackEvent({ plausible: { name: 'Get started in pre footer' } })}
        >
            <span class="text">Get started</span>
        </Button>
    </section>
    <section
        class="web-card is-transparent has-border-gradient web-u-max-inline-width-584-mobile web-mx-auto-mobile web-u-inline-width-100-percent-mobile p-8!"
    >
        <header class="web-strip-plans-header">
            <div class="web-strip-plans-header-wrapper web-u-row-gap-24">
                <h3 class="text-title font-aeonik-pro text-primary">Our plans</h3>
            </div>
        </header>

        <ul class="web-strip-plans -mt-8">
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="title text-description">Free</h4>
                        <div class="text-title font-aeonik-pro text-primary">$0</div>
                        <div class="info text-caption font-medium"></div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        A great fit for passion projects and small applications.
                    </p>
                    <Button
                        variant="secondary"
                        href={getAppwriteDashboardUrl('/register')}
                        class="web-u-cross-child-end w-full! md:w-fit"
                        onclick={() =>
                            trackEvent({
                                plausible: {
                                    name: 'Get started Free plan'
                                }
                            })}
                    >
                        <span class="text" style:padding-inline="0.5rem">Get started</span>
                    </Button>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <div class="flex gap-3">
                            <h4 class="title text-description">Pro</h4>
                            <div class="web-inline-tag is-pink text-sub-body">Most popular</div>
                        </div>
                        <div class="mt-4 flex flex-col">
                            <span>From</span>
                            <div class="flex items-end gap-2">
                                <div class="text-title font-aeonik-pro text-primary">$15</div>
                                <div class="info text-caption font-medium">/month</div>
                            </div>
                        </div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For production applications that need powerful functionality and resources
                        to scale.
                    </p>
                    <Button
                        href={getAppwriteDashboardUrl('/console?type=create&plan=tier-1')}
                        class="web-u-cross-child-end w-full! md:w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() =>
                            trackEvent({
                                plausible: {
                                    name: 'Get started Pro plan'
                                }
                            })}
                    >
                        <span class="text">Start building</span>
                    </Button>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="text-description text-primary">Scale</h4>
                        <div class="mt-4 flex flex-col">
                            <span>From</span>
                            <div class="flex items-end gap-2">
                                <div class="text-title font-aeonik-pro text-primary">$599</div>
                                <div class="info text-caption font-medium">/month</div>
                            </div>
                        </div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For teams that handle more complex and large projects and need more control
                        and support.
                    </p>
                    <Button
                        variant="secondary"
                        href={getAppwriteDashboardUrl('/console?type=create&plan=tier-2')}
                        class="web-u-cross-child-end w-full! md:w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() =>
                            trackEvent({
                                plausible: {
                                    name: 'Get started Scale plan'
                                }
                            })}
                    >
                        <span class="text">Start building</span>
                    </Button>
                </div>
            </li>
            <li class="web-strip-plans-item web-strip-plans-container-query">
                <div class="web-strip-plans-item-wrapper">
                    <div class="web-strip-plans-plan">
                        <h4 class="text-description text-primary">Enterprise</h4>
                        <div class="mt-4 flex flex-col">
                            <div class="flex items-end gap-2">
                                <div class="text-title font-aeonik-pro text-primary">Custom</div>
                            </div>
                        </div>
                    </div>
                    <p class="web-strip-plans-info text-caption font-medium">
                        For enterprises that need more power and premium support.
                    </p>
                    <Button
                        href="/contact-us/enterprise"
                        variant="secondary"
                        class="web-u-cross-child-end w-full! md:w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                        onclick={() =>
                            trackEvent({
                                plausible: {
                                    name: 'Get started Scale plan'
                                }
                            })}
                    >
                        <span class="text" style:padding-inline="0.5rem">Contact us</span>
                    </Button>
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
