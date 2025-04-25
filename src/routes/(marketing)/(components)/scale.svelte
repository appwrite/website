<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import NumberFlow from '@number-flow/svelte';
    import { inView, animate } from 'motion';
    import { onDestroy } from 'svelte';

    const animationDuration = 3;

    let stats = $state([
        {
            number: 0,
            suffix: '+',
            description: 'Regions served',
            top: 93.75
        },
        {
            number: 0,
            suffix: '+ TB',
            description: 'of data served',
            top: 78.25
        },
        {
            number: 0,
            suffix: 'B',
            description: 'requests',
            top: 62.5
        },
        {
            number: 0,
            suffix: 'K',
            description: 'projects',
            top: 46.75
        }
    ]);

    const numbers = [12, 1000, 50, 300];

    let shouldAnimate: boolean = false;

    let timeoutIds: Array<NodeJS.Timeout> = [];

    const useInView = (node: HTMLElement) => {
        shouldAnimate = true;
        inView(
            node,
            () => {
                if (!shouldAnimate) return;
                stats.forEach((stat, index) => {
                    animate(0, numbers[index], {
                        ease: 'circOut',
                        duration: 0.75,

                        onUpdate: (latest) => (stat.number = +latest.toFixed())
                    });
                });
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
    class="border-smooth relative flex min-h-[70vh] flex-col gap-4 border-y bg-black/8 py-20"
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
                <span class="text-accent">“</span>Appwrite has supported our recent growth in every
                step of the way,
                <span class="text-primary">without any failures or outages</span><span
                    class="text-accent">”</span
                >
            </p>
        </div>
    </div>

    <div class="mt-12 block space-y-8 md:hidden">
        {#each stats as stat, i}
            <div class="h-full overflow-auto pl-6">
                <div class={classNames('relative')} style:top={`${(4 - i) * 18}%`}>
                    <span
                        class="text-description text-primary border-accent relative -left-px z-10 border-l pl-4 font-medium"
                        >{stat.number}{stat.suffix}</span
                    >
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
                {#each stats as stat, i}
                    <div
                        class="mask border-smooth h-full overflow-auto border-l"
                        style:--mask-direction="bottom"
                        style:--mask-height={`${(4 - i) * 25}%`}
                    >
                        <div class={classNames('relative')} style:top={`${(4 - i) * 18}%`}>
                            <span
                                class="text-description text-primary border-accent relative -left-px z-10 border-l pl-4 font-medium"
                                >{stat.number}{stat.suffix}</span
                            >
                            <span class="text-body text-secondary block pl-4"
                                >{stat.description}</span
                            >
                        </div>
                    </div>
                {/each}

                <div class="pointer-events-none absolute inset-0 z-50">
                    {#each stats as stat, i}
                        <div
                            class="border-accent absolute top-[var(--top)] left-[calc(var(--left)_+_1px)] h-2 w-2 -translate-1/2 rounded-full border bg-white"
                            style:--top={`${stat.top}%`}
                            style:--left="{i * 25}%"
                        ></div>
                    {/each}
                </div>
            </div>
        </div>
        <div
            class="from-accent/15 absolute inset-0 bg-gradient-to-tr to-transparent"
            style="clip-path: polygon(0 100%, 100% 25%, 100% 100%, 0 100%);"
        ></div>
        <div
            class="from-accent absolute inset-0 bg-gradient-to-r to-transparent"
            style="clip-path: polygon(0 100%, 100% 25%, 100% 25.1%, 0 100.1%);"
        ></div>
    </div>
</div>

{#snippet Graph()}
    <svg
        width="1728"
        height="563"
        viewBox="0 0 1728 563"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1728 1L0 563.5H1728V1Z"
            fill="url(#paint0_linear_941_109375)"
            stroke="url(#paint1_linear_941_109375)"
        />
        <circle cx="264" cy="477" r="4" fill="white" fill-opacity="0.9" stroke="#FD366E" />
        <circle cx="572" cy="377" r="4" fill="white" fill-opacity="0.9" stroke="#FD366E" />
        <circle cx="880" cy="277" r="4" fill="white" fill-opacity="0.9" stroke="#FD366E" />
        <circle cx="1188" cy="177" r="4" fill="white" fill-opacity="0.9" stroke="#FD366E" />
        <defs>
            <linearGradient
                id="paint0_linear_941_109375"
                x1="-467"
                y1="753"
                x2="1787"
                y2="24.5001"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" stop-opacity="0.16" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_941_109375"
                x1="-94"
                y1="578"
                x2="1730.13"
                y2="7.80966"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FD366E" />
                <stop offset="0.214023" stop-color="#FD366E" stop-opacity="0.48" />
                <stop offset="0.7712" stop-color="#FD366E" stop-opacity="0.2" />
                <stop offset="1" stop-color="#FD366E" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
{/snippet}

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
