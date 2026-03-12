<script lang="ts">
    import { animate, hover, inView } from 'motion';
    import { fade } from 'svelte/transition';
    import { isMobile } from '$lib/utils/is-mobile';
    import { write, unwrite, type WriteAnimation } from '$lib/animations';
    import GridPaper from '../grid-paper.svelte';
    import Checkmark from '$lib/components/fancy/checkmark.svelte';

    let container: HTMLElement;
    let activePill: HTMLElement;
    let active = $state(false);
    let complete = $state(false);
    let typedText = $state('');
    let currentAnimation: WriteAnimation | null = null;
    let baseWidth: number;
    let widthAnim: ReturnType<typeof animate> | null = null;

    const QUERY = "Store the user's profile avatar image";

    const skills = [
        'createDocument',
        'uploadFile',
        'getUser',
        'listFiles',
        'deleteSession',
        'getAccount',
        'listTeams'
    ];

    const focusedSkill = 'uploadFile';

    $effect(() => {
        baseWidth = activePill.offsetWidth;

        hover(container, () => {
            if (isMobile()) return;
            active = true;

            currentAnimation?.cancel();
            currentAnimation = write(QUERY, (v) => (typedText = v), 400, typedText.length);

            widthAnim?.stop();
            widthAnim = animate(
                activePill,
                { width: baseWidth + 24 },
                {
                    onComplete: () => {
                        complete = true;
                    }
                }
            );

            return () => {
                active = false;
                complete = false;

                currentAnimation?.cancel();
                currentAnimation = unwrite(
                    typedText,
                    (v) => (typedText = v),
                    (typedText.length / QUERY.length) * 400
                );

                widthAnim?.stop();
                widthAnim = animate(activePill, { width: baseWidth });
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                active = true;

                currentAnimation?.cancel();
                currentAnimation = write(QUERY, (v) => (typedText = v), 400, typedText.length);

                widthAnim?.stop();
                widthAnim = animate(
                    activePill,
                    { width: baseWidth + 24 },
                    {
                        onComplete: () => {
                            complete = true;
                        }
                    }
                );

                return () => {
                    active = false;
                    complete = false;

                    currentAnimation?.cancel();
                    currentAnimation = unwrite(
                        typedText,
                        (v) => (typedText = v),
                        (typedText.length / QUERY.length) * 400
                    );

                    widthAnim?.stop();
                    widthAnim = animate(activePill, { width: baseWidth });
                };
            },
            { amount: 'all' }
        );
    });
</script>

<div
    bind:this={container}
    class="relative flex h-56 items-center justify-center overflow-hidden pt-4 sm:h-72 sm:pt-6"
    style="font-family: 'Inter', sans-serif"
>
    <div class="z-10 flex w-full flex-col items-center px-5 pb-4 sm:px-10">
        <!-- Search bar -->
        <div
            class="flex w-full items-center gap-2 rounded-xl border bg-[#19191C]/80 px-3 py-2.5 text-sm backdrop-blur-sm"
            style="border-color: rgba(255,255,255,0.06)"
        >
            <svg class="shrink-0" width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L9.2 5.2L13 6L9.2 6.8L8 11L6.8 6.8L3 6L6.8 5.2L8 1Z" fill="#ADADB0" />
                <path
                    d="M12.5 9.5L13.1 11.4L15 12L13.1 12.6L12.5 14.5L11.9 12.6L10 12L11.9 11.4L12.5 9.5Z"
                    fill="#ADADB0"
                    opacity="0.6"
                />
            </svg>
            <span class="flex-1"
                >{#if typedText}<span class="text-primary">{typedText}</span>{:else}<span
                        class="text-white/20">Ask anything...</span
                    >{/if}</span
            >
        </div>

        <!-- Horizontal skill pills -->
        <div
            class="mt-3 flex flex-wrap items-center justify-center gap-2 mask-linear-[to_right,_transparent_0%,_white_10%,_white_90%,_transparent_100%] mask-alpha"
        >
            {#each skills as skill}
                {@const focused = skill === focusedSkill}
                {#if focused}
                    <div
                        class="text-caption font-fira-code relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white"
                        bind:this={activePill}
                    >
                        <div
                            class="flex h-full w-full items-center justify-between gap-2 rounded-2xl bg-[#202023] px-3 py-1 text-left text-white/80"
                        >
                            {skill}

                            {#if complete}
                                <span in:fade={{ duration: 150 }} out:fade={{ duration: 100 }}>
                                    <Checkmark play class="size-5 text-[#FD366E]" />
                                </span>
                            {/if}
                        </div>
                        <div
                            class="absolute inset-0 -z-1 bg-linear-to-l from-white/12 to-transparent"
                        ></div>
                    </div>
                {:else}
                    <div
                        class="text-caption font-fira-code relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm text-white transition-opacity duration-500"
                        style="opacity: {active ? 0.15 : 0.8}"
                    >
                        <div class="h-full w-full rounded-2xl bg-[#202023] px-3 py-1 text-white/80">
                            {skill}
                        </div>
                        <div
                            class="absolute inset-0 -z-1 bg-linear-to-l from-white/12 to-transparent"
                        ></div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>

    <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)] opacity-90" />
</div>
