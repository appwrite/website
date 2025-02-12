<script lang="ts" context="module">
    export const stickerPack = [Sites, Flutter, Templates, Formats, Tokens];
</script>

<script lang="ts">
    import { dequal } from 'dequal/lite';

    import Sites from '../../(assets)/stickers/sites.webp';
    import Flutter from '../../(assets)/stickers/flutter.webp';
    import Templates from '../../(assets)/stickers/templates.webp';
    import Formats from '../../(assets)/stickers/formats.webp';
    import Tokens from '../../(assets)/stickers/tokens.webp';
    import Window from '../../(components)/window.svelte';

    import { enhance } from '$app/forms';
    import { classNames } from '$lib/utils/classnames';
    import TicketCard from '../(components)/ticket-card.svelte';

    export let data;

    let originalName = data.ticket?.name ?? '';
    let name = originalName.split(' ')[0];
    let originalTitle = data.ticket?.title ?? '';
    let title = originalTitle;
    let originalSticker = data.ticket.sticker;
    let sticker = originalSticker;
    let editing = false;

    let saving: boolean = false;
    let saved: boolean = false;

    $: modified = !dequal(
        {
            name: originalName,
            title: originalTitle,
            sticker: originalSticker
        },
        { name, title, sticker }
    );
</script>

<svelte:head>
    <title>Customize Your Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init December 5th-9th. Register today and claim your ticket."
    />
</svelte:head>

<Window class="container my-10">
    <a href="/init" slot="link" class="group flex gap-1 pt-2 uppercase">
        <span class="web-icon-chevron-left transition-transform group-hover:-translate-x-0.5" />
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

            <form
                method="POST"
                class="mt-4 flex flex-1 flex-col gap-4"
                use:enhance={() => {
                    saving = true;
                    return async ({ result, update }) => {
                        if (result.type === 'success') {
                            originalName = name;
                            originalTitle = title;
                            originalSticker = sticker;
                            saved = true;
                            saving = false;

                            const timeout = setTimeout(() => {
                                saved = false;
                            }, 3000);

                            return () => clearTimeout(timeout);
                        }
                        update({ reset: false });
                    };
                }}
            >
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
                        <div
                            class={classNames(
                                'relative flex aspect-square w-full items-center justify-center rounded-[2px] border-black bg-black outline-2 outline-[var(--color-offset)] outline-dashed',
                                sticker === null ? 'outline-white' : 'outline-[var(--color-offset)]'
                            )}
                        >
                            <input
                                type="radio"
                                class="absolute inset-0 appearance-none border-none"
                                name="sticker"
                                value=""
                                on:click={() => (sticker = null)}
                            />
                            <div
                                class="text-tertiary font-aeonik-fono tracking-loose bg-smooth flex size-[calc(100%_-_6px)] items-center justify-center rounded-[1px] p-1 uppercase"
                            >
                                None
                            </div>
                        </div>

                        {#each stickerPack as s, i}
                            <div
                                class={classNames(
                                    'relative flex aspect-square w-full items-center justify-center rounded-sm bg-black outline-2 [outline-offset:-1px] transition outline-dashed',
                                    sticker === i
                                        ? 'outline-white'
                                        : 'outline-[var(--color-offset)]'
                                )}
                            >
                                <input
                                    type="radio"
                                    class="absolute inset-0 appearance-none border-none"
                                    name="sticker"
                                    value={i}
                                    on:click={() => (sticker = i)}
                                />
                                <div
                                    class="bg-smooth flex size-[calc(100%_-_6px)] items-center justify-center rounded-[1px] p-1"
                                >
                                    <img src={s} alt="Sticker" class="size-20" />
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <button
                    type="submit"
                    class="web-button is-secondary w-full!"
                    disabled={!modified || saving}
                >
                    {#if saving}
                        Saving
                    {:else if saved}
                        Saved
                    {:else}
                        Save
                    {/if}
                </button>
            </form>
        </div>
        <div
            class="bg-smooth relative flex w-full flex-col items-center justify-center gap-8 rounded-xl p-4 outline-2 [outline-offset:-2px] outline-[var(--color-offset)] outline-dashed md:col-span-9 md:flex-row"
        >
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard {...data.ticket} {name} {title} {editing} disableEffects />
                <span
                    class="font-aeonik-fono tracking-loose text-x-micro text-primary transition-opacity peer-hover:opacity-0"
                    >Front</span
                >
            </div>
            <div class="flex flex-col items-center gap-4 uppercase">
                <TicketCard {...data.ticket} {sticker} disableEffects flipped {stickerPack} />
                <span
                    class="font-aeonik-fono tracking-loose text-x-micro text-primary transition duration-300 peer-hover:opacity-0 peer-hover:blur-sm"
                    >Back</span
                >
            </div>
        </div>
    </div>
</Window>
