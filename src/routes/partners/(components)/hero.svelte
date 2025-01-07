<script>
    import Puzzle from './puzzle.svelte';
</script>

<div
    class="grid-bg border-smooth relative box-content flex items-center border-b py-12 px-5 after:absolute after:inset-0 after:-z-1 after:bg-linear-to-r after:from-black/32 after:to-transparent lg:px-8 xl:px-16"
>
    <div class="mx-auto grid items-center gap-16 md:grid-cols-2">
        <div class="max-w-lg space-y-8">
            <div class="flex items-center gap-2">
                <span class="text-micro font-aeonik-fono tracking-loose text-primary uppercase">
                    Partners Program<span class="web-u-color-text-accent">_</span>
                </span>
            </div>
            <h1 class="text-display font-aeonik-pro text-primary text-pretty">
                Boost businesses with Appwrite<span class="text-accent">_</span>
            </h1>
            <p class="text-description text-secondary text-pretty font-medium">
                Join the Appwrite Partner program to unlock growth opportunities with tools,
                resources, and support to boost revenue and expand your reach.
            </p>

            <div class="flex flex-col items-center gap-2 md:flex-row">
                <a href="/" class="web-button !w-full md:!w-fit"> Join today </a>
            </div>
        </div>
        <Puzzle />
    </div>
</div>

<style>
    .grid-bg {
        --line-color: rgba(255, 255, 255, 0.02);
        --size: calc(100vw / 16);
        background-image: repeating-linear-gradient(
                0deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            ),
            repeating-linear-gradient(
                90deg,
                var(--line-color),
                var(--line-color) 1px,
                transparent 1px,
                transparent var(--size)
            );
    }
</style>
