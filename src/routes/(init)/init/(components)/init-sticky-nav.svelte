<script lang="ts">
    import { Icon } from '$lib/components/ui';
    import HeroCrosshairs from '../(assets)/hero-crosshairs.svg';
    import InitLockupLogo from '../(assets)/init-lockup-logo.svg';
    import Spinner from '$lib/components/shared/spinner.svelte';
    import { enhance } from '$app/forms';

    interface Props {
        scrollY: number;
        claimed: boolean;
        ticketId?: string;
    }

    let { scrollY, claimed, ticketId }: Props = $props();
    let claiming: boolean = $state(false);

    const REVEAL_DURATION = 40; // px of scroll over which content fades in

    let viewportHeight = $state(typeof window !== 'undefined' ? window.innerHeight : 900);
    let viewportWidth = $state(typeof window !== 'undefined' ? window.innerWidth : 1200);
    // Reveal threshold: 55vh — responsive to viewport size
    let revealThreshold = $derived(viewportHeight * 0.55);

    // Responsive gradient heights
    let maxHeight = $derived(viewportWidth < 768 ? 200 : viewportWidth < 1024 ? 300 : 411);
    let minHeight = $derived(viewportWidth < 768 ? 120 : viewportWidth < 1024 ? 140 : 160);

    $effect(() => {
        function onResize() {
            viewportHeight = window.innerHeight;
            viewportWidth = window.innerWidth;
        }
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    });

    let gradientHeight = $derived(Math.max(minHeight, maxHeight - scrollY));
    let navContentOpacity = $derived(
        Math.min(1, Math.max(0, (scrollY - revealThreshold) / REVEAL_DURATION))
    );
    let isCompressed = $derived(gradientHeight <= minHeight);

    const days = [
        { label: 'DAY 0', dayNumber: 0 },
        { label: 'DAY 1', dayNumber: 1 },
        { label: 'DAY 2', dayNumber: 2 },
        { label: 'DAY 3', dayNumber: 3 },
        { label: 'DAY 4', dayNumber: 4 }
    ];

    // Track which day section is currently in view
    let activeDay = $state(0);

    $effect(() => {
        // Re-run when scrollY changes
        scrollY;
        for (let i = days.length - 1; i >= 0; i--) {
            const el = document.getElementById(`day-${i}`);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 250) {
                    activeDay = i;
                    return;
                }
            }
        }
        activeDay = 0;
    });

    function scrollToDay(dayNumber: number) {
        const el = document.getElementById(`day-${dayNumber}`);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 180;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    function nextDay() {
        const next = Math.min(activeDay + 1, days.length - 1);
        scrollToDay(next);
    }

    function prevDay() {
        const prev = Math.max(activeDay - 1, 0);
        scrollToDay(prev);
    }
</script>

<!-- Gradient overlay: sits behind the existing navbar (z-[998] < navbar z-[999]) -->
<div
    class="pointer-events-none fixed inset-x-0 top-0 z-[998] overflow-hidden"
    style="height: {gradientHeight}px;"
    class:pointer-events-auto={isCompressed}
>
    <!-- Gradient background + crosshairs (full height, clipped by container) -->
    <div
        class="absolute inset-x-0 top-0 w-full select-none"
        style="height: {maxHeight}px; background: linear-gradient(180deg, #19191C 8.94%, #7E1935 31.7%, #FD366E 54.47%, #FEAFC5 77.92%, #EDEDF0 100%);"
    >
        <img
            src={HeroCrosshairs}
            alt=""
            class="h-full w-full object-cover"
            aria-hidden="true"
        />
    </div>

    <!-- Content row (below the 72px navbar area, fades in after hero scrolls past) -->
    {#if navContentOpacity > 0}
        <div
            class="pointer-events-auto absolute inset-x-0 bottom-0 top-[72px] flex items-center transition-opacity duration-100 ease-out"
            style="opacity: {navContentOpacity};"
        >
            <div class="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-[clamp(1.25rem,4vw,120rem)]">
                <!-- Left: Init lockup (logo + date text) — scales to fit -->
                <div class="flex min-w-0 shrink items-center gap-2 lg:gap-4">
                    <img
                        src={InitLockupLogo}
                        alt="Init"
                        class="h-[22px] w-auto shrink-0 md:h-[27px] lg:h-[32px]"
                    />
                    <p class="font-aeonik-fono hidden shrink uppercase leading-[1.2] tracking-tight text-white md:block md:text-[10px] lg:text-xs">
                        APPWRITE LAUNCH WEEK 4.0<br />
                        MARCH 23 - 27<br />
                        2026
                    </p>
                </div>

                <!-- Center: Active day indicator (mobile/tablet only) -->
                <div class="flex items-center gap-2 lg:hidden">
                    <button
                        onclick={prevDay}
                        class="flex size-7 items-center justify-center text-white/60 transition-colors hover:text-white disabled:opacity-30"
                        disabled={activeDay === 0}
                        aria-label="Previous day"
                    >
                        <Icon name="chevron-left" class="size-4" />
                    </button>
                    <button
                        onclick={() => scrollToDay(activeDay)}
                        class="font-aeonik-fono text-sm uppercase leading-[2] tracking-tight text-white"
                    >
                        <span class="text-[#FD366E]">//</span>DAY {activeDay}
                    </button>
                    <button
                        onclick={nextDay}
                        class="flex size-7 items-center justify-center text-white/60 transition-colors hover:text-white disabled:opacity-30"
                        disabled={activeDay === days.length - 1}
                        aria-label="Next day"
                    >
                        <Icon name="chevron-right" class="size-4" />
                    </button>
                </div>

                <!-- Right: Day links (desktop) + Claim ticket -->
                <div class="flex items-center gap-4 lg:gap-8">
                    <div class="hidden items-center gap-8 lg:flex">
                        {#each days as day}
                            <button
                                onclick={() => scrollToDay(day.dayNumber)}
                                class="font-aeonik-fono flex items-center gap-1.5 text-sm uppercase leading-[2] tracking-tight text-white transition-colors hover:text-white/80"
                            >
                                <span><span class="text-[#FD366E]">//</span>{day.label}</span>
                                <Icon name="arrow-right" class="size-5" />
                            </button>
                        {/each}
                    </div>

                    {#if claimed}
                        <a
                            href={`/init/tickets/${ticketId}`}
                            class="flex items-center gap-1.5 border border-white/10 bg-white/12 px-2 py-1.5 pr-1 text-xs transition-colors hover:bg-white/16 md:px-3 md:py-2 md:pr-1.5 md:text-sm"
                        >
                            <span class="font-aeonik-fono uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                YOUR INIT TICKET
                            </span>
                            <Icon name="chevron-right" class="size-4 text-white md:size-5" />
                        </a>
                    {:else}
                        <form
                            action="?/oauth"
                            method="post"
                            use:enhance={async () => {
                                claiming = true;
                            }}
                        >
                            <button
                                type="submit"
                                disabled={claiming}
                                class="flex items-center gap-1.5 border border-white/10 bg-white/12 px-2 py-1.5 pr-1 text-xs transition-colors hover:bg-white/16 disabled:opacity-50 md:px-3 md:py-2 md:pr-1.5 md:text-sm"
                            >
                                <span class="font-aeonik-fono uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                    {#if claiming}
                                        <Spinner />
                                    {:else}
                                        CLAIM YOUR TICKET
                                    {/if}
                                </span>
                                <Icon name="chevron-right" class="size-4 text-white md:size-5" />
                            </button>
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>
