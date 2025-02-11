<script lang="ts">
    import type { DayProps } from './day.svelte';
    import DiscordIcon from '../(assets)/icons/discord.svg';
    import PlayIcon from '../(assets)/icons/play.svg';

    type $$Props = NonNullable<DayProps['links']>[number];

    let { title, poster, type, url } = $$props as $$Props;

    const icon = type === 'discord' ? DiscordIcon : PlayIcon;
</script>

<a
    href={url}
    class="flex aspect-video w-full max-w-[190px] flex-col items-center rounded-md outline-2 outline-offset-3 outline-[var(--color-offset)] outline-dashed"
>
    <div class="relative size-full rounded-lg bg-black">
        <button class="bg-offset absolute bottom-2 left-2 size-10 rounded-full backdrop-blur-lg" />
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
        <img src={icon} alt={title} class="size-6" />
    </a>
    <h3 class="mt-2 text-lg font-bold">{title}</h3>
</a>
