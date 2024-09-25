<script lang="ts">
    import { formatDate } from '$lib/utils/date';
    import { AuthorCover, BlogPostCover, Media } from '$lib/UI';

    export let title: string;
    export let cover: string;
    export let href: string;
    export let date: Date;
    export let timeToRead: number;
    export let author: string;
    export let avatar: string;
    export let thumbnail: boolean = false;
</script>

<li>
    <a class="web-grid-articles-item is-transparent" {href}>
        <div class="web-grid-articles-item-image">
            {#if thumbnail}
                <BlogPostCover src={cover} alt={title} class="web-u-media-ratio-16-9" />
            {:else}
                <Media
                    src={cover}
                    class="web-u-media-ratio-16-9"
                    alt={title}
                    autoplay
                    controls={false}
                />
            {/if}
        </div>
        <div class="web-grid-articles-item-content">
            <h4 class="text-label text-primary">
                {title}
            </h4>
            <div class="web-author">
                <div class="flex items-center gap-2">
                    <AuthorCover
                        {author}
                        {avatar}
                        {thumbnail}
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
