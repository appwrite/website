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

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <h2
                    data-animate={animate}
                    class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                >
                    What's next
                </h2>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20"
                ><div class="text-paragraph-lg space-y-8">
                    <p>
                        As Appwrite Cloud continues to age, it also continues to improve over time.
                        With new products, features, more support, more regions, and anything else
                        that it needs to be for you to be able to build like you are a team of a
                        hundred developers.
                    </p>
                    <p>
                        It might sound like a cliche, but this is really only the beginning. We have
                        more exciting news lined up for you in the next few months. And this time
                        around, it might not be entirely what you would expect from a
                        backend-as-a-service platform.
                    </p>
                    <p>
                        Let’s keep building the future together! Let’s keep you building like a team
                        of hundreds!
                    </p>
                </div></Cell
            >
        </Grid>
    </div>
</div>
