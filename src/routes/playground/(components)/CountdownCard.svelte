<script lang="ts">
    import { createCountdown } from '$routes/playground/helpers';
    import Counter from './Counter.svelte';

    type $$Props = {
        date: Date;
        index: number;
        title: string;
    };

    export let date: $$Props['date'];
    export let index: $$Props['index'];
    export let title: $$Props['title'];

    const { days, hours, minutes, seconds, hasReleased } = createCountdown(date);
</script>

<div>
    <span class="text-caption font-aeonik-fono text-secondary mb-2 block uppercase"
        >Day {index}</span
    >
    <div
        class="light flex aspect-square flex-col items-center justify-center justify-center gap-4 bg-white"
    >
        <div class="bg-accent size-20 rounded-full" />
        <div class="font-aeonik-fono text-primary text-base uppercase">
            {#if hasReleased}
                <span>{title}</span><span class="text-accent">_</span>
            {:else if $hours > 24}
                <p>
                    {$days}
                    {$days > 1 ? 'days' : 'day'}
                </p>
            {:else}
                <div class="flex items-center">
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                </div>
            {/if}
        </div>

        <!-- <span class="font-aeonik-fono text-primary text-base uppercase"
            >Domains<span class="text-accent">_</span>
        </span> -->
    </div>
</div>
