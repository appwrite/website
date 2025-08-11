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
    <a class="bg-transparent" {href}>
        <div class="overflow-hidden rounded-lg">
            <Media src={cover} class="aspect-video" alt={title} autoplay controls={false} />
        </div>
        <div class="flex flex-col gap-3 pt-6 pb-3">
            <h4 class="text-label font-aeonik-pro text-primary line-clamp-2">
                {title}
            </h4>
            <div class="flex w-full">
                <div class="text-eyebrow flex w-full flex-col items-center xl:flex-row xl:gap-2">
                    <div class="flex items-center justify-center gap-2">
                        <img class="size-5 rounded-full" loading="lazy" src={avatar} alt={author} />
                        <h4 class="text-primary">{author}</h4>
                    </div>
                    <div class="text-secondary ml-7 flex xl:ml-0">
                        <span>
                            {formatDate(date)}
                        </span>
                        <span class="before:mx-1 xl:before:content-['-']">{timeToRead} min</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</li>
