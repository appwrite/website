<script lang="ts">
    import Tooltip from '$lib/components/Tooltip.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';
    import Templates from '../(assets)/templates.png';

    const icons = {
        node: '/images/platforms/nodejs.svg',
        php: '/images/platforms/php.svg',
        ruby: '/images/platforms/ruby.svg',
        python: '/images/platforms/python.svg',
        dart: '/images/platforms/dart.svg',
        bun: '/images/platforms/bun.svg',
        go: '/images/platforms/go.svg'
    } as const;

    const templates = [
        {
            title: 'Prompt ChatGPT',
            description: 'Ask questions and let OpenAI GPT-3.5-turbo answer.',
            runtimes: ['node', 'python', 'php'] as const
        },
        {
            title: 'Subscriptions with Stripe',
            description: 'Receive recurring card payments and grant subscribers extra permissions.',
            runtimes: ['node'] as const
        },
        {
            title: 'Sync with Algolia',
            description: 'Intuitive search bar for any data in Appwrite Databases.',
            runtimes: ['node', 'python'] as const
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            runtimes: ['node'] as const
        },
        {
            title: 'Query MongoDB Atlas',
            description:
                'Realtime NoSQL document database with geospecial, graph, search, and vector suport.',
            runtimes: ['node'] as const
        },
        {
            title: 'WhatsApp with Vonage',
            description: 'Simple bot to answer WhatsApp messages.',
            runtimes: ['node', 'python', 'php', 'dart', 'bun'] as const
        }
    ];
</script>

<section class="light bg-greyscale-50 pt-20 md:pt-40">
    <div class="container flex flex-col justify-between gap-8 md:flex-row">
        <div class="mb-10 flex max-w-sm flex-col">
            <span
                class="web-badges text-eyebrow font-aeonik-fono mr-auto ml-0 !text-white uppercase"
                >Getting Started_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro mt-8 mb-4 text-pretty">
                Add functionality within seconds
            </h2>
            <p class="text-main-body text-secondary block font-medium text-pretty">
                Appwrite offers a wide variety of ready-to-use templates to speed up development.
            </p>
        </div>

        <div
            class="w-[200%] rounded-3xl border border-black/8 bg-gradient-to-br from-black/6 via-black/4 via-[61%] to-black/6 p-2 md:w-full"
        >
            <img class="rounded-xl" src={Templates} alt="Templates console" />
        </div>
    </div>

    <div class="container mt-20 space-y-8">
        <div class="flex items-center justify-between">
            <h2 class="text-label text-primary font-aeonik-pro">Explore templates</h2>
            <Button
                variant="secondary"
                href="/docs/products/functions/templates"
                class="!hidden md:!block">View all templates</Button
            >
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            {#each templates as template, i}
                {@const baseRuntimes = template.runtimes.slice(0, 2)}
                {@const hiddenRuntimes = template.runtimes.slice(2)}
                <div
                    class={cn('flex-col gap-2 rounded-2xl border border-black/8 bg-white p-4', {
                        'hidden md:flex': i > 3
                    })}
                >
                    <div class="flex w-full items-center justify-between">
                        <span class="text-sub-body text-primary font-medium">{template.title}</span>
                        <ul class="flex h-12 gap-1">
                            {#each baseRuntimes as runtime}
                                <li
                                    class="border-smooth -ml-3 flex size-8 items-center justify-center rounded-full border bg-white"
                                >
                                    <img src={icons[runtime]} alt={runtime} class="size-5" />
                                </li>
                            {/each}
                            {#if hiddenRuntimes.length > 0}
                                <Tooltip>
                                    <li
                                        class="border-smooth -ml-3 flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white"
                                    >
                                        <span class="text-eyebrow text-secondary font-medium">
                                            +{hiddenRuntimes.length}
                                        </span>
                                    </li>
                                    {#snippet tooltip()}
                                        <span class="text-eyebrow">{hiddenRuntimes.join(', ')}</span
                                        >
                                    {/snippet}
                                </Tooltip>
                            {/if}
                        </ul>
                    </div>
                    <p class="text-sub-body text-secondary line-clamp-2">{template.description}</p>
                </div>
            {/each}

            <Button
                variant="secondary"
                href="/docs/products/functions/templates"
                class="block !w-full md:!hidden md:!w-fit">View all templates</Button
            >
        </div>
    </div>
</section>
