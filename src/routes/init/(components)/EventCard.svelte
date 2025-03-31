<script lang="ts" context="module">
    export type EventCardProps = {
        href: string;
        cover: {
            src: string;
            alt: string;
        };
        date: string;
        location?: string;
        title: string;
        description: string;
        buttonText: string;
        headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    };
</script>

<script lang="ts">
    import { format } from 'date-fns';

    type $$Props = EventCardProps;

    export let href: $$Props['href'];
    export let cover: $$Props['cover'];
    export let date: $$Props['date'];
    export let location: $$Props['location'] = '';
    export let title: $$Props['title'];
    export let description: $$Props['description'];
    export let buttonText: $$Props['buttonText'];
    export let headingLevel: $$Props['headingLevel'] = 5;
    const hasPast: boolean = new Date() > new Date(date);
    const dateString: string = format(new Date(date), 'MMMM d, yyyy');
    $: headingTag = `h${headingLevel}`;
</script>

<a class="web-grid-articles-item" {href} target="_blank" rel="noopener noreferrer">
    <div class="web-grid-articles-item-image">
        <img src={cover.src} alt={cover.alt} loading="lazy" />
    </div>
    <div class="web-grid-articles-item-content is-no-gap">
        <ul class="web-u-list-inline-dot-sep flex flex-wrap">
            <li class="flex items-baseline gap-1">
                <span class="web-icon-calendar web-u-color-text-tertiary" aria-hidden="true"></span>
                <time class="">{dateString}</time>
            </li>
            {#if location}
                <li class="flex items-baseline gap-1">
                    <span class="web-icon-location web-u-color-text-tertiary" aria-hidden="true"
                    ></span>
                    <span class="">{location}</span>
                </li>
            {/if}
        </ul>
        <svelte:element this={headingTag} class="text-sub-body text-primary mt-1 font-medium">
            {title}
        </svelte:element>
        <p class="text-sub-body font-medium">
            {description}
        </p>
        <div class="mbs-auto flex flex-wrap gap-2 pt-4">
            <button class="web-button is-secondary" disabled={hasPast}>
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
