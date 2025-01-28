<script lang="ts">
    import { createCountdown } from '$lib/utils/init';
    import Counter from './counter.svelte';

    type $$Props = {
        illustration: string;
        release: Date;
        index: number;
        title: string;
    };

    export let illustration: $$Props['illustration'] = '';
    export let release: $$Props['release'];
    export let index: $$Props['index'];
    export let title: $$Props['title'];

    const { days, hours, minutes, seconds, hasReleased } = createCountdown(release);
</script>

<a href="#day-{index}">
    <span class="text-caption text-secondary mb-2 block">Day {index}</span>
    <div
        class="aspect-square gap-4 rounded-[4px] border border-white/32 bg-black outline outline-offset-4 outline-white/32 outline-dashed"
    >
        <div class="bg-smooth relative flex h-full w-full flex-col items-center justify-center">
            <img src={illustration} alt="Logo" class="size-24" />
            <div class="font-aeonik-fono text-primary text-base uppercase">
                {#if hasReleased}
                    <span>{title}</span><span class="text-accent">_</span>
                {:else if $hours > 24}
                    <p>
                        {$days}
                        {$days > 1 ? 'days' : 'day'}
                    </p>
                {:else}
                    <div class="flex items-center gap-0.5 text-center">
                        <Counter value={$hours} />:<Counter value={$minutes} />:<Counter
                            value={$seconds}
                        />
                    </div>
                {/if}
            </div>
        </div>
    </div>
</a>
