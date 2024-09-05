<script lang="ts">
    import { setContext } from 'svelte';

    export let href: string;
    export let icon = '';
    export let title: string;

    setContext('no-paragraph', true);
</script>

<li>
    <a {href} class="web-card is-normal" style:margin-block-end="0">
        <header class="flex items-baseline gap-1">
            {#if icon}
                <span class="{icon} web-u-font-size-24" aria-hidden="true" />
            {/if}
            <h4 class="text-sub-body font-medium text-primary">
                {title}
            </h4>
        </header>
        <p class="text-sub-body mt-1" style:margin-block="0">
            <slot />
        </p>
    </a>
</li>
