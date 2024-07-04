<script lang="ts">
    import { page } from '$app/stores';
    import type { NavLink } from './Sidebar.svelte';

    export let groupItem: NavLink;
</script>

<a
    class="web-side-nav-button"
    class:is-selected={$page.url?.pathname === groupItem.href}
    href={groupItem.href}
>
    {#if groupItem.icon}
        <span class="icon {groupItem.icon}" aria-hidden="true" />
    {/if}
    <span class="web-caption-400">{groupItem.label} </span>
    {#if groupItem.isParent}
        <span class="icon-cheveron-right u-margin-inline-start-auto" aria-hidden="true" />
    {/if}
</a>

<style lang="scss">
    [class*='icon'] {
        font-size: 1rem;
    }
</style>
