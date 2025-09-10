<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const plans: Array<{
        name: string;
        price: string;
        description: string;
        tag?: string;
        subtitle?: string;
        event: string;
    }> = [
        {
            name: 'Free',
            price: '$0',
            description: 'A great fit for passion projects and small applications.',
            event: 'home-pricing-cards-free-click'
        },
        {
            name: 'Pro',
            price: '$25',
            tag: 'Popular',
            description:
                'For production applications that need powerful functionality and resources to scale.',
            subtitle: '/month',
            event: 'home-pricing-cards-pro-click'
        },
        {
            name: 'Scale',
            price: '$599',
            description:
                'For teams that handle more complex and large projects and need more control and support.',
            subtitle: '/month',
            event: 'home-pricing-cards-scale-click'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For enterprises that need more power and premium support.',
            event: 'home-pricing-cards-enterprise-click'
        }
    ];

    type PricingProps = {
        class?: string;
    };

    const { class: className }: PricingProps = $props();
</script>

<div
    class={cn(
        'relative -mt-6 -mb-12 flex min-h-[650px] max-w-screen items-center justify-center overflow-hidden pt-40 md:mb-0 md:pb-10',
        className
    )}
>
    <div class="container flex w-full flex-col items-center justify-center gap-10">
        <div
            class={cn(
                'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
                'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
                'bg-position-[0%_0%]'
            )}
        ></div>

        <div
            class="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center"
        >
            <h2 class="text-title text-primary font-aeonik-pro max-w-xl text-pretty">
                Start building like a team of hundreds today<span class="text-accent">_</span>
            </h2>

            <div class="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button
                    href={getAppwriteDashboardUrl()}
                    class="w-full! lg:w-fit!"
                    onclick={() => {
                        trackEvent(`pricing-get-started-click`);
                    }}>Start building for free</Button
                >
                <Button
                    onclick={() => {
                        trackEvent(`pricing-view-plans-click`);
                    }}
                    href="/pricing"
                    class="w-full! lg:w-fit!"
                    variant="secondary">View pricing plans</Button
                >
            </div>
        </div>

        <div
            class="border-smooth divide-smooth grid min-h-75 w-full grid-cols-1 divide-y divide-dashed rounded-3xl border bg-white/2 backdrop-blur-lg md:grid-cols-2 md:gap-y-12 md:divide-y-0 md:px-4 md:py-8 lg:grid-cols-4 lg:divide-x"
        >
            {#each plans as { name, price, tag: label, subtitle, description, event }}
                {@const isEnterprise = name === 'Enterprise'}
                <div class="flex h-full w-full grow flex-col gap-1 px-5 py-5 md:py-0">
                    <div class="flex items-center gap-2.5">
                        <span class="text-description text-secondary font-medium">{name}</span>
                        {#if label}
                            <span
                                class="bg-accent-200 text-caption rounded-lg px-1.5 py-0.5 font-medium text-white"
                                >{label}</span
                            >
                        {/if}
                    </div>
                    <div class="flex flex-1 flex-col">
                        <span class="text-title font-aeonik-pro text-primary"
                            >{price}

                            {#if subtitle}
                                <span class="text-caption text-secondary -ml-1 font-sans"
                                    >{subtitle}</span
                                >
                            {/if}
                        </span>

                        <p class="text-caption text-secondary mt-4 mb-0 block font-medium">
                            {description}
                        </p>
                    </div>

                    <Button
                        class="mt-8 mb-0 w-full!"
                        variant={name === 'Pro' ? 'primary' : 'secondary'}
                        href={isEnterprise ? '/contact-us/enterprise' : getAppwriteDashboardUrl()}
                        onclick={() => {
                            trackEvent(event);
                        }}>{isEnterprise ? 'Contact us' : 'Start building'}</Button
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
