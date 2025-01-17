<script lang="ts">
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';

    const items = [
        {
            title: 'Experts',
            description:
                'For agencies, consultancies, and system integrators obsessed with productivity and performance. Partner with Vercel to deliver state-of-the-art digital experiences and redefine web development today.',
            href: '/',
            label: 'Find an Expert'
        },
        {
            title: 'Integrations',
            description:
                'For innovative software companies striving to create solutions that integrate seamlessly with our platform. Partner with Vercel to build and enhance performant user experiences across the Web.',
            href: '/',
            label: 'Find an Integration'
        }
    ];
</script>

<div class="container space-y-12 py-24">
    <h2 class="text-primary font-aeonik-pro text-title text-center">Ways to partner</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        {#each items as item}
            <GradientBorderCard class="flex flex-col gap-5 p-8">
                <h2 class="text-primary font-aeonik-pro text-label font-medium">{item.title}</h2>
                <p class="text-secondary text-body font-medium">{item.description}</p>
                <a href={item.href} class="web-button is-secondary mt-3">{item.label}</a>
            </GradientBorderCard>
        {/each}
    </div>
</div>
