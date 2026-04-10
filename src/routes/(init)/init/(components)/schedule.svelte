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
    <div class="mx-auto w-full max-w-[1280px] px-5 py-12 md:px-8 md:py-16 lg:px-[clamp(1.25rem,4vw,120rem)] lg:py-20">
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

            <!-- Card grid: horizontal scroll on mobile/tablet, grid on desktop -->
            <div class="-mx-5 flex h-[272px] gap-4 overflow-x-auto px-5 md:-mx-8 md:gap-6 md:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-8 lg:overflow-visible lg:px-0">
                {#each days as day, i}
                    <div class="w-[220px] shrink-0 md:w-[240px] lg:w-auto">
                        <ScheduleCard
                            title={day.title}
                            illustration={day.illustration}
                            release={day.release}
                            revealed={day.revealed ?? false}
                            dayNumber={day.dayNumber}
                        />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
