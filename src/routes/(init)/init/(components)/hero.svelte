<script lang="ts">
    import Spinner from '$lib/components/shared/spinner.svelte';
    import VideoDialog from '$lib/components/shared/video-dialog.svelte';
    import { classNames } from '$lib/utils/classnames';
    import { loginGithub } from '../(utils)/github';
    import { initDates } from '../+page.svelte';

    import Badge from './badge.svelte';
    import Lockup from './lockup.svelte';

    interface Props {
        claimed?: boolean;
    }

    let { claimed = false }: Props = $props();
    let claiming: boolean = $state(false);

    const handleLogin = () => {
        claiming = true;
        loginGithub();
    };
</script>

<div
    class={classNames(
        'relative container -mb-10 flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 px-0 py-20 md:min-h-[80vh]',
        'before:border-offset before:absolute before:inset-0 before:z-0 before:border-r-2 before:border-l-2 before:border-dashed',
        'before:[mask-image:linear-gradient(to_top,transparent,black_150px,black_calc(100%_-_150px),black)]'
    )}
>
    <Badge>{initDates}</Badge>
    <div class="relative z-10 mx-auto w-5/8"><Lockup /></div>
    <div class="relative z-10 flex w-full max-w-lg flex-col items-center justify-center gap-8">
        <div class="text flex flex-col gap-4 [animation-delay:0.75s]">
            <p class="text-description text-secondary block max-w-lg text-center">
                Join us at Appwrite for another week of exciting new announcements and events.
            </p>

            <nav class="mt-4 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
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
                                d="M8.46377 5L5.6 5C5.03995 5 4.75992 5 4.54601 5.10899C4.35785 5.20487 4.20487 5.35785 4.10899 5.54601C4 5.75992 4 6.03995 4 6.6V14.4C4 14.9601 4 15.2401 4.10899 15.454C4.20487 15.6422 4.35785 15.7951 4.54601 15.891C4.75992 16 5.03995 16 5.6 16H13.4C13.9601 16 14.2401 16 14.454 15.891C14.6422 15.7951 14.7951 15.6422 14.891 15.454C15 15.2401 15 14.9601 15 14.4V11.6957"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.99 4.18163C13.386 3.78562 13.584 3.58761 13.8123 3.51342C14.0132 3.44816 14.2295 3.44816 14.4304 3.51342C14.6587 3.58761 14.8567 3.78562 15.2527 4.18163L15.8184 4.74732C16.2144 5.14334 16.4124 5.34134 16.4866 5.56967C16.5519 5.77052 16.5519 5.98686 16.4866 6.18771C16.4124 6.41603 16.2144 6.61404 15.8184 7.01006L11.7615 11.0669C11.5886 11.2399 11.5021 11.3263 11.4012 11.3882C11.3117 11.443 11.2142 11.4834 11.1121 11.5079C10.9971 11.5355 10.8748 11.5355 10.6302 11.5355H10.0645C9.50443 11.5355 9.2244 11.5355 9.01049 11.4266C8.82233 11.3307 8.66935 11.1777 8.57348 10.9895C8.46448 10.7756 8.46448 10.4956 8.46448 9.93554V9.36986C8.46448 9.12527 8.46448 9.00297 8.49211 8.88788C8.51661 8.78585 8.55701 8.6883 8.61184 8.59883C8.67369 8.49791 8.76016 8.41144 8.93311 8.23849L12.99 4.18163Z"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 5L15 8"
                                stroke="currentColor"
                                stroke-width="1.2"
                                stroke-linejoin="round"
                            />
                        </svg>Customize your ticket</a
                    >
                {:else}
                    <button
                        onclick={handleLogin}
                        class="web-button flex items-center gap-4"
                        disabled={claiming}
                    >
                        {#if claiming}
                            <Spinner />
                        {:else}
                            <span class="web-icon-github text-primary"></span>
                        {/if}Claim your ticket</button
                    >
                {/if}
                <a href="https://producthunt.com" class="web-button is-secondary">
                    Follow on Product Hunt
                </a>
            </nav>
        </div>
    </div>
</div>
