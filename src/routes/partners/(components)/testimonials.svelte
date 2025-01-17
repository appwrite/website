<script lang="ts">
    import Testimonials from '$lib/components/product-pages/testimonials.svelte';
    import GradientBorderCard from '$lib/components/shared/gradient-border-card.svelte';
    import Marquee from '$lib/components/ui/marquee.svelte';

    import Avatar from '../(assets)/icons/avatar.png';
</script>

<div class="border-smooth -mt-6 border-b border-dashed py-20">
    <Marquee>
        {#each Array.from({ length: 3 }) as _}
            <GradientBorderCard class="flex max-w-sm flex-col gap-4 p-6">
                <p class="text-sub-body text-secondary font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices
                    lacus.
                </p>
                <div class="flex items-center gap-3">
                    <img src={Avatar} alt="Avatar" class="h-12 w-12 rounded-full" />
                    <div class="flex flex-col">
                        <h2>Eldad Fux</h2>
                        <span>@eldadfux</span>
                    </div>
                </div>
            </GradientBorderCard>
        {/each}
        {#each Array.from({ length: 3 }) as _}
            <GradientBorderCard class="flex max-w-sm flex-col  gap-4 p-6">
                <p class="text-sub-body text-secondary font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices
                    lacus.
                </p>
                <div class="flex items-center gap-3">
                    <img src={Avatar} alt="Avatar" class="h-12 w-12 rounded-full" />
                    <div class="flex flex-col">
                        <h2>Eldad Fux</h2>
                        <span>@eldadfux</span>
                    </div>
                </div>
            </GradientBorderCard>
        {/each}
    </Marquee>
</div>
