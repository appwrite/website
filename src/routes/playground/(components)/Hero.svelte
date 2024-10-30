<script lang="ts">
    import Checkerboard from './Checkerboard.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="bg-white">
    <div class="light container flex min-h-[75vh] flex-col items-center justify-center">
        <div class="relative w-full max-w-3xl overflow-hidden">
            <div class="relative flex w-full flex-col items-center justify-center gap-8">
                <Checkerboard><Lockup /></Checkerboard>

                <div class="text flex flex-col gap-4" style:animation-delay=".75s">
                    <p class="text-description text-secondary block max-w-lg text-center">
                        Join us at Appwrite for another week of exciting new announcements and
                        events.
                    </p>

                    <nav class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                        <a href="/tickets" class="web-button !w-full md:!w-fit">Claim your ticket</a
                        >
                        <button class="web-button is-secondary !w-full md:!w-fit"
                            >Announcement video</button
                        >
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
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
