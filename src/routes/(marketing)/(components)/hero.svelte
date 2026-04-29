<script lang="ts">
    import { page } from '$app/state';
    import { browser } from '$app/environment';
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/actions/analytics';
    import { DEFAULT_HERO_SUBTITLE, DEFAULT_HERO_TITLE } from '$lib/statsig/constants';
    import {
        whenStatsigReady,
        STATSIG_EXPERIMENT_BEST_DESCRIPTION,
        STATSIG_EXPERIMENT_HERO_LAYOUT
    } from '$lib/statsig/client';
    import {
        hasHeroExperimentQueryOverrides,
        resolveHeroQueryOverrides
    } from '$lib/statsig/hero-query-overrides';
    import { normalizeHeroLayout, type HeroLayoutVariant } from '$lib/statsig/hero-layout';
    import { ENV } from '$lib/system';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import Dashboard from './dashboard.svelte';
    import HeroBanner from './hero-banner.svelte';

    type Props = {
        title?: string;
        /** Resolved on the server from Statsig (`+page.server.ts`) so SSR matches the experiment. */
        subtitle?: string;
        /** `hero_layout` experiment: `0` aside, `1` bottom + wrapped title, `2` bottom + single-line title. */
        heroLayout?: HeroLayoutVariant;
    };

    const {
        title = DEFAULT_HERO_TITLE,
        subtitle = DEFAULT_HERO_SUBTITLE,
        heroLayout = 0
    }: Props = $props();

    /** Statsig baseline from SSR; URL query params override for local QA (see `resolveHeroQueryOverrides`). */
    const resolved = $derived(
        resolveHeroQueryOverrides(page.url.searchParams, {
            heroLayout,
            heroSubtitle: subtitle,
            heroTitle: title
        })
    );

    const layoutAside = $derived(resolved.heroLayout === 0);
    const layoutBottom = $derived(resolved.heroLayout !== 0);
    const layoutBottomTwoLineTitle = $derived(resolved.heroLayout === 1);

    /**
     * SSR evaluates experiments with exposure logging disabled; Pulse / Results need a client
     * exposure when the user actually sees the hero. Reading params logs the exposure and keeps
     * the rendered values as the SSR defaults when the client matches bootstrap.
     * @see https://docs.statsig.com/pulse (exposures enroll units in the experiment)
     */
    onMount(() => {
        if (!browser || ENV.TEST) return;
        /** Set `?debug_statsig` on the URL to log in non-dev builds (e.g. `pnpm preview`). */
        const debugStatsigHero = import.meta.env.DEV || page.url.searchParams.has('debug_statsig');
        const log = (...args: unknown[]) => {
            if (debugStatsigHero) console.log('[Statsig hero]', ...args);
        };

        if (hasHeroExperimentQueryOverrides(page.url.searchParams)) {
            log('URL query overrides (client layout)', {
                ...resolveHeroQueryOverrides(page.url.searchParams, {
                    heroLayout,
                    heroSubtitle: subtitle,
                    heroTitle: title
                }),
                ssrBaseline: { heroLayout, subtitleLen: subtitle.length }
            });
            return;
        }

        void whenStatsigReady().then((client) => {
            if (!client) {
                log('Statsig client not ready; SSR baseline only', { heroLayout });
                return;
            }

            const rawDescription = client
                .getExperiment(STATSIG_EXPERIMENT_BEST_DESCRIPTION)
                .get('description', subtitle);
            const rawLayout = client
                .getExperiment(STATSIG_EXPERIMENT_HERO_LAYOUT)
                .get('layout', heroLayout);
            const normalizedLayout = normalizeHeroLayout(rawLayout, heroLayout);

            log('experiment values (after get → exposure)', {
                [STATSIG_EXPERIMENT_BEST_DESCRIPTION]: {
                    raw: rawDescription,
                    rawType: typeof rawDescription
                },
                [STATSIG_EXPERIMENT_HERO_LAYOUT]: {
                    raw: rawLayout,
                    rawType: typeof rawLayout,
                    normalized: normalizedLayout,
                    ssrBaselineLayout: heroLayout
                }
            });
        });
    });
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
                layoutAside
                    ? 'gap-4 md:ml-12 lg:ml-0'
                    : 'w-full max-w-6xl items-center gap-3 px-4 text-center sm:px-0'
            )}
        >
            {#if layoutAside}
                <HeroBanner
                    title="Appwrite partners with the world's best database company"
                    href="/blog/post/appwrite-mongodb-partnership-self-hosted"
                    icon="mongo"
                />
            {:else}
                <div class="flex w-full justify-center">
                    <HeroBanner
                        title="Appwrite partners with the world's best database company"
                        href="/blog/post/appwrite-mongodb-partnership-self-hosted"
                        icon="mongo"
                    />
                </div>
            {/if}

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
                    layoutBottom && 'max-w-2xl text-center text-balance'
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
                    }}>Start building for free</Button
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
