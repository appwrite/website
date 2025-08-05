<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Graph from '../(assets)/graphs/journey-graph.svg';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const milestones = [
        {
            date: 'Feb 2023',
            label: 'Private beta'
        },
        {
            date: 'May 2023',
            label: 'Public beta'
        },
        {
            date: 'Feb 2024',
            label: '100k devs joined'
        },
        {
            date: 'Mar 2025',
            label: '20B database operations'
        },
        {
            date: 'May 2025',
            label: '300k projects'
        },
        {
            date: 'Aug 2025',
            label: 'Cloud GA launch'
        }
    ];
</script>

<div class="relative h-full scroll-m-16 px-4" id="milestones-for-success">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 pt-12 md:py-30">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Milestones for Success</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1 before:h-5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100 md:before:mt-1.75 md:before:h-6"
                    >
                        The journey so far
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pt-8 md:pt-30"
                ><p class="text-paragraph-lg">
                    The milestone we achieved today officially started 26 months ago when we
                    launched Appwrite private beta and enrolled users onto the platform bit by bit.
                    Since then, we have reached many milestones before taking Cloud to the next
                    level.
                </p></Cell
            >
            <Cell column={4} class="px-4 pb-12 md:p-8 md:pb-30">
                <span
                    data-animate={animate}
                    class="text-paragraph-lg text-secondary before:bg-accent mt-8 inline-block max-w-lg text-pretty before:absolute before:-left-0.25 before:mt-2 before:h-3.5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >To become Generally Available we set milestones across our journey to reach
                    over time.</span
                >
                <div
                    class="border-gradient relative mt-8 hidden rounded-2xl bg-[#232325]/90 before:rounded-2xl after:rounded-2xl md:block"
                    style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
                    style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
                >
                    <img class="rounded-3xl" src={Graph} alt="Placeholder" />
                </div>
                <div class="contents md:hidden">
                    {@render MobileGraph()}
                </div>
            </Cell>
        </Grid>
    </div>
</div>

{#snippet MobileGraph()}
    <div
        class="border-gradient relative mt-8 rounded-2xl bg-[#232325]/90 p-5 before:rounded-2xl after:rounded-2xl"
        style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
        style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
    >
        <span class="text-primary text-base font-medium">The Appwrite<br /> Cloud GA journey</span>
        <div class="border-smooth mt-8 flex flex-col gap-8 border-l pl-2">
            {#each milestones as milestone}
                <div class="border-accent -ml-2 flex flex-col border-l pl-2">
                    <span
                        class="font-aeonik-fono tracking-loose text-secondary text-micro uppercase"
                        >{milestone.date}</span
                    >
                    <span class="text-primary font-medium">{milestone.label}</span>
                </div>
            {/each}
        </div>
    </div>
{/snippet}
