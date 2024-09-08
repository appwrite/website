<script lang="ts">
    import { onMount } from 'svelte';

    export let alt = '';
    export let src: string;
    export let isFeatured: boolean = false;

    let className = '';
    export { className as class };

    let imageLoaded = false;
    let isInViewport = false;
    let imageRef: HTMLImageElement;

    // we are explicitly dealing with a blog post cover image!
    let thumbnailSrc = src.replace('/images/blog/', '/images/blog/thumbnails/');
    let thumbnailWebpSrc = thumbnailSrc.replace(/\.png$/, '.webp');

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isInViewport) {
                        isInViewport = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '100px'
            }
        );

        if (imageRef) {
            observer.observe(imageRef);
        }

        return () => {
            if (imageRef) {
                observer.unobserve(imageRef);
            }
        };
    });
</script>

{#if isFeatured}
    <picture>
        <source srcset={thumbnailWebpSrc} type="image/webp" />
        <img {alt} src={thumbnailSrc} loading="eager" class={className} />
    </picture>
{:else}
    <div
        class="image-wrapper"
        class:loaded={imageLoaded}
        style="background: linear-gradient(to top right, #52303a, #1c1c1c);"
    >
        <picture>
            <source srcset={isInViewport ? thumbnailWebpSrc : null} type="image/webp" />
            <img
                {alt}
                class={className}
                bind:this={imageRef}
                class:fadeIn={imageLoaded}
                on:load={() => (imageLoaded = true)}
                loading="lazy"
                src={isInViewport ? thumbnailSrc : null}
            />
        </picture>
    </div>
{/if}

<style>
    .image-wrapper {
        overflow: hidden;
        position: relative;
        background-size: cover;
        background-position: center;
        transition: background 0.35s ease-in-out;
    }

    .image-wrapper img {
        opacity: 0;
        transition: opacity 0.35s ease-in-out;
    }

    .image-wrapper.loaded {
        background: none;
    }

    .image-wrapper img.fadeIn {
        opacity: 1;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }
</style>
