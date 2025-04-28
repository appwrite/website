<script lang="ts">
    import { fly } from 'svelte/transition';
    import { messagingController } from '.';
    import TaskCheckbox from '../TaskCheckbox.svelte';

    const { state } = messagingController;
</script>

{#if $state.submit === 'success'}
    <div class="push-notification" in:fly={{ y: -20 }}>
        <div class="icon"></div>
        <div class="content">
            <div class="header">
                <h3 class="title">New task assigned to you</h3>
                <span class="time">now</span>
            </div>
            <p class="message">You were assigned a new task in your board. Tap to check it out.</p>
        </div>
    </div>
{/if}

<div data-theme-ignore class="inner-phone light">
    <div class="header">
        <p class="title">Your tasks</p>
        <span class="icon-menu" aria-label="menu"></span>
    </div>

    <div class="date">Today</div>
    <div class="tasks">
        {#each $state.tasks as task (task.id)}
            <div class="task" data-checked={task.checked ? '' : undefined} in:fly={{ x: -16 }}>
                <TaskCheckbox bind:checked={task.checked} />
                <span class="title">{task.title}</span>
            </div>
        {/each}
    </div>
    <div class="add-btn">
        <span class="web-icon-plus"></span>
    </div>
</div>

<style lang="scss">
    .push-notification {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 20px;
        padding: 0.5rem;
        margin: 0 auto;
        width: 125%;
        height: 60px;
        gap: 0.75rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(8px);
        box-shadow: 3px -8px 32px 0px rgba(0, 0, 0, 0.24);

        .icon {
            height: 38px;
            width: 38px;
            flex-shrink: 0;
            border-radius: 10px;
            background-image: linear-gradient(180deg, #7c67fe, #4a3e98);
        }

        .header {
            display: flex;
            justify-content: space-between;

            .title {
                color: var(--color-greyscale-800, #2d2d31);
                font-family: Inter;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1rem; /* 137.5% */
                letter-spacing: -0.014rem;
            }

            .time {
                color: var(--color-greyscale-700, #56565c);
                font-family: Inter;
                font-size: 0.75rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1rem; /* 137.5% */
                letter-spacing: -0.014rem;
            }
        }
        .message {
            color: var(--color-greyscale-700, #56565c);
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1rem; /* 137.5% */
            letter-spacing: -0.014rem;
        }
    }

    .inner-phone {
        padding-block: 3rem 1.5rem;
        padding-inline: 1rem;

        color: rgba(67, 67, 71, 1);
        text-align: left;

        position: relative;
        height: 100%;
        overflow: visible;

        display: flex;
        flex-direction: column;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title {
                color: var(--color-greyscale-800, #2d2d31);
                font-family: Inter;
                font-size: 1rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.375rem; /* 137.5% */
                letter-spacing: -0.014rem;
            }

            [class*='icon-'] {
                font-size: 1.25rem;
                color: hsl(var(--web-color-greyscale-500));
            }
        }

        .date {
            margin-block-start: 3rem;

            color: hsl(var(--web-color-greyscale-600));
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.25rem; /* 166.667% */
        }

        .tasks {
            margin-block-start: 0.5rem;

            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .task {
                display: flex;
                align-items: center;
                gap: 0.75rem;

                border-radius: 0.5rem;
                border: 1px solid hsl(var(--web-color-greyscale-50));
                background: hsl(var(--web-color-white));
                color: var(--greyscale-700, var(--color-greyscale-700, #56565c));

                padding-block: 0.55rem;
                padding-inline: 0.88rem;

                /* Responsive/SubBody-400 */
                font-family: Inter;
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.375rem; /* 157.143% */
                letter-spacing: -0.00394rem;

                transition: opacity 200ms ease;

                &[data-checked] {
                    opacity: 0.6;
                }
            }
        }

        .add-btn {
            position: absolute;
            right: 1rem;
            bottom: 2.5rem;

            width: 2.5rem;
            height: 2.5rem;
            flex-shrink: 0;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
            background-color: rgba(124, 103, 254, 1);
            color: rgba(237, 237, 240, 1);
            font-size: 1.5rem;

            display: grid;
            place-items: center;
            border-radius: 100%;
        }
    }
</style>
