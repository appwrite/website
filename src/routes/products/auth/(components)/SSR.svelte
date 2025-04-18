<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { Tooltip } from '$lib/components';
    import { Button } from '$lib/components/ui';
    import { Framework, Platform } from '$lib/utils/references';
    import MultiFrameworkCode from './MultiFrameworkCode.svelte';
    import NextSnippet from './(snippets)/next.txt?raw';
    import SvelteSnippet from './(snippets)/sveltekit.txt?raw';
    import AstroSnippet from './(snippets)/astro.txt?raw';
    import NuxtSnippet from './(snippets)/nuxt.txt?raw';
    import RemixSnippet from './(snippets)/remix.txt?raw';

    const codeSnippets = [
        {
            language: Platform.ClientWeb,
            platform: Framework.NextJs,
            content: NextSnippet
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.SvelteKit,
            content: SvelteSnippet
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Astro,
            content: AstroSnippet
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Nuxt3,
            content: NuxtSnippet
        },
        {
            language: Platform.ClientWeb,
            platform: Framework.Remix,
            content: RemixSnippet
        }
    ];

    const platforms = [
        {
            name: 'Next',
            href: '/docs/quick-starts/nextjs',
            image: `/images/platforms/light/nextjs.svg`
        },
        {
            name: 'Svelte',
            href: '/docs/quick-starts/sveltekit',
            image: `/images/platforms/light/svelte.svg`
        },
        {
            name: 'Nuxt',
            href: '/docs/quick-starts/nuxt',
            image: `/images/platforms/light/nuxt.svg`
        }
    ] as Array<{
        name: string;
        href: string;
        image: string;
    }>;
</script>

<section class="light bg-greyscale-50 py-4 md:py-20">
    <div class="container flex flex-col gap-6 md:flex-row">
        <div class="mb-10 flex max-w-lg flex-col">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 !text-white uppercase"
                >SSR_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro my-4">
                Server-side rendering <br /> made simple
            </h2>
            <p class="text-body text-secondary font-medium">
                Optimize your auth with Appwrite's server-side SDK, enhancing your application's
                performance without sacrificing functionality. Start with our ready-to-ship
                snippets, or follow our quick starts for your favorite framework.
            </p>

            <ul class="mt-8 flex gap-4">
                {#each platforms as platform}
                    <Tooltip>
                        <li>
                            <a
                                href={platform.href}
                                class="platform flex size-14 items-center justify-center rounded-lg bg-white p-2"
                                on:click={() =>
                                    trackEvent({ plausible: { name: `${platform.name} clicked` } })}
                            >
                                <img
                                    src={platform.image}
                                    alt="{platform.name} quick start"
                                    width="32"
                                    height="32"
                                />
                            </a>
                        </li>
                        {#snippet tooltip()}
                            {platform.name}
                        {/snippet}
                    </Tooltip>
                {/each}
            </ul>
            <Button variant="secondary" href="/docs/sdks#server" class="mt-8">Learn more</Button>
        </div>

        <MultiFrameworkCode data={codeSnippets} selected={Framework.NextJs} />
    </div>
</section>

<style>
    .platform {
        box-shadow: 0px 5.35209px 10.7042px rgba(0, 0, 0, 0.02);
        backdrop-filter: blur(16.7253px);
    }
</style>
