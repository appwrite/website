<script lang="ts">
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
    import { onMount, onDestroy } from 'svelte';
    import { flip } from 'svelte/animate';
    import { quadInOut } from 'svelte/easing';

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

    let intervalId: NodeJS.Timeout | null = null;
    let animate: boolean = false;

    const cycleCommands = () => {
        if (commands.length === 0 || !animate) {
            return;
        }

        intervalId = setInterval(() => {
            const firstItem = commands.shift();
            if (firstItem !== undefined) {
                commands.push(firstItem);
            }

            commands = [...commands];
        }, 2000);
    };

    onMount(() => {
        cycleCommands();
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
    on:mouseover={() => (animate = true)}
    on:mouseleave={() => (animate = false)}
>
    <div class="space-y-3 pt-2 px-3 pb-4">
        <h3 class="font-aeonik-pro text-label text-primary">Functions</h3>
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
            class="flex flex-1 flex-col items-center gap-3 text-center [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each commands as command, i (command)}
                <div
                    class="text-caption relative w-fit overflow-hidden rounded-2xl border border-transparent font-mono text-sm text-white"
                    class:active={i === 2}
                    class:animate
                    style:--spread="{command.length * 2.25}px"
                    animate:flip={{
                        easing: quadInOut,
                        duration: animate ? 500 : 0
                    }}
                >
                    <div class="h-full w-full rounded-2xl bg-[#232325]/90 py-1 px-3 text-white/80">
                        {command}
                    </div>
                </div>
            {/each}
        </div>

        <svg width="165" height="2" class="mr-2 -ml-20 transition" class:opacity-0={!animate}>
            <defs>
                <linearGradient id="movingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:white; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:white; stop-opacity:0" />
                </linearGradient>
            </defs>

            <rect width="175" height="2" fill="url(#movingGradient)">
                <animate attributeName="x" from="175" to="-175" dur="2s" repeatCount="indefinite" />
            </rect>
        </svg>

        <div
            class="relative flex h-full gap-4 [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each Array.from({ length: 3 }) as _, i}
                {@const shuffledPlatforms = seededShuffle(platforms, i + 1)}
                <div
                    class="animate-vertical-marquee flex flex-col gap-4"
                    class:[animation-direction:reverse]={i % 2}
                    class:[animation-play-state:paused]={!animate}
                >
                    {#each Array.from({ length: 2 }) as _, i}
                        {#each shuffledPlatforms as platform}
                            <div
                                aria-hidden={i === 1 ? 'true' : 'false'}
                                class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#232325]/90"
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
    .active.animate {
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
        animation: badge 1.5s forwards 0.5s ease-in-out;
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
