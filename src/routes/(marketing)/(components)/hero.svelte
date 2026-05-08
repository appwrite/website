<script lang="ts">
    import { browser, building } from '$app/environment';
    import { page } from '$app/state';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import {
        DEFAULT_HERO_CTA,
        DEFAULT_HERO_SUBTITLE,
        DEFAULT_HERO_TITLE
    } from '$lib/statsig/constants';
    import { initStatsig, whenStatsigReady } from '$lib/statsig/client';
    import {
        MARKETING_HERO_EXPERIMENTS,
        readMarketingHeroExperimentsForExposure
    } from '$lib/statsig/experiments/marketing-hero-client';
    import {
        hasHeroExperimentQueryOverrides,
        resolveHeroQueryOverrides
    } from '$lib/statsig/hero-query-overrides';
    import type { HeroLayoutVariant } from '$lib/statsig/hero-layout';
    import { ENV } from '$lib/system';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import type { PageData } from '../$types';
    import Dashboard from './dashboard.svelte';
    import HeroBanner from './hero-banner.svelte';

    /** Merged layout + page load; Statsig keys come from `+page.server.ts` (omitted from generated `PageData` in some setups). */
    type MarketingHeroPageData = PageData & {
        statsigBootstrap?: string | null;
        statsigStableUserId?: string | null;
        statsigUserAgent?: string | null;
    };

    /** From `+page.server.ts` + `+page.ts` — single source of truth for first paint (no `onMount` layout state). */
    const data = $derived(page.data as MarketingHeroPageData);

    /** URL query overrides apply in the browser; baseline always comes from `page.data`. */
    const resolved = $derived(
        resolveHeroQueryOverrides(building ? new URLSearchParams() : page.url.searchParams, {
            heroLayout: (data.heroLayout ?? 0) as HeroLayoutVariant,
            heroSubtitle: data.heroSubtitle ?? DEFAULT_HERO_SUBTITLE,
            heroTitle: data.heroTitle ?? DEFAULT_HERO_TITLE,
            heroCta: data.heroCta ?? DEFAULT_HERO_CTA
        })
    );

    const layoutAside = $derived(resolved.heroLayout === 0);
    const layoutBottom = $derived(resolved.heroLayout !== 0);
    const layoutBottomTwoLineTitle = $derived(resolved.heroLayout === 1);

    /**
     * SSR uses Statsig with exposure logging off; Pulse needs a browser exposure. We only call
     * `.get` here — layout/subtitle/title stay on `page.data` from load so the UI does not switch
     * after paint.
     * @see https://docs.statsig.com/pulse
     */
    onMount(() => {
        if (!browser || ENV.TEST) return;
        const debugStatsigHero = import.meta.env.DEV || page.url.searchParams.has('debug_statsig');
        const log = (...args: unknown[]) => {
            if (debugStatsigHero) console.log('[Statsig hero]', ...args);
        };

        const baselineSubtitle = data.heroSubtitle ?? DEFAULT_HERO_SUBTITLE;
        const baselineLayout = (data.heroLayout ?? 0) as HeroLayoutVariant;
        const baselineTitle = data.heroTitle ?? DEFAULT_HERO_TITLE;
        const baselineCta = data.heroCta ?? DEFAULT_HERO_CTA;

        if (hasHeroExperimentQueryOverrides(page.url.searchParams)) {
            log('URL query overrides (client layout)', {
                ...resolveHeroQueryOverrides(page.url.searchParams, {
                    heroLayout: baselineLayout,
                    heroSubtitle: baselineSubtitle,
                    heroTitle: baselineTitle,
                    heroCta: baselineCta
                }),
                dataBaseline: {
                    heroLayout: baselineLayout,
                    subtitleLen: baselineSubtitle.length,
                    ctaLen: baselineCta.length
                }
            });
            return;
        }

        void initStatsig(
            data.statsigBootstrap ?? null,
            data.statsigStableUserId ?? null,
            data.statsigUserAgent ?? null
        );

        void whenStatsigReady().then((client) => {
            if (!client) {
                log('Statsig client not ready; using `page.data` hero only', {
                    heroLayout: baselineLayout,
                    subtitleLen: baselineSubtitle.length
                });
                return;
            }

            const { debug } = readMarketingHeroExperimentsForExposure(client, {
                heroTitle: baselineTitle,
                heroSubtitle: baselineSubtitle,
                heroLayout: baselineLayout,
                heroCta: baselineCta
            });

            log('experiment exposure (display stays on `page.data`)', {
                [MARKETING_HERO_EXPERIMENTS.bestTitle]: debug[MARKETING_HERO_EXPERIMENTS.bestTitle],
                [MARKETING_HERO_EXPERIMENTS.bestCta]: debug[MARKETING_HERO_EXPERIMENTS.bestCta],
                [MARKETING_HERO_EXPERIMENTS.heroLayout]:
                    debug[MARKETING_HERO_EXPERIMENTS.heroLayout]
            });
        });
    });
