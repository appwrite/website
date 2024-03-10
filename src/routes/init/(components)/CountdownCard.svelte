<script lang="ts">
    import { createCountdown } from '../helpers';
    import Counter from './Counter.svelte';

    export let date: Date;

    const { days, hours, minutes, seconds } = createCountdown(date);
</script>

<div class="web-card is-normal web-u-color-text-primary">
    <img src="/images/icons/gradients/lock.svg" alt="Lock" />
    {#if $days > 1}
        <p class="web-title">
            {$days}
            {$days > 1 ? 'days' : 'day'}<span class="web-u-color-text-accent">_</span>
        </p>
    {:else}
        <div class="web-title">
            <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                value={$seconds}
            /><span class="web-u-color-text-accent">_</span>
        </div>
    {/if}

    <p class="web-sub-body-500">Countdown to next announcement</p>
</div>

<style lang="scss">
    .web-card {
        height: 25rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .web-title {
        margin-block-start: 0.75rem;
    }

    .web-sub-body-500 {
        margin-block-start: 0.5rem;
    }
</style>
