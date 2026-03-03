<script lang="ts">
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../grid-paper.svelte';
    import { hover, inView } from 'motion';
    import { write, unwrite, type WriteAnimation } from '$lib/animations';

    let container: HTMLElement;
    let typedText = $state('');
    let active = $state(false);
    let currentAnimation: WriteAnimation | null = null;

    const TYPED_MESSAGE = 'Add a password attribute';

    const codeLines = [
        { w: '60%' },
        { w: '45%', indent: true },
        { w: '0' },
        { w: '70%' },
        { w: '55%', indent: true },
        { w: '50%', indent: true },
        { w: '0' },
        { w: '65%' },
        { w: '0' },
        { w: '40%' },
        { w: '55%', indent: true }
    ];

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;
            active = true;
            currentAnimation?.cancel();
            currentAnimation = write(TYPED_MESSAGE, (v) => (typedText = v), 500, typedText.length);
            return () => {
                active = false;
                currentAnimation?.cancel();
                currentAnimation = unwrite(
                    typedText,
                    (v) => (typedText = v),
                    (typedText.length / TYPED_MESSAGE.length) * 500
                );
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                active = true;
                currentAnimation?.cancel();
                currentAnimation = write(
                    TYPED_MESSAGE,
                    (v) => (typedText = v),
                    500,
                    typedText.length
                );
                return () => {
                    active = false;
                    currentAnimation?.cancel();
                    currentAnimation = unwrite(
                        typedText,
                        (v) => (typedText = v),
                        (typedText.length / TYPED_MESSAGE.length) * 500
                    );
                };
            },
            { amount: 'all' }
        );
    });
</script>

<div bind:this={container} class="relative flex h-56 flex-col overflow-hidden sm:h-72">
    <!-- IDE Window -->
    <div
        class="mx-5 mt-4 flex flex-1 flex-col overflow-hidden rounded-[1.25rem] bg-[#232325]/90 mask-b-from-70% mask-b-to-100% px-1 pb-1 backdrop-blur-md sm:mx-10 sm:mt-6"
    >
        <!-- Title bar -->
        <div class="flex h-7 w-full items-center gap-1 pl-2">
            {#each Array(3) as _}
                <div class="size-2 rounded-full bg-[#D9D9D9]"></div>
            {/each}
        </div>

        <!-- Content: File tree + Code + Chat -->
        <div class="flex flex-1 overflow-hidden rounded-2xl bg-[#19191C]">
            <!-- File tree hint -->
            <div class="flex w-14 shrink-0 flex-col gap-2 border-r border-white/[0.04] px-2 pt-3">
                <!-- Folder -->
                <div class="flex items-center gap-1">
                    <div class="size-1.5 shrink-0 rounded-sm bg-white/10"></div>
                    <div class="h-1 w-full rounded-full bg-white/[0.08]"></div>
                </div>
                <!-- Nested file -->
                <div class="flex items-center gap-1 pl-2">
                    <div class="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
                    <div class="h-1 w-3/4 rounded-full bg-white/[0.06]"></div>
                </div>
                <!-- Nested file (active) -->
                <div class="flex items-center gap-1 pl-2">
                    <div class="size-1 shrink-0 rounded-full bg-white/10"></div>
                    <div class="h-1 w-full rounded-full bg-white/10"></div>
                </div>
                <!-- Nested file -->
                <div class="flex items-center gap-1 pl-2">
                    <div class="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
                    <div class="h-1 w-2/3 rounded-full bg-white/[0.06]"></div>
                </div>
                <!-- Folder -->
                <div class="flex items-center gap-1">
                    <div class="size-1.5 shrink-0 rounded-sm bg-white/10"></div>
                    <div class="h-1 w-4/5 rounded-full bg-white/[0.08]"></div>
                </div>
                <!-- Nested file -->
                <div class="flex items-center gap-1 pl-2">
                    <div class="size-1 shrink-0 rounded-full bg-white/[0.06]"></div>
                    <div class="h-1 w-3/5 rounded-full bg-white/[0.06]"></div>
                </div>
            </div>

            <!-- Code pane (hint lines) -->
            <div class="flex flex-1 flex-col gap-[7px] px-3 pt-3 pb-2">
                {#each codeLines as line}
                    <div class="flex">
                        {#if line.w !== '0'}
                            <div
                                class="h-1 rounded-full bg-white/[0.08] {line.indent ? 'ml-3' : ''}"
                                style:width={line.w}
                            ></div>
                        {:else}
                            <div class="h-1"></div>
                        {/if}
                    </div>
                {/each}
            </div>

            <!-- Chat pane -->
            <div
                class="flex w-[42%] flex-col gap-2 border-l border-white/[0.04] px-3 py-3 tracking-normal"
                style="font-family: 'Inter', sans-serif; font-size: 11px"
            >
                <!-- User message bubble -->
                <span class="text-primary mt-1 w-fit rounded-md bg-white/[0.05] px-2.5 py-1"
                    >Create a collection for user profiles</span
                >

                <!-- AI response -->
                <div class="text-secondary flex gap-2 leading-relaxed">
                    <div class="mt-[6px] size-1.5 shrink-0 rounded-full bg-white/12"></div>
                    <span>Setting up collection with email and name attributes.</span>
                </div>

                <!-- Input field with send button -->
                <div
                    class="mt-auto flex items-start gap-1 rounded-lg border border-white/[0.06] px-2 py-1.5"
                >
                    <span class="min-h-[2lh] flex-1"
                        >{#if typedText}<span class="text-primary">{typedText}</span>{:else}<span
                                class="text-white/20">Ask anything...</span
                            >{/if}</span
                    >
                    <div
                        class="ml-auto flex size-4 shrink-0 items-center justify-center rounded transition-colors duration-500"
                        style="background: {active ? '#FD366E' : 'rgba(255,255,255,0.1)'}"
                    >
                        <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 7V1M4 1L1.5 3.5M4 1L6.5 3.5"
                                style="stroke: {active
                                    ? '#ffffff'
                                    : '#ADADB0'}; transition: stroke 0.5s ease"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)] opacity-90" />
</div>
