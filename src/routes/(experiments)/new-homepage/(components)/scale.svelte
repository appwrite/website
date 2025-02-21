<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import NumberFlow from '@number-flow/svelte';
    import { inView } from 'motion';
    import { onDestroy } from 'svelte';

    const animationDuration = 3;

    let stats = [
        {
            number: 0,
            suffix: '+',
            description: 'Regions served'
        },
        {
            number: 0,
            suffix: 'TB',
            description: 'of data served'
        },
        {
            number: 0,
            suffix: 'M',
            description: 'end users'
        },
        {
            number: 0,
            suffix: '+',
            description: 'total compute time'
        }
    ];

    const numbers = [12, 900, 1, 999];

    let animate: boolean = false;

    let timeoutIds: Array<NodeJS.Timeout> = [];
    const updateNumbers = () => {
        stats.forEach((stat, index) => {
            const timeoutId = setTimeout(
                () => {
                    stats[index] = { ...stat, number: numbers[index] };
                },
                ((index * animationDuration) / numbers.length) * 1000
            );

            timeoutIds.push(timeoutId);
        });
    };

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
    class="light relative flex min-h-[70vh] w-full flex-col gap-4 overflow-hidden bg-[#EDEDF0] py-20"
    use:useInView
>
    <div class="container relative z-10 w-full">
        <div class="max-w-xl">
            <h2 class="text-primary font-aeonik-pro text-5xl tracking-tighter">
                Thousands of developers <span class="text-secondary">scale with Appwrite</span><span
                    class="text-accent">_</span
                >
            </h2>
            <p class="text-secondary border-accent mt-5 border-l-2 pr-28 pl-2 font-medium">
                <span class="text-accent">“</span>Appwrite has supported our recent growth in every
                step of the way,
                <span class="text-primary">without any failures or outages</span><span
                    class="text-accent">”</span
                >
            </p>
        </div>
    </div>

    <div class="swipe absolute inset-0" style:--animation-duration={`${animationDuration}s`}>
        <div class="container relative h-full">
            <div class="absolute inset-0 z-100 grid grid-cols-4">
                {#each stats as stat, i}
                    <div
                        class="mask h-full border-l border-dashed border-black/10"
                        style:--mask-direction="bottom"
                        style:--mask-height={`${(4 - i) * 25}%`}
                        style:--after-top={`140px`}
                    >
                        <div
                            class={classNames(
                                'relative',
                                'after:border-accent after:absolute after:top-[var(--after-top)] after:size-2 after:rounded-full after:border after:bg-white'
                            )}
                            style:top={`${(4 - i) * 18}%`}
                        >
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
        />
        <div
            class="from-accent absolute inset-0 bg-gradient-to-r to-transparent [clip-path:polygon(0_100%,_100%_25%,_100%_25.1%,_0_100.1%)]"
        />
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
