<script lang="ts">
    import { animate, hover, inView } from 'motion';

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
    import GridPaper from '../../grid-paper.svelte';
    import { isMobile } from '$lib/utils/is-mobile';
    import { classNames } from '$lib/utils/classnames';

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

    const commands = [
        'GenerateReport',
        'SendEmail',
        'UpdateProfile',
        'DeleteAccount',
        'CreateInvoice'
    ];

    let shouldAnimate = $state<boolean>(false);
    let container: HTMLElement;
    let commandQueue: HTMLElement;
    let step: number = $state(0);
    let activeCommand = $state<null | number>(null);

    const FunctionsState = {
        Stale: 0,
        Generate: 1,
        Send: 2,
        Update: 3,
        Delete: 4,
        Create: 5
    } as const;

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;
            shouldAnimate = true;

            return () => {
                shouldAnimate = false;
            };
        });

        inView(container, () => {
            if (!isMobile()) return;
            shouldAnimate = true;

            return () => {
                shouldAnimate = true;
            };
        });

        if (!shouldAnimate) return;

        let timeout: NodeJS.Timeout;
        const timeoutDuration = 2500;
        switch (step) {
            case FunctionsState.Stale:
                timeout = setTimeout(() => {
                    step = FunctionsState.Generate;
                }, timeoutDuration);

                animate(
                    commandQueue,
                    { y: '-20%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => {
                            activeCommand = 13;
                        }
                    }
                );

                return () => clearTimeout(timeout);
            case FunctionsState.Generate:
                timeout = setTimeout(() => {
                    step = FunctionsState.Send;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '20%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 5)
                    }
                );

                return () => clearTimeout(timeout);
            case FunctionsState.Send:
                timeout = setTimeout(() => {
                    step = FunctionsState.Update;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '-10%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 11)
                    }
                );
                return () => clearTimeout(timeout);
            case FunctionsState.Update:
                timeout = setTimeout(() => {
                    step = FunctionsState.Delete;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '0%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 9)
                    }
                );
                return () => clearTimeout(timeout);
            case FunctionsState.Delete:
                timeout = setTimeout(() => {
                    step = FunctionsState.Create;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '30%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 3)
                    }
                );
                return () => clearTimeout(timeout);
            case FunctionsState.Create:
                timeout = setTimeout(() => {
                    step = FunctionsState.Stale;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '50%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 0)
                    }
                );
                return () => clearTimeout(timeout);
            default:
                timeout = setTimeout(() => {
                    step = FunctionsState.Generate;
                }, timeoutDuration);
                animate(
                    commandQueue,
                    { y: '-10%' },
                    {
                        duration: 0.75,
                        delay: 0.25,
                        type: 'spring',
                        onComplete: () => (activeCommand = 9)
                    }
                );
                return () => clearTimeout(timeout);
        }
    });
</script>

<div
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 md:col-span-7"
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
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
        class="relative flex h-105 items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="flex flex-1 flex-col items-center gap-3 overflow-clip [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha] text-center"
        >
            <div class="flex h-max flex-col items-center gap-3 pt-3" bind:this={commandQueue}>
                {#each [...commands, ...commands, ...commands, ...commands] as command, i}
                    <div
                        class="background-gradient text-caption relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent font-mono text-sm text-white"
                        style:--spread="{command.length * 2.25}px"
                        class:active={i === activeCommand && shouldAnimate}
                        aria-hidden={i !== 0}
                    >
                        <div
                            class="h-full w-full rounded-2xl bg-[#232325]/90 px-3 py-1 text-white/80"
                        >
                            {command}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div
            class="relative flex h-full gap-4 overflow-y-clip [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each Array.from({ length: 3 }) as _, i}
                <div class="flex h-max flex-col gap-3 pt-3">
                    {#each Array.from({ length: 4 }) as _}
                        {@const platformShuffled = i === 1 ? platforms.reverse() : platforms}
                        {#each platformShuffled as platform, i}
                            <div
                                class={classNames(
                                    'background-gradient relative flex size-16 shrink-0 items-center justify-center rounded-xl border border-transparent transition-all duration-1000'
                                )}
                                style:--spread="15px"
                                class:platform={shouldAnimate && i === 2}
                            >
                                <div
                                    class="flex h-full w-full items-center justify-center rounded-xl bg-[#232325] text-white/80"
                                >
                                    <img
                                        src={platform}
                                        alt=""
                                        role="presentation"
                                        class="h-10 grayscale"
                                    />
                                </div>
                            </div>
                        {/each}
                    {/each}
                </div>
            {/each}
        </div>

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/13)]" />
    </div>
</div>

<style>
    .background-gradient {
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

    .background-gradient.active {
        animation: badge 750ms linear forwards;
    }

    @keyframes platform {
        0% {
            background-position: 0% center;
        }
        20% {
            background-position: 100% center;
        }
        40% {
            background-position: 100% center;
        }
        80% {
            background-position: 100% center;
        }
        100% {
            background-position: 100% center;
        }
    }

    .background-gradient.platform {
        animation: platform 3000ms linear both infinite;
    }
</style>
