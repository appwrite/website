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
    class="border-smooth relative flex min-h-[750px] flex-col gap-4 border-y bg-black/8 py-20"
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
                <span class="text-accent">"</span>Appwrite has supported our recent growth in every
                step of the way,
                <span class="text-primary">without any failures or outages</span><span
                    class="text-accent">"</span
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
        class="swipe absolute inset-0 hidden md:block"
        style:--animation-duration={`${animationDuration}s`}
    >
        <div class="relative container h-full">
            <div class="absolute inset-0 z-100 grid grid-cols-4">
                {#each stats as stat, i}
                    <div
                        class="border-smooth h-full overflow-auto border-l border-dashed [mask-image:_linear-gradient(to_bottom,_transparent,_black_var(--mask-height),_black_calc(100%_-_var(--mask-height)),_black)]"
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
            </div>
        </div>

        {#each stats as _}
            <div
                class="border-accent absolute top-0 h-2 w-2 rounded-full border bg-white"
                style:offset-path="path('M1728 186L0 749.5')"
                style:offset-distance="40%"
            ></div>
        {/each}

        <svg
            class="absolute bottom-0 h-auto w-full"
            fill="none"
            viewBox="0 0 1728 563"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path d="M0 563.5L1728 1V563.5H0Z" fill="url(#b)" stroke="url(#a)" />
            <defs>
                <linearGradient
                    id="b"
                    x1="-467"
                    x2="1787"
                    y1="753"
                    y2="24.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FD366E" stop-opacity=".16" offset="0" />
                    <stop stop-color="#FD366E" stop-opacity="0" offset="1" />
                </linearGradient>
                <linearGradient
                    id="a"
                    x1="-94"
                    x2="1730.1"
                    y1="578"
                    y2="7.8097"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FD366E" offset="0" />
                    <stop stop-color="#FD366E" stop-opacity=".48" offset=".21402" />
                    <stop stop-color="#FD366E" stop-opacity=".2" offset=".7712" />
                    <stop stop-color="#FD366E" stop-opacity="0" offset="1" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</div>

<style>
    .swipe {
        animation: wipe-in var(--animation-duration) ease-in-out;
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
