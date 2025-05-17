<script lang="ts">
    import { Button, Icon } from '$lib/components/ui/index.js';
    import Map from '$lib/components/appwrite-network/map.svelte';

    const heading = 'The Appwrite Network';
</script>

<div class="relative flex max-w-screen flex-col gap-8 overflow-hidden">
    <div class="container mt-20 flex flex-col items-center gap-8">
        <div class="flex flex-col gap-4">
            <h1
                class="font-aeonik-pro mx-auto inline-block pt-12 text-center text-[48px] leading-[52px] font-normal tracking-[-0.96px] text-[color:var(--primary,#19191C)]"
            >
                {heading}
            </h1>

            <p class="subtitle font-aeonik-pro">
                Pick one of our many cloud regions or edges to meet your
                <br />project's needs and reduce latency.
            </p>
        </div>

        <Button variant="secondary" href="/blog/post/the-appwrite-network"
            >More about the Appwrite Network
            <Icon name="arrow-right" class="transition group-hover:translate-x-0.5" />
        </Button>
    </div>

    <div class="mt-8 mb-20">
        <Map theme="light" />
    </div>
</div>

<style lang="scss">
    .subtitle {
        color: var(--secondary, #56565c);
        text-align: center;

        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 140% */
        letter-spacing: -0.28px;
    }
</style>
