<script lang="ts">
    import { createCountdown } from '../helpers';
    import Counter from './Counter.svelte';

    export let date: Date;

    const { days, hours, minutes, seconds } = createCountdown(date);
</script>

<div class="web-card is-normal text-primary">
    <img src="/images/icons/gradients/lock.svg" alt="Lock" />
    {#if $hours > 24}
        <p class="text-title font-aeonik-pro">
            {$days}
            {$days > 1 ? 'days' : 'day'}
        </p>
    {:else}
        <div class="text-title font-aeonik-pro" style="--height:3rem;--line-height:3rem;">
            <Counter value={$hours} />:<Counter value={$minutes} />:<Counter value={$seconds} />
        </div>
    {/if}

    <p class="text-sub-body font-medium">Countdown to next announcement</p>
</div>

<style lang="scss">
    .web-card {
        height: 25rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: hsl(var(--web-color-subtle));
    }
</style>
