<script lang="ts">
    import Media from '$lib/UI/Media.svelte';
    import { formatDate } from '$lib/utils/date';

    import type { AuthorInfo } from '$lib/utils/blog-authors';

    interface ArticleProps {
        title: string;
        cover: string;
        href: string;
        date: Date;
        timeToRead: number;
        authors: AuthorInfo[];
        avatars: string[];
    }

    const { title, cover, href, date, timeToRead, authors, avatars }: ArticleProps = $props();

    const authorAvatarPairs = $derived(
        avatars.map((avatar, i) => ({ avatar, author: authors[i] })).filter(({ avatar }) => avatar)
    );
</script>

<li>
    <a class="block overflow-hidden rounded-lg bg-transparent" {href}>
        <Media
            src={cover}
            class="aspect-video transition-transform duration-250 hover:scale-105"
            alt={title}
            autoplay
            controls={false}
        />
    </a>
    <div class="flex flex-col gap-3 pt-6 pb-3">
        <div class="text-caption text-secondary">
            {formatDate(date)} - {timeToRead} min
        </div>
        <a {href} class="bg-transparent">
            <h4 class="text-label font-aeonik-pro text-primary line-clamp-2 hover:underline">
                {title}
            </h4>
        </a>
        <div class="text-paragraph-md flex flex-wrap items-center gap-2">
            <div class="flex items-center">
                {#each authorAvatarPairs as { avatar, author }, i}
                    <img
                        class="size-5 rounded-full ring-2 ring-[#19191c]"
                        style="margin-inline-start: {i > 0
                            ? '-4px'
                            : '0'}; z-index: {authorAvatarPairs.length - i}"
                        loading="lazy"
                        src={avatar}
                        alt={author?.name ?? ''}
                    />
                {/each}
            </div>
            <span class="text-primary">
                {#each authors as author, i}
                    <a href={author.href} class="hover:underline">{author.name}</a
                    >{#if i < authors.length - 1},{' '}{/if}
                {/each}
            </span>
        </div>
    </div>
</li>
