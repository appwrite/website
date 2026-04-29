<script lang="ts">
    import { browser, building } from '$app/environment';
    import { page } from '$app/state';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import { DEFAULT_HERO_SUBTITLE, DEFAULT_HERO_TITLE } from '$lib/statsig/constants';
    import { initStatsig, whenStatsigReady } from '$lib/statsig/client';
    import { readMarketingHeroExperimentsForExposure } from '$lib/statsig/experiments/marketing-hero-client';
    import {
        hasHeroExperimentQueryOverrides,
        resolveHeroQueryOverrides
    } from '$lib/statsig/hero-query-overrides';
    import type { HeroLayoutVariant } from '$lib/statsig/hero-layout';
    import { ENV } from '$lib/system';
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

    /** Same client hydration path as marketing `hero.svelte` (Statsig + query overrides). */
    let clientHeroLayout = $state<HeroLayoutVariant | undefined>(undefined);
    let clientHeroSubtitle = $state<string | undefined>(undefined);

    const resolved = $derived(
        resolveHeroQueryOverrides(building ? new URLSearchParams() : page.url.searchParams, {
            heroLayout: clientHeroLayout ?? heroLayout,
            heroSubtitle: clientHeroSubtitle ?? subtitle,
            heroTitle: title
        })
    );

    onMount(() => {
        if (!browser || ENV.TEST) return;
        if (hasHeroExperimentQueryOverrides(page.url.searchParams)) return;

        const data = page.data as {
            statsigBootstrap?: string | null;
            statsigStableUserId?: string | null;
            statsigUserAgent?: string | null;
        };
        void initStatsig(
            data.statsigBootstrap ?? null,
            data.statsigStableUserId ?? null,
            data.statsigUserAgent ?? null
        );

        void whenStatsigReady().then((client) => {
            if (!client) return;

            const { heroSubtitle, heroLayout: nextLayout } =
                readMarketingHeroExperimentsForExposure(client, {
                    heroSubtitle: subtitle,
                    heroLayout
                });
            clientHeroSubtitle = heroSubtitle;
            clientHeroLayout = nextLayout;
        });
    });

    const layoutAside = $derived(resolved.heroLayout === 0);
    const layoutBottomTwoLineTitle = $derived(resolved.heroLayout === 1);
</script>

<div
    class={cn(
        'relative flex max-w-screen items-center overflow-hidden',
        layoutAside
            ? 'py-10 md:py-0 lg:min-h-[680px]'
            : 'pt-10 pb-6 md:pt-14 md:pb-8 lg:min-h-[560px] lg:pt-16'
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
                ? 'grid grid-cols-1 place-items-center gap-16 md:grid-cols-2'
                : 'flex w-full flex-col items-center gap-10 md:gap-14 lg:gap-16'
        )}
    >
        <div
            class={cn(
                'animate-blur-in flex flex-col [animation-delay:150ms] [animation-duration:1000ms]',
                layoutAside
                    ? 'gap-4 md:ml-12 lg:ml-0'
                    : 'w-full max-w-6xl items-center gap-3 px-4 text-center sm:px-0'
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
                    class="animate-fade-in my-2 flex w-full max-w-full min-w-0 justify-center overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:my-3 [&::-webkit-scrollbar]:hidden"
                >
                    <h1 class="font-aeonik-pro text-headline max-w-none shrink-0 whitespace-nowrap">
                        {resolved.heroTitle}<span class="text-accent">_</span>
                    </h1>
                </GradientText>
            {/if}

            <p
                class={cn(
                    'text-description text-secondary mt-2 font-medium md:mt-3',
                    !layoutAside && 'max-w-2xl text-center text-balance'
                )}
            >
                {resolved.heroSubtitle}
            </p>

            <div
                class={cn(
                    'flex flex-col gap-2',
                    layoutAside
                        ? 'mt-4 lg:flex-row'
                        : 'mt-3 w-full max-w-xs items-stretch sm:max-w-none sm:flex-row sm:justify-center'
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
