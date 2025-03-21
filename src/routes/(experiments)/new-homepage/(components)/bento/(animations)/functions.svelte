<script lang="ts">
    import { onMount } from 'svelte';
    import { animate, hover, inView, type AnimationSequence } from 'motion';

    import Python from '../../../(assets)/icons/python.svg';
    import Node from '../../../(assets)/icons/node.svg';
    import Javascript from '../../../(assets)/icons/javascript.svg';
    import Flutter from '../../../(assets)/icons/flutter.svg';
    import Kotlin from '../../../(assets)/icons/kotlin.svg';
    import Apple from '../../../(assets)/icons/apple.svg';
    import Android from '../../../(assets)/icons/android.svg';
    import Dart from '../../../(assets)/icons/dart.svg';
    import Php from '../../../(assets)/icons/php.svg';
    import Ruby from '../../../(assets)/icons/ruby.svg';
    import Deno from '../../../(assets)/icons/deno.svg';
    import Swift from '../../../(assets)/icons/swift.svg';
    import Net from '../../../(assets)/icons/net.svg';
    import Go from '../../../(assets)/icons/go.svg';
    import React from '../../../(assets)/icons/react.svg';
    import { isMobile } from '$lib/utils/is-mobile';

    const platforms = [
        Python,
        Node,
        Javascript,
        Flutter,
        Kotlin,
        Apple,
        Android,
        Dart,
        Php,
        Ruby,
        Deno,
        Swift,
        Net,
        Go,
        React
    ];

    let commands = [
        'GenerateReport',
        'SendEmail',
        'UpdateProfile',
        'DeleteAccount',
        'CreateInvoice'
    ];

    let activeCommand: number | null = null;

    const seededShuffle = <T,>(array: T[], seed: number) => {
        const shuffledArray = [...array];

        const random = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(random(seed + i) * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    };

    let container: HTMLElement;

    const marqueeCount: number = 3;
    let marqueeRefs: Array<HTMLElement> = Array.from({ length: marqueeCount });

    let commandElement: HTMLElement;

    onMount(() => {
        const platformsTo: AnimationSequence = [];

        for (let marqueeIndex = 0; marqueeIndex < marqueeCount; marqueeIndex++) {
            const isMiddleMarquee = marqueeIndex === 1;
            const direction = isMiddleMarquee ? 1 : -1;

            Array.from({ length: platforms.length + 1 }).forEach((_, index) => {
                const yValue = `${(direction * (index * 50)) / platforms.length}%`;

                platformsTo.push([
                    marqueeRefs[marqueeIndex],
                    { y: yValue },
                    {
                        at: index + 0.25,
                        type: 'spring',
                        duration: 0.5
                    }
                ]);
            });
        }

        const commandsTo: AnimationSequence = [];

        Array.from({ length: commands.length + 1 }).forEach((_, index) => {
            const yValue = `-${(index * 50) / commands.length}%`;
            commandsTo.push([
                commandElement,
                { y: yValue },
                { at: index, type: 'spring', duration: 0.5 }
            ]);

            const centerItemIndex = index + 2;

            if (index < commands.length) {
                const commandItemElements = document.querySelectorAll('.command-item');

                commandsTo.push([
                    commandItemElements[centerItemIndex],
                    {
                        backgroundPosition: ['0% center', '100% center']
                    },
                    { at: index + 0.4, duration: 0.8, ease: 'backOut' }
                ]);

                commandsTo.push([
                    commandItemElements[centerItemIndex],
                    {
                        backgroundColor: 'transparent',
                        boxShadow: 'none'
                    },
                    { at: index + 1, duration: 0.3, ease: 'easeOut' }
                ]);
            }
        });

        hover(container, () => {
            const interval = setInterval(
                () => {
                    activeCommand = activeCommand ? (activeCommand + 1) % commands.length : 3;
                },
                2000 + commands.length * 100
            );

            const platformsAnimation = animate(platformsTo, {
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                duration: platforms.length * 2.5
            });

            const commandAnimation = animate(commandsTo, {
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                duration: commands.length * 2.5
            });

            return () => {
                activeCommand = null;
                clearInterval(interval);
                platformsAnimation.pause();
                commandAnimation.pause();
            };
        });

        console.log({ platformsTo, commandsTo });
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
    bind:this={container}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <div class="flex items-center gap-2">
            <img
                src="/images/icons/illustrated/dark/functions.png"
                alt="Functions"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Functions</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Deploy and scale serverless functions <span class="text-secondary"
                >in 30+ secure, isolated runtimes in 13 languages.</span
            >
        </p>
    </div>
    <div
        class="relative flex h-[26.25rem] items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="flex flex-1 flex-col items-center gap-3 overflow-clip text-center [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
            style:max-height={`calc(${platforms.length} * var(--spacing-4))`}
        >
            <div
                class="flex h-[max-content] flex-col items-center gap-3 pt-3"
                bind:this={commandElement}
            >
                {#each Array.from({ length: 2 }) as _, index}
                    {#each commands as command, i}
                        <div
                            class="command-item text-caption relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent font-mono text-sm text-white"
                            style:--spread="{command.length * 2.25}px"
                            aria-hidden={index !== 0}
                        >
                            <div
                                class="h-full w-full rounded-2xl bg-[#232325]/90 py-1 px-3 text-white/80"
                            >
                                {command}
                            </div>
                        </div>
                    {/each}
                {/each}
            </div>
        </div>
        <div
            class="relative flex h-full gap-4 overflow-clip [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each Array.from({ length: marqueeCount }) as _, i}
                {@const shuffledPlatforms = seededShuffle(platforms, i * i)}
                <div class="flex h-[max-content] flex-col gap-3 pt-3" bind:this={marqueeRefs[i]}>
                    {#each Array.from({ length: 2 }) as _, index}
                        {#each shuffledPlatforms as platform}
                            <div
                                class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#232325]/90"
                                aria-hidden={index !== 0}
                            >
                                <img
                                    src={platform}
                                    alt=""
                                    role="presentation"
                                    class="h-10 grayscale"
                                />
                            </div>
                        {/each}
                    {/each}
                </div>
            {/each}
        </div>

        <div
            class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
        />
    </div>
</div>

<style>
    .command-item {
        --base-color: transparent;
        --base-gradient-color: white;

        --gradient: linear-gradient(
            -90deg,
            #0000 calc(50% - var(--spread)),
            var(--base-gradient-color),
            #0000 calc(50% + var(--spread))
        );
        background: var(--gradient), linear-gradient(var(--base-color), var(--base-color));
        background-size:
            250% 150%,
            auto;
    }

    @keyframes badge {
        from {
            background-position: 0% center;
        }
        to {
            background-position: 100% center;
        }
    }
</style>
