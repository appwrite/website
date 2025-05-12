<script lang="ts" context="module">
    export type ProjectCardProps = {
        title: string;
        description: string;
        image: {
            src: string;
            alt: string;
        };
        href: string;
    };
</script>

<script lang="ts">
    import { trackEvent } from '$lib/actions/analytics';

    type $$Props = ProjectCardProps;

    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let image: $$Props['image'];
    export let href: $$Props['href'];
</script>

<a
    class="web-card is-white web-flex flex-col gap-2"
    style="--card-padding: 0.5rem;"
    {href}
    target="_blank"
    rel="noopener noreferrer"
    onclick={() => trackEvent(`community-project-${title.toLowerCase().replace(' ', '_')}-click`)}
>
    <div class="p-3">
        <h3 class="text-body text-primary font-medium">{title}</h3>
        <p class="line-clamp-2">
            {description}
        </p>
    </div>
    <div class="img-wrapper">
        <img src={image.src} alt={image.alt} />
    </div>
</a>

<style lang="scss">
    .web-card {
        &:hover {
            img {
                transform: scale(1.025);
            }
        }
    }

    .img-wrapper {
        border-radius: 0.5rem;
        overflow: hidden;

        img {
            display: block;

            block-size: 160px;
            inline-size: 100%;
            max-block-size: none;
            max-inline-size: none;
            object-fit: cover;
            transition: var(--transition);
        }
    }
</style>
