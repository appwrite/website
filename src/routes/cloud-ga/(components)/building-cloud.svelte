<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import BuildingCloudGraph from './building-cloud-graph.svelte';
    import { inView } from 'motion';

    const milestones = [
        'Developer experience',
        'Infrastructure and scalability',
        'Security and compliance',
        'Reliability and uptime',
        'Networking and latency',
        'Dedicated support'
    ];
</script>

<div class="relative h-full">
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="py-20 px-8">
                <h2
                    class="font-aeonik-pro text-title text-primary before:bg-accent text-pretty before:absolute before:left-0 before:mt-2.5 before:h-6 before:w-px"
                >
                    Building Appwrite<br /> Cloud for you
                </h2>
            </Cell>

            <Cell column={2} columnStart={3} class="pt-20 px-8">
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

            <Cell column={4} columnStart={1} class="py-20">
                <div class="chart bg-card bg-blur-lg relative h-[400px] overflow-hidden pt-8 pl-8">
                    <h2 class="text-primary text-description max-w-[250px]">
                        Our DevEx commitment with Appwrite Cloud
                    </h2>
                    <BuildingCloudGraph />
                </div>
            </Cell>

            <Cell columnStart={3} column={2} class="px-8 pb-20"
                ><p class="font-medium text-white">
                    To become Generally Available, we set a few milestones that we had to achieve
                    across different factors. Some are easier to measure than others, but never less
                    important:
                </p>
                <ul class="mt-8 space-y-4">
                    {#each milestones as milestone, i}
                        {@const index = `0${i + 1}`}
                        <li class="flex items-center gap-2 text-white">
                            <span
                                class="bg-accent/8 text-caption border-accent/32 flex size-6 items-center justify-center rounded-md border p-3"
                                >{index}</span
                            >
                            <span class="font-medium">{milestone}</span>
                        </li>
                    {/each}
                </ul>
            </Cell>
        </Grid>
    </div>
</div>

<style lang="scss">
    @use '$scss/abstract/mixins/border-gradient' as gradients;

    .chart {
        @include gradients.border-gradient;
        --p-radius: 16px;

        border-radius: var(--p-radius);
        --m-border-radius: var(--p-radius);
        --m-border-gradient-before: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0) 125.11%
        );
    }
</style>
