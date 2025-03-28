<script lang="ts">
    import { sleep, write } from '$lib/animations';
    import Input from '$lib/components/ui/input.svelte';
    import { cn } from '$lib/utils/classnames';
    import { writable } from 'svelte/store';

    const state = writable<{
        password: string;
        animationComplete: boolean;
    }>({
        password: '',
        animationComplete: false
    });

    const conditions = [
        'Minimum 8 characters',
        'Numbers',
        'Special characters',
        'Uppercase & lowercase letters',
        'No common words',
        'No personal data'
    ];
</script>

<div class="bg-greyscale-850/90 flex flex-col rounded-2xl p-2">
    <div
        class="grid h-[250px] grid-cols-3 place-items-center justify-center rounded-lg bg-white/[0.02] p-6"
    >
        <div
            class="m-6 mx-auto flex aspect-[82/67] w-full flex-col rounded-lg bg-white/6 px-1 pb-1"
        >
            <div class="flex gap-0.5 py-1 pl-1">
                {#each Array.from({ length: 3 }) as _}
                    <div class="size-1 rounded-full bg-white" />
                {/each}
            </div>
            <div class="bg-greyscale-850 flex-1 rounded-md p-4"></div>
        </div>
        <div class="flex flex-1 flex-col gap-4 text-center">
            <div class="flex flex-col gap-1">
                <span class="font-mono text-[0.625rem]">Request</span>
                <svg
                    width="83"
                    height="4"
                    viewBox="0 0 83 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M82.1768 2.17678C82.2744 2.07915 82.2744 1.92085 82.1768 1.82322L80.5858 0.232233C80.4882 0.134602 80.3299 0.134602 80.2322 0.232233C80.1346 0.329864 80.1346 0.488155 80.2322 0.585786L81.6464 2L80.2322 3.41421C80.1346 3.51184 80.1346 3.67014 80.2322 3.76777C80.3299 3.8654 80.4882 3.8654 80.5858 3.76777L82.1768 2.17678ZM0 2.25H82V1.75H0V2.25Z"
                        fill="white"
                        fill-opacity="0.24"
                    />
                </svg>
            </div>
            <div class="flex flex-col gap-1">
                <svg
                    width="83"
                    height="4"
                    viewBox="0 0 83 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.823227 1.82322C0.725594 1.92085 0.725594 2.07914 0.823227 2.17677L2.41421 3.76776C2.51185 3.86539 2.67014 3.86539 2.76777 3.76776C2.86539 3.67013 2.86539 3.51184 2.76777 3.41421L1.35355 1.99999L2.76777 0.585779C2.86539 0.488148 2.86539 0.329857 2.76777 0.232226C2.67014 0.134595 2.51185 0.134595 2.41422 0.232226L0.823227 1.82322ZM83 1.75L1 1.74999L1 2.24999L83 2.25L83 1.75Z"
                        fill="white"
                        fill-opacity="0.24"
                    />
                </svg>
                <span class="font-mono text-[0.625rem]">Response</span>
            </div>
        </div>
        <div class="flex w-full flex-1 flex-col gap-2">
            {#each Array.from({ length: 3 }) as _}
                <div class="flex w-full items-center gap-3 rounded-md bg-white/6 p-2">
                    <div class="bg-greyscale-850 h-1 flex-1 rounded" />
                    <div class="size-1 rounded-full bg-white" />
                </div>
            {/each}
        </div>
    </div>
    <div class="p-4">
        <span class="text-primary">HTTP requests</span>
        <p class="text-secondary">
            Allow external applications to trigger Appwrite functions via web requests.
        </p>
    </div>
</div>
