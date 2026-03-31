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
    <div class="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 class="text-primary font-aeonik-pro text-title">
            The Appwrite Network<span class="text-accent">_</span>
        </h2>
        <p
            class="text-description text-secondary max-w-[90%] font-medium md:max-w-[75%] lg:max-w-[40%]"
        >
            Pick one of our many cloud regions or edges to meet your project's needs and reduce
            latency.
        </p>
        <Button variant="secondary" href="/the-appwrite-network" class="network-map-cta"
            >More about the Appwrite Network</Button
        >
    </div>
    <TheAppwriteNetwork {theme} />
</div>

<style lang="scss">
    :global(.network-map-cta.web-button.is-secondary) {
        background: hsl(var(--web-color-button-primary) / 0.16);
        color: hsl(var(--web-color-button-primary));
        border: 1px solid hsl(var(--web-color-button-primary) / 0.42);
    }

    :global(.network-map-cta.web-button.is-secondary:hover) {
        background: hsl(var(--web-color-button-primary) / 0.22);
    }

    :global(.network-map-cta.web-button.is-secondary:focus-visible) {
        box-shadow: 0 0 0 4px hsl(var(--web-color-button-primary) / 0.24);
    }
</style>
