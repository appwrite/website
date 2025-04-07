<script lang="ts" context="module">
    import type { SvelteComponent } from 'svelte';

    export type DayType = {
        title: string;
        release: Date;
        subtitle: string;
        '--p-aspect-ratio'?: string;
        animation?: typeof SvelteComponent;
    };
</script>

<script lang="ts">
    import { createCountdown } from '../helpers';
    import Counter from './Counter.svelte';

    export let day: DayType;

    export let hasBorder: boolean = true;

    const { hasReleased, days, hours, minutes, seconds } = createCountdown(day.release);
</script>

<div class="day" class:has-border={hasBorder}>
    {#if hasReleased}
        <div style:z-index="10" style="margin-top: auto; margin-bottom: 0;">
            <span
                class="text-primary web-u-uppercase"
                style:opacity="0.6"
                style:margin-bottom="-8px"
                style:display="block"
            >
                {day.subtitle}
            </span>
            <h2 class="text-label text-primary">
                {day.title}<span class="web-u-color-text-accent">_</span>
            </h2>
        </div>

        <div class="slot-wrapper">
            <slot />
        </div>
    {:else}
        <div style:z-index="10" style="margin-top: auto; margin-bottom: 0;">
            <span
                class="text-primary text-micro web-u-uppercase uppercase"
                style:margin-bottom="-8px"
                style:display="block"
            >
                {day.subtitle} <span class="web-u-color-text-accent">_</span>
            </span>
            <h2
                class="text-title font-aeonik-pro text-primary"
                style="--height:3rem;--line-height:3rem;"
            >
                {#if $hours > 24}
                    {$days} {$days > 1 ? 'days' : 'day'}
                {:else}
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                {/if}
            </h2>
        </div>
        <a href="/init/tickets" class="web-button is-secondary">Register</a>
    {/if}
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .day {
        border-radius: var(--m-border-radius);
        height: 100%;

        aspect-ratio: var(--p-aspect-ratio);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        gap: 0;
        background: hsl(var(--web-color-subtle));
        overflow: hidden;
        flex: 0 0 var(--day-min-w);

        &.has-border {
            @include gradients.border-gradient;
            --m-border-radius: 1rem;
            --m-border-gradient-before: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0) 125.11%
            );
        }

        &::before {
            z-index: 1000;
        }

        h2 {
            margin-block-start: 0.5rem !important;
            margin-block-end: 0 !important;
            position: relative;
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

            :global(svg) {
                height: 100%;
            }

            :global(a) {
                margin-top: auto;
                margin-bottom: 24px;
            }
        }
    }
</style>
