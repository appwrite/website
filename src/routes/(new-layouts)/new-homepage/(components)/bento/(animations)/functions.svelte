<script lang="ts">
    import { hover, inView } from 'motion';

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
    let step: number = $state(0);

    const FunctionsState = {
        Stale: 0,
        Generate: 1,
        Send: 2,
        Update: 3,
        Delete: 4,
        Create: 5
    } as const;

    // $effect(() => {
    //     let timeout: NodeJS.Timeout;
    //     switch (step) {
    //         case FunctionsState.Stale:
    //             console.log('stale');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Generate;
    //             }, 500);
    //             return () => clearTimeout(timeout);
    //         case FunctionsState.Generate:
    //             console.log('generate');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Send;
    //             }, 2000);
    //             return () => clearTimeout(timeout);
    //         case FunctionsState.Send:
    //             console.log('send');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Update;
    //             }, 1000);
    //             return () => clearTimeout(timeout);
    //         case FunctionsState.Update:
    //             console.log('update');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Delete;
    //             }, 200);
    //             return () => clearTimeout(timeout);
    //         case FunctionsState.Delete:
    //             console.log('delete');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Create;
    //             }, 100);
    //             return () => clearTimeout(timeout);
    //         case FunctionsState.Create:
    //             console.log('create');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Stale;
    //             }, 800);
    //             return () => clearTimeout(timeout);
    //         default:
    //             console.log('stale');
    //             timeout = setTimeout(() => {
    //                 step = FunctionsState.Generate;
    //             }, 3000);
    //             return () => clearTimeout(timeout);
    //     }
    // });
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
            class="flex flex-1 flex-col items-center gap-3 overflow-clip mask-t-from-0% mask-t-to-5% mask-linear-180 mask-alpha text-center"
        >
            <div class="flex h-max flex-col items-center gap-3 pt-3">
                {#each Array.from({ length: 2 }) as _, index}
                    {#each commands as command, i}
                        <div
                            class="command-item text-caption relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent font-mono text-sm text-white"
                            style:--spread="{command.length * 2.25}px"
                            aria-hidden={index !== 0}
                        >
                            <div
                                class="h-full w-full rounded-2xl bg-[#232325]/90 px-3 py-1 text-white/80"
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
            {#each Array.from({ length: 3 }) as _, i}
                <div class="flex h-max flex-col gap-3 pt-3">
                    {#each Array.from({ length: 2 }) as _, index}
                        {@const platformShuffled = i === 1 ? platforms.reverse() : platforms}
                        {#each platformShuffled as platform}
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

        <GridPaper class="absolute inset-0 bg-size-[calc(100%/13)]" />
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
