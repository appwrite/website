<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import Window from './retro-ui/Window.svelte';
    import Logo from '../(assets)/logo-dark.svg';

    import { createCountdown } from '../helpers';
    import Counter from './Counter.svelte';

    type $$Props = {
        release: Date;
        index: number;
    };

    export let release: $$Props['release'];
    export let index: $$Props['index'];

    const { days, hours, minutes, seconds } = createCountdown(release);
</script>

<div class="relative h-fit pb-20">
    <Window alignment="center" class="aspect-[3/1]" theme="dark">
        <span slot="toolbar" class="text-micro flex items-center gap-1 text-white">
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
            slot="content"
            class={classNames(
                'retro bg-greyscale-800 relative mt-2 flex flex-1 items-center justify-center overflow-hidden px-12'
            )}
        >
            <img src={Logo} alt="key illustration" class="size-32 md:size-48" />
        </div>
    </Window>
</div>
