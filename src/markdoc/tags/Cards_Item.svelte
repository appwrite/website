<script lang="ts">
    import { setContext, type Snippet } from 'svelte';

    interface Props {
        href: string;
        icon?: string;
        image?: string;
        title: string;
        children?: Snippet;
    }

    const { href, icon = '', image = '', title, children }: Props = $props();

    setContext('no-paragraph', true);
</script>

<li>
    <a {href} class="web-card is-normal" style:margin-block-end="0">
        <header class="flex items-center gap-1">
            {#if icon}
                <span class="{icon} web-u-font-size-24" aria-hidden="true"></span>
            {/if}
            {#if image}
                <img src={image} alt={title} />
            {/if}
            <h4 class="text-sub-body text-primary font-medium">
                {title}
            </h4>
        </header>
        {#if children}
            <p class="text-sub-body mt-1" style:margin-block="0">
                {@render children()}
            </p>
        {/if}
    </a>
</li>

<style>
    img {
        width: 24px;
        object-fit: contain;
        object-position: center;
    }
</style>
