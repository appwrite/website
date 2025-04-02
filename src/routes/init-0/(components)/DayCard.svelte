<script lang="ts" context="module">
    import type { SvelteComponent } from 'svelte';

    export type DayType = {
        title: string;
        release: Date;
        animation?: typeof SvelteComponent;
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
        <div class="circle" aria-hidden></div>
        <span class="text-micro text-primary uppercase"
            >Day {number}<span class="web-u-color-text-accent">_</span></span
        >
        <h2 class="text-label text-primary">{day.title}</h2>
        <div class="slot-wrapper">
            <slot />
        </div>
    </div>
{:else}
    <div class="release">
        <span class="text-micro text-primary uppercase"
            >Day {number}<span class="web-u-color-text-accent">_</span></span
        >
        <div class="bottom">
            <div class="countdown text-title font-aeonik-pro">
                {#if $hours > 24}
                    {$days} {$days > 1 ? 'days' : 'day'}
                {:else}
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                {/if}
            </div>
            <a href="/init-0/tickets" class="web-button is-secondary">Register</a>
        </div>
    </div>
{/if}

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .day,
    .release {
        @include gradients.border-gradient;
        --m-border-radius: 1rem;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        display: flex;
        flex-direction: column;
        position: relative;

        background: hsl(var(--web-color-subtle));
        overflow: hidden;

        height: 7.5rem;
        padding: 1.25rem;

        flex: 0 0 var(--day-min-w);
    }

    .day {
        height: 100%;
        h2 {
            margin-block-start: 0.5rem;
            position: relative;
            max-width: 50%;
        }

        /* .circle {
            content: '';
            background: radial-gradient(
                hsl(var(--web-color-accent)) 0%,
                hsl(var(--web-color-accent) / 0) 70%
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
            color: hsl(var(--web-color-primary));
        }
    }
</style>
