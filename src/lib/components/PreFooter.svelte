<script lang="ts">
    import { Button, type Variant } from '$lib/components/ui';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const plans: Array<{
        name: string;
        price: string;
        description: string;
        variable?: boolean;
        tag?: string;
        buttonText: string;
        buttonLink: string;
        buttonVariant: Variant;
        eventName: string;
    }> = [
        {
            name: 'Free',
            price: '$0',
            description: 'A great fit for passion projects and small applications.',
            buttonText: 'Get started',
            buttonLink: getAppwriteDashboardUrl('/register'),
            buttonVariant: 'secondary',
            eventName: 'footer-plans-free-click'
        },
        {
            name: 'Pro',
            price: '$15',
            variable: true,
            tag: 'Most Popular',
            description:
                'For production applications that need powerful functionality and resources to scale.',
            buttonText: 'Start building',
            buttonLink: getAppwriteDashboardUrl('/console?type=create&plan=tier-1'),
            buttonVariant: 'primary',
            eventName: 'footer-plans-pro-click'
        },
        {
            name: 'Scale',
            price: '$599',
            variable: true,
            description:
                'For teams that handle more complex and large projects and need more control and support.',
            buttonText: 'Start building',
            buttonLink: getAppwriteDashboardUrl('/console?type=create&plan=tier-2'),
            buttonVariant: 'secondary',
            eventName: 'footer-plans-scale-click'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For enterprises that need more power and premium support.',
            buttonText: 'Contact us',
            buttonLink: '/contact-us/enterprise',
            buttonVariant: 'secondary',
            eventName: 'footer-plans-enterprise-click'
        }
    ];
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
            class="self-center"
            href={getAppwriteDashboardUrl()}
            event="footer-plans-get_started-click"
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
            {#each plans as plan}
                <li class="web-strip-plans-item web-strip-plans-container-query">
                    <div class="place-item-end grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div class="flex flex-col">
                            <div class="flex gap-3">
                                <h4 class="title text-description">{plan.name}</h4>
                                {#if plan.tag}<div class="web-inline-tag is-pink text-sub-body">
                                        Most popular
                                    </div>{/if}
                            </div>

                            <div class="mt-4 flex flex-col">
                                {#if plan.variable}<span>From</span>{/if}
                                <div class="flex items-end gap-2">
                                    <div class="text-title font-aeonik-pro text-primary">
                                        {plan.price}
                                    </div>
                                    {#if plan.variable}
                                        <div class="info text-caption font-medium">/month</div>
                                    {/if}
                                </div>
                            </div>
                        </div>
                        <p class="web-strip-plans-info text-caption self-end font-medium">
                            {plan.description}
                        </p>
                        <Button
                            href={plan.buttonLink}
                            event={plan.eventName}
                            variant={plan.buttonVariant}
                            class="w-full! flex-3 self-end md:w-fit"
                        >
                            <span class="text" style:padding-inline="0.5rem">{plan.buttonText}</span
                            >
                        </Button>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</div>

<style lang="scss">
    .web-strip-plans-info {
        flex-basis: 5rem !important;
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
