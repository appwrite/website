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

    let container: HTMLElement;
    let platformQueue: HTMLElement;

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;

            animate(
                '.platforms',
                { y: 'var(--y)' },
                {
                    duration: 60,
                    ease: 'linear'
                }
            );

            return () => {
                animate(
                    '.platforms',
                    { y: 'var(--y-start)' },
                    {
                        duration: 1,
                        ease: 'easeOut',
                        type: 'spring'
                    }
                );
            };
        });

        inView(container, () => {
            if (!isMobile()) return;

            animate(
                '.platforms',
                { y: 'var(--y)' },
                {
                    duration: 60,
                    ease: 'linear'
                }
            );

            return () => {
                animate(
                    '.platforms',
                    { y: 'var(--y-start)' },
                    {
                        duration: 1,
                        ease: 'easeOut',
                        type: 'spring'
                    }
                );
            };
        });
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
            class="flex flex-1 flex-col items-center gap-3 overflow-clip mask-linear-[to_top,_transparent_0%,_white_50%,_transparent_100%] mask-alpha text-center"
        >
            <div class="flex h-max flex-col items-center gap-3 pt-3">
                {#each commands as command, i}
                    <div
                        class="text-caption relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent font-mono text-sm text-white"
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
            class="relative flex h-full gap-4 overflow-clip mask-linear-[to_top,_transparent_0%,_white_50%,_transparent_100%] mask-alpha"
        >
            {#each Array.from({ length: 3 }) as _, i}
                {@const index = i + 1}
                <div
                    class={classNames('platforms flex h-max flex-col gap-3 pt-3', {
                        'hidden md:flex': index === 3
                    })}
                    style:--y={index % 2 ? '-50%' : '20%'}
                    style:--y-start={index % 2 ? 'none' : '-70%'}
                    style:transform={index % 2 ? 'translateY(none)' : 'translateY(-70%)'}
                >
                    {#each Array.from({ length: 4 }) as _}
                        {#each platforms as platform, i}
                            <div
                                class={classNames(
                                    'relative flex size-16 shrink-0 items-center justify-center rounded-xl border border-transparent transition-all duration-1000'
                                )}
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
