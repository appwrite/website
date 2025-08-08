<script lang="ts">
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';
    import { inView } from 'motion';
    import NumberFlow from '@number-flow/svelte';

    let items: Array<{ number: number; label: string; suffix?: string }> = [
        {
            number: 0,
            suffix: 'k+',
            label: 'Community members'
        },
        {
            number: 0,
            suffix: 'k+',
            label: 'GitHub stars'
        },
        {
            number: 0,
            suffix: '+',
            label: 'OSS Contributors'
        },
        { number: 0, label: 'Top GitHub projects' }
    ];

    const numbers = [650, 50, 900, 300];

    const updateNumbers = () => {
        items = items.map((item, index) => {
            return { ...item, number: numbers[index] };
        });
    };

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                updateNumbers();
            },
            { amount: 'all' }
        );
    };
</script>

<div class="border-smooth mb-0 border-y py-32">
    <div class="container space-y-16">
        <div class="mx-auto flex max-w-2xl flex-col gap-4 text-center">
            <span class="font-aeonik-fono tracking-loose text-micro text-primary uppercase">
                Why Appwrite?<span class="text-accent">_</span>
            </span>
            <h2 class="text-primary font-aeonik-pro text-title">
                Partner with one of the fastest growing dev tool companies
            </h2>
            <p class="text-body text-secondary mx-auto max-w-md font-medium">
                Everyday thousands of companies are built on top of Appwrite. Benefit from our
                network as a Appwrite Partner.
            </p>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" use:useInView>
            {#each items as { label, number, suffix }}
                <GradientBorderCard class="bg-card rounded-lg p-6">
                    <h3 class="text-title font-aeonik-pro text-primary">
                        <NumberFlow value={number} {suffix} class="-mt-4 -mb-2 inline-block" />
                    </h3>
                    <p class="text-description text-secondary">{label}</p>
                </GradientBorderCard>
            {/each}
        </div>
    </div>
</div>
