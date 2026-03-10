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
        revealed = false
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
            <!-- Top section: content left + illustration right -->
            <div class="relative mb-8" style="min-height: 510px;">
                <!-- Illustration area (right side) -->
                <div
                    class="absolute overflow-hidden"
                    style="
                        right: 8px;
                        top: 9.5px;
                        width: 679px;
                        height: 500px;
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
                    <div
                        class="pointer-events-none absolute inset-0 select-none"
                        style:background-image="url('{CardBgPattern}')"
                        style:background-repeat="repeat"
                        aria-hidden="true"
                    ></div>

                    <!-- Product illustration -->
                    {#if illustration}
                        <div class="absolute" style="top: 33.5px; left: 0; width: 679px; height: 467px;">
                            <img
                                src={illustration}
                                alt={title}
                                class="h-full w-full object-contain"
                            />
                        </div>
                    {/if}
                </div>

                <!-- Main content (left side) -->
                <div class="flex flex-col gap-8" style="padding: 40px; width: 411px;">
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
            </div>

            <!-- Links section (bottom) -->
            {#if links.length > 0}
                <div class="flex flex-col pb-3">
                    {#each links as link, i}
                        <a
                            href={link.href}
                            class="group flex flex-col gap-5 transition-colors hover:bg-[rgba(253,54,110,0.06)]"
                        >
                            <hr class="border-t border-[#E4E4E7] opacity-10" />
                            <div class="flex items-center px-10 pb-5">
                                <span class="font-aeonik-fono shrink-0 text-sm uppercase leading-[1.2] tracking-tight text-[#ADADB0] group-hover:text-[#E4E4E7]">
                                    <span class="text-[#FD366E]">//</span> {link.type.replace('//', '').trim()}
                                </span>
                                <div class="ml-auto flex items-center justify-between" style="width: 647px;">
                                    <span class="font-aeonik-pro text-label w-[414px] shrink-0 px-2 text-[#E4E4E7]">
                                        {link.title}
                                    </span>
                                    <span class="font-aeonik-fono flex items-center gap-1 px-2 text-sm uppercase leading-[1.2] tracking-tight text-[#ADADB0] group-hover:text-[#E4E4E7]">
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
