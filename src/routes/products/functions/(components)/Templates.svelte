<script lang="ts">
    import Templates from '../(assets)/templates.png';
    import Avatar from '../(assets)/avatar.png';

    const templates = [
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        },
        {
            title: 'Query upstash vector',
            description: 'Vector database that stores text embeddings and context.',
            avatar: Avatar
        }
    ];
</script>

<section class="light bg-greyscale-50 pt-32 pb-40">
    <div class="container flex flex-col justify-between gap-8 md:flex-row">
        <div class="mb-10 flex max-w-sm flex-col">
            <span class="web-badges text-micro font-aeonik-fono mr-auto ml-0 uppercase !text-white"
                >Getting Started_</span
            >
            <h2 class="text-title text-primary font-aeonik-pro mt-8 mb-4 text-pretty">
                Add functionality within seconds
            </h2>
            <p class="text-body text-secondary block text-pretty font-medium">
                Appwrite offers a wide variety of ready-to-use templates to speed up development.
            </p>
        </div>
        <div
            class="rounded-3xl bg-gradient-to-br from-black/6 via-black/4 via-[61%] to-black/6 p-3 outline-1 outline-black/8 md:w-[60%]"
        >
            <img class="rounded-xl" src={Templates} alt="Templates console" />
        </div>
    </div>

    <div class="container mt-20 space-y-8">
        <div class="flex items-center justify-between">
            <h2 class="text-label text-primary">Explore templates</h2>
            <button class="web-button is-secondary">View all templates</button>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {#each templates as template}
                <div class="flex flex-col gap-4 rounded-2xl border border-black/8 bg-white p-4">
                    <div class="flex w-full items-center justify-between">
                        <span class="text-sub-body text-primary font-medium">{template.title}</span>
                        <img src={template.avatar} class="size-8" alt={template.title} />
                    </div>
                    <p class="text-sub-body text-secondary line-clamp-2">{template.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
