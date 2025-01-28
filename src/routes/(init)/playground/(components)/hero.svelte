<script lang="ts">
    import Lockup from './lockup.svelte';
</script>

<div class="relative flex min-h-[75vh] flex-col items-center justify-center gap-8 px-8">
    <div class="relative z-10 mx-auto w-1/2"><Lockup /></div>
    <div class="relative z-10 flex w-full max-w-lg flex-col items-center justify-center gap-8">
        <div class="text flex flex-col gap-4 [animation-delay:0.75s]">
            <p class="text-description text-secondary block max-w-lg text-center">
                Join us at Appwrite for another week of exciting new announcements and events.
            </p>

            <nav class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                <a href="/playground/tickets" class="web-button !w-full md:!w-fit"
                    >Claim your ticket</a
                >
                <button class="web-button is-secondary !w-full md:!w-fit">Announcement video</button
                >
            </nav>
        </div>
    </div>
</div>
