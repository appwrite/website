<script lang="ts">
    import { dequal } from 'dequal/lite';
    import TicketCard from '../(components)/ticket-card.svelte';
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
    let originalSticker = data.ticket.sticker;
    let sticker = originalSticker;
    let editing = false;

    $: modified = !dequal(
        {
            name: originalName,
            title: originalTitle,
            sticker: originalSticker
        },
        { name, title, sticker }
    );

    const stickerPack = [Globe, Github, Avatar, Globe, Globe];

    const saveTicket = async () => {
        await fetch('/init/tickets/customize/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                title,
                sticker
            })
        });
    };
</script>

<svelte:head>
    <title>Customize Your Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<Window class="container my-10">
    <a href="/init" slot="link" class="flex gap-1 uppercase">
        <span class="web-icon-chevron-left" />
        Back</a
    >
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
                        on:focus={() => (editing = true)}
                        on:blur={() => (editing = false)}
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
                        <button
                            class={classNames(
                                'aspect-square w-full rounded-[1px] border-black bg-black outline-2 outline-[var(--color-offset)] outline-dashed',
                                sticker === null
                                    ? 'outline-white/50'
                                    : 'outline-[var(--color-offset)]'
                            )}
                            on:click={() => (sticker = null)}
                            type="button"
                        >
                            <div
                                class="bg-smooth text-tertiary font-aeonik-fono flex size-full items-center justify-center uppercase"
                            >
                                None
                            </div>
                        </button>
                        {#each stickerPack as s, i}
                            <button
                                class={classNames(
                                    'aspect-square w-full rounded-[1px] border-black bg-black outline-2 outline-[var(--color-offset)] outline-dashed',
                                    sticker === i
                                        ? 'outline-white/50'
                                        : 'outline-[var(--color-offset)]'
                                )}
                                on:click={() => (sticker = i)}
                                type="button"
                            >
                                <div class="bg-smooth flex size-full items-center justify-center">
                                    <img src={s} alt="Sticker" class="size-20" />
                                </div>
                            </button>
                        {/each}
                    </div>
                </div>
                <button type="submit" class="web-button is-secondary w-full!" disabled={!modified}
                    >Save</button
                >
            </form>
        </div>
        <div
            class="bg-smooth relative col-span-9 flex w-full items-center justify-center gap-8 rounded-xl p-4 outline-2 [outline-offset:-2px] outline-[var(--color-offset)] outline-dashed"
        >
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard {...data.ticket} {name} {title} {editing} disableEffects />
                <span class="font-aeonik-fono tracking-loose text-x-micro text-primary">Front</span>
            </div>
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard {...data.ticket} {sticker} disableEffects flipped {stickerPack} />
                <span class="font-aeonik-fono tracking-loose text-x-micro text-primary">Back</span>
            </div>
        </div>
    </div>
</Window>
