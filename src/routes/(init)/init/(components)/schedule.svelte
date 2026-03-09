<script lang="ts">
    import ScheduleLine from '../(assets)/schedule-line.svg';
    import ScheduleCard from './schedule-card.svelte';

    interface ScheduleDay {
        title: string;
        illustration: string;
        release: Date;
        revealed?: boolean;
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
                <img
                    src={ScheduleLine}
                    alt=""
                    class="w-full opacity-10"
                    aria-hidden="true"
                />
                <div class="flex flex-col gap-5">
                    <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                        // schedule
                    </p>
                    <p class="font-aeonik-fono text-sm uppercase leading-[1.2] tracking-tight text-[#E4E4E7]">
                        // MARCH 12 - 18
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
                    />
                {/each}
            </div>
        </div>
    </div>
</section>
