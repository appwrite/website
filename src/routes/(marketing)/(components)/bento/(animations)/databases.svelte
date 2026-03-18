<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { cn } from '$lib/utils/cn';
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../../grid-paper.svelte';
    import { hover, inView } from 'motion';
    import { fade } from 'svelte/transition';

    type DBType = 'Tables' | 'Documents' | 'Vectors';

    const types: DBType[] = ['Tables', 'Documents', 'Vectors'];

    const movies = [
        { id: '3397fec2uj', title: 'Toy Story', genre: 'Animation', year: 1995, rating: 8.3, embedding: '[0.0701, 0.0049, ...]' },
        { id: '2224gab8kp', title: 'Star Wars', genre: 'Sci-Fi', year: 1977, rating: 8.6, embedding: '[0.0234, 0.0812, ...]' },
        { id: '5689fdo4lm', title: 'The Matrix', genre: 'Action', year: 1999, rating: 8.7, embedding: '[0.0445, 0.0178, ...]' },
        { id: '1193cda7nt', title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, embedding: '[0.0923, 0.0067, ...]' },
        { id: '8821bfe3qr', title: 'Titanic', genre: 'Romance', year: 1997, rating: 7.9, embedding: '[0.0156, 0.0634, ...]' },
        { id: '9912abc6ws', title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, embedding: '[0.0789, 0.0345, ...]' }
    ];

    const tableColumns = ['ID', 'Name', 'Genre', 'Year', 'Rating'];

    let activeType = $state<DBType>('Tables');
    let container: HTMLElement;
    let cycleInterval: ReturnType<typeof setInterval> | null = null;

    function startCycle() {
        cycleInterval = setInterval(() => {
            const idx = types.indexOf(activeType);
            activeType = types[(idx + 1) % types.length];
        }, 1800);
    }

    function stopCycle() {
        if (cycleInterval) {
            clearInterval(cycleInterval);
            cycleInterval = null;
        }
        activeType = 'Tables';
    }

    $effect(() => {
        hover(container, () => {
            if (isMobile()) return;
            startCycle();
            return () => stopCycle();
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                startCycle();
                return () => stopCycle();
            },
            { amount: 'all' }
        );
    });
</script>

<a
    href="/docs/products/databases"
    class="border-smooth col-span-12 flex flex-col rounded-2xl border bg-white/2 p-2 transition-shadow duration-300 hover:shadow-[0px_0px_0px_4px_var(--color-offset)] focus:shadow-[0px_0px_0px_4px_var(--color-offset)] md:col-span-6 lg:col-span-7"
    onclick={() => {
        trackEvent(`bento-databases-click`);
    }}
    bind:this={container}
