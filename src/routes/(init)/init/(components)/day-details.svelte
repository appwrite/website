<script lang="ts">
    import DayDetail from './day-detail.svelte';

    interface Link {
        type: string;
        title: string;
        action: string;
        href: string;
    }

    interface Day {
        dayName: string;
        dayNumber: number;
        date: string;
        title?: string;
        description?: string;
        illustration?: string;
        productLabel?: string;
        videoHref?: string;
        links?: Link[];
        release: Date;
        revealed?: boolean;
    }

    interface Props {
        days: Day[];
    }

    let { days }: Props = $props();
</script>

<section
    class="relative w-full"
    style="background: rgba(35, 35, 37, 0.9); border-top: 1px solid rgba(255, 255, 255, 0.06);"
>
    <div class="mx-auto w-full max-w-[1728px] px-[clamp(1.25rem,4vw,120rem)] py-[120px]">
        <div class="flex flex-col gap-12">
            {#each days as day}
                <DayDetail
                    dayName={day.dayName}
                    dayNumber={day.dayNumber}
                    date={day.date}
                    title={day.title}
                    description={day.description}
                    illustration={day.illustration}
                    productLabel={day.productLabel}
                    videoHref={day.videoHref}
                    links={day.links}
                    release={day.release}
                    revealed={day.revealed}
                />
            {/each}
        </div>
    </div>
</section>
