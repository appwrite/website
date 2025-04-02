<script lang="ts">
    import { fly } from 'svelte/transition';
    import { storageController } from '.';
    import { elId } from '../Products.svelte';
    import TaskCheckbox from '../TaskCheckbox.svelte';
    import { databasesController } from '../databases';

    const { state: dbState } = databasesController;
    const fixedTasks = $dbState.tasks;

    const { state } = storageController;
</script>

<div data-theme-ignore class="inner-phone light">
    <div class="header">
        <p class="title">Your tasks</p>
        <span class="icon-menu" aria-label="menu"></span>
    </div>

    <div class="date">Today</div>
    <div class="tasks">
        {#each fixedTasks as task (task.id)}
            <div class="task" data-checked={task.checked ? '' : undefined} in:fly={{ x: -16 }}>
                <TaskCheckbox bind:checked={task.checked} />
                <span class="title">{task.title}</span>
            </div>
        {/each}
    </div>

    <button class="add-btn">
        <span class="web-icon-plus"></span>
    </button>

    <div class="overlay" id="overlay-{$elId}">
        <div class="drawer" id="drawer-{$elId}">
            <p class="title">Edit images for website</p>
            <p class="subtitle">Edit the attached images to use in the website</p>

            <div class="upload" id="upload-btn-{$elId}">Upload media...</div>
            <div class="images">
                {#each $state.files.slice(1) as file}
                    <img src={file.src} alt="" transition:fly={{ x: 16 }} />
                {/each}
            </div>
        </div>
    </div>
</div>
<div class="upload-media" id="upload-{$elId}">
    <p class="title">Upload media</p>
    <div class="drop-zone">
        <span id="upload-text-{$elId}"> Drop media here </span>
        <div class="loading-overlay" id="upload-loading-{$elId}">
            <div class="loader"></div>
        </div>
    </div>
    <img id="upload-img-{$elId}" src="/images/animations/storage-2.png" alt="" />
</div>

<style lang="scss">
    .inner-phone {
        padding-block: 3rem;
        padding-inline: 1rem;

        color: rgba(67, 67, 71, 1);
        text-align: left;

        position: relative;
        height: 100%;
        overflow: visible;

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

    .overlay {
        opacity: 0;

        position: absolute;
        inset: 0;
        overflow: hidden;

        background: rgba(0, 0, 0, 0.32);
        border-radius: 2rem;

        .drawer {
            position: absolute;
            bottom: 0;
            height: 60%;
            opacity: 0;

            background-color: white;
            border-radius: 0.88463rem 0.88463rem 2rem 2rem;

            padding: 1rem;

            .title {
                color: #434347;
                font-family: Inter;
                font-size: 0.88463rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.21638rem; /* 137.5% */
                letter-spacing: -0.01238rem;
            }

            .subtitle {
                color: var(--greyscale-500, var(--color-greyscale-500, #818186));
                font-family: Inter;
                font-size: 0.77406rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.10575rem; /* 142.857% */
                letter-spacing: -0.01081rem;

                margin-block-start: 0.2rem;
            }

            .upload {
                display: flex;
                padding: 0.44231rem 0.66344rem;
                justify-content: center;
                align-items: center;
                align-self: stretch;

                border-radius: 0.66344rem;
                border: 1px dashed #d9d9d9;

                color: var(--greyscale-500, var(--color-greyscale-500, #818186));
                font-family: Inter;
                font-size: 0.77406rem;
                font-style: normal;
                font-weight: 400;
                line-height: 1.10575rem; /* 142.857% */
                letter-spacing: -0.01081rem;

                margin-block-start: 2rem;
            }
        }
    }

    .upload-media {
        position: absolute;
        right: calc(0% - 24px);
        bottom: 8rem;
        background-color: white;
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05);
        border-radius: 1rem;
        padding: 0.75rem;

        opacity: 0;

        .title {
            color: var(--color-greyscale-800, #2d2d31);
            font-family: Inter;
            font-size: 0.85rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.375rem; /* 137.5% */
            letter-spacing: -0.014rem;
        }

        .drop-zone {
            display: grid;
            place-items: center;
            border: 0.885px dashed #d9d9d9;
            border-radius: 0.5rem;

            color: var(--greyscale-500, var(--color-greyscale-500, #818186));
            padding: 2rem 1.25rem;
            margin-block-start: 0.5rem;
            font-size: 0.65rem;
            font-family: Inter;

            position: relative;
            overflow: hidden;

            .loading-overlay {
                position: absolute;
                inset: 0;
                opacity: 0;
                z-index: 100;

                display: grid;
                place-items: center;
            }
        }

        img {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
        }
    }

    .images {
        display: flex;
        margin-block-start: 0.5rem;
        gap: 0.5rem;
    }
</style>