>
    <div class="space-y-3 px-3 pt-2 pb-4">
        <div class="flex items-center gap-2">
            <img
                loading="lazy"
                src="/images/icons/illustrated/dark/databases.png"
                alt="Databases icon"
                class="size-7"
            />
            <h3 class="font-aeonik-pro text-label text-primary">Databases</h3>
        </div>
        <p class="text-sub-body text-primary max-w-lg font-medium">
            Store any data with tables, documents, or vectors, <span class="text-secondary"
                >backed by your favorite technologies.</span
            >
        </p>
    </div>
    <div class="relative mt-auto mb-0 h-85 overflow-hidden rounded-xl bg-black/24">
        <!-- Tabs centered above card — same pill style as Functions -->
        <div class="absolute inset-x-0 top-8 flex justify-center gap-2">
            {#each types as type}
                <div
                    class={cn(
                        'font-inter relative w-fit shrink-0 overflow-hidden rounded-2xl border border-transparent p-px text-sm transition-all duration-300',
                        type === activeType ? 'text-white' : 'text-white/30'
                    )}
                >
                    <div class="h-full w-full rounded-2xl bg-[#202023] px-3 py-1">
                        {type}
                    </div>
                    <div
                        class={cn(
                            'absolute inset-0 -z-1 bg-linear-to-l from-white/12 to-transparent transition-opacity duration-300',
                            type !== activeType && 'opacity-0'
                        )}
                    ></div>
                </div>
            {/each}
        </div>

        <!-- Card below tabs -->
        <div
            class="border-smooth absolute inset-x-10 top-22 overflow-hidden rounded-2xl border bg-[#232325]/90 shadow-[0px_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md mask-b-from-60% mask-b-to-100%"
        >
            <!-- Header: collection name only -->
            <div class="px-3 pt-1.5 pb-0">
                <span class="font-inter text-eyebrow text-primary font-medium">Movies</span>
            </div>

            <!-- Content: visually distinct per type -->
            {#key activeType}
                <div in:fade={{ duration: 300 }}>
                    {#if activeType === 'Documents'}
                        <!-- Documents: frame within frame -->
                        <div class="p-1.5">
                            <div class="@container overflow-hidden rounded-xl bg-[#19191C] flex">
                                <!-- Left: narrow ID list, hidden on small containers -->
                                <div class="border-smooth divide-smooth hidden w-36 shrink-0 divide-y border-r pt-1.5 @xs:block">
                                    {#each movies as movie}
                                        <div class={cn('text-[0.6rem] font-mono px-3 py-1.5 text-secondary')}>
                                            {movie.id}<span class="font-sans text-secondary/60">…</span>
                                        </div>
                                    {/each}
                                </div>

                                <!-- Right: JSON document viewer -->
                                <div class="flex-1 px-3 py-2.5 font-fira-code text-[0.6rem] leading-[1.6]">
                                    <div class="text-secondary">{'{'}</div>
                                    <div class="flex flex-col pl-3">
                                        <div><span class="text-primary">"$id"</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"3397fec2uj..."</span><span class="text-secondary">,</span></div>
                                        <div><span class="text-primary">"title"</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"Toy Story"</span><span class="text-secondary">,</span></div>
                                        <div><span class="text-primary">"genre"</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"Animation"</span><span class="text-secondary">,</span></div>
                                        <div><span class="text-primary">"year"</span><span class="text-secondary">: </span><span class="text-[#79B8FF]">1995</span><span class="text-secondary">,</span></div>
                                        <div><span class="text-primary">"$createdAt"</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"Jan 15, 2026"</span></div>
                                    </div>
                                    <div class="text-secondary">{'}'}</div>
                                </div>
                            </div>
                        </div>
                    {:else if activeType === 'Tables'}
                        <!-- Tables: frame within frame (Sites-style) -->
                        <div class="p-1.5">
                            <div class="@container overflow-hidden rounded-xl bg-[#19191C]">
                                <table class="w-full">
                                    <thead>
                                        <tr class="border-smooth border-b">
                                            <th class="text-[0.6rem] min-w-[80px] px-3 py-2 text-left font-normal text-secondary">ID</th>
                                            <th class="text-[0.6rem] min-w-[65px] px-3 py-2 text-left font-normal text-secondary">Name</th>
                                            <th class="hidden @xs:table-cell text-[0.6rem] min-w-[55px] px-3 py-2 text-left font-normal text-secondary">Genre</th>
                                            <th class="hidden @sm:table-cell text-[0.6rem] min-w-[40px] px-3 py-2 text-left font-normal text-secondary">Year</th>
                                            <th class="hidden @sm:table-cell text-[0.6rem] min-w-[45px] px-3 py-2 text-left font-normal text-secondary">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-smooth divide-y">
                                        {#each movies as movie}
                                            <tr class="text-[0.6rem] text-primary">
                                                <td class="truncate px-3 py-1.5 font-mono text-secondary">{movie.id}<span class="font-sans text-secondary/60">…</span></td>
                                                <td class="truncate px-3 py-1.5">{movie.title}</td>
                                                <td class="hidden @xs:table-cell truncate px-3 py-1.5">{movie.genre}</td>
                                                <td class="hidden @sm:table-cell truncate px-3 py-1.5">{movie.year}</td>
                                                <td class="hidden @sm:table-cell truncate px-3 py-1.5">{movie.rating}</td>
                                            </tr>
                                        {/each}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    {:else}
                        <!-- Vector: frame within frame -->
                        <div class="p-1.5">
                            <div class="@container overflow-hidden rounded-xl bg-[#19191C] flex">
                                <div class="border-smooth divide-smooth hidden w-36 shrink-0 divide-y border-r pt-1.5 @xs:block">
                                    {#each movies as movie}
                                        <div class={cn('text-[0.6rem] font-mono px-3 py-1.5 text-secondary')}>
                                            {movie.id}<span class="font-sans text-secondary/60">…</span>
                                        </div>
                                    {/each}
                                </div>

                            <!-- Right: JSON with nested Metadata + Embeddings -->
                            <div class="flex-1 px-3 py-2.5 font-fira-code text-[0.6rem] leading-[1.6]">
                                <div class="text-secondary">{'{'}</div>
                                <div class="flex flex-col pl-3">
                                    <div><span class="text-primary">$id</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"3397fec2uj..."</span><span class="text-secondary">,</span></div>
                                    <div><span class="text-primary">Metadata</span><span class="text-secondary">: {'{'}</span></div>
                                    <div class="pl-3"><span class="text-primary">title</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"Toy Story"</span><span class="text-secondary">,</span></div>
                                    <div class="pl-3"><span class="text-primary">releaseYear</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"1995"</span></div>
                                    <div><span class="text-secondary">{'  },'}</span></div>
                                    <div><span class="text-primary">Embeddings</span><span class="text-secondary">: </span><span class="text-secondary">[</span><span class="text-[#79B8FF]">0.0701, 0.0049, 0.1031, 0.0071, -0.0088, ...</span><span class="text-secondary">]</span><span class="text-secondary">,</span></div>
                                    <div><span class="text-primary">$createdAt</span><span class="text-secondary">: </span><span class="text-[#E8C07D]">"Jan 15, 2026"</span></div>
                                </div>
                                <div class="text-secondary">{'}'}</div>
                            </div>
                            </div>
                        </div>
                    {/if}
                </div>
            {/key}
        </div>

        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    </div>
</a>
