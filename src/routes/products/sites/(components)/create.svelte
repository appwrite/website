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

<div class="flex w-full flex-col gap-8 md:px-8">
    <span class="text-primary text-micro font-aeonik-fono uppercase"
        >Create<span class="text-accent">_</span></span
    >

    <div
        class="mask border-smooth flex aspect-video w-full flex-col rounded-t-3xl border bg-gradient-to-br from-white/10 via-white/5 to-white/10 pt-2 px-2 backdrop-blur-xl"
        style:--mask-height="450px"
    >
        <div class="flex-1 rounded-t-2xl bg-[#19191C] pt-16 px-8 md:px-16">
            <header class="flex flex-col justify-between gap-4 pb-10 md:flex-row md:items-center">
                <h2 class="text-primary font-aeonik-pro text-label">Create Site</h2>

                <div
                    class="border-greyscale-800 flex min-w-[250px] items-center gap-1.5 rounded-lg border py-0.5 px-1.5"
                >
                    <span class="web-icon-search text-secondary" />
                    <input
                        class="text-secondary placeholder:text-secondary text-micro w-full appearance-none border-none"
                        type="text"
                        disabled
                        placeholder="Search by framework or use case"
                    />
                </div>
            </header>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {#each [...sites, ...sites, ...sites] as { image, title, frameworks }}
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

    <div class="relative z-10 -mt-24 mx-auto flex max-w-2xl flex-col gap-4 pl-12 text-center">
        <h2 class="text-title text-primary font-aeonik-pro">
            Clone a template or import a repository
        </h2>
        <p class="text-secondary text-description">
            See a preview of your crafted messages on the Console before sending them.
        </p>
    </div>
</div>
