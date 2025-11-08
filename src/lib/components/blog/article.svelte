<script lang="ts">
    import Media from '$lib/UI/Media.svelte';
    import { formatDate } from '$lib/utils/date';

    interface Props {
        title: string;
        cover: string;
        href: string;
        date: Date;
        timeToRead: number;
        author: string;
        avatar: string;
    }

    const { title, cover, href, date, timeToRead, author, avatar }: Props = $props();
</script>

<a class="group flex w-full flex-col gap-8 bg-transparent pb-3 transition" {href}>
    <div class="overflow-hidden rounded-lg">
        <Media
            src={cover}
            class="aspect-video transition duration-250 ease-in-out group-hover:scale-105"
            alt={title}
        />
    </div>
    <div class="flex flex-col gap-5">
        <h4 class="text-label text-primary line-clamp-2">
            {title}
        </h4>

        <div class="flex items-center gap-2">
            <img
                class="size-6 rounded-full"
                loading="lazy"
                src={avatar}
                width="24"
                height="24"
                alt={author}
            />
            <div class="flex items-baseline gap-3">
                <h4 class="text-sub-body text-primary">{author}</h4>
                <ul class="text-caption flex items-center gap-2">
                    <li>
                        {formatDate(date)}
                    </li>
                    <li>{timeToRead} min</li>
                </ul>
            </div>
        </div>
    </div>
</a>
