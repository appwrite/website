<script lang="ts">
    import { buildOpenGraphImage } from '$lib/utils/metadata';
    import LaunchWeek from '../(components)/launch-week.svelte';
    import Lockup from '../(components)/lockup.svelte';
    import GitHub from '../(assets)/github-icon.svg';
    import { loginGithub } from '$lib/utils/init';
    import Window from '../(components)/ui/window.svelte';

    const title = 'Init - Appwrite';
    const description = 'The start of something new.';
    const ogImage = buildOpenGraphImage('init', description);
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div
    class="container border-smooth relative z-10 flex w-full flex-col items-center justify-center border-x border-dashed"
>
    <LaunchWeek />
    <Lockup class="w-1/2" />
</div>

<div class="border-smooth -mt-6 border-y border-dashed">
    <Window>
        <div class="flex h-48 items-center justify-between gap-4">
            <div class="flex flex-col gap-4">
                <h2 class="text-title text-primary font-aeonik-pro max-w-sm">
                    Init launches on February 12th<span class="text-accent">_</span>
                </h2>
                <p class="text-secondary text-description">
                    Register today and claim your Init ticket
                </p>
            </div>

            <button
                class="bg-smooth border-accent flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-dashed p-4"
                on:click={loginGithub}
            >
                <img
                    src={GitHub}
                    alt="GitHub icon"
                    class="size-12 rounded-full outline-2 outline-offset-2 outline-white/68 outline-dashed"
                />

                <span class="text-primary text-description">Register with GitHub</span>
            </button>
        </div>
    </Window>
</div>
