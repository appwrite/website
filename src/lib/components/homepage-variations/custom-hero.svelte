<script lang="ts">
    import { page } from '$app/state';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { trackEvent } from '$lib/actions/analytics';
    import { DEFAULT_HERO_SUBTITLE, DEFAULT_HERO_TITLE } from '$lib/statsig/constants';
    import { resolveHeroQueryOverrides } from '$lib/statsig/hero-query-overrides';
    import type { HeroLayoutVariant } from '$lib/statsig/hero-layout';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import Dashboard from '$routes/(marketing)/(components)/dashboard.svelte';

    const {
        title = DEFAULT_HERO_TITLE,
        subtitle = DEFAULT_HERO_SUBTITLE,
        showDashboard = true,
        ctaLabel = 'Start building for free',
        ctaHref = PUBLIC_APPWRITE_DASHBOARD,
        heroLayout = 0
    } = $props<{
        title?: string;
        subtitle?: string;
        showDashboard?: boolean;
        ctaLabel?: string;
        ctaHref?: string;
        heroLayout?: HeroLayoutVariant;
    }>();

    const resolved = $derived(
        resolveHeroQueryOverrides(page.url.searchParams, {
            heroLayout,
            heroSubtitle: subtitle,
            heroTitle: title
        })
    );

    const layoutAside = $derived(resolved.heroLayout === 0);
    const layoutBottomTwoLineTitle = $derived(resolved.heroLayout === 1);
</script>

<div
    class={cn(
        'relative flex max-w-screen items-center overflow-hidden',
        layoutAside
            ? 'py-12 md:py-0 lg:min-h-[700px]'
            : 'pt-16 pb-8 md:pt-20 md:pb-10 lg:min-h-[600px] lg:pt-24'
    )}
>
    <div
        class={cn(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
            'bg-position-[0%_0%]'
        )}
    ></div>

    <div
        class={cn(
            'relative container mx-auto h-full',
            layoutAside
                ? 'grid grid-cols-1 place-items-center gap-24 md:grid-cols-2'
                : 'flex w-full flex-col items-center gap-16 md:gap-20 lg:gap-24'
        )}
    >
        <div
            class={cn(
                'animate-blur-in flex flex-col [animation-delay:150ms] [animation-duration:1000ms]',
                layoutAside ? 'gap-4 md:ml-12 lg:ml-0' : 'gap-3 w-full max-w-6xl items-center px-4 text-center sm:px-0'
            )}
        >
            {#if layoutAside || layoutBottomTwoLineTitle}
                <GradientText
                    class={cn(
                        'animate-fade-in my-2 md:my-3',
                        layoutBottomTwoLineTitle && 'mx-auto block w-full max-w-4xl text-center'
                    )}
                >
                    <h1 class="font-aeonik-pro text-headline text-pretty">
                        {resolved.heroTitle}<span class="text-accent">_</span>
                    </h1>
                </GradientText>
            {:else}
                <GradientText
                    class="animate-fade-in my-2 flex w-full min-w-0 max-w-full justify-center [-webkit-overflow-scrolling:touch] overflow-x-auto [scrollbar-width:none] md:my-3 [&::-webkit-scrollbar]:hidden"
                >
                    <h1 class="font-aeonik-pro text-headline max-w-none shrink-0 whitespace-nowrap">
                        {resolved.heroTitle}<span class="text-accent">_</span>
                    </h1>
                </GradientText>
            {/if}

            <p
                class={cn(
                    'text-description text-secondary mt-2 font-medium md:mt-3',
                    !layoutAside && 'max-w-2xl text-balance text-center'
                )}
            >
                {resolved.heroSubtitle}
            </p>

            <div
                class={cn(
                    'flex flex-col gap-2',
                    layoutAside ? 'mt-4 lg:flex-row' : 'mt-3 w-full max-w-xs items-stretch sm:max-w-none sm:flex-row sm:justify-center'
                )}
            >
                <Button
                    href={ctaHref}
                    class={layoutAside ? 'w-full! lg:w-fit!' : 'w-full! sm:w-fit!'}
                    onclick={() => {
                        trackEvent(`main-get_started_btn_hero-click`);
                    }}>{ctaLabel}</Button
                >
            </div>
        </div>

        {#if showDashboard}
            {#if layoutAside}
                <Dashboard />
            {:else}
                <div class="flex w-full justify-center">
                    <Dashboard placement="below" />
                </div>
            {/if}
        {/if}
    </div>
</div>
