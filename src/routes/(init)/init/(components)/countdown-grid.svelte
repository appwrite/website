<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import CountdownCard from './countdown-card.svelte';
    import type { DayProps } from './day.svelte';
    import Window from './window.svelte';

    interface Props {
        days?: Array<Omit<DayProps, 'index'>>;
    }

    let { days = [] }: Props = $props();
</script>

<div class={cn('relative')}>
    <div class="container">
        <Window>
            {#snippet title()}
                <span>Init_Schedule</span>
            {/snippet}
            <div
                class="bg-smooth border-smooth grid grid-cols-1 gap-4 rounded-xl border p-4 md:grid-cols-5"
            >
                {#each days as day, i}
                    {@const index = i + 1}
                    <CountdownCard
                        title={day.title}
                        illustration={day.illustration}
                        release={day.release}
                        {index}
                    />
                {/each}
            </div>
        </Window>
    </div>
</div>
