<script lang="ts">
    import PixelBoard from './PixelBoard.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="bg-white">
    <div class="light relative flex min-h-[75vh] flex-col items-center justify-center gap-8 px-8">
        <div class="lockup pointer-events-none relative z-10 w-full"><Lockup class="w-full" /></div>
        <div class="relative z-10 flex w-full max-w-lg flex-col items-center justify-center gap-8">
            <div class="text flex flex-col gap-4 [animation-delay:0.75s]">
                <p class="text-description text-secondary block max-w-lg text-center">
                    Join us at Appwrite for another week of exciting new announcements and events.
                </p>

                <nav class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                    <a href="/playground/tickets" class="web-button !w-full md:!w-fit"
                        >Claim your ticket</a
                    >
                    <button class="web-button is-secondary !w-full md:!w-fit"
                        >Announcement video</button
                    >
                </nav>
            </div>
        </div>
        <div class="absolute inset-0 top-0 z-0 w-screen overflow-hidden">
            <PixelBoard cols={40} />
        </div>
        <div class="pointer-events-none absolute inset-0 z-1 shadow" />
    </div>
</div>

<style>
    .lockup {
        animation: load steps(5) 0.5s forwards;
    }

    @keyframes load {
        0% {
            filter: blur(10px);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        100% {
            filter: blur(0px);
            clip-path: polygon(0 0, 110% 0, 110% 110%, 0 110%);
        }
    }

    .shadow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        backdrop-filter: blur(4px);

        mask-composite: intersect;
        mask-image: linear-gradient(
                to top,
                transparent,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 1) 75%,
                transparent
            ),
            linear-gradient(
                to right,
                transparent,
                rgba(0, 0, 0, 1) 25%,
                rgba(0, 0, 0, 1) 75%,
                transparent
            );
    }

    @keyframes animate-blur {
        0% {
            filter: blur(10px);
        }
        100% {
            filter: blur(0px);
        }
    }

    @keyframes animate-up {
        0% {
            transform: 'translateY(8px)';
        }

        100% {
            transform: translateY(0px);
        }
    }
    @keyframes animate-scale {
        0% {
            transform: 'translateY(10px)';
        }

        100% {
            transform: translateY(0px);
        }
    }

    @keyframes animate-opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .text {
        animation:
            animate-scale 0.75s ease-in-out both,
            animate-blur 0.75s ease-in-out both,
            animate-opacity 0.75s ease-in-out both;
    }
</style>
