<script lang="ts">
    import Media from '$lib/UI/Media.svelte';
    import { formatDate } from '$lib/utils/date';

    interface ArticleProps {
        title: string;
        cover: string;
        href: string;
        date: Date;
        timeToRead: number;
        author: string;
        avatar: string;
    }

    const { title, cover, href, date, timeToRead, author, avatar }: ArticleProps = $props();
</script>

<li>
    <a class="web-grid-articles-item is-transparent" {href}>
        <div class="overflow-hidden rounded-lg">
            <Media src={cover} class="aspect-video" alt={title} autoplay controls={false} />
        </div>
        <div class="flex flex-col gap-4 pt-6 pb-3">
            <h4 class="text-label text-primary">
                {title}
            </h4>
            <div class="flex w-full">
                <div class="flex w-full items-start justify-between gap-2">
                    <div class="flex items-center gap-2">
                        <img
                            class="rounded-full"
                            loading="lazy"
                            src={avatar}
                            width="24"
                            height="24"
                            alt={author}
                        />
                        <h4 class="text-sub-body text-primary">{author}</h4>
                    </div>
                    <div class="flex justify-between">
                        <ul class="text-secondary text-caption hidden items-end self-end md:flex">
                            <li>
                                {formatDate(date)}
                            </li>
                            <li class="before:mx-1 xl:before:content-['•']">{timeToRead} min</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </a>
</li>
