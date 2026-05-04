<script lang="ts">
    import TheAppwriteNetwork from '$lib/components/appwrite-network/map.svelte';
    import { Button } from '$lib/components/ui';
    import { cn } from '$lib/utils/cn';

    type Props = {
        theme?: 'light' | 'dark';
    };

    const { theme = 'light' }: Props = $props();
</script>

<div class={cn('border-smooth -mt-6 border-b pt-12 pb-12 md:py-32', theme)}>
    <div class="flex flex-col items-center text-center">
        <div
            class="flex w-full max-w-[90%] flex-col items-center gap-10 pb-0 md:max-w-[75%] md:gap-14 md:pb-1 lg:max-w-[52%]"
        >
            <h2 class="text-primary font-aeonik-pro text-title">
                The Appwrite Network<span class="text-accent">_</span>
            </h2>

            <p class="text-description text-secondary text-pretty font-medium">
                Built into <span class="underline underline-offset-4">every Appwrite project</span> -
                backend APIs, serverless functions, and hosted
                websites - with requests and assets served through our CDN and DDoS protection at the
                network edge. Choose global regions and edges to optimize latency, compliance, and
                data residency.
            </p>

            <ul
                class={cn(
                    'text-caption text-primary border-smooth flex list-none flex-wrap items-center justify-center gap-2 rounded-full border border-dashed px-3 py-2 font-medium backdrop-blur-sm md:gap-3 md:px-4',
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
    <div class="mt-10 flex justify-center md:mt-16">
        <Button variant="secondary" href="/docs/products/network"
            >More about the Appwrite Network</Button
        >
    </div>
</div>
