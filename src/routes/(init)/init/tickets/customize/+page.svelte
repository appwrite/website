<script lang="ts">
    import { dequal } from 'dequal/lite';
    import TicketCard, { stickersStore } from '../(components)/ticket-card.svelte';
    import { getMockContributions } from '../../(utils)/contributions';
    import Window from '../../(components)/window.svelte';
    import Globe from '../../(assets)/stickers/sticker.svg';
    import Github from '../../(assets)/stickers/github.svg';
    import { enhance } from '$app/forms';
    import Avatar from '../../(assets)/avatar.png';
    import { classNames } from '$lib/utils/classnames';

    export let data;

    let originalName = data.ticket?.name ?? '';
    let name = originalName.split(' ')[0];
    let originalTitle = data.ticket?.title ?? '';
    let title = originalTitle;
    let originalShowGitHub = data.ticket?.show_contributions ?? true;
    let showGitHub = originalShowGitHub;
    let originalStickers = data.ticket.stickers;
    let stickers = originalStickers?.join(',');

    $: modified = !dequal(
        {
            name: originalName,
            title: originalTitle,
            stickers: originalStickers,
            showGitHub: originalShowGitHub
        },
        { name, title, showGitHub, stickers }
    );

    const stickerPack = [Globe, Github, Avatar, Globe, Globe, Globe];

    // const updateStickers = () => {
    //     stickersStore.set(stickers!.split(',').map((i) => parseInt(i)));
    // };
</script>

<svelte:head>
    <title>Customize Your Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<Window class="container my-10">
    <div slot="title" class="">Init Ticket<span class="text-accent">_</span></div>
    <div class="grid grid-cols-1 p-0.5 md:grid-cols-12">
        <div class="col-span-3 flex flex-col p-4">
            <h3
                class="text-primary font-aeonik-pro text-label border-offset border-b border-dashed pb-4"
            >
                Customize ticket
            </h3>

            <form method="POST" class="mt-4 flex flex-1 flex-col gap-4" use:enhance>
                <div class="flex flex-col gap-2">
                    <label
                        for="name"
                        class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase"
                        >First name</label
                    >
                    <input
                        bind:value={name}
                        type="text"
                        name="name"
                        class="bg-smooth border-offset w-full appearance-none rounded-lg border p-2"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label
                        for="title"
                        class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase"
                        >Title</label
                    >
                    <input
                        bind:value={title}
                        type="text"
                        name="title"
                        class="bg-smooth border-offset w-full appearance-none rounded-lg border p-2"
                    />
                </div>

                <div class="flex h-full flex-1 flex-col gap-2">
                    <span
                        class="text-primary font-aeonik-fono text-x-micro tracking-loose uppercase"
                        >Sticker Pack</span
                    >
                    <div
                        class="bg-smooth border-offset grid h-full flex-1 grid-cols-2 place-items-center gap-4 overflow-y-scroll rounded-lg border p-4"
                    >
                        {#each stickerPack as sticker, i}
                            <div
                                class={classNames(
                                    'aspect-square w-full rounded-[1px] border-black bg-black outline-2 outline-[var(--color-offset)] outline-dashed',
                                    data.ticket.stickers?.includes(i)
                                        ? 'outline-accent/50'
                                        : 'outline-[var(--color-offset)]'
                                )}
                            >
                                <div class="bg-smooth flex size-full items-center justify-center">
                                    <img src={sticker} alt="Sticker" class="size-20" />
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <button type="submit" class="web-button is-secondary w-full!" disabled={!modified}
                    >Save</button
                >
            </form>
        </div>
        <div
            class="bg-smooth col-span-9 flex w-full items-center justify-center gap-8 rounded-xl p-4 outline-2 [outline-offset:-2px] outline-[var(--color-offset)] outline-dashed"
        >
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard
                    {name}
                    {title}
                    avatar_url={data.ticket.avatar_url}
                    id={data.ticket.id}
                    contributions={getMockContributions()}
                    disableEffects
                />
                <span class="font-aeonik-fono tracking-loose text-x-micro text-primary">Front</span>
            </div>
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard
                    {...data.ticket}
                    title={data.ticket.title}
                    contributions={getMockContributions()}
                    disableEffects
                    flipped
                    {stickerPack}
                />
                <span class="font-aeonik-fono tracking-loose text-x-micro text-primary">Back</span>
            </div>
        </div>
    </div>
</Window>
