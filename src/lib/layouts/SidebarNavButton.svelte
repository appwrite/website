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
    <span class="flex gap-2 text-caption">
        <span>{groupItem.label}</span>

        {#if groupItem.new}
            <span class="web-inline-tag is-pink" style="">New</span>
        {/if}
    </span>
    {#if groupItem.isParent}
        <span class="icon-cheveron-right ml-auto" aria-hidden="true" />
    {/if}
</a>

<style lang="scss">
  [class*='icon'] {
    font-size: 1rem;
  }

  .web-inline-tag {
    font-size: 0.75rem;
    padding-block: 2px;
    margin-block-start: 1px;
  }
</style>
