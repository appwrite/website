<script lang="ts" context="module">
    export type DayType = {
        title: string;
        release: Date;
    };
</script>

<script lang="ts">
    import { createCountdown } from '../helpers';
    import Counter from './Counter.svelte';

    export let day: DayType;
    export let number: number;

    const { hasReleased, days, hours, minutes, seconds } = createCountdown(day.release);
</script>

{#if hasReleased}
    <div class="day">
        <div class="circle" aria-hidden />
        <span class="aw-eyebrow aw-u-color-text-primary"
            >Day {number}<span class="aw-u-color-text-accent">_</span></span
        >
        <h2 class="aw-label aw-u-color-text-primary">{day.title}</h2>
        <div class="slot-wrapper">
            <slot />
        </div>
    </div>
{:else}
    <div class="release">
        <span class="aw-eyebrow aw-u-color-text-primary"
            >Day {number}<span class="aw-u-color-text-accent">_</span></span
        >
        <div class="bottom">
            <div class="countdown aw-title">
                {#if $hours > 24}
                    {$days} {$days > 1 ? 'days' : 'day'}
                {:else}
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                {/if}
            </div>
            <a href="/init/tickets" class="aw-button is-secondary">Register</a>
        </div>
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

        height: 7.5rem;
        padding: 1.25rem;

        flex: 0 0 var(--day-min-w);
    }

    .day {
        h2 {
            margin-block-start: 0.5rem;
            position: relative;
            max-width: 50%;
        }

        /* .circle {
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
        } */

        .slot-wrapper {
            position: absolute;
            height: 100%;
            inset-inline-end: 0;
            inset-block-end: 0;
            translate: 50% 20%;
            pointer-events: none;
        }
    }

    .release {
        justify-content: center;
        gap: 0.5rem;

        .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .countdown {
            color: hsl(var(--aw-color-primary));
        }
    }
</style>
