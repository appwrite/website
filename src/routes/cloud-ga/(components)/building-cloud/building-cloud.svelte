<script lang="ts">
    import Grid from '../grid-system/grid.svelte';
    import Cell from '../grid-system/cell.svelte';
    import Graph from './graph.svelte';
    import { inView } from 'motion';
    import { classNames } from '$lib/utils/classnames';

    const missions = [
        'Developer experience',
        'Infrastructure and scalability',
        'Security and compliance',
        'Reliability and uptime',
        'Networking and latency',
        'Dedicated support'
    ];

    const BASE_DELAY = 150;
    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(node, () => {
            animate = true;
        });
    };
</script>

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid bottomBorder>
            <Cell column={2} columnStart={1} class="px-8 py-12 md:py-20">
                <h2
                    class="font-aeonik-pro text-title text-primary before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px"
                >
                    Building Appwrite<br /> Cloud for you
                </h2>
            </Cell>

            <Cell column={2} columnStart={3} class="px-8 pb-8 md:py-20">
                <div class="space-y-8">
                    <p>
                        When we started working on our plans for Appwrite Cloud we knew we had a
                        hard task ahead of us as we we didn’t want to just be a wrapper on top of
                        AWS or Cloudflare. With no pre-built building blocks, we wanted to customize
                        every piece in the platform to create the most complete developer experience
                        we can imagine.
                    </p>
                    <p class="font-medium">
                        We wanted to create a developer experience that rethinks how an idea goes to
                        production and scale, without worries, without limits.
                    </p>
                    <p>
                        Another benefit of this approach is the ability to control the cost of
                        building with Appwrite as we reduce our vendor dependency. Making Appwrite’s
                        pricing more accessible as part of our mission.
                    </p>
                </div>
            </Cell>

            <Cell column={4} columnStart={1} class="px-4 py-12 md:py-20">
                <div
                    class="border-gradient bg-card bg-blur-lg relative h-[400px] overflow-hidden pt-8 pl-8"
                >
                    <h2 class="text-primary text-description max-w-[250px]">
                        Our DevEx commitment with Appwrite Cloud
                    </h2>
                    <div
                        class="absolute bottom-0 left-0 flex w-full justify-between pt-8 pb-3"
                        use:useInView
                    ></div>
                    <Graph class="absolute inset-0 bottom-0" {animate} />
                </div>
            </Cell>

            <Cell columnStart={3} column={2} class="px-8 pb-20"
                ><p class="animate-text font-medium text-white">
                    To become Generally Available, we set a few milestones that we had to achieve
                    across different factors. Some are easier to measure than others, but never less
                    important:
                </p>
                <ul class="mt-8 space-y-4">
                    {#each missions as mission, i}
                        {@const index = `0${i + 1}`}
                        <a
                            href="/"
                            class={classNames(
                                'group flex items-center gap-2 text-white [animation-delay:var(--delay)]',
                                {
                                    'animate-text': animate
                                }
                            )}
                            style:--delay={`${BASE_DELAY * i}ms`}
                        >
                            <span
                                class="bg-accent/8 text-caption border-accent/32 relative flex size-6 items-center justify-center overflow-hidden rounded-md border p-3"
                            >
                                <div
                                    class="from-accent/12 to-accent/8 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></div>
                                {index}</span
                            >
                            <span class="font-medium">{mission}</span>
                        </a>
                    {/each}
                </ul>
            </Cell>
        </Grid>
    </div>
</div>
