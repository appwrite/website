<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Window from './window.svelte';
    import { createCountdown } from '$lib/utils/create-countdown';
    import Counter from './counter.svelte';
    import { format } from 'date-fns';

    interface Props {
        release: Date;
        index: number;
    }

    let { release, index }: Props = $props();

    const { days, hours, minutes, seconds } = createCountdown(release);
</script>

<div class="relative h-fit pb-8">
    <Window class="aspect-[4/1]">
        {#snippet title()}
            <div class="text-micro flex items-center gap-1 text-white">
                Day {index} <span class="text-accent">/</span>
                {format(release, 'MMM-dd-yyyy')}
            </div>
        {/snippet}

        <div
            class={classNames(
                'relative flex flex-1 items-center justify-center rounded-xl bg-[#19191C]'
            )}
        >
            <div
                class="font-aeonik-fono text-primary relative flex items-center rounded-full bg-black px-4 py-1.5 text-center text-xl uppercase outline-2 outline-[var(--color-offset)] outline-dashed"
            >
                {#if $hours > 24}
                    <p>
                        {$days}
                        {$days > 1 ? 'days' : 'day'}
                    </p>
                {:else}
                    <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                        value={$seconds}
                    />
                {/if}
            </div>
        </div>
    </Window>
</div>
