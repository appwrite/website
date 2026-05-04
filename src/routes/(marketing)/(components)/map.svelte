<script lang="ts">
    import TheAppwriteNetwork from '$lib/components/appwrite-network/map.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    type Props = {
        theme?: 'light' | 'dark';
    };

    const { theme = 'light' }: Props = $props();
</script>

<div
    class={cn(
        'border-smooth -mt-6 border-b pt-10 pb-10 sm:pt-12 sm:pb-12 md:py-24 lg:py-28',
        theme
    )}
>
    <div class="flex flex-col items-center px-4 text-center sm:px-6 lg:px-0">
        <div
            class="flex w-full max-w-[min(100%,40rem)] flex-col items-center gap-8 pb-5 sm:max-w-[90%] md:max-w-[75%] md:gap-10 md:pb-0 lg:max-w-[52%] lg:gap-12"
        >
            <h2 class="text-primary font-aeonik-pro text-title">
                The Appwrite Network<span class="text-accent">_</span>
            </h2>

            <p class="text-description text-secondary text-pretty font-medium">
                Built into every Appwrite project -
                backend APIs, serverless functions, and hosted
                websites - with requests and assets served through our CDN and DDoS protection at the
                network edge. Choose global regions and edges to optimize latency, compliance, and
                data residency.
            </p>

            <ul
                class={cn(
                    'text-caption text-primary border-smooth flex max-w-full list-none flex-wrap items-center justify-center gap-2 rounded-full border border-dashed px-2.5 py-2 font-medium backdrop-blur-sm sm:px-3 md:gap-3 md:px-4',
                    theme === 'dark'
                        ? 'border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
                        : 'bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
                )}
                aria-label="Included with every Appwrite project"
            >
                <li
                    class={cn('rounded-full px-3 py-1', {
                        'bg-white/10 shadow-none': theme === 'dark',
                        'bg-white/90 shadow-sm': theme === 'light'
                    })}
                >
                    Built-in CDN
                </li>
                <li
                    class={cn('rounded-full px-3 py-1', {
                        'bg-white/10 shadow-none': theme === 'dark',
                        'bg-white/90 shadow-sm': theme === 'light'
                    })}
                >
                    DDoS protection
                </li>
            </ul>
        </div>
    </div>
    <TheAppwriteNetwork {theme} flushTop />
    <div
        class="mt-8 flex w-full justify-center px-4 sm:mt-10 sm:px-6 md:mt-12 lg:mt-14 lg:px-0"
    >
        <Button
            class="w-full max-w-sm sm:w-auto"
            variant="secondary"
            href="/docs/products/network">More about the Appwrite Network</Button
        >
    </div>
</div>
