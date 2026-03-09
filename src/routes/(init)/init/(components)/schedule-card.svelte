<script lang="ts">
    import { createCountdown } from '$lib/utils/create-countdown';
    import Counter from './counter.svelte';
    import CardBgNoise from '../(assets)/card-bg-noise.svg';
    import CardBgPattern from '../(assets)/card-bg-pattern.svg';

    interface Props {
        title?: string;
        illustration?: string;
        release: Date;
        revealed?: boolean;
    }

    let { title = '', illustration = '', release, revealed = false }: Props = $props();

    const { hours, minutes, seconds } = createCountdown(release);

    let isFlipped = $state(false);
    let cardEl: HTMLDivElement | undefined = $state();
    let tiltX = $state(0);
    let tiltY = $state(0);
    let isHovering = $state(false);
    let mouseX = $state(0);
    let mouseY = $state(0);

    // Card states: revealed (already shown), flippable (timer done, click to reveal), locked (timer counting)
    const timerDone = $derived($hours <= 0 && $minutes <= 0 && $seconds <= 0);
    const showRevealButton = $derived(!revealed && timerDone && !isFlipped);
    const showTimer = $derived(!revealed && !timerDone);
    const showContent = $derived(revealed || isFlipped);

    function handleMouseMove(e: MouseEvent) {
        if (!cardEl) return;
        const rect = cardEl.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        tiltX = (y - 0.5) * -30;
        tiltY = (x - 0.5) * 30;
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }

    function handleMouseEnter() {
        isHovering = true;
    }

    function handleMouseLeave() {
        isHovering = false;
        tiltX = 0;
        tiltY = 0;
    }

    function handleClick() {
        if (showRevealButton && !isFlipped) {
            isFlipped = true;
        }
    }
</script>

<div
    class="group relative h-[272px] [perspective:600px]"
    class:flip-cursor={showRevealButton}
    bind:this={cardEl}
    onmousemove={handleMouseMove}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
    role={showRevealButton ? 'button' : undefined}
    tabindex={showRevealButton ? 0 : -1}
    onclick={handleClick}
    onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
>
    <!-- Custom "Flip" pill cursor -->
    {#if showRevealButton && isHovering}
        <span
            class="font-aeonik-fono pointer-events-none absolute z-50 rounded-full bg-[#FD366E] px-3.5 py-1.5 text-xs uppercase tracking-wider text-white"
            style="left: {mouseX}px; top: {mouseY}px; transform: translate(-50%, -50%);"
        >
            Flip
        </span>
    {/if}
    <div
        class="relative h-full w-full [transform-style:preserve-3d]"
        style="
            transition: transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99);
            transform: {isFlipped ? 'rotateY(180deg)' : ''} rotateX({isHovering ? tiltX : 0}deg) rotateY({isHovering && !isFlipped ? tiltY : 0}deg);
        "
    >
        <!-- Front face -->
        <div
            class="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
            style="
                background: {showContent ? '#19191C' : 'rgba(253, 54, 110, 0.08)'};
                border: 3px solid transparent;
                border-image: linear-gradient(43deg, rgba(25, 25, 28, 1) 0%, rgba(126, 25, 53, 1) 22%, rgba(253, 54, 110, 1) 49%, rgba(254, 175, 197, 1) 77%, rgba(237, 237, 240, 1) 100%) 1;
            "
        >
            <!-- BG noise pattern -->
            <img
                src={CardBgNoise}
                alt=""
                class="pointer-events-none absolute left-0 top-0 h-full select-none"
                style="opacity: {showContent ? 0.02 : 0.12}"
                aria-hidden="true"
            />

            <!-- BG crosshair pattern for unflipped cards -->
            {#if !showContent}
                <img
                    src={CardBgPattern}
                    alt=""
                    class="pointer-events-none absolute inset-0 h-full w-full select-none"
                    aria-hidden="true"
                />
            {/if}

            {#if showContent}
                <!-- Revealed card: show illustration + title -->
                <div class="flex h-full w-full flex-col items-center justify-end pb-6">
                    {#if illustration}
                        <img
                            src={illustration}
                            alt={title}
                            class="h-auto w-full max-w-[216px]"
                        />
                    {/if}
                    {#if title}
                        <p class="font-aeonik-fono mt-2 text-center text-sm uppercase leading-[2] tracking-tight text-[#E4E4E7]">
                            {title}
                        </p>
                    {/if}
                </div>
            {:else if showRevealButton}
                <!-- Flippable card: show REVEAL button -->
                <div class="flex h-full w-full items-center justify-center">
                    <span
                        class="font-aeonik-fono border-2 border-dashed border-[#FD366E] bg-white/6 px-3.5 py-2 text-xl leading-[1.1] text-[#E4E4E7]"
                    >
                        REVEAL
                    </span>
                </div>
            {:else if showTimer}
                <!-- Locked card: show countdown timer -->
                <div class="flex h-full w-full items-center justify-center">
                    <span
                        class="font-aeonik-fono tabular-nums border-2 border-dashed border-[#FD366E] bg-[#19191C] px-3.5 py-2 text-xl leading-[1.1] tracking-[0.08em] text-[#E4E4E7]"
                    >
                        <Counter value={$hours} />:<Counter value={$minutes} />:<Counter value={$seconds} />
                    </span>
                </div>
            {/if}
        </div>

        <!-- Back face (revealed content after flip) -->
        <div
            class="absolute inset-0 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style="
                background: #19191C;
                border: 3px solid transparent;
                border-image: linear-gradient(43deg, rgba(25, 25, 28, 1) 0%, rgba(126, 25, 53, 1) 22%, rgba(253, 54, 110, 1) 49%, rgba(254, 175, 197, 1) 77%, rgba(237, 237, 240, 1) 100%) 1;
            "
        >
            <img
                src={CardBgNoise}
                alt=""
                class="pointer-events-none absolute left-0 top-0 h-full select-none opacity-[0.02]"
                aria-hidden="true"
            />
            <div class="flex h-full w-full flex-col items-center justify-end pb-6">
                {#if illustration}
                    <img
                        src={illustration}
                        alt={title}
                        class="h-auto w-full max-w-[216px]"
                    />
                {/if}
                {#if title}
                    <p class="font-aeonik-fono mt-2 text-center text-sm uppercase leading-[2] tracking-tight text-[#E4E4E7]">
                        {title}
                    </p>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .tabular-nums {
        font-variant-numeric: tabular-nums;
    }

    .flip-cursor {
        cursor: none;
    }
</style>
