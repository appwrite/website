<script lang="ts">
    export let author: string | undefined;
    export let avatar: string | undefined;
    export let thumbnail: boolean = false;

    const authorThumbnail = thumbnail
        ? avatar?.replace('/images/avatars/', '/images/avatars/thumbnails/')
        : avatar;
    const authorThumbnailWebp = authorThumbnail?.replace(/\.png$/, '.webp');
</script>

<picture>
    <source srcset={authorThumbnailWebp} type="image/webp" />
    <img
        class="web-author-image"
        loading="lazy"
        src={authorThumbnail}
        width="24"
        height="24"
        alt={author}
    />
</picture>
