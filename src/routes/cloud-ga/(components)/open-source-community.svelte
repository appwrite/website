<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { inView } from 'motion';
    import Graph from '../(assets)/graphs/stats-graph.svg';
    import GraphMobile from '../(assets)/graphs/stats-mobile-graph.svg';
    import Numbers from './numbers.svelte';

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };

    const numbers = [
        { label: '52k+', description: 'GitHub stars' },
        { label: '250k+', description: 'Followers across socials' },
        { label: '46k+', description: 'Contributions to GitHub' },
        { label: '610k+', description: 'Discord messages' }
    ];
</script>

<div class="relative h-full scroll-m-16 px-4" id="developer-experience">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center" use:useInView>
        <Grid rows={4} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 pt-12 md:pt-30">
                <div class="space-y-4">
                    <span
                        class="font-aeonik-fono text-secondary text-micro tracking-loose inline-block uppercase"
                        >Developer Experience</span
                    >
                    <h2
                        data-animate={animate}
                        class="text-subtitle text-primary font-aeonik-pro before:bg-accent text-pretty before:absolute before:-left-0.25 before:mt-1 before:h-5 before:w-px before:origin-top before:scale-y-0 before:transition-transform before:duration-700 data-[animate=true]:before:scale-y-100 md:before:mt-1.75 md:before:h-6"
                    >
                        The Open Source<br /> community as a guide
                    </h2>
                </div>
            </Cell>
            <Cell
                column={4}
                columnStart={3}
                class="text-paragraph-lg space-y-8 px-4 pt-8 text-pretty md:pt-30"
            >
                <p>
                    We have said it a million times, and we will say it again: <span
                        class="text-primary inline-block font-medium"
                        >Developer experience is at the top of the Appwrite list.</span
                    >
                </p>
                <p>
                    Appwrite has had the help of thousands of developers from the open-source
                    community to ensure that the developer experience is at the top of our minds as
                    we continuously collect feedback from the community.
                </p>
                <p>
                    Appwrite is grateful for every contribution, and we're committed to remaining
                    open-source. The Appwrite self-hosted instance will offer the same experience as
                    Appwrite Cloud, and our dedication to the Free plan remains unchanged. We're
                    ensuring Appwrite stays accessible for everyone to build with.
                </p></Cell
            >
            <Cell column={4} class="px-4 pt-8 md:pt-30">
                <div
                    class="border-gradient relative rounded-2xl bg-[#232325]/90 before:rounded-2xl after:rounded-2xl"
                    style:--border-gradient-before="linear-gradient(180deg,rgba(255,255,255,0.12),transparent)"
                    style:--border-gradient-after="linear-gradient(180deg,rgba(255,255,255,0),transparent)"
                >
                    <img class="hidden w-full md:block" src={Graph} alt="Placeholder" />
                    <img class="w-full md:hidden" src={GraphMobile} alt="Placeholder" />
                </div>
            </Cell>

            <Cell column={4} class="px-4 pb-12 md:pb-30">
                <Numbers {numbers} />
            </Cell>
        </Grid>
    </div>
</div>
