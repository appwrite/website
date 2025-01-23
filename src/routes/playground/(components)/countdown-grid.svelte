<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import CountdownCard from './countdown-card.svelte';
    import Window from './retro-ui/Window.svelte';

    export let days: Array<{ title: string; release: Date; illustration: string }> = [];
</script>

<div class={classNames('relative min-h-[586px] w-screen')}>
    <div class="container">
        <Window>
            <span slot="title">Init_Schedule</span>
            <div class="grid gap-4 md:grid-cols-5">
                {#each days as day, index}
                    <CountdownCard {...day} {index} />
                {/each}
            </div>
        </Window>
    </div>
</div>
