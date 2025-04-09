<script lang="ts">
    import { slide } from 'svelte/transition';
    import { databasesController } from '.';
    import { flip } from '$lib/utils/flip';

    const { state } = databasesController;
</script>

<div class="pseudo-table">
    <div class="header">
        <span class="text-micro uppercase">Document ID</span>
        <span class="text-micro uppercase">Task</span>
    </div>
    {#each $state.tasks.slice(0, $state.tableSlice) as task (task.id)}
        <div class="row" transition:slide={{ duration: 150 }} animate:flip={{ duration: 150 }}>
            <div class="copy-button">
                <span class="web-icon-copy"></span>
                <span>{task.id}</span>
            </div>
            <span class="truncated">{task.title}</span>
        </div>
    {/each}
</div>

<style lang="scss">
    .copy-button {
        display: flex;
        padding: 0.25rem 0.5rem;
        align-items: center;
        gap: 0.375rem;

        border-radius: 62.4375rem;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(2.6666667461395264px);

        [class*='icon-'] {
            font-size: 1.25rem;
            color: hsl(var(--web-color-greyscale-600));
        }

        span:not([class*='icon-']) {
            color: var(--greyscale-400, #adadb1);
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem; /* 142.857% */

            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
