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

<div class="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {#each items as { title, description }}
        <GradientBorderCard class="bg-greyscale-750 rounded-lg p-6">
            <h3 class="text-title text-primary">{title}</h3>
            <p class="text-description text-secondary">{description}</p>
        </GradientBorderCard>
    {/each}
</div>
