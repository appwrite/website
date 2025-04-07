<script>
    import GradientText from '$lib/components/fancy/gradient-text.svelte';
    import Dashboard from './dashboard.svelte';
</script>

<div class="relative flex min-h-[80vh] flex-col items-center md:flex-row">
    <div
        class="gradient-background animate-lighting absolute top-0 left-0 z-0 h-screen w-full -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden bg-radial blur-3xl"
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

<style>
    .gradient-background {
        background-position: 0 0 0 0;
        background-image:
            radial-gradient(
                ellipse 390px 50px at 10% 30%,
                rgba(254, 149, 103, 0.4) 0%,
                rgba(254, 149, 103, 0) 70%
            ),
            radial-gradient(
                ellipse 1100px 170px at 15% 40%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            ),
            radial-gradient(
                ellipse 1200px 180px at 30% 30%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            );
    }
</style>
