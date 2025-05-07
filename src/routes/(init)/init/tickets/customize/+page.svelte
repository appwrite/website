<script lang="ts" module>
    export const stickerPack = [Sites, Flutter, DevKeys, Formats, Tokens];
</script>

<script lang="ts">
    import { isDeepEqual } from 'remeda';

    import DevKeys from '../../(assets)/stickers/devkeys.webp';
    import Sites from '../../(assets)/stickers/sites.webp';
    import Flutter from '../../(assets)/stickers/flutter.webp';
    import Formats from '../../(assets)/stickers/formats.webp';
    import Tokens from '../../(assets)/stickers/tokens.webp';
    import Window from '../../(components)/window.svelte';

    import { enhance } from '$app/forms';
    import { classNames } from '$lib/utils/classnames';
    import TicketCard from '../(components)/ticket-card.svelte';
    import { Button, Icon } from '$lib/components/ui';
    import { initDates } from '../../+page.svelte';
    import CustomizationForm from './(components)/customization-form.svelte';
    import CustomizationDrawer from './(components)/customization-drawer.svelte';
    import { draw } from 'svelte/transition';

    let { data } = $props();

    let originalTicketData = $state({
        name: data.ticket?.name ?? '',
        title: data.ticket?.title ?? '',
        sticker: data.ticket?.sticker
    });

    let updatedTicketData = $derived({
        name: originalTicketData.name.split(' ')[0],
        title: originalTicketData.title,
        sticker: originalTicketData.sticker
    });

    const isModified = $state(() => !isDeepEqual(originalTicketData, updatedTicketData));

    let formState = $state({
        editing: false,
        saving: false,
        saved: false
    });

    $effect(() => {
        if (formState.saved) {
            const timeout = setTimeout(() => {
                formState.saved = false;
            }, 2000);

            return () => {
                clearTimeout(timeout);
            };
        }
    });

    // debounce and autosave in the onchange handler
</script>

<svelte:head>
    <title>Customize Your Ticket - Appwrite</title>
    <meta
        name="description"
        content="Join Init {initDates}. Register today and claim your ticket."
    />
</svelte:head>

<div class="mx-4">
    <Window class="container my-10">
        {#snippet link()}
            <a href="/init" class="group flex items-center gap-2 uppercase">
                <Icon
                    name="chevron-left"
                    class="transition-transform group-hover:-translate-x-0.5"
                />
                Back</a
            >
        {/snippet}
        {#snippet title()}
            <div>Init Ticket<span class="text-accent">_</span></div>
        {/snippet}

        <div class="grid grid-cols-1 p-0.5 md:grid-cols-12">
            <div class="col-span-3 flex flex-col p-4">
                <div
                    class="border-offset flex items-center justify-between border-b border-dashed pb-4"
                >
                    <h3 class="text-primary font-aeonik-pro text-label">Customize ticket</h3>
                    <div class="contents md:hidden">
                        <CustomizationDrawer open={formState.saved}>
                            <CustomizationForm
                                {stickerPack}
                                {originalTicketData}
                                {updatedTicketData}
                                {formState}
                            />
                        </CustomizationDrawer>
                    </div>
                </div>

                <div class="hidden md:contents">
                    <CustomizationForm
                        {stickerPack}
                        {originalTicketData}
                        {updatedTicketData}
                        {formState}
                    />
                </div>
            </div>
            <div
                class="bg-smooth relative flex w-full flex-col items-center justify-center gap-8 rounded-xl p-4 outline-2 [outline-offset:-2px] outline-[var(--color-offset)] outline-dashed md:col-span-9 md:flex-row"
            >
                <div class="flex flex-col items-center gap-4 uppercase">
                    <TicketCard
                        {...data.ticket!}
                        name={originalTicketData.name}
                        title={originalTicketData.title}
                        sticker={originalTicketData.sticker}
                        editing={formState.editing}
                        disableEffects
                    />
                    <span
                        class="font-aeonik-fono tracking-loose text-x-micro text-primary transition-opacity peer-hover:opacity-0"
                        >Front</span
                    >
                </div>
                <div class="flex flex-col items-center gap-4 uppercase">
                    <TicketCard
                        {...data.ticket!}
                        contributions={data.streamed.contributions}
                        sticker={updatedTicketData.sticker}
                        disableEffects
                        flipped
                        {stickerPack}
                    />
                    <span
                        class="font-aeonik-fono tracking-loose text-x-micro text-primary transition duration-300 peer-hover:opacity-0 peer-hover:blur-sm"
                        >Back</span
                    >
                </div>
            </div>
        </div>
    </Window>
</div>
