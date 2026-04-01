<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import { trackEvent } from '$lib/actions/analytics';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import Dashboard from './dashboard.svelte';
    import HeroBanner from './hero-banner.svelte';

    type Props = {
        title?: string;
        subtitle?: string;
    };

    const {
        title = 'Build like a team of hundreds',
        subtitle = 'Appwrite is an open-source, all-in-one development platform. Use built-in backend infrastructure and web hosting, all from a single place.'
    }: Props = $props();
</script>

<div class="relative flex max-w-screen items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]">
    <div
        class={cn(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-position-[0%_0%]'
        )}
        style="background-image: radial-gradient(ellipse 390px 50px at 10% 30%, rgba(254, 149, 103, 0.2) 0%, rgba(254, 149, 103, 0) 70%), radial-gradient(ellipse 1100px 170px at 15% 40%, rgb(var(--brand-accent-rgb) / 0.08) 0%, rgb(var(--brand-accent-rgb) / 0) 70%), radial-gradient(ellipse 1200px 180px at 30% 30%, rgb(var(--brand-accent-rgb) / 0.08) 0%, rgb(var(--brand-accent-rgb) / 0) 70%);"
    ></div>

    <div
        class="relative container mx-auto grid h-full grid-cols-1 place-items-center gap-24 md:grid-cols-2"
    >
        <div
            class="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms] md:ml-12 lg:ml-0"
        >
            <HeroBanner
                title="Introducing Appwrite Arena"
                href="/blog/post/announcing-appwrite-arena"
            />

            <GradientText class="animate-fade-in">
                <h1 class="font-aeonik-pro text-headline text-pretty">
                    {title}<span class="text-accent">_</span>
                </h1>
            </GradientText>

            <p class="text-description text-secondary font-medium">
                {subtitle}
            </p>

            <div class="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button
                    href={PUBLIC_APPWRITE_DASHBOARD}
                    class="w-full! lg:w-fit!"
                    onclick={() => {
                        trackEvent(`main-get_started_btn_hero-click`);
                    }}>Start building for free</Button
                >
                <AppwriteIn100Seconds />
            </div>
        </div>
        <div class="brand-dashboard">
            <Dashboard />
        </div>
        <!--
        Console image variation (disabled for now)
        <div
            class={cn(
                'bg-smooth -mb-108 w-[1185px] max-w-[150vw] translate-x-8 -translate-y-32 scale-70 overflow-hidden rounded-t-2xl border-x border-t border-white/10 px-2 pt-2 backdrop-blur-2xl md:mt-12 md:mb-0 md:ml-24 md:translate-x-1/4 md:translate-y-0 md:scale-100 lg:ml-12',
                'mask-b-from-0% mask-b-to-70% md:mask-b-to-100%'
            )}
        >
            <div class="bg-greyscale-900 aspect-[3022/1894] overflow-hidden rounded-t-xl">
                <img
                    src="/images/heroes/console.png"
                    alt="Appwrite Console refetch dashboard screenshot"
                    class="h-full w-full object-cover object-top"
                    loading="eager"
                />
            </div>
        </div>
        -->
    </div>
</div>

<style>
    :global(body.brand-green .brand-dashboard) {
        filter: hue-rotate(155deg) saturate(1.06) brightness(0.98);
    }
</style>
