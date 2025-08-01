<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Placeholder from '../(assets)/placeholder.png';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };
</script>

<div class="relative h-full scroll-m-16" id="infrastructure-and-scalability">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose uppercase"
                        >Infrastructure & Scalability</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-title text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        Scale without worries
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20">
                <p class="text-paragraph-lg">
                    We aimed to build a platform that could easily scale to 1M users overnight
                    without you breaking a sweat over scalability or finance. Today, we are
                    confident that we have reached this state as the numbers show, Appwrite Cloud is
                    stable for any project to grow rapidly unexpectedly.
                </p>
            </Cell>

            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20">
                <div class="space-y-8">
                    <p class="text-paragraph-lg">
                        Building the infrastructure to support this goal wasn't easy, especially
                        with our vision of developing Appwrite Cloud from the ground up. However, we
                        pursued it to maintain control over both the platform's flexibility and the
                        pricing we offer. As accessibility is a key part of our mission, we knew
                        that providing a generous free tier and fair pricing was essential to
                        achieving that goal.
                    </p>
                    <p>
                        A cloud platform without the ability to scale is not much of a platform.
                        We’ve seen projects grow to xx users, executions, etc.
                    </p>
                </div>
            </Cell>
        </Grid>
    </div>

    Testimonials here
</div>
