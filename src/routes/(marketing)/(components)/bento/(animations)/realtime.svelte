<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import { onMount } from 'svelte';

    import TopRight from '../../../(assets)/images/top-right.svg';
    import Puzzle from '../../../(assets)/images/puzzle.svg';
    import GridPaper from '../../grid-paper.svelte';

    let container: HTMLElement;

    let topRightCursor: HTMLElement;
    let topRightPiece: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [
            [
                topRightCursor,
                { y: -20, x: 32, scale: 1, opacity: 0, filter: 'blur(4px)' },
                { duration: 0.25, at: 0 }
            ],
            [topRightPiece, { y: -36, x: 36 }, { duration: 0.25, at: 0, type: 'spring' }]
        ];

        const to: AnimationSequence = [
            [
                topRightCursor,
                { opacity: 1, scale: 0.85, filter: 'blur(0)' },
                { duration: 0.15, at: 0 }
            ],
            [topRightPiece, { y: 0.75, x: 0 }, { duration: 0.25, at: 0.25, type: 'spring' }],
            [topRightCursor, { y: 0, x: 0 }, { duration: 0.15, at: 0.2 }],
            [topRightCursor, { scale: 1 }, { duration: 0.25, at: 0.35 }]
        ];

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(to);

                return () => {
                    animate(from);
                };
            },
            { amount: 'all' }
        );

        hover(container, () => {
            if (isMobile()) return;
            animate(to);

            return () => {
                animate(from);
            };
        });
    });
</script>

<a
    href="/docs/apis/realtime"
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-5"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img src="/images/icons/illustrated/dark/realtime.png" alt="Realtime" class="size-7" />
            <h3 class="font-aeonik-pro text-label text-primary">Realtime</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            <span class="text-secondary">Subscribe and react</span> to any Appwrite event using the Realtime
            API.
        </p>
    </div>
    <div
        class="relative flex h-85 items-center justify-center overflow-hidden rounded-xl bg-black/24 px-8"
    >
        <div
            class="relative grid aspect-square h-[240px] w-[240px] grid-cols-2 grid-rows-2 items-center justify-center"
        >
            <img
                src={TopRight}
                alt="Top Right"
                bind:this={topRightPiece}
                style:transform="translateX(36px) translateY(-36px)"
                class="absolute top-0 right-0 h-[150px] w-[120px]"
            />

            <img
                src={Puzzle}
                alt="Puzzle Piece"
                class="absolute inset-0 top-1/2 left-1/2 -translate-1/2"
            />
        </div>

        <div
            class="cursor pointer-events-none absolute aspect-square h-12 w-[4.25rem]"
            style:right="100px"
            style:bottom="20px"
            style:--y="-12px"
            style:--x="-6px"
            style:--duration="2.5s"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_941_108451)">
                    <path
                        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
                        fill="var(--color-mint-500)"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_941_108451">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div
                class="bg-mint-500 absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-black"
            >
                <span>Sara</span>
            </div>
        </div>

        <div
            class="cursor pointer-events-none absolute aspect-square h-12 w-[5.25rem]"
            style:left="140px"
            style:bottom="85px"
            style:--y="8px"
            style:--x="-5px"
            style:--duration="4s"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_941_108451)">
                    <path
                        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
                        fill="var(--color-blue-500)"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_941_108451">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div
                class="absolute right-0 bottom-0 rounded-r-md rounded-bl-md bg-blue-500 px-2 py-0.5 font-medium text-white"
            >
                <span>Aditya</span>
            </div>
        </div>

        <div
            class="pointer-events-none absolute aspect-square h-12 w-[5rem]"
            style:top="100px"
            style:right="75px"
            style:--duration="2.5s"
            style:transform="translateY(-20px) translateX(32px)"
            style:opacity="0"
            style:filter="blur(4px)"
            bind:this={topRightCursor}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_941_108451)">
                    <path
                        d="M3.59107 1.55945C2.60535 1.2256 2.11248 1.05868 1.78586 1.17445C1.50167 1.27517 1.2781 1.49874 1.17738 1.78293C1.06161 2.10955 1.22853 2.60242 1.56237 3.58814L5.67787 15.7398C6.13991 17.1041 6.37093 17.7862 6.71487 17.9732C7.01244 18.1349 7.37166 18.1351 7.66937 17.9736C8.01347 17.7869 8.24509 17.105 8.70832 15.7411L10.2385 11.236C10.3315 10.962 10.3781 10.825 10.4564 10.7111C10.5258 10.6102 10.6131 10.5228 10.714 10.4535C10.8279 10.3751 10.9649 10.3286 11.2389 10.2356L15.7441 8.70539C17.1079 8.24216 17.7898 8.01055 17.9765 7.66644C18.138 7.36873 18.1379 7.00951 17.9761 6.71194C17.7891 6.368 17.107 6.13698 15.7427 5.67494L3.59107 1.55945Z"
                        fill="var(--color-accent)"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_941_108451">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div
                class="bg-accent absolute right-0 bottom-0 rounded-r-md rounded-bl-md px-2 py-0.5 font-medium text-white"
            >
                <span>Walter</span>
            </div>
        </div>

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/9)]" />
    </div>
</a>

<style>
    .cursor {
        animation: cursor var(--duration) ease-in-out infinite;
    }

    @keyframes cursor {
        0% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(var(--y)) translateX(var(--x));
        }
        100% {
            transform: translateY(0) translateX(0);
        }
    }
</style>
