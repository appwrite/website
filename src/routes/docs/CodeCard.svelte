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
        <img src={cover} alt="" loading="lazy" />
    </div>
    <article class="web-grid-articles-item-content">
        <header class="web-articles-item-header">
            <h3 class="text-sub-body text-primary font-medium">{title}</h3>
        </header>
        <p
            class="web-articles-item-paragraph text-sub-body mt-1 line-clamp-2 font-medium"
            style="word-break: keep-all;"
        >
            {description}
        </p>
    </article>
</a>

<style>
</style>
