<script lang="ts">
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';

    const items = [
        {
            title: '650k+',
            description: 'Community members'
        },
        {
            title: '45k+',
            description: 'GitHub stars'
        },
        { title: '900+', description: 'OSS Contributors' },
        { title: '300', description: 'Top OSS GitHub projects' }
    ];
</script>

<div class="border-smooth mb-0 border-y py-32">
    <div class="container space-y-24">
        <div class="mx-auto flex max-w-2xl flex-col gap-4 text-center">
            <span class="font-aeonik-fono tracking-loose text-micro text-primary uppercase">
                Why Appwrite?<span class="text-accent">_</span>
            </span>
            <h2 class="text-primary font-aeonik-pro text-title">
                Partner with one of the fastest growing dev tool companies
            </h2>
            <p class="text-body text-secondary font-medium">
                Everyday thousands of companies are built on top of Appwrite. <br />Benefit from our
                network as a Appwrite Partner.
            </p>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {#each items as { title, description }}
                <GradientBorderCard class="bg-greyscale-750 rounded-lg p-6">
                    <h3 class="text-title text-primary">{title}</h3>
                    <p class="text-description text-secondary">{description}</p>
                </GradientBorderCard>
            {/each}
        </div>
    </div>
</div>
