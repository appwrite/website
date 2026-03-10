<script lang="ts">
    import ScheduleLine from '../(assets)/schedule-line.svg';
    import ScheduleCard from './schedule-card.svelte';

    interface ScheduleDay {
        title: string;
        illustration: string;
        release: Date;
        revealed?: boolean;
        dayNumber: number;
    }

    interface Props {
        days: ScheduleDay[];
    }

    let { days }: Props = $props();
</script>

<section class="relative w-full bg-[#19191C]">
    <div class="mx-auto w-full max-w-[1728px] px-[clamp(1.25rem,4vw,120rem)] py-20">
        <div class="flex flex-col gap-6">
            <!-- Header -->
            <div class="flex flex-col gap-3">
                <hr class="border-t border-[rgba(255,255,255,0.06)]" />
                <div class="flex items-center justify-between gap-5">
                    <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                        <span class="text-[#FD366E]">//</span> schedule
                    </p>
                    <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                        <span class="text-[#FD366E]">//</span> MARCH 23 - 27
                    </p>
                </div>
            </div>

            <!-- Card grid -->
            <div class="grid h-[272px] grid-cols-5 gap-8">
                {#each days as day, i}
                    <ScheduleCard
                        title={day.title}
                        illustration={day.illustration}
                        release={day.release}
                        revealed={day.revealed ?? false}
                        dayNumber={day.dayNumber}
                    />
                {/each}
            </div>
        </div>
    </div>
</section>
