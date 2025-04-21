<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import { format } from 'date-fns';
    import { animate, hover, inView, type AnimationSequence } from 'motion';
    import { onMount } from 'svelte';
    import Email from '../../../(assets)/icons/email.svg';
    import Calendar from '../../../(assets)/icons/calendar.svg';
    import Messages from '../../../(assets)/icons/messages.svg';
    import Settings from '../../../(assets)/icons/settings.svg';
    import GridPaper from '../../grid-paper.svelte';
    import Noise from '$lib/components/fancy/noise.svelte';

    let container: HTMLElement;

    let device: HTMLElement;
    let notification: HTMLElement;
    let icon: HTMLElement;

    onMount(() => {
        const from: AnimationSequence = [
            [notification, { opacity: 0, y: -30, filter: 'blur(4px)' }, { duration: 0.2 }],
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
    class="border-smooth group col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
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
            class="light absolute top-14 z-10 flex h-[90px] w-[466px] items-center justify-between gap-3 rounded-[28px] bg-white/80 px-3 py-2 shadow-[-8px_4px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            style="transform: translateY(-15px); opacity: 0; filter: blur(4px);"
            bind:this={notification}
        >
            <div
                class="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-black"
            >
                <img src={Email} alt="" class="size-9" />
            </div>
            <div class="flex flex-col text-base">
                <h2 class="text-primary flex justify-between font-medium">
                    New security measures implemented <span
                        class="text-micro text-secondary/50 mr-1 block">now</span
                    >
                </h2>
                <p class="text-secondary leading-tight">
                    Check out our latest security updates to protect your account!
                </p>
            </div>
        </div>
        <div
            class="light mt-20 flex h-full w-[375px] flex-col rounded-t-[58px] border-x border-t border-white/12 bg-white/8 mask-b-from-60% mask-b-to-100% backdrop-blur-2xl"
            style:transform="translateY(15px)"
            bind:this={device}
        >
            <div class="m-2 flex-1 rounded-t-[48px] bg-[#19191C]">
                <div class="flex items-center justify-between px-8 pt-4">
                    <span class="w-10 text-sm font-semibold text-white"
                        >{format(new Date(), 'h:mm')}</span
                    >
                    <div class="h-7 w-[114px] rounded-full bg-black"></div>
                    <div class="h-4 w-12 rounded-full bg-black"></div>
                </div>
                <div
                    class="text-micro grid flex-1 grid-cols-4 grid-rows-24 place-items-center gap-6 px-9 pt-16"
                >
                    <div
                        class="relative flex size-[62px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                    >
                        <div
                            class="bg-accent text-micro absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full"
                            bind:this={icon}
                        ></div>

                        <img src={Email} alt="" class="size-9" />
                    </div>
                    {#each [Messages, Settings, Calendar] as icon}
                        <div
                            class="flex size-[62px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                        >
                            <img src={icon} alt="" class="size-9" />
                        </div>
                    {/each}

                    {#each Array.from({ length: 12 }) as _, index}
                        <div
                            class="size-[62px] shrink-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/3 shadow-sm shadow-black/5"
                        ></div>
                    {/each}
                </div>
            </div>
        </div>
        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/13)]" />
    </div>
</div>
