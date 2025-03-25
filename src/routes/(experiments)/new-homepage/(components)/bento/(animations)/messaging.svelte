<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import { format } from 'date-fns';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import { onMount } from 'svelte';

    let container: HTMLElement;

    let device: HTMLElement;
    let notification: HTMLElement;
    let icon: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [
            [notification, { opacity: 0, y: -20, filter: 'blur(4px)' }, { duration: 0.2 }],
            [device, { y: 15 }, { duration: 0.25 }]
        ];

        const to: AnimationSequence = [
            [device, { y: 0 }, { duration: 0.25 }],
            [notification, { opacity: 1, y: 0, filter: 'blur(0px)' }, { duration: 0.2, at: 0.15 }]
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
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
    bind:this={container}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img
                src="/images/icons/illustrated/dark/messaging.png"
                alt="Messaging"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Messaging</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Set up a full-functioning messaging service that covers <span class="text-secondary"
                >multiple channels under one unified platform.</span
            >
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] items-center justify-center overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="light absolute top-14 z-10 flex h-16 w-[340px] items-center justify-between gap-3 rounded-[20px] bg-white/80 py-1 px-3 shadow-[-8px_4px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            style="transform: translateY(-15px); opacity: 0; filter: blur(4px);"
            bind:this={notification}
        >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-black">
                <div class="size-4 rounded-full bg-white" />
            </div>
            <div class="text-micro flex flex-col">
                <h2 class="text-primary font-medium">New security measures implemented</h2>
                <p class="text-secondary">
                    Check out our latest security updates to protect your account!
                </p>
            </div>
            <span class="text-micro mt-1 mr-1 block self-start">now</span>
        </div>
        <div
            class="light mask border-smooth mt-20 flex h-full w-[300px] flex-col rounded-t-[40px] border-t border-x bg-white/8 backdrop-blur-2xl"
            style:--mask-height="100px"
            style:transform="translateY(15px)"
            bind:this={device}
        >
            <div
                class="mx-2 mt-2 flex-1 rounded-t-4xl bg-gradient-to-br from-[#1A1A1D] to-[#1A1A1D]/60"
            >
                <div class="flex items-center justify-between pt-4 px-6">
                    <span class="text-micro w-10 font-medium text-white"
                        >{format(new Date(), 'h:mm')}</span
                    >
                    <div class="h-4 w-24 rounded-full bg-white/10" />
                    <div class="h-4 w-10 rounded-full bg-white/5" />
                </div>
                <div
                    class="text-micro grid flex-1 grid-cols-4 grid-rows-24 place-items-center gap-4 pt-12 px-6"
                >
                    <div
                        class="relative size-12 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                    >
                        <div
                            class="bg-accent text-x-micro absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-white"
                            bind:this={icon}
                        >
                            1
                        </div>
                    </div>
                    {#each Array.from({ length: 19 }) as _, index}
                        <div
                            class="size-12 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                        />
                    {/each}
                </div>
            </div>
        </div>
        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>
