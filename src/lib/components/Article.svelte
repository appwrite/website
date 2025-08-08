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
        <div class="web-grid-articles-item-image">
            <Media src={cover} class="aspect-video" alt={title} autoplay controls={false} />
        </div>
        <div class="web-grid-articles-item-content">
            <h4 class="text-label text-primary">
                {title}
            </h4>
            <div class="web-author">
                <div class="flex items-center justify-between gap-2">
                    <img
                        class="web-author-image"
                        loading="lazy"
                        src={avatar}
                        width="24"
                        height="24"
                        alt={author}
                    />
                    <div class="web-author-info flex-1 justify-between">
                        <h4 class="text-sub-body text-primary">{author}</h4>
                        <ul class="web-metadata text-caption web-is-not-mobile flex-1 self-end">
                            <li>
                                {formatDate(date)}
                            </li>
                            <li>{timeToRead} min</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </a>
</li>
