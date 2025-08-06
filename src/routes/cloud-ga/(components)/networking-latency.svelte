<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Map from '$lib/components/appwrite-network/map.svelte';

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
            <Cell column={2} columnStart={1} class="py-12 md:py-30">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose uppercase"
                        >Networking and Latency</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1 before:h-5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100 md:before:mt-1.75 md:before:h-6"
                    >
                        Reaching more<br /> regions
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-30">
                <div class="space-y-8">
                    <p>
                        One of the exciting releases this year was the announcement of the Appwrite
                        Network. A network of cloud regions and edge locations (edges) to improve
                        Appwrite Cloud availability, performance, and compliance with local
                        regulations. We started with one region, Frankfurt, and we now have two more
                        up and running, and a lot more to come. Appwrite is committed to expanding
                        the number of regions to ensure a great experience, regardless of location.
                    </p>
                    <p>
                        We aim to deliver a great experience by reducing latency and ensuring you
                        can build on top of Appwrite Cloud no matter your location.
                    </p>
                </div>
            </Cell>
            <Cell column={4} class="pb-30">
                <Map theme="dark" />
            </Cell>
        </Grid>
    </div>
</div>
