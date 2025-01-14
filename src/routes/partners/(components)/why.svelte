<script lang="ts">
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';
    import { inView } from 'motion';
    import NumberFlow from '@number-flow/svelte';

    let items: Array<{ number: number; label: string; suffix?: string }> = [
        {
            number: 650,
            suffix: 'k+',
            label: 'Community members'
        },
        {
            number: 45,
            suffix: 'k+',
            label: 'GitHub stars'
        },
        {
            number: 900,
            suffix: '+',
            label: 'OSS Contributors'
        },
        { number: 300, label: 'Top OSS GitHub projects' }
    ];

    const numbers = [650, 45, 900, 300];

    const updateNumbers = () => {
        items = items.map((item, index) => {
            return { ...item, number: numbers[index] };
        });
    };

    let animate: boolean = false;

    const useInView = (node: HTMLElement) => {
        inView(
            node,
            () => {
                animate = true;
                updateNumbers();
            },
            { amount: 0.25 }
        );
    };
</script>

<div class="border-smooth mb-0 border-y py-32" use:useInView>
    <div class="container space-y-12">
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
            {#each items as { label, number, suffix }}
                <GradientBorderCard class="bg-greyscale-750 rounded-lg p-6">
                    <h3 class="text-title text-primary"><NumberFlow value={number} {suffix} /></h3>
                    <p class="text-description text-secondary">{label}</p>
                </GradientBorderCard>
            {/each}
        </div>
    </div>
</div>
