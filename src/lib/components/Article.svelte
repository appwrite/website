<script lang="ts">
    import Media from '$lib/UI/Media.svelte';
    import { formatDate } from '$lib/utils/date';

    export let title: string;
    export let cover: string;
    export let href: string;
    export let date: Date;
    export let timeToRead: number;
    export let author: string;
    export let avatar: string;
</script>

<li>
    <a class="web-grid-articles-item is-transparent" {href}>
        <div class="web-grid-articles-item-image">
            <Media
                src={cover}
                class="web-u-media-ratio-16-9"
                alt={title}
                autoplay
                controls={false}
            />
        </div>
        <div class="web-grid-articles-item-content">
            <h4 class="text-label text-primary">
                {title}
            </h4>
            <div class="web-author">
                <div class="flex items-center gap-2">
                    <img
                        class="web-author-image"
                        loading="lazy"
                        src={avatar}
                        width="24"
                        height="24"
                        alt={author}
                    />
                    <div class="web-author-info">
                        <h4 class="text-sub-body text-primary">{author}</h4>
                        <ul class="web-metadata text-caption web-is-not-mobile">
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
