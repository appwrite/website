<script lang="ts">
    import { loginGithub } from '../(utils)/github';

    import Badge from './badge.svelte';
    import Lockup from './lockup.svelte';
</script>

<div class="relative flex min-h-[80vh] flex-col items-center justify-center gap-8 py-20 px-8">
    <Badge>LAUNCH WEEK 3 / FEB 12 - 17</Badge>
    <div class="relative z-10 mx-auto md:w-1/2"><Lockup /></div>
    <div class="relative z-10 flex w-full max-w-lg flex-col items-center justify-center gap-8">
        <div class="text flex flex-col gap-4 [animation-delay:0.75s]">
            <p class="text-description text-secondary block max-w-lg text-center">
                Join us at Appwrite for another week of exciting new announcements and events.
            </p>

            <nav class="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
                <button on:click={loginGithub} class="web-button flex items-center gap-2">
                    <span class="web-icon-github text-primary" />Claim your ticket with GitHub</button
                >
                <button class="web-button is-secondary !w-full md:!w-fit">Announcement video</button
                >
            </nav>
        </div>
    </div>
</div>
