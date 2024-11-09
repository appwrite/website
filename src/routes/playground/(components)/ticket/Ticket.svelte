<script lang="ts">
    import Globe from '../../(assets)/globe.svg';
    import WindowSticker from '../../(assets)/stickers/window.svg';
    import Logo from '../../(assets)/stickers/logo.svg';
    import { writable } from 'svelte/store';
    import Window from '../retro-ui/Window.svelte';
    import Lockup from '../Lockup.svelte';
    import type { ContributionsMatrix, TicketData } from '$routes/playground/tickets/constants';
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
    <Window theme="dark" alignment="left" class="aspect-video w-full flex-1 shrink-0">
        <span slot="toolbar"
            >Ticket <span class="text-accent">#</span>{id?.toString().padStart(6, '0')}</span
        >
        <div slot="content" class="light relative flex flex-1 bg-white p-4">
            <div class="font-aeonik-pro mt-auto mb-0 block flex w-full items-end justify-between">
                <div>
                    <h2 class="text-label text-primary">
                        {name?.split(' ')[0]}
                    </h2>
                    <span class="text-secondary">#{id?.toString().padStart(6, '0')}</span>
                </div>
                <Lockup class="mt-auto mb-0 h-[75px] w-[150px]" />
            </div>

            {#each $order as i, index}
                <div data-index={index} class="absolute z-10">
                    <img
                        draggable
                        src={stickers[i].src}
                        alt={stickers[i].alt}
                        style:top={index * 100 + 'px'}
                        style:left={index * 20 + '%'}
                    />
                </div>
            {/each}
            <div class="absolute inset-0 z-0">
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
    </Window>
</div>

<style>
    @keyframes stutter {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @keyframes grid {
        0% {
            background-color: hsl(var(--color-greyscale-hue) 2% 68% / 0);
        }
        100% {
            background-color: hsl(var(--color-greyscale-hue) 2% 68% / 1);
        }
    }

    @keyframes load {
        0% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }
        100% {
            clip-path: polygon(0 0, 110% 0, 110% 110%, 0 110%);
        }
    }

    .grid-block {
        animation: grid 1.5s forwards;
    }

    .ticket {
        animation:
            stutter 1.25s steps(2, end) 1.5s infinite,
            load 1.25s steps(5) forwards;
    }
</style>
