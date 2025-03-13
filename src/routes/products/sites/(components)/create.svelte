<script lang="ts">
    import Docs from '../(assets)/sites/docs.png';

    const sites = [
        {
            image: Docs,
            title: 'Docs',
            frameworks: ['Astro', 'SvelteKit']
        },
        {
            image: Docs,
            title: 'Docs',
            frameworks: ['Astro', 'SvelteKit']
        },
        {
            image: Docs,
            title: 'Docs',
            frameworks: ['Astro', 'SvelteKit']
        },
        {
            image: Docs,
            title: 'Docs',
            frameworks: ['Astro', 'SvelteKit']
        }
    ];
</script>

<div class="flex w-full flex-col gap-8 px-8" style:--mask-height="350px">
    <span class="text-primary text-micro font-aeonik-fono uppercase"
        >Create<span class="text-accent">_</span></span
    >

    <div
        class="mask border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 pt-2 px-2 backdrop-blur-xl"
    >
        <div class="flex-1 rounded-t-2xl bg-[#19191C] pt-16 px-8 md:px-16">
            <header class="pb-10">
                <h2 class="text-primary font-aeonik-pro text-label">Create Site</h2>
            </header>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {#each sites as { image, title, frameworks }}
                    <div
                        class="border-smooth flex aspect-[2.5/1.8] flex-col rounded-xl border bg-white/5 p-2"
                    >
                        <img src={image} alt={title} class="w-full rounded-lg object-cover" />
                        <div class="mt-auto mb-0">
                            <h3 class="text-primary text-micro font-medium">{title}</h3>
                            <span class="text-secondary text-x-micro">{frameworks.join(', ')}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
