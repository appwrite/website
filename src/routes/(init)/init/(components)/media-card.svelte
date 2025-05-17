<script lang="ts">
    import type { DayProps } from './day.svelte';
    import DiscordIcon from '../(assets)/icons/discord.svg';
    import PlayIcon from '../(assets)/icons/play.svg';
    import Poster from '../(assets)/poster.png';
    import VideoDialog from '$lib/components/shared/dialog.svelte';

    type Props = NonNullable<DayProps['links']>[number];

    const { title, poster, type, url }: Props = $props();

    const icon = type === 'discord' ? DiscordIcon : PlayIcon;
</script>

<div class="group mt-2 w-fit min-w-[190px]">
    {#if type === 'video' || type === 'announcement'}
        <VideoDialog {url}>
            <div
                class="relative flex aspect-video w-full max-w-[190px] cursor-pointer flex-col items-center rounded-md outline-2 outline-offset-3 outline-[var(--color-offset)] outline-dashed"
            >
                <img
                    src={poster}
                    alt={title}
                    class="absolute inset-0 object-cover transition-opacity group-hover:opacity-75"
                />

                <div
                    class="pointer-events-none absolute bottom-2 left-2 z-1 flex size-10 items-center justify-center rounded-full border border-white/5 bg-gradient-to-bl from-white/10 to-transparent backdrop-blur-lg transition group-hover:scale-105"
                >
                    <img src={icon} alt={title} class="size-5" />
                </div>
            </div>
        </VideoDialog>
    {:else}
        <a
            href={url}
            target="_blank"
            class="group relative flex aspect-video w-full max-w-[190px] flex-col items-center rounded-md outline-2 outline-offset-3 outline-[var(--color-offset)] outline-dashed"
        >
            <img
                src={Poster}
                alt={title}
                class="absolute inset-0 object-cover transition-opacity group-hover:opacity-75"
            />

            <button
                class="absolute bottom-2 left-2 z-1 flex size-10 items-center justify-center rounded-full border border-white/5 bg-gradient-to-bl from-white/10 to-transparent backdrop-blur-lg transition group-hover:scale-105"
            >
                <img src={icon} alt={title} class="size-6" /></button
            >
        </a>
    {/if}
    <h3 class="text-x-micro font-aeonik-fono text-primary tracking-loose mt-4 block uppercase">
        {title}
    </h3>
</div>
