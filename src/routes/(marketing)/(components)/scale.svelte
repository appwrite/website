<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { onDestroy, type Snippet } from 'svelte';

    const animationDuration = 3;

    type Props = {
        theme?: 'light' | 'dark';
        testimonial?: {
            name: string;
            title: string;
            image: string;
            company: string;
        };
        children: Snippet;
        stats?: Array<{ number: number; suffix: string; description: string }>;
    };

    let {
        theme = 'light',
        testimonial,
        children,
        stats = [
            {
                number: 12,
                suffix: '+',
                description: 'Regions served'
            },
            {
                number: 1000,
                suffix: '+ TB',
                description: 'of data served'
            },
            {
                number: 50,
                suffix: 'B',
                description: 'requests'
            },
            {
                number: 300,
                suffix: 'K',
                description: 'projects'
            }
        ]
    }: Props = $props();

    let localStats = $state(stats.map((stat) => ({ ...stat, number: 0 })));
    const originalNumbers = stats.map((stat) => stat.number);

    const updateNumbers = () => {
        localStats.forEach((stat, index) => {
            const timeoutId = setTimeout(
                () => {
                    localStats[index].number = originalNumbers[index];
                },
                ((index * animationDuration) / localStats.length) * 600
            );

            timeoutIds.push(timeoutId);
        });
    };

    let timeoutIds: Array<NodeJS.Timeout> = [];

    const visible = (node: HTMLElement) => {
        inView(
            node,
            () => {
                updateNumbers();
            },
            { amount: 0.75 }
        );
    };

    const clearAllTimeouts = () => {
        timeoutIds.forEach((timeoutId) => {
            clearTimeout(timeoutId);
        });

        timeoutIds = [];
    };

    onDestroy(() => {
        clearAllTimeouts();
    });
</script>

<div
    class={classNames('relative -mb-8 flex min-h-[700px] flex-col gap-4 py-12', theme)}
    use:visible
>
    <div class="relative z-10 container w-fit md:w-full">
        <div class="mt-12 max-w-xl">
            <h2 class="text-primary font-aeonik-pro text-5xl tracking-tighter text-pretty">
                Thousands of developers <span class="text-secondary">scale with Appwrite</span><span
                    class="text-accent">_</span
                >
            </h2>
            <p class="text-secondary border-accent mt-5 border-l-2 pr-28 pl-2 font-medium">
                <span class="text-accent">“</span>{@render children()}<span class="text-accent"
                    >”</span
                >
            </p>

            {#if testimonial}
                <div class="mt-4 flex items-center gap-3">
                    <img
                        src={testimonial.image}
                        class="size-6 rounded-full"
                        alt="{testimonial.company} Logo"
                    />
                    <div class="flex gap-1">
                        <span class="text-primary text-sub-body block font-medium">
                            {testimonial.name},
                        </span>
                        <span class="text-sub-body text-secondary block font-medium"
                            >{testimonial.title} at {testimonial.company}</span
                        >
                    </div>
                </div>
            {/if}
        </div>
    </div>

    <div class="mt-12 block space-y-8 md:hidden">
        {#each localStats as stat, i}
            <div class="h-full overflow-auto pl-6">
                <div class="relative">
                    <NumberFlow
                        class="text-description text-primary border-accent relative -left-px z-10 border-l pl-4 font-medium"
                        value={stat.number}
                        suffix={stat.suffix}
                    />
                    <span class="text-body text-secondary block pl-4">{stat.description}</span>
                </div>
            </div>
        {/each}
    </div>

    <div class="animate-wipe-in absolute inset-0 mt-32 hidden md:block">
        <div class="relative container mx-auto h-full">
            <div class="absolute inset-0 z-100 grid grid-cols-4">
                {#each localStats as stat, i}
                    <div class="border-smooth relative h-full overflow-auto border-l">
                        <div class="absolute bottom-0">
                            <NumberFlow
                                class="text-description text-primary border-accent relative z-100 border-l pl-4 font-medium"
                                value={stat.number}
                                suffix={stat.suffix}
                            />
                            <span class="text-body text-secondary block pl-4">
                                {stat.description}
                            </span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="from-accent/15 absolute inset-0 bg-gradient-to-tr to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_100%,_0_100%)]"
        ></div>
        <div
            class="from-accent absolute inset-0 bg-gradient-to-r to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_25.1%,_0_100.1%)]"
        ></div>
    </div>
</div>
