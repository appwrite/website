<script lang="ts">
    import { createCountdown, pad } from './helpers';

    export let date: Date;

    const { days, hours, minutes, seconds } = createCountdown(date);
</script>

<div class="aw-card is-normal aw-u-color-text-primary">
    <img src="/images/icons/gradients/lock.svg" alt="Lock" />
    {#if $days >= 1}
        <p class="aw-title">
            {$days}
            {$days > 1 ? 'days' : 'day'}<span class="aw-u-color-text-accent">_</span>
        </p>
    {:else}
        <p class="aw-title">
            {pad($hours)}:{pad($minutes)}:{pad($seconds)}<span class="aw-u-color-text-accent"
                >_</span
            >
        </p>
    {/if}

    <p class="aw-sub-body-500">Countdown to next announcement</p>
</div>

<style lang="scss">
    .aw-card {
        height: 25rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .aw-title {
        margin-block-start: 0.75rem;
    }

    .aw-sub-body-500 {
        margin-block-start: 0.5rem;
    }
</style>
