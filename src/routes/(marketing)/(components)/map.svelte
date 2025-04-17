<script lang="ts">
    import TheAppwriteNetwork from '$lib/components/appwrite-network/map.svelte';
    import { Button } from '$lib/components/ui';
</script>

<div class="py-10">
    <div class="mb-12 flex flex-col items-center gap-6 text-center">
        <h2 class="text-primary font-aeonik-pro text-5xl">
            The Appwrite Network<span class="text-accent">_</span>
        </h2>
        <p class="text-description text-secondary max-w-[50%]">
            Pick one of our many cloud regions or edges to meet your project's needs and reduce
            latency.
        </p>
        <Button variant="secondary">More about the Appwrite Network</Button>
    </div>
    <TheAppwriteNetwork />
</div>
