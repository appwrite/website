<script lang="ts">
    import Grid from './grid-system/grid.svelte';
    import Cell from './grid-system/cell.svelte';
    import { slugify } from '$lib/utils/slugify';

    const missions = [
        'Milestones for success',
        'Developer experience',
        'Infrastructure and scalability',
        'Security and compliance',
        'Reliability and uptime',
        'Networking and latency',
        'Dedicated support',
        "What's next"
    ];
</script>

<div
    class="border-smooth relative h-full border-t bg-gradient-to-b from-[#232325]/70 to-transparent to-20% px-4"
>
    <div class="mx-auto flex w-full max-w-6xl flex-col justify-center">
        <Grid rows={2} bottomBorder>
            <Cell column={2} columnStart={1} class="px-4 pt-12 md:pt-40">
                <h2
                    class="font-aeonik-pro text-title text-primary before:bg-accent text-pretty before:absolute before:left-0 before:mt-1.5 before:h-6 before:w-px md:before:-left-0.25 md:before:mt-2.5 md:before:h-9"
                >
                    Building Appwrite<br /> Cloud for you
                </h2>
            </Cell>

            <Cell column={2} columnStart={3} class="px-4 pt-8 md:pt-40">
                <div class="text-paragraph-lg space-y-8">
                    <p>
                        When we started working on our plans for Appwrite Cloud, we knew we had a
                        hard task ahead of us, as we didn’t want to just be a wrapper on top of AWS
                        or Cloudflare. With no pre-built building blocks, we wanted to customize
                        every piece in the platform to create the most complete developer experience
                        we can imagine.
                    </p>
                    <p class="text-white">
                        We wanted to create a developer experience that rethinks how an idea goes to
                        production and scale, without worries, without limits.
                    </p>
                    <p>
                        Another benefit of this approach is the ability to control the cost of
                        building with Appwrite as we reduce vendor dependency. Making Appwrite’s
                        pricing more accessible as part of our mission.
                    </p>
                    <p>
                        Together with the open-source community, Appwrite Cloud has reached GA.
                        We're excited to share Appwrite Cloud's journey to reach GA with you.
                    </p>
                </div>
            </Cell>

            <Cell columnStart={1} column={2} class="px-4 py-10 md:py-30"
                ><p
                    class="animate-text before:bg-accent text-paragraph-lg ml-4 font-medium text-white before:absolute before:left-4 before:mt-1 before:h-4 before:w-px md:ml-0 md:max-w-3/4 md:before:left-0"
                >
                    To become Generally Available, we set a few milestones that we had to achieve
                    across different factors. Some are easier to measure than others, but never less
                    important.
                </p>
            </Cell>
            <Cell columnStart={3} column={2} class="px-4 py-10 md:py-30">
                <div
                    class="mx-4 grid grid-cols-1 grid-rows-4 gap-x-8 gap-y-4 md:mx-auto md:gap-y-1 lg:grid-flow-col lg:grid-cols-2"
                >
                    {#each missions as mission, i}
                        {@const index = `0${i + 1}`}
                        <a
                            href={`#${slugify(mission)}`}
                            class="group flex items-center gap-3 text-white"
                        >
                            <span
                                class="bg-accent/8 text-caption border-accent/32 relative flex size-6 items-center justify-center overflow-hidden rounded-md border p-3 text-base"
                            >
                                <div
                                    class="from-accent/12 to-accent/8 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></div>
                                {index}</span
                            >
                            <span
                                class="text-body group-hover:decoration-accent group-hover:text-accent text-[1.125rem] font-medium underline transition-colors"
                                >{mission}</span
                            >
                        </a>
                    {/each}
                </div>
            </Cell>
        </Grid>
    </div>
</div>
