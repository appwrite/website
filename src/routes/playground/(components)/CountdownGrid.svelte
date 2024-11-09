<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import CountdownCard from './CountdownCard.svelte';
    import Window from './retro-ui/Window.svelte';

    export let days: Array<{ title: string; release: Date; illustration: string }> = [];
</script>

<div
    class={classNames(
        'checkerboard relative min-h-[586px] w-screen',
        'after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-white after:via-[#19191C]/64 after:to-[#19191C]'
    )}
>
    <div class="container">
        <Window theme="dark">
            <span slot="toolbar">Init<span class="text-accent">_</span>Schedule</span>
            <div slot="content" class="grid gap-4 pt-10 px-4 pb-4 md:grid-cols-5">
                {#each days as day, index}
                    <CountdownCard {...day} {index} />
                {/each}
            </div>
        </Window>
    </div>
</div>
