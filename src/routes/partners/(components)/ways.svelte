<script lang="ts">
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';
    import { Button } from '$lib/components/ui';

    const items = [
        {
            title: 'Experts',
            description:
                'For agencies, consultancies, freelancers, and integrators who want to provide a scalable backend solution for their clients. Partner with Appwrite to provide a highly custom solution with the newest technology.',
            href: '/partners/catalog',
            label: 'Find a Partner'
        },
        {
            title: 'Integrations',
            description:
                'For innovative software companies striving to create solutions that integrate seamlessly with our platform. Partner with Appwrite to create a better developer experience.',
            href: '/integrations',
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
                <p class="text-secondary text-main-body font-medium">{item.description}</p>
                {#if item.href}
                    <Button href={item.href} variant="secondary" class="mt-3">{item.label}</Button>
                {:else}
                    <Button variant="secondary" class="mt-3">{item.label}</Button>
                {/if}
            </GradientBorderCard>
        {/each}
    </div>
</div>
