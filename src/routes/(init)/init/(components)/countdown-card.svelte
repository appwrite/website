<script lang="ts">
    import { createCountdown } from '$lib/utils/create-countdown';

    import Badge from './badge.svelte';
    import Counter from './counter.svelte';
    import type { DayProps } from './day.svelte';

    type $$Props = Pick<DayProps, 'illustration' | 'release' | 'index' | 'title'>;

    interface Props {
        illustration?: $$Props['illustration'];
        release: $$Props['release'];
        index: $$Props['index'];
        title: $$Props['title'];
    }

    const { illustration = '', release, index, title }: Props = $props();

    const { days, hours, minutes, seconds, hasReleased } = createCountdown(release);
</script>

<a href="#day-{index}">
    <div class="text-caption text-primary font-fira-code mb-2 flex gap-2 uppercase">
        Day {index}
        {#if hasReleased}
            <span class="text-accent">/</span><span>{title}</span>{/if}
    </div>
    <div
        class="group relative aspect-square gap-4 overflow-hidden rounded-[4px] border border-dashed border-white/32 p-1"
    >
        <div
            class="relative z-20 h-full w-full rounded-[4px] bg-[#19191C] transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        >
            <div class="relative flex h-full w-full flex-col items-center justify-center">
                {#if hasReleased}
                    <img src={illustration} alt="Logo" class="size-32" />
                {/if}

                {#if !hasReleased}
                    <Badge class="text-[1.125rem]">
                        {#if $hours > 24}
                            {$days}
                            {$days > 1 ? 'days' : 'day'}
                        {:else}
                            <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                                value={$seconds}
                            />
                        {/if}
                    </Badge>
                {/if}
            </div>
        </div>
        <div
            class="absolute inset-0 transform bg-black transition-transform duration-300 ease-in-out"
        ></div>
    </div>
</a>
