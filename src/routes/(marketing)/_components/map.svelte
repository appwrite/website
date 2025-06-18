<script lang="ts">
    import TheAppwriteNetwork from '$lib/components/appwrite-network/map.svelte';
    import { Button } from '$lib/components/ui';
    import { classNames } from '$lib/utils/classnames';

    type Props = {
        theme?: 'light' | 'dark';
    };

    const { theme = 'light' }: Props = $props();
</script>

<div class={classNames('border-smooth -mt-6 border-b pb-12 md:py-32', theme)}>
    <div class="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 class="text-primary font-aeonik-pro text-5xl">
            The Appwrite Network<span class="text-accent">_</span>
        </h2>
        <p
            class="text-description text-secondary max-w-[90%] font-medium md:max-w-[75%] lg:max-w-[40%]"
        >
            Pick one of our many cloud regions or edges to meet your project's needs and reduce
            latency.
        </p>
        <Button variant="secondary" href="/the-appwrite-network"
            >More about the Appwrite Network</Button
        >
    </div>
    <TheAppwriteNetwork {theme} />
</div>
