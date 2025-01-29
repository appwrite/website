<script lang="ts">
    import Globe from '../../(assets)/globe.svg';
    import WindowSticker from '../../(assets)/stickers/window.svg';
    import Logo from '../../(assets)/stickers/logo.svg';
    import { writable } from 'svelte/store';
    import Window from '../ui/window.svelte';
    import Lockup from '../lockup.svelte';
    import type { ContributionsMatrix, TicketData } from '$routes/init/tickets/constants';
    import { fade } from 'svelte/transition';

    let order = writable<Array<number>>([2, 1, 0]);

    type $$Props = Omit<TicketData, '$id' | 'contributions'> & {
        contributions?: Promise<ContributionsMatrix> | ContributionsMatrix;
        disableEffects?: boolean;
    };

    $: ({ name, id, contributions, show_contributions = true } = $$props as $$Props);

    const stickers = [
        { src: Globe, alt: 'Globe' },
        { src: WindowSticker, alt: 'Window' },
        { src: Logo, alt: 'Logo' }
    ];
</script>

<div class="ticket w-full">
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

        <!-- {#each $order as i, index}
                <div data-index={index} class="absolute z-10">
                    <img
                        draggable
                        src={stickers[i].src}
                        alt={stickers[i].alt}
                        style:top={index * 100 + 'px'}
                        style:left={index * 20 + '%'}
                    />
                </div>
            {/each} -->
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
