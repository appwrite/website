<script lang="ts" context="module">
    export type EventCardProps = {
        href: string;
        cover: {
            src: string;
            alt: string;
        };
        date: string;
        location: string;
        title: string;
        description: string;
        buttonText: string;
        headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    };
</script>

<script lang="ts">
    type $$Props = EventCardProps;

    export let href: $$Props['href'];
    export let cover: $$Props['cover'];
    export let date: $$Props['date'];
    export let location: $$Props['location'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let buttonText: $$Props['buttonText'];
    export let headingLevel: $$Props['headingLevel'] = 5;
    $: headingTag = `h${headingLevel}`;
</script>

<a class="web-grid-articles-item" {href} target="_blank" rel="noopener noreferrer">
    <div class="web-grid-articles-item-image">
        <img src={cover.src} alt={cover.alt} class="web-u-media-ratio-16-9" />
    </div>
    <div class="web-grid-articles-item-content is-no-gap">
        <ul class="u-flex u-flex-wrap web-u-list-inline-dot-sep">
            <li class="u-flex u-cross-baseline u-gap-4">
                <span class="web-icon-calendar web-u-color-text-tertiary" aria-hidden="true"></span>
                <time class="">{date}</time>
            </li>
            <li class="u-flex u-cross-baseline u-gap-4">
                <span class="web-icon-location web-u-color-text-tertiary" aria-hidden="true"></span>
                <span class="">{location}</span>
            </li>
        </ul>
        <svelte:element
            this={headingTag}
            class="web-sub-body-500 web-u-color-text-primary u-margin-block-start-4"
        >
            {title}
        </svelte:element>
        <p class="web-sub-body-500">
            {description}
        </p>
        <div class="u-flex u-flex-wrap u-gap-8 u-padding-block-start-16 mbs-auto">
            <button class="web-button is-secondary">
                <span>{buttonText}</span>
            </button>
        </div>
    </div>
</a>

<style>
    .mbs-auto {
        margin-block-start: auto;
    }

    .web-grid-articles-item-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
</style>
