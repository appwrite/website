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

    let intervalId: NodeJS.Timeout | null = null; // Store the interval ID

    const cycleCommands = () => {
        if (commands.length === 0) {
            return;
        }

        intervalId = setInterval(() => {
            // Remove the first item and append it to the end
            const firstItem = commands.shift(); // Remove the first item
            if (firstItem !== undefined) {
                commands.push(firstItem); // Append it to the end
            }
            // Create a new array reference to trigger reactivity
            commands = [...commands]; // Spread into a new array
            console.log(commands); // Log the current state of commands
        }, 1500);
    };
    onMount(() => {
        cycleCommands();
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId); // Clear the interval on component destroy
            console.log('Interval cleared.');
        }
    });
</script>

<div class="col-span-12 flex flex-col rounded-2xl bg-white/2 p-2 md:col-span-7">
    <div class="space-y-3 pt-2 px-3 pb-4">
        <h3 class="font-aeonik-pro text-label text-primary">Functions</h3>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Deploy and scale serverless functions <span class="text-secondary"
                >in 30+ secure, isolated runtimes in 13 languages.</span
            >
        </p>
    </div>
    <div
        class="flex h-[26.25rem] items-center justify-between overflow-clip rounded-xl bg-black/24 px-8"
    >
        <div
            class="flex flex-1 flex-col items-center gap-3 text-center [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each commands as command}
                <span class="w-fit rounded-2xl bg-[#232325]/90 py-2 px-4 text-sm text-white"
                    >{command}</span
                >
            {/each}
        </div>
        <div
            class="flex h-full gap-4 [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,0)_100%)] [mask-mode:alpha]"
        >
            {#each Array.from({ length: 3 }) as _, i}
                <div
                    class="animate-vertical-marquee flex flex-col gap-4"
                    class:[animation-direction:reverse]={i % 2}
                >
                    {#each Array.from({ length: 2 }) as _, i}
                        {#each platforms as platform}
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
    </div>
</div>
