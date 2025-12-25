<script lang="ts">
    import Media from '$lib/UI/Media.svelte';
    import { formatDate } from '$lib/utils/date';

    interface AuthorInfo {
        name: string;
        href: string;
    }

    interface Props {
        title: string;
        cover: string;
        href: string;
        date: Date;
        timeToRead: number;
        authors: AuthorInfo[];
        avatars: string[];
    }

    const { title, cover, href, date, timeToRead, authors, avatars }: Props = $props();
</script>

<div class="group flex w-full flex-col gap-8 pb-3 transition">
    <a class="block overflow-hidden rounded-lg bg-transparent" {href}>
        <Media
            src={cover}
            class="aspect-video transition duration-250 ease-in-out group-hover:scale-105"
            alt={title}
        />
    </a>
    <div class="flex flex-col gap-5">
        <div class="text-caption text-secondary">
            {formatDate(date)} - {timeToRead} min
        </div>
        <a {href} class="bg-transparent">
            <h4 class="text-label text-primary line-clamp-2 hover:underline">
                {title}
            </h4>
        </a>

        <div class="flex items-center gap-2">
            <div class="flex items-center">
                {#each avatars as avatar, i}
                    <img
                        class="size-6 rounded-full ring-2 ring-[#19191c]"
                        style="margin-inline-start: {i > 0
                            ? '-8px'
                            : '0'}; z-index: {avatars.length - i}"
                        loading="lazy"
                        src={avatar}
                        width="24"
                        height="24"
                        alt={authors[i]?.name ?? ''}
                    />
                {/each}
            </div>
            <div class="flex items-baseline gap-3">
                <h4 class="text-sub-body text-primary">
                    {#each authors as author, i}
                        <a href={author.href} class="web-link">{author.name}</a
                        >{#if i < authors.length - 1},{' '}{/if}
                    {/each}
                </h4>
            </div>
        </div>
    </div>
</div>
