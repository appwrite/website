<script>
</script>

<div class="relative flex min-h-[60vh] items-center justify-center">
    <div class="container flex w-full flex-col items-center justify-center gap-10">
        <div
            class="gradient-background absolute bottom-0 left-0 z-0 h-screen w-full -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl"
            style:--speed="500ms"
        />

        <div
            class="animate-fade-in justify-between[animation-delay:150ms] relative flex w-full items-center [animation-duration:1000ms]"
        >
            <h2 class="text-sub-display text-primary font-aeonik-pro max-w-xl text-pretty">
                Start building like a team of hundreds today<span class="text-accent">_</span>
            </h2>

            <div class="flex items-center gap-4">
                <a href="/" class="web-button">Get started</a>
                <a href="/" class="web-button is-secondary">View pricing plans</a>
            </div>
        </div>

        <div
            class="border-smooth divide grid h-40 w-full grid-cols-1 place-items-center divide-x divide-dashed rounded-xl border bg-white/2 backdrop-blur-lg md:grid-cols-2 lg:grid-cols-4"
        >
            {#each Array.from({ length: 4 }) as _}
                <div class="">Item</div>
            {/each}
        </div>
    </div>
</div>

<style>
    @keyframes lighting {
        0% {
            opacity: 0;
            clip-path: inset(5%);
            transform: scale(111.11%);
        }
        100% {
            opacity: 1;
            clip-path: inset(0);
            transform: scale(1);
        }
    }

    .gradient-background {
        background-position: 0 0 0 0;
        background-image: radial-gradient(
                ellipse 390px 50px at 10% 60%,
                rgba(254, 149, 103, 0.4) 0%,
                rgba(254, 149, 103, 0) 70%
            ),
            radial-gradient(
                ellipse 1100px 170px at 15% 70%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            ),
            radial-gradient(
                ellipse 1200px 180px at 30% 60%,
                rgba(253, 54, 110, 0.16) 0%,
                rgba(253, 54, 110, 0) 70%
            );
        animation: lighting 1.25s ease-out forwards;
    }
</style>
