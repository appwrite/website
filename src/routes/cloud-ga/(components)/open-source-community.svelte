<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Graph from '../(assets)/graphs/stats-graph.svg';
    import Numbers from './numbers.svelte';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const numbers = [
        { label: '52k', description: 'GitHub stars' },
        { label: '200k', description: 'followers across socials' },
        { label: '46k', description: 'commits to GitHub' },
        { label: '610k+', description: 'Discord messages' }
    ];
</script>

<div class="relative h-full scroll-m-16 px-4" id="developer-experience">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={4} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 py-12 md:py-20">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Developer Experience</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-2 before:h-6 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100"
                    >
                        The Open Source<br /> community as a guide
                    </h2>
                </div>
            </Cell>
            <Cell column={4} columnStart={3} class="px-4 pb-8 md:py-20"
                ><p class="text-paragraph-lg text-pretty">
                    We have said it a million times, and we will say it again: <span
                        class="text-primary inline-block font-medium"
                        >Developer experience is at the top of the Appwrite list.</span
                    > Appwrite has had the help of thousands of developers from the open source community
                    to ensure that the developer experience is at the top of our minds as we continuously
                    collect feedback from the community.
                </p></Cell
            >
            <Cell column={4}>
                <div
                    class="border-gradient relative rounded-2xl bg-[#232325]/90 p-8 before:rounded-2xl after:rounded-2xl"
                >
                    <img class="rounded-3xl" src={Graph} alt="Placeholder" />
                </div>
            </Cell>

            <Cell column={4}>
                <Numbers {numbers} />
            </Cell>
        </Grid>
    </div>
</div>
