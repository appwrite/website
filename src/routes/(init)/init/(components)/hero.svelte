<script lang="ts">
    import Spinner from '$lib/components/shared/spinner.svelte';
    import { loginGithub } from '../(utils)/github';

    import Badge from './badge.svelte';
    import Lockup from './lockup.svelte';

    export let claimed: boolean = false;
    let claiming: boolean = false;

    const handleLogin = () => {
        claiming = true;
        loginGithub();
    };
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
                {#if claimed}
                    <a href="/init/tickets/customize" class="web-button flex items-center gap-2">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.00037 2C2.8958 2 2.00037 2.89543 2.00037 4V15C2.00037 16.6569 3.34351 18 5.00037 18C6.65722 18 8.00037 16.6569 8.00037 15V4C8.00037 2.89543 7.10494 2 6.00037 2H4.00037ZM5.00037 16C5.55265 16 6.00037 15.5523 6.00037 15C6.00037 14.4477 5.55265 14 5.00037 14C4.44808 14 4.00037 14.4477 4.00037 15C4.00037 15.5523 4.44808 16 5.00037 16Z"
                                fill="currentColor"
                            />
                            <path
                                d="M10.0004 14.2426L14.8998 9.34308C15.6809 8.56203 15.6809 7.2957 14.8998 6.51465L13.4856 5.10043C12.7046 4.31939 11.4383 4.31939 10.6572 5.10043L10.0004 5.75728V14.2426Z"
                                fill="currentColor"
                            />
                            <path
                                d="M16.0004 18H9.07141L15.0714 12H16.0004C17.105 12 18.0004 12.8954 18.0004 14V16C18.0004 17.1046 17.105 18 16.0004 18Z"
                                fill="currentColor"
                            />
                        </svg>Customize your ticket</a
                    >
                {:else}
                    <button
                        on:click={handleLogin}
                        class="web-button flex items-center gap-4"
                        disabled={claiming}
                    >
                        {#if claiming}
                            <Spinner />
                        {:else}
                            <span class="web-icon-github text-primary" />
                        {/if}Claim your ticket with GitHub</button
                    >
                {/if}
                <button class="web-button is-secondary !w-full md:!w-fit">Announcement video</button
                >
            </nav>
        </div>
    </div>
</div>
