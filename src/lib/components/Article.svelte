<script lang="ts">
    export let title: string;
    export let cover: string;
    export let href: string;
    export let date: Date;
    export let timeToRead: number;
    export let author: string;
    export let avatar: string;
</script>

<li>
    <a class="aw-grid-articles-item is-transparent" {href}>
        <div class="aw-grid-articles-item-image">
            <img src={cover} class="aw-u-media-ratio-16-9" alt={title} />
        </div>
        <div class="aw-grid-articles-item-content">
            <h4 class="aw-label aw-u-color-text-primary">
                {title}
            </h4>
            <div class="aw-author">
                <div class="u-flex u-cross-center u-gap-8">
                    <img class="aw-author-image" src={avatar} width="24" height="24" alt={author} />
                    <div class="aw-author-info">
                        <h4 class="aw-sub-body-400 aw-u-color-text-primary">{author}</h4>
                        <ul class="aw-metadata aw-caption-400 aw-is-not-mobile">
                            <li>
                                {Intl.DateTimeFormat('en-US', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                }).format(date)}
                            </li>
                            <li>{timeToRead} min</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </a>
</li>
