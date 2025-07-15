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
            <Cell column={2} columnStart={1} class="px-8 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose uppercase"
                        >Dedicated Support</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-title text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        A team of experts
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-8 pb-8 md:py-20"
                ><div class="space-y-8">
                    <p>
                        From community Discord support to a team of Appwrite experts on call, we
                        have matured our support to be able to handle requests directly.
                    </p>

                    <p>
                        Appwrite Cloud isn't just a hosted backend solution; it's a partner in your
                        development journey. That’s why we’ve streamlined our processes to provide
                        varying levels of support. From our community Discord and email support to
                        priority chat,
                    </p>
                </div></Cell
            >
        </Grid>
    </div>
</div>
