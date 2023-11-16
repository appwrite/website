<script lang="ts" context="module">
    export type DayType = {
        title: string;
        cover?: string;
        release: Date;
    };
</script>

<script lang="ts">
    import { onMount } from 'svelte';

    export let day: DayType;
    export let number: number;

    const today = new Date();

    const hasReleased = today >= day.release;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const pad = (num: number) => num.toString().padStart(2, '0');

    onMount(() => {
        let frame: number;

        function updateCountdown() {
            const today = new Date();
            const timeRemaining = day.release.getTime() - today.getTime();

            if (timeRemaining <= 0) {
                // Target date has passed, stop the countdown
                return;
            }

            const totalSeconds = Math.floor(timeRemaining / 1000);
            seconds = totalSeconds % 60;
            const totalMinutes = Math.floor(totalSeconds / 60);
            minutes = totalMinutes % 60;
            hours = Math.floor(totalMinutes / 60);

            // Request the next animation frame to keep updating the countdown
            frame = requestAnimationFrame(() => {
                updateCountdown();
            });
        }
        updateCountdown();

        return () => cancelAnimationFrame(frame);
    });
</script>

{#if hasReleased}
    <div class="day">
        <div class="circle" aria-hidden />
        <span class="aw-eyebrow">Day {number}<span class="aw-u-color-text-accent">_</span></span>
        <h2 class="aw-label aw-u-color-text-primary">{day.title}</h2>
        {#if day.cover}
            <enhanced:img src={day.cover} class="img" />
        {/if}
        <button class="aw-button is-secondary">
            <span class="aw-icon-arrow-right" />
        </button>
    </div>
{:else}
    <div class="release">
        <span class="aw-eyebrow">Day {number}<span class="aw-u-color-text-accent">_</span></span>
        <p class="countdown aw-title">
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </p>
        <button class="aw-button is-secondary">Remind me</button>
    </div>
{/if}

<style lang="scss">
    .day,
    .release {
        @include border-gradient;
        --m-border-radius: 1rem;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        display: flex;
        flex-direction: column;
        position: relative;

        background: hsl(var(--aw-color-card));
        overflow: hidden;

        height: 13.75rem;
        padding: 1.25rem;

        flex: 0 0 var(--day-min-w);
    }

    .day {
        h2 {
            margin-block-start: 0.5rem;
            position: relative;
        }

        button {
            aspect-ratio: 1;
            padding: 0.625rem;

            margin-block-start: auto;

            [class*='icon'] {
                color: hsl(var(--aw-color-primary)) !important;
            }
        }

        .circle {
            content: '';
            background: radial-gradient(
                hsl(var(--aw-color-accent)) 0%,
                hsl(var(--aw-color-accent) / 0) 70%
            );
            opacity: 0.24;

            --size: 500px;
            width: var(--size);
            height: var(--size);

            position: absolute;
            right: 0;
            top: 0;
            translate: 60% -60%;
            z-index: 0;
            pointer-events: none;
        }

        .img {
            position: absolute;
            height: 100%;
            object-fit: cover;
            top: 0;
            left: 0;
            pointer-events: none;
        }
    }

    .release {
        align-items: center;
        justify-content: center;

        .countdown {
            color: hsl(var(--aw-color-primary));
            margin-block-start: 0.5rem;
        }

        .aw-button {
            margin-block-start: 1.25rem;
        }
    }
</style>
