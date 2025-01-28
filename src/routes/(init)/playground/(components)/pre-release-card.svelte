<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Window from './retro-ui/Window.svelte';
    import { createCountdown } from '$lib/utils/init';
    import Counter from './counter.svelte';

    type $$Props = {
        release: Date;
        index: number;
    };

    export let release: $$Props['release'];
    export let index: $$Props['index'];

    const { days, hours, minutes, seconds } = createCountdown(release);
</script>

<div class="relative h-fit pb-20">
    <Window class="aspect-[3/1]">
        <span slot="title" class="text-micro flex items-center gap-1 text-white">
            Day {index} -
            {#if $hours > 24}
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
            <span class="text-accent">_</span></span
        >

        <div
            class={classNames(
                'retro bg-greyscale-800 relative mt-2 flex flex-1 items-center justify-center overflow-hidden px-12'
            )}
        >
            <img src={''} alt="key illustration" class="size-32 md:size-48" />
        </div>
    </Window>
</div>
