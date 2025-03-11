<script lang="ts">
    import { setContext } from 'svelte';

    export let href: string;
    export let icon = '';
    export let image = '';
    export let dark = '';
    export let title: string;

    setContext('no-paragraph', true);
</script>

<li>
    <a {href} class="web-card is-normal" style:margin-block-end="0">
        <header class="flex items-center gap-1">
            {#if icon}
                <span class="{icon} web-u-font-size-24" aria-hidden="true" />
            {/if}
            {#if image}
                {#if dark}
                    <span class="web-u-only-light">
                        <img src={image} alt={title} />
                    </span>
                    <span class="web-u-only-dark">
                        <img src={dark} alt={title} />
                    </span>
                {:else}
                    <img src={image} alt={title} />
                {/if}
            {/if}
            <h4 class="text-sub-body text-primary font-medium">
                {title}
            </h4>
        </header>
        <p class="text-sub-body mt-1" style:margin-block="0">
            <slot />
        </p>
    </a>
</li>

<style>
    img {
        width: 24px;
        object-fit: contain;
        object-position: center;
    }
</style>
