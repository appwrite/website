<script lang="ts" context="module">
    export type CodeCardProps = {
        href: string;
        cover: string;
        title: string;
        description: string;
    };
</script>

<script lang="ts">
    type $$Props = CodeCardProps;
    export let href: $$Props['href'];
    export let cover: $$Props['cover'];
    export let title: $$Props['title'];
    export let description: $$Props['description'];
</script>

<a class="web-grid-articles-item is-full-color" {href}>
    <div class="web-grid-articles-item-image">
        <img src={cover} alt='' loading="lazy" />
    </div>
    <article class="web-grid-articles-item-content">
        <header class="web-articles-item-header">
            <h3 class="web-sub-body-500 web-u-color-text-primary">{title}</h3>
        </header>
        <p
            class="web-articles-item-paragraph web-sub-body-500 u-trim-2 u-margin-block-start-4"
            style="word-break: keep-all;"
        >
            {description}
        </p>
    </article>
</a>

<style>
</style>
