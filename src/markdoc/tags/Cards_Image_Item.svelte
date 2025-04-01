<script lang="ts">
    import { setContext, type Snippet } from 'svelte';

    interface Props {
        href: string;
        light?: string;
        dark?: string;
        title: string;
        children: Snippet;
    }

    const { href, light = '', dark = '', title, children }: Props = $props();

    setContext('no-paragraph', true);
</script>

<li>
    <a {href} class="web-card is-normal" style:margin-block-end="0">
        <img src={dark} alt="" class="web-u-only-dark" width="32" height="32" />
        <img src={light} alt="" class="web-u-only-light" width="32" height="32" />
        <h4 class="text-sub-body text-primary mt-2 font-medium">
            {title}
        </h4>
        <p class="text-sub-body mt-1">
            {@render children()}
        </p>
    </a>
</li>
