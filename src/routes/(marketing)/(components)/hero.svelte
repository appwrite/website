<script lang="ts">
    import { PUBLIC_APPWRITE_DASHBOARD } from '$env/static/public';
    import AppwriteIn100Seconds from '$lib/components/AppwriteIn100Seconds.svelte';
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';
    import Dashboard from './dashboard.svelte';
    import HeroBanner from './hero-banner.svelte';
</script>

<div
    class="relative flex min-h-[50vh] max-w-screen items-center overflow-hidden py-12 md:py-0 lg:min-h-[700px]"
>
    <div
        class={classNames(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
            'bg-position-[0%_0%]'
        )}
    ></div>

    <div
        class="relative container mx-auto grid h-full grid-cols-1 place-items-center gap-24 md:grid-cols-2"
    >
        <div
            class="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms] md:ml-12 lg:ml-0"
        >
            <HeroBanner
                title="Announcing Appwrite Sites"
                href="/blog/post/announcing-appwrite-sites"
            />

            <GradientText class="animate-fade-in">
                <h1 class="font-aeonik-pro text-hero text-pretty">
                    Build like a team of hundreds<span class="text-accent">_</span>
                </h1>
            </GradientText>

            <p class="text-description text-secondary font-medium">
                Appwrite’s open-source platform empowers you to build applications faster with ready
                to use backend APIs and host your frontend on one platform.
            </p>

            <div class="mt-4 flex flex-col gap-2 lg:flex-row">
                <Button href={PUBLIC_APPWRITE_DASHBOARD} class="w-full! lg:w-fit!"
                    >Start building for free</Button
                >
                <AppwriteIn100Seconds />
            </div>
        </div>
        <Dashboard />
    </div>
</div>
