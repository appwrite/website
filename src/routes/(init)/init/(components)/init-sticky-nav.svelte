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

    const MAX_HEIGHT = 411;
    const MIN_HEIGHT = 160;
    const REVEAL_DURATION = 40; // px of scroll over which content fades in

    let viewportHeight = $state(typeof window !== 'undefined' ? window.innerHeight : 900);
    // Reveal threshold: 65vh — responsive to viewport size
    let revealThreshold = $derived(viewportHeight * 0.65);

    $effect(() => {
        function onResize() {
            viewportHeight = window.innerHeight;
        }
        window.addEventListener('resize', onResize, { passive: true });
        return () => window.removeEventListener('resize', onResize);
    });

    let gradientHeight = $derived(Math.max(MIN_HEIGHT, MAX_HEIGHT - scrollY));
    let navContentOpacity = $derived(
        Math.min(1, Math.max(0, (scrollY - revealThreshold) / REVEAL_DURATION))
    );
    let isCompressed = $derived(gradientHeight <= MIN_HEIGHT);

    const days = [
        { label: 'DAY 0', dayNumber: 0 },
        { label: 'DAY 1', dayNumber: 1 },
        { label: 'DAY 2', dayNumber: 2 },
        { label: 'DAY 3', dayNumber: 3 },
        { label: 'DAY 4', dayNumber: 4 }
    ];

    function scrollToDay(dayNumber: number) {
        const el = document.getElementById(`day-${dayNumber}`);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 180;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
</script>

<!-- Gradient overlay: sits behind the existing navbar (z-[998] < navbar z-[999]) -->
<div
    class="pointer-events-none fixed inset-x-0 top-0 z-[998] overflow-hidden"
    style="height: {gradientHeight}px;"
    class:pointer-events-auto={isCompressed}
>
    <!-- Gradient background + crosshairs (always full 411px, clipped by container) -->
    <div
        class="absolute inset-x-0 top-0 h-[411px] w-full select-none"
        style="background: linear-gradient(180deg, #19191C 8.94%, #7E1935 31.7%, #FD366E 54.47%, #FEAFC5 77.92%, #EDEDF0 100%);"
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
            <div class="mx-auto flex w-full max-w-[1280px] items-center justify-between px-[clamp(1.25rem,4vw,120rem)]">
                <!-- Left: Init lockup (logo + date text) -->
                <div class="flex items-center gap-4">
                    <img
                        src={InitLockupLogo}
                        alt="Init"
                        class="h-[40px] w-[114px] shrink-0"
                    />
                    <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-white">
                        APPWRITE LAUNCH WEEK 4.0<br />
                        MARCH 23 - 27<br />
                        2026
                    </p>
                </div>

                <!-- Right: Day links + Claim ticket -->
                <div class="flex items-center gap-8">
                    <div class="flex items-center gap-8">
                        {#each days as day}
                            <button
                                onclick={() => scrollToDay(day.dayNumber)}
                                class="font-aeonik-fono flex items-center gap-1.5 text-sm uppercase leading-[2] tracking-tight text-white transition-colors hover:text-white/80"
                            >
                                <span><span class="text-[#FD366E]">//</span>{day.label}</span>
                                <Icon name="arrow-right" class="size-5 text-white" />
                            </button>
                        {/each}
                    </div>

                    {#if claimed}
                        <a
                            href={`/init/tickets/${ticketId}`}
                            class="flex items-center gap-1.5 border border-white/10 bg-white/12 px-3 py-2 pr-1.5 transition-colors hover:bg-white/16"
                        >
                            <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                YOUR INIT TICKET
                            </span>
                            <Icon name="chevron-right" class="size-5 text-white" />
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
                                class="flex items-center gap-1.5 border border-white/10 bg-white/12 px-3 py-2 pr-1.5 transition-colors hover:bg-white/16 disabled:opacity-50"
                            >
                                <span class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                                    {#if claiming}
                                        <Spinner />
                                    {:else}
                                        CLAIM YOUR TICKET
                                    {/if}
                                </span>
                                <Icon name="chevron-right" class="size-5 text-white" />
                            </button>
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>
