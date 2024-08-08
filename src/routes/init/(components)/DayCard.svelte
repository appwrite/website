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
    import { format } from 'date-fns';

    export let number: number;
    export let day: DayType;

    const { hasReleased, days, hours, minutes, seconds } = createCountdown(day.release);
</script>

<div class="day">
    {#if hasReleased}
        <div style:z-index="10" style="margin-top: auto; margin-bottom: 0;">
            <span
                class="web-u-color-text-primary web-u-uppercase"
                style:opacity="0.6"
                style:margin-bottom="-8px"
                style:display="block"
            >
                Day {number}
            </span>
            <h2 class="web-label web-u-color-text-primary">
                {day.title}
            </h2>
        </div>

        <div class="slot-wrapper">
            <slot />
        </div>
    {:else}
        <div style:z-index="10" style="margin-top: auto; margin-bottom: 0;">
            <span
                class="web-u-color-text-primary web-u-uppercase"
                style:opacity="0.6"
                style:margin-bottom="-8px"
                style:display="block"
            >
                {#if $hours > 24}
                    {$days} {$days > 1 ? 'days' : 'day'}
                {:else}
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                {/if}
            </span>
            <h2 class="web-label web-u-color-text-primary">
                {format(day.release, 'MMMM dd')}
            </h2>
        </div>
        <div class="overlay">
            <a href="/init/tickets" class="web-button is-secondary">Register</a>
        </div>
    {/if}
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .day {
        @include gradients.border-gradient;
        --m-border-radius: 1rem;
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );

        aspect-ratio: 5 / 2;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        gap: 0;
        background: hsl(var(--web-color-subtle));
        overflow: hidden;
        flex: 0 0 var(--day-min-w);

        &::before {
            z-index: 1000;
        }

        .overlay {
            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 1;
                background: radial-gradient(
                    circle farthest-corner at 400px 100px,
                    hsl(var(--web-color-background) / 0) 0%,
                    hsl(var(--web-color-background)) 50%,
                    hsl(var(--web-color-background)) 100%
                );
            }
        }

        h2 {
            margin-block-start: 0.5rem;
            position: relative;
            max-width: 50%;
        }

        .web-button {
            position: absolute;
            right: 24px;
            bottom: 24px;
            z-index: 10;
        }

        .slot-wrapper {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 50%;
            left: 0;
            display: flex;
            translate: 0 -50%;
            pointer-events: none;

            a {
                margin-top: auto;
                margin-bottom: 24px;
            }
        }
    }
</style>
