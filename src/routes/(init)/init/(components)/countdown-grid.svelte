<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import CountdownCard from './countdown-card.svelte';
    import Window from './window.svelte';

    export let days: Array<{ title: string; release: Date; illustration: string }> = [];
</script>

<div class={classNames('relative')}>
    <div class="container">
        <Window>
            <span slot="title">Init_Schedule</span>
            <div
                class="bg-smooth border-smooth grid grid-cols-1 gap-4 rounded-xl border p-4 md:grid-cols-5"
            >
                {#each days as day, index}
                    <CountdownCard {...day} {index} />
                {/each}
            </div>
        </Window>
    </div>
</div>
