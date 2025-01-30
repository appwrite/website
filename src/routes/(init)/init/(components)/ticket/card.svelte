<script lang="ts">
    import type { ContributionsMatrix, TicketData } from '$lib/utils/init';
    import { fade } from 'svelte/transition';

    //let order = writable<Array<number>>([2, 1, 0]);

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
    };

    $: ({ name, id, contributions, show_contributions = true } = $$props as $$Props);
</script>

<div
    class="bg-greyscale-800 m-4 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform"
>
    <span>Ticket <span class="text-accent">#</span>{id?.toString().padStart(6, '0')}</span>
    <div class="light relative flex p-4">
        <div class="font-aeonik-pro mt-auto mb-0 flex w-full items-end justify-between">
            <div>
                <h2 class="text-label text-primary">
                    {name?.split(' ')[0]}
                </h2>
                <span class="text-secondary">#{id?.toString().padStart(6, '0')}</span>
            </div>
        </div>

        <div class="absolute inset-x-0 top-0 z-0">
            {#await contributions then c}
                {#if c && show_contributions}
                    <div class="flex flex-wrap gap-1" out:fade={{ duration: 100 }}>
                        {#each c as row}
                            {#each row as level, index}
                                <div
                                    class="grid-block size-2 data-[level='0']:opacity-8 data-[level='1']:opacity-25 data-[level='2']:opacity-50 data-[level='3']:opacity-75"
                                    data-level={level}
                                    style:animation-delay={`${(index + 1) * 100 + 250}ms`}
                                />
                            {/each}
                        {/each}
                    </div>
                {/if}
            {/await}
        </div>
    </div>
</div>
