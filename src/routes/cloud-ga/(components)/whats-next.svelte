<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };
</script>

<div class="relative h-full scroll-m-16 px-4" id="the-future">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 pt-12 pb-8 md:pt-30">
                <h2
                    data-animate={animate}
                    class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1 before:h-5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100 md:before:mt-1.75 md:before:h-6"
                >
                    What's next
                </h2>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-30"
                ><div class="text-paragraph-lg space-y-8">
                    <p>
                        As Appwrite Cloud continues to age, it also continues to improve over time.
                        With new products, features, more support, more regions, and anything else
                        needed to get your projects to production faster.
                    </p>
                    <p>
                        We look forward to continuing to make Appwrite the most complete development
                        platform available, enabling you to build like a team of hundreds.
                    </p>
                </div></Cell
            >
        </Grid>
    </div>
</div>
