<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { onDestroy, type Snippet } from 'svelte';

    const animationDuration = 3;

    let alternateStats = [
        {
            number: 0,
            suffix: 'K+',
            description: 'Github stars'
        },
        {
            number: 0,
            suffix: '+',
            description: 'PoP locations'
        },
        {
            number: 0,
            suffix: 'K+',
            description: 'developers'
        },
        {
            number: 0,
            suffix: 'B+',
            description: 'monthly database operations'
        }
    ];

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
                ((index * animationDuration) / localStats.length) * 800
            );

            timeoutIds.push(timeoutId);
        });
    };

    let animate: boolean = false;
    let timeoutIds: Array<NodeJS.Timeout> = [];

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate = true;
                updateNumbers();
            },
            { amount: 0.5 }
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
    class={classNames(
        'relative flex min-h-[70vh] flex-col gap-4',
        theme === 'dark' ? 'border-smooth border-y bg-black/8 py-20' : ''
    )}
    use:useInView
>
    <div class="relative z-10 container w-fit md:w-full">
        <div class="max-w-xl">
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
                        <span class="text-sub-body text-secondary block"
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
                <div class={classNames('relative')} style:top={`${(4 - i) * 18}%`}>
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

    <div
        class="swipe mask absolute inset-0 hidden md:block"
        style:--animation-duration={`${animationDuration}s`}
        style:--mask-height="50px"
    >
        <div class="relative container h-full">
            <div class="absolute inset-0 z-100 grid grid-cols-4">
                {#each localStats as stat, i}
                    <div
                        class="mask border-smooth h-full overflow-auto border-l"
                        style:--mask-direction="bottom"
                        style:--mask-height={`${(4 - i) * 25}%`}
                    >
                        <div class={classNames('relative')} style:top={`${(4 - i) * 18}%`}>
                            <NumberFlow
                                class="text-description text-primary border-accent relative -left-px z-10 border-l pl-4 font-medium"
                                value={stat.number}
                                suffix={stat.suffix}
                            />
                            <span class="text-body text-secondary block pl-4"
                                >{stat.description}</span
                            >
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

<style>
    .swipe {
        animation: wipe-in var(--animation-duration) ease-in-out;
    }

    @keyframes mask-wipe {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes wipe-in {
        0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
        }
        100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
    }
</style>
