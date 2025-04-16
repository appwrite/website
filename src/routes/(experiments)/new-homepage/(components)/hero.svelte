<script lang="ts">
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import { classNames } from '$lib/utils/classnames';
    import Dashboard from './dashboard.svelte';
</script>

<div class="relative flex min-h-[80vh] flex-col items-center md:flex-row">
    <div
        class={classNames(
            'animate-lighting absolute top-0 left-0 -z-10 h-screen w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full',
            'bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(254,_149,_103,_0.2)_0%,_rgba(254,_149,_103,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(253,_54,_110,_0.08)_0%,_rgba(253,_54,_110,_0)_70%)]',
            'bg-position-[0%_0%]'
        )}
        style:--speed="500ms"
    ></div>

    <div class="relative container grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        <div
            class="animate-blur-in flex flex-col gap-4 [animation-delay:150ms] [animation-duration:1000ms]"
        >
            <GradientText
                ><h1 class="text-display font-aeonik-pro text-pretty">
                    Backend APIs, Frontend hosting<span class="text-accent">_</span>
                </h1></GradientText
            >
            <p class="text-description text-secondary font-medium">
                Appwrite’s open-source platform empowers you to build applications faster with ready
                to use backend APIs and host your frontend on one platform.
            </p>
        </div>
    </div>
    <Dashboard />
</div>
