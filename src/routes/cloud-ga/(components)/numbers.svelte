<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { classNames } from '$lib/utils/classnames';

    type Props = {
        class?: string;
        numbers: Array<{ label: string; description: string }>;
    };

    const { numbers, class: className }: Props = $props();
</script>

<div class={classNames('relative h-full', className)}>
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={1}>
            <Cell column={4} columnStart={1} class="pb-20"
                ><div class="grid grid-cols-2 place-content-between gap-y-4 lg:grid-cols-4">
                    {#each numbers as { label, description }}
                        <div
                            class="border-gradient relative rounded-2xl bg-[#232325]/90 p-4 before:rounded-2xl after:rounded-2xl"
                        >
                            <h3
                                class="md:tracking-squeezed font-aeonik-pro text-primary text-[1.25rem] text-pretty md:text-[2rem]"
                            >
                                {label}
                            </h3>
                            <p class="text-description text-secondary">{description}</p>
                        </div>
                    {/each}
                </div></Cell
            >
        </Grid>
    </div>
</div>
