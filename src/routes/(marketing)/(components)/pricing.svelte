<script lang="ts">
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';

    const plans: Array<{
        name: string;
        price: string;
        description: string;
        tag?: string;
        subtitle?: string;
    }> = [
        {
            name: 'Free',
            price: '$0',
            description: 'For personal hobby projects and students.'
        },
        {
            name: 'Pro',
            price: '$15',
            tag: 'Popular',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per member/month'
        },
        {
            name: 'Scale',
            price: '$599',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per organization/month'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For pro developers and teams that need to scale their products.',
            subtitle: 'per organization/month'
        }
    ];
</script>

<div
    class="relative -mt-6 flex min-h-[75vh] max-w-screen items-center justify-center overflow-hidden py-20"
>
    <div class="container flex w-full flex-col items-center justify-center gap-10">
        <div
            class={classNames(
                'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
                'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
                'bg-position-[0%_0%]'
            )}
        ></div>

        <div
            class="animate-fade-in relative flex w-full flex-col justify-between gap-8 [animation-delay:150ms] [animation-duration:1000ms] md:flex-row md:items-center"
        >
            <h2 class="text-title-lg text-primary font-aeonik-pro max-w-xl text-pretty">
                Start building like a team of hundreds today<span class="text-accent">_</span>
            </h2>

            <div class="flex gap-4">
                <Button href="/">Start building for free</Button>
                <Button href="/" variant="secondary">View pricing plans</Button>
            </div>
        </div>

        <div
            class="border-smooth divide-smooth grid min-h-75 w-full grid-cols-1 gap-y-12 divide-y divide-dashed rounded-xl border bg-white/2 px-4 py-8 backdrop-blur-lg md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x"
        >
            {#each plans as { name, price, tag: label, subtitle, description }}
                {@const isEnterprise = name === 'Enterprise'}
                <div class="flex h-full w-full grow flex-col gap-1 px-6 pb-8 md:pb-0">
                    <div class="flex items-center gap-4">
                        <span class="text-description text-secondary">{name}</span>
                        {#if label}
                            <span
                                class="bg-accent-200 text-caption rounded-lg px-1.5 py-0.5 font-medium text-white"
                                >{label}</span
                            >
                        {/if}
                    </div>
                    <div class="flex flex-1 flex-col">
                        <span class="text-title font-aeonik-pro text-primary">{price}</span>
                        {#if subtitle}
                            <span class="text-caption text-secondary">{subtitle}</span>
                        {/if}
                        <p class="text-caption text-secondary mt-auto mb-0 block">{description}</p>
                    </div>

                    <Button
                        class="mt-8 mb-0 w-full!"
                        variant={name === 'Pro' ? 'primary' : 'secondary'}
                        href={isEnterprise ? '/contact-us/enterprise' : getAppwriteDashboardUrl()}
                        >{isEnterprise ? 'Contact us' : 'Start building'}</Button
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
