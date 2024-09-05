<script lang="ts">
    import { setContext } from 'svelte';

    export let href: string;
    export let light = '';
    export let dark = '';
    export let title: string;

    setContext('no-paragraph', true);
</script>

<li>
    <a {href} class="web-card is-normal" style:margin-block-end="0">
        <img src={dark} alt="" class="web-u-only-dark" width="32" height="32" />
        <img src={light} alt="" class="web-u-only-light" width="32" height="32" />
        <h4 class="web-sub-body-500 text-primary mt-2">
            {title}
        </h4>
        <p class="web-sub-body-400 mt-1">
            <slot />
        </p>
    </a>
</li>
