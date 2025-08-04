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
</script>

<div class="relative h-full scroll-m-16 px-4" id="milestones-for-success">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Milestones for Success</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-2 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        The journey so far
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20"
                ><p class="text-paragraph-lg">
                    The milestone we achieved today officially started 26 months ago when we
                    launched Appwrite private beta and enrolled users onto the platform bit by bit.
                    Since then, we have reached many milestones before taking Cloud to the next
                    level.
                </p></Cell
            >
            <Cell column={4}>
                <div
                    class="border-gradient relative rounded-2xl bg-[#232325]/90 py-8 before:rounded-2xl after:rounded-2xl"
                >
                    <img class="rounded-3xl" src={Graph} alt="Placeholder" />
                </div>
            </Cell>
        </Grid>
    </div>
</div>
