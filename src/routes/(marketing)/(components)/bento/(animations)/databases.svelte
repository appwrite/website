<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';
    import { cn } from '$lib/utils/cn';
    import { isMobile } from '$lib/utils/is-mobile';
    import GridPaper from '../../grid-paper.svelte';
    import { animate, hover, inView } from 'motion';
    import { fade } from 'svelte/transition';

    type DBType = 'Tables' | 'Documents' | 'Vector';
    const types: DBType[] = ['Tables', 'Documents', 'Vector'];

    const rows = [
        { ID: '3397fec', createdAt: '2026-01-15', updatedAt: '2026-02-20' },
        { ID: '2224gab', createdAt: '2026-01-18', updatedAt: '2026-02-22' },
        { ID: '5689fdo', createdAt: '2026-01-20', updatedAt: '2026-03-01' },
        { ID: '1193cda', createdAt: '2026-02-02', updatedAt: '2026-03-05' },
        { ID: '8821bfe', createdAt: '2026-02-10', updatedAt: '2026-03-10' }
    ];
    const rowKeys = Object.keys(rows[0]);

    const tableDetail = [
        { field: 'Name', value: 'Toy Story' },
        { field: 'Genre', value: 'Animation' },
        { field: 'Year', value: '1995' },
        { field: 'Rating', value: '8.3' }
    ];

    const docFields = [
        { key: '$id', value: '"2224gab"', color: 'text-[#E8C07D]' },
        { key: 'title', value: '"Toy Story"', color: 'text-[#9FD990]' },
        { key: 'genre', value: '"Animation"', color: 'text-[#9FD990]' },
        { key: 'year', value: '1995', color: 'text-[#79B8FF]' },
        { key: '$createdAt', value: '"Jan 15, 13:03"', color: 'text-[#E8C07D]' }
    ];

    const vectorFields = [
        { key: '$id', value: '"2224gab"', color: 'text-[#E8C07D]' },
        { key: 'title', value: '"Toy Story"', color: 'text-[#9FD990]' },
        { key: 'year', value: '1995', color: 'text-[#79B8FF]' },
        { key: 'Embeddings', value: '[0.0701, 0.0049, ...]', color: 'text-[#79B8FF]' },
        { key: '$createdAt', value: '"Dec 3, 13:03"', color: 'text-[#E8C07D]' }
    ];

    let activeType = $state<DBType>('Tables');
    let container: HTMLElement;
    let foreground: HTMLElement;
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
            animate(
                foreground,
                { x: [12, -5], y: [12, -5] },
                { type: 'spring', bounce: 0.3, duration: 0.35 }
            );
            startCycle();
            return () => {
                animate(
                    foreground,
                    { x: [-5, 12], y: [-5, 12] },
                    { type: 'spring', bounce: 0.3, duration: 0.35 }
                );
                stopCycle();
            };
        });

        inView(
            container,
            () => {
                if (!isMobile()) return;
                animate(
                    foreground,
                    { x: [12, -5], y: [12, -5] },
                    { type: 'spring', bounce: 0.3, duration: 0.35 }
                );
                startCycle();
                return () => {
                    animate(
                        foreground,
                        { x: [-5, 12], y: [-5, 12] },
                        { type: 'spring', bounce: 0.3, duration: 0.35 }
                    );
                    stopCycle();
                };
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
    <div
        class="relative mt-auto mb-0 flex h-85 max-h-85 flex-1 flex-col overflow-hidden rounded-xl bg-black/24 px-8"
    >
        <!-- Background: universal table -->
        <div
            class="border-smooth -z-3 mt-6 flex aspect-[4/2] w-full min-w-[450px] flex-col overflow-clip rounded-2xl border bg-[#232325]/90 mask-b-from-60% mask-b-to-100% shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md md:mt-12"
        >
            <h3 class="text-caption text-primary px-3 py-2">Products</h3>
            <div class="border-smooth mx-1 mt-auto mb-1 flex-1 rounded-xl border">
                <table class="table w-full p-2.5">
                    <thead>
                        <tr
                            class="bg-greyscale-900 border-smooth text-primary text-eyebrow w-full border-b font-normal tracking-tight"
                        >
                            {#each rowKeys as key}
                                <th
                                    class="p-2 first-of-type:pl-3 text-left first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl"
                                >
                                    <span class="inline">{key}</span>
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="inline h-[1lh]"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M8.00005 2.8999C8.21222 2.8999 8.41571 2.98419 8.56573 3.13422L10.9657 5.53422C11.2782 5.84664 11.2782 6.35317 10.9657 6.66559C10.6533 6.97801 10.1468 6.97801 9.83436 6.66559L8.00005 4.83127L6.16573 6.66559C5.85331 6.97801 5.34678 6.97801 5.03436 6.66559C4.72194 6.35317 4.72194 5.84664 5.03436 5.53422L7.43436 3.13422C7.58439 2.98419 7.78788 2.8999 8.00005 2.8999ZM5.03436 10.3342C5.34678 10.0218 5.85331 10.0218 6.16573 10.3342L8.00005 12.1685L9.83436 10.3342C10.1468 10.0218 10.6533 10.0218 10.9657 10.3342C11.2782 10.6466 11.2782 11.1532 10.9657 11.4656L8.56573 13.8656C8.25331 14.178 7.74678 14.178 7.43436 13.8656L5.03436 11.4656C4.72194 11.1532 4.72194 10.6466 5.03436 10.3342Z"
                                            fill="#6C6C71"
                                        />
                                    </svg>
                                </th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody class="text-eyebrow divide-smooth divide-y">
                        {#each rows as row, r}
                            <tr
                                class={cn('bg-[#1D1D21] transition-colors', {
                                    'bg-white/2': r === 1
                                })}
                            >
                                {#each Object.values(row) as item, i}
                                    {@const isLast = r === rows.length - 1}
                                    {@const isLastItem = i === Object.values(row).length - 1}
                                    <td
                                        class={cn('text-primary p-3 text-left', {
                                            'rounded-bl-xl': isLast && i === 0,
                                            'rounded-br-xl': isLast && isLastItem
                                        })}>{item}</td
                                    >
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Foreground: detail view cycling through types -->
        <div
            class="border-smooth absolute right-8 bottom-8 flex w-[290px] flex-col rounded-2xl border bg-[#232325]/90 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
            style:transform="translateY(12px) translateX(12px)"
            bind:this={foreground}
        >
            <!-- Header: stable, outside the key block -->
            <div class="flex items-center gap-2 px-3 py-2 shrink-0">
                <h3 class="text-caption text-primary">{activeType}</h3>
                <span class="text-eyebrow text-secondary font-mono">2224gab</span>
            </div>

            <!-- Content: fades between types -->
            <div class="border-smooth mx-1 mb-1 rounded-xl border overflow-hidden bg-[#1D1D21]">
                <div class="relative h-[132px]">
                {#key activeType}
                    <div class="absolute inset-0" in:fade={{ duration: 180 }}>
                        {#if activeType === 'Tables'}
                            <table class="table w-full">
                                <tbody class="text-eyebrow divide-smooth divide-y">
                                    {#each tableDetail as row, r}
                                        <tr>
                                            <td
                                                class={cn(
                                                    'text-secondary py-2 pl-3 pr-2 text-left font-medium',
                                                    { 'rounded-bl-xl': r === tableDetail.length - 1 }
                                                )}>{row.field}</td
                                            >
                                            <td
                                                class={cn('text-primary py-2 pl-2 pr-3 text-left', {
                                                    'rounded-br-xl': r === tableDetail.length - 1
                                                })}>{row.value}</td
                                            >
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
                        {:else if activeType === 'Documents'}
                            <div
                                class="p-3 font-mono text-[0.625rem] leading-normal"
                            >
                                <span class="text-secondary">{"{"}</span>
                                {#each docFields as field}
                                    <div class="pl-3">
                                        <span class="text-secondary">{field.key}</span><span
                                            class="text-primary">: </span
                                        ><span class={field.color}>{field.value}</span><span
                                            class="text-secondary">,</span
                                        >
                                    </div>
                                {/each}
                                <span class="text-secondary">{"}"}</span>
                            </div>
                        {:else}
                            <div
                                class="p-3 font-mono text-[0.625rem] leading-normal"
                            >
                                <span class="text-secondary">{"{"}</span>
                                {#each vectorFields as field}
                                    <div class="pl-3">
                                        <span class="text-secondary">{field.key}</span><span
                                            class="text-primary">: </span
                                        ><span class={field.color}>{field.value}</span><span
                                            class="text-secondary">,</span
                                        >
                                    </div>
                                {/each}
                                <span class="text-secondary">{"}"}</span>
                            </div>
                        {/if}
                    </div>
                {/key}
                </div>
            </div>
        </div>

        <GridPaper class="absolute inset-0 -z-10 bg-size-[calc(100%/11)]" />
    </div>
</a>
