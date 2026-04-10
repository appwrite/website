<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import { createCountdown } from '$lib/utils/create-countdown';
    import Counter from './counter.svelte';
    import CardBgPattern from '../(assets)/card-bg-pattern.svg';

    interface Link {
        type: string;
        title: string;
        action: string;
        href: string;
    }

    interface Props {
        dayName: string;
        dayNumber: number;
        date: string;
        title?: string;
        showIllustrationPattern?: boolean;
        description?: string;
        illustration?: string;
        productLabel?: string;
        videoHref?: string;
        links?: Link[];
        release: Date;
        revealed?: boolean;
    }

    let {
        dayName,
        dayNumber,
        date,
        title = '',
        description = '',
        illustration = '',
        productLabel = '',
        videoHref = '',
        links = [],
        release,
        revealed = false,
        showIllustrationPattern = false
    }: Props = $props();

    const { hours, minutes, seconds } = createCountdown(release);
    const timerDone = $derived($hours <= 0 && $minutes <= 0 && $seconds <= 0);
    const isRevealed = $derived(revealed || timerDone);
</script>

<div id="day-{dayNumber}" class="scroll-mt-[180px] flex flex-col gap-6">
    <!-- Date header -->
    <div class="flex flex-col gap-3">
        <hr class="border-t border-[rgba(255,255,255,0.06)]" />
        <div class="flex items-center justify-between gap-5">
            <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                {dayName} <span class="text-[#FD366E]">//</span> DAY {String(dayNumber).padStart(2, '0')}
            </p>
            <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                <span class="text-[#FD366E]">//</span> {date}
            </p>
        </div>
    </div>

    {#if isRevealed}
        <!-- Revealed content card -->
        <div
            class="dashed-border relative overflow-hidden"
            style="background-color: #19191C;"
        >
            <!-- Top section: stacked on mobile, side-by-side on desktop -->
            <div class="relative mb-8 flex flex-col lg:flex-row lg:items-stretch">
                <!-- Main content (left side on desktop) -->
                <div class="order-2 flex shrink-0 flex-col gap-8 p-6 md:p-8 lg:order-1 lg:w-[411px] lg:p-10">
                    <div class="flex flex-col gap-4">
                        <h3 class="font-aeonik-pro text-subtitle text-[#E4E4E7]">
                            {title}
                        </h3>
                        <p class="font-aeonik-fono text-sm uppercase leading-[1.43] text-[#E4E4E7]">
                            {description}
                        </p>
                    </div>

                    {#if videoHref}
                        <a
                            href={videoHref}
                            class="video-btn group flex items-center justify-between gap-1.5 bg-[rgba(253,54,110,0.08)] px-3 py-2 pr-1.5 transition-colors"
                            style="border: 1px solid rgba(253, 54, 110, 0.24);"
                        >
                            <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                WATCH THE VIDEO
                            </span>
                            <Icon name="chevron-right" class="size-5 text-[#EDEDF0]" />
                        </a>
                    {/if}
                </div>

                <!-- Illustration area (right side on desktop, top on mobile) -->
                <div
                    class="relative order-1 mx-6 mt-6 min-w-0 overflow-hidden lg:order-2 lg:m-2 lg:flex-1"
                    style="
                        background: #19191C;
                        border: 1px solid rgba(253, 54, 110, 0.16);
                    "
                >
                    <!-- Top bar -->
                    <div
                        class="flex items-center justify-between"
                        style="
                            height: 32px;
                            background: rgba(253, 54, 110, 0.06);
                            border-bottom: 1px solid rgba(253, 54, 110, 0.16);
                        "
                    >
                        <span class="font-aeonik-fono px-2 py-1.5 text-sm uppercase text-[#FD366E]">
                            INIT
                        </span>
                        <span class="font-aeonik-fono px-2 py-1.5 text-sm uppercase text-[#FD366E]">
                            {productLabel}
                        </span>
                    </div>

                    <!-- Crosshair BG pattern (tiled) -->
                    {#if showIllustrationPattern}
                        <div
                            class="pointer-events-none absolute inset-0 select-none"
                            style:background-image="url('{CardBgPattern}')"
                            style:background-repeat="repeat"
                            aria-hidden="true"
                        ></div>
                    {/if}

                    <!-- Product illustration -->
                    {#if illustration}
                        <div class="relative h-[180px] w-full md:h-[300px] lg:h-full">
                            <img
                                src={illustration}
                                alt={title}
                                class="h-full w-full object-contain"
                            />
                        </div>
                    {/if}
                </div>
            </div>

            <!-- Links section (bottom) -->
            {#if links.length > 0}
                <div class="flex flex-col">
                    {#each links as link, i}
                        <a
                            href={link.href}
                            class="group flex flex-col gap-5 transition-colors hover:bg-[rgba(253,54,110,0.06)]"
                            class:pb-3={i === links.length - 1}
                        >
                            <hr class="border-t border-[#E4E4E7] opacity-10" />
                            <div class="flex flex-col gap-3 px-6 pb-5 md:px-8 lg:flex-row lg:items-center lg:px-10">
                                <span class="font-aeonik-fono shrink-0 text-sm uppercase leading-[1.2] tracking-tight text-[#ADADB0] group-hover:text-[#E4E4E7]">
                                    <span class="text-[#FD366E]">//</span> {link.type.replace('//', '').trim()}
                                </span>
                                <div class="flex flex-col gap-2 lg:ml-auto lg:w-[647px] lg:flex-row lg:items-center lg:justify-between">
                                    <span class="font-aeonik-pro text-label text-[#E4E4E7] lg:w-[414px] lg:shrink-0 lg:px-2">
                                        {link.title}
                                    </span>
                                    <span class="font-aeonik-fono flex items-center gap-1 text-sm uppercase leading-[1.2] tracking-tight text-[#ADADB0] group-hover:text-[#E4E4E7] lg:px-2">
                                        {link.action}
                                        <Icon name="arrow-right" class="size-5" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    {:else}
        <!-- Locked card -->
        <div
            class="dashed-border relative overflow-hidden"
            style="
                height: 200px;
                background-color: #19191C;
            "
        >
            <!-- Illustration area (full width minus padding) -->
            <div
                class="absolute overflow-hidden"
                style="
                    left: 8px;
                    top: 8px;
                    right: 8px;
                    height: 184px;
                    background: rgba(253, 54, 110, 0.06);
                    border: 1px solid rgba(253, 54, 110, 0.16);
                "
            >
                <!-- Top bar -->
                <div
                    class="flex items-center justify-center"
                    style="
                        height: 32px;
                        background: rgba(253, 54, 110, 0.06);
                        border-bottom: 1px solid rgba(253, 54, 110, 0.16);
                    "
                >
                    <span class="font-aeonik-fono text-sm uppercase text-[#FD366E]">
                        locked
                    </span>
                </div>

                <!-- Crosshair BG pattern (tiled) -->
                <div
                    class="pointer-events-none absolute inset-0 select-none"
                    style:background-image="url('{CardBgPattern}')"
                    style:background-repeat="repeat"
                    aria-hidden="true"
                ></div>

                <!-- Countdown timer centered -->
                <div class="flex h-[152px] items-center justify-center">
                    <span
                        class="font-aeonik-fono tabular-nums border-2 border-dashed border-[#FD366E] bg-[#19191C] px-3.5 py-2 text-xl leading-[1.1] tracking-[0.08em] text-[#E4E4E7]"
                    >
                        <Counter value={$hours} />:<Counter value={$minutes} />:<Counter value={$seconds} />
                    </span>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .tabular-nums {
        font-variant-numeric: tabular-nums;
    }

    .video-btn {
        position: relative;
    }

    .video-btn::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.06);
        opacity: 0;
        transition: opacity 0.15s;
        pointer-events: none;
    }

    .video-btn:hover::after {
        opacity: 1;
    }

    .dashed-border {
        background-image:
            repeating-linear-gradient(to right, #6C6C71 0, #6C6C71 4px, transparent 4px, transparent 12px),
            repeating-linear-gradient(to right, #6C6C71 0, #6C6C71 4px, transparent 4px, transparent 12px),
            repeating-linear-gradient(to bottom, #6C6C71 0, #6C6C71 4px, transparent 4px, transparent 12px),
            repeating-linear-gradient(to bottom, #6C6C71 0, #6C6C71 4px, transparent 4px, transparent 12px);
        background-position: left top, left bottom, left top, right top;
        background-size: 100% 1px, 100% 1px, 1px 100%, 1px 100%;
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    }
</style>
