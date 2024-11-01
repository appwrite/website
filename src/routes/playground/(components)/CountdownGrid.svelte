<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import { addDays } from 'date-fns';
    import CountdownCard from './CountdownCard.svelte';
    import Window from './retro-ui/Window.svelte';

    let base = new Date('2024-10-30T13:00:00.000Z');
    let days = [
        {
            title: 'Domains',
            release: base
        },
        {
            title: 'Sites',
            release: addDays(base, 1)
        },
        {
            title: 'Domains',
            release: addDays(base, 2)
        },
        {
            title: 'Sites',
            release: addDays(base, 3)
        },
        {
            title: 'Domains',
            release: addDays(base, 4)
        }
    ];
</script>

<div
    class={classNames(
        'checkerboard relative h-[586px] w-screen',
        'after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-white after:via-[#19191C]/64 after:to-[#19191C]'
    )}
>
    <Window mode="dark">
        <span slot="toolbar">Init<span class="text-accent">_</span>Schedule</span>
        <div slot="content" class="grid gap-4 pt-10 px-4 pb-4 md:grid-cols-5">
            {#each days as day, i}
                <CountdownCard title={day.title} index={i} date={day.release} />
            {/each}
        </div>
    </Window>
</div>

<style>
    .checkerboard {
        --color: #eeeef0;
        --size: var(--spacing-2);
        --gap: calc(var(--size) * 0.5);
        background-color: var(--color);
        background-image: repeating-linear-gradient(
                to right,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            ),
            repeating-linear-gradient(
                to bottom,
                transparent,
                transparent var(--size),
                white var(--size),
                white calc(var(--size) + var(--gap))
            );
    }
</style>
