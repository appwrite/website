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

<a class="aw-grid-articles-item is-full-color" {href}>
    <div class="aw-grid-articles-item-image">
        <img src={cover} alt='' loading="lazy" />
    </div>
    <article class="aw-grid-articles-item-content">
        <header class="aw-articles-item-header">
            <h3 class="aw-sub-body-500 aw-u-color-text-primary">{title}</h3>
        </header>
        <p
            class="aw-articles-item-paragraph aw-sub-body-500 u-trim-2 u-margin-block-start-4"
            style="word-break: keep-all;"
        >
            {description}
        </p>
    </article>
</a>

<style>
</style>
