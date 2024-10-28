<script lang="ts">
    import Background from './Background.svelte';
    import Checkerboard from './Checkerboard.svelte';
    import Lockup from './Lockup.svelte';
</script>

<div class="bg-white">
    <div class="light container flex min-h-[75vh] flex-col items-center justify-center">
        <div class="relative w-full max-w-2xl overflow-hidden">
            <Checkerboard cols={20} rows={10}>
                <div class="relative flex w-full flex-col items-center justify-center gap-8">
                    <Lockup />

                    <p class="text-description text-secondary max-w-lg text-center">
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
            </Checkerboard>
        </div>
    </div>
</div>
