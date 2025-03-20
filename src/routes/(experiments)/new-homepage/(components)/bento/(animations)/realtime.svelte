<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import { onMount } from 'svelte';

    import TopLeft from '../../../(assets)/top-left.svg';
    import TopRight from '../../../(assets)/top-right.svg';
    import BottomLeft from '../../../(assets)/bottom-left.svg';
    import BottomRight from '../../../(assets)/bottom-right.svg';

    let container: HTMLElement;

    let walterCursor: HTMLElement;
    let adityaCursor: HTMLElement;
    let saraCursor: HTMLElement;

    let walterPiece: HTMLElement;
    let adityaPiece: HTMLElement;
    let saraPiece: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [
            [walterCursor, { y: -25, x: 40, opacity: 0 }, { duration: 0.25, at: 0 }],
            [walterPiece, { y: -35, x: 40 }, { duration: 0.25, at: 0 }],
            [adityaCursor, { y: 50, opacity: 0 }, { duration: 0.25, at: 0 }],
            [adityaPiece, { y: 40, x: -10 }, { duration: 0.25, at: 0 }],
            [saraCursor, { y: 10, x: 8, opacity: 0, scale: 1 }, { duration: 0.25, at: 0 }],
            [saraPiece, { y: 18, x: 22 }, { duration: 0.25, at: 0 }]
        ];

        const to: AnimationSequence = [
            [walterCursor, { y: 0, x: 0, opacity: 1 }, { duration: 0.25, at: 0 }],
            [walterPiece, { y: 0, x: 0 }, { duration: 0.25, at: 0.25 }],
            [adityaCursor, { y: 0, opacity: 1 }, { duration: 0.45, at: 0 }],
            [adityaPiece, { y: 0, x: 0 }, { duration: 0.45, at: 0.5 }],
            [saraCursor, { y: 0, x: 0, opacity: 1 }, { duration: 0.15, at: 0.25 }],
            [saraPiece, { y: 0, x: 0 }, { duration: 0.15, at: 0.5 }]
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

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-5"
    bind:this={container}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
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
        class="relative flex h-[26.25rem] items-center justify-center overflow-hidden rounded-xl bg-black/24 px-8"
    >
        <div class="grid aspect-square grid-cols-2 place-items-center">
            <img src={TopLeft} alt="Top Left" class="relative top-4 left-9" />
            <img
                src={TopRight}
                alt="Top Right"
                bind:this={walterPiece}
                class="relative top-9 right-3"
            />
            <img
                src={BottomLeft}
                alt="Bottom Left"
                bind:this={adityaPiece}
                class="relative bottom-9 left-5"
            />
            <img
                src={BottomRight}
                alt="Bottom Right"
                bind:this={saraPiece}
                class="relative right-7 bottom-5"
            />
        </div>

        <div
            class="pointer-events-none absolute aspect-square h-12 w-[4.25rem]"
            style:right="100px"
            style:bottom="75px"
            bind:this={saraCursor}
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
                class="bg-mint-500 absolute right-0 bottom-0 rounded-r-md rounded-bl-md py-0.5 px-2 font-medium text-black"
            >
                <span>Sara</span>
            </div>
        </div>

        <div
            class="pointer-events-none absolute aspect-square h-12 w-[5.25rem]"
            style:left="120px"
            style:bottom="125px"
            bind:this={adityaCursor}
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
                class="absolute right-0 bottom-0 rounded-r-md rounded-bl-md bg-blue-500 py-0.5 px-2 font-medium text-white"
            >
                <span>Aditya</span>
            </div>
        </div>

        <div
            class="pointer-events-none absolute aspect-square h-12 w-[5rem]"
            style:top="100px"
            style:right="75px"
            bind:this={walterCursor}
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
                class="bg-accent absolute right-0 bottom-0 rounded-r-md rounded-bl-md py-0.5 px-2 font-medium text-white"
            >
                <span>Walter</span>
            </div>
        </div>

        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px,transparent_10px,#80808012_1px,transparent_10px),_linear-gradient(to_bottom,#80808012_1px,transparent_1px,transparent_10px,#80808012_1px,transparent_10px)] bg-[size:60px_60px]"
        />
    </div>
</div>
