<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    import { messagingController } from '.';
    import { flip } from '$lib/utils/flip';

    const { state } = messagingController;
</script>

<div class="pseudo-table">
    <div class="header">
        <span class="text-micro uppercase">Message ID</span>
        <span class="text-micro uppercase">Type</span>
        <span class="text-micro uppercase" style:text-align="center">Status</span>
    </div>
    {#each $state.messages.slice(0, $state.tableSlice) as task (task.id)}
        <div class="row" transition:slide={{ duration: 150 }} animate:flip={{ duration: 150 }}>
            <div class="copy-button">
                <span class="web-icon-copy"></span>
                <span>{task.id}</span>
            </div>
            <div class="icon-button">
                <div class="icon">
                    <img src={task.icon} alt="" width="16" height="16" />
                </div>
                <span class="truncated">{task.type}</span>
            </div>

            <div class="status-indicator">
                {#if task.status === 'sending'}
                    <div class="loader is-small" in:fade></div>
                {:else}
                    <span class="web-icon-check"></span>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    .header,
    .row {
        grid-template-columns: 7rem 1fr 1fr !important;
        gap: 1.5rem 3rem;
    }

    .copy-button {
        display: flex;
        padding: 0.25rem 0.5rem;
        align-items: center;
        justify-content: space-between;
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

    .icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .icon {
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(2.6666667461395264px);
            border-radius: 100%;
            height: 2rem;
            width: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
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

    .status-indicator {
        display: flex;
        align-items: center;
        justify-content: center;

        [class*='icon-'] {
            font-size: 1.25rem;
            color: hsl(var(--web-color-greyscale-600));
        }
    }
</style>