</script>

<div
    class={cn(
        'relative flex max-w-screen items-center',
        /** Aside: clip mockup bleed. Stacked: avoid clipping long titles on tablet (overflow-hidden + nowrap). */
        layoutAside
            ? 'overflow-hidden py-10 md:py-0 lg:min-h-[680px]'
            : 'overflow-hidden overflow-y-clip pt-10 pb-3 md:pt-14 md:pb-4 lg:min-h-[560px] lg:pt-16'
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
            {#if layoutAside}
                <HeroBanner
                    title="New: Appwrite plugin for Claude Code"
                    href="/blog/post/announcing-appwrite-claude-code-plugin"
                    icon="claude"
                />
            {:else}
                <div class="flex w-full justify-center">
                    <HeroBanner
                        title="New: Appwrite plugin for Claude Code"
                        href="/blog/post/announcing-appwrite-claude-code-plugin"
                        icon="claude"
                    />
                </div>
            {/if}

            {#if layoutAside || layoutBottomTwoLineTitle}
                <GradientText
                    class={cn(
                        'animate-fade-in my-2 md:my-3',
                        layoutBottomTwoLineTitle &&
                            'mx-auto block w-full max-w-full px-1 text-center sm:px-0 md:max-w-4xl'
                    )}
                >
                    <h1
                        class={cn(
                            'font-aeonik-pro text-balance text-pretty',
                            layoutBottomTwoLineTitle
                                ? 'text-title sm:text-headline md:text-title lg:text-headline'
                                : 'text-headline'
                        )}
                    >
                        {resolved.heroTitle}<span class="text-accent">_</span>
                    </h1>
                </GradientText>
            {:else}
                <!-- Layout 2: wrap through lg (tablets); single-line + horizontal scroll from lg up. -->
                <GradientText
                    class={cn(
                        'animate-fade-in my-2 w-full max-w-full self-stretch text-center md:my-3',
                        'lg:flex lg:min-w-0 lg:justify-center lg:overflow-x-auto lg:[-webkit-overflow-scrolling:touch] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden'
                    )}
                >
                    <h1
                        class="font-aeonik-pro text-title sm:text-headline md:text-title lg:text-headline max-w-full px-1 text-balance text-pretty lg:max-w-none lg:shrink-0 lg:px-0 lg:whitespace-nowrap"
                    >
                        {resolved.heroTitle}<span class="text-accent">_</span>
                    </h1>
                </GradientText>
            {/if}

            <p
                class={cn(
                    'text-description text-secondary mt-2 font-medium md:mt-3',
                    layoutBottom && 'max-w-2xl text-center text-pretty'
                )}
                style:min-height={layoutAside
                    ? 'calc(4.25 * var(--text-description--line-height, 1.5rem))'
                    : 'calc(3.25 * var(--text-description--line-height, 1.5rem))'}
            >
                {resolved.heroSubtitle}
            </p>

            <div
                class={cn(
                    'flex flex-col gap-2',
                    layoutAside
                        ? 'mt-4 lg:flex-row'
                        : 'mt-3 w-full max-w-md items-stretch sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center'
                )}
            >
                <Button
                    href={PUBLIC_APPWRITE_DASHBOARD}
                    class={layoutAside ? 'w-full! lg:w-fit!' : 'w-full! sm:w-fit!'}
                    onclick={() => {
                        trackEvent(`main-get_started_btn_hero-click`);
                    }}>{resolved.heroCta}</Button
                >
                <AppwriteIn100Seconds />
            </div>
        </div>

        {#if layoutAside}
            <Dashboard />
        {:else}
            <div class="flex w-full justify-center">
                <Dashboard placement="below" />
            </div>
        {/if}
    </div>
</div>
