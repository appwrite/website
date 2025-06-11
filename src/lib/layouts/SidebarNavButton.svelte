<script lang="ts">
    import { page } from '$app/state';
    import type { NavLink } from './Sidebar.svelte';

    export let groupItem: NavLink;
</script>

<a
    class="web-side-nav-button flex size-10 w-full items-center rounded-lg p-2 whitespace-nowrap"
    class:is-selected={page.url?.pathname === groupItem.href}
    href={groupItem.href}
    target={groupItem.openInNewTab ? '_blank' : undefined}
    data-sveltekit-reload
>
    {#if groupItem.icon}
        <span class="icon {groupItem.icon}" aria-hidden="true"></span>
    {/if}
    <span class="text-caption flex gap-2">
        <span>{groupItem.label}</span>

        {#if groupItem.new}
            <span class="web-inline-tag is-pink" style="">New</span>
        {/if}

        {#if groupItem.openInNewTab}
            <span class="icon icon-external-link icon-secondary" aria-hidden="true"></span>
        {/if}
    </span>
    {#if groupItem.isParent}
        <span class="icon-cheveron-right ml-auto" aria-hidden="true"></span>
    {/if}
</a>

<style lang="scss">
    :global(.light) {
        --color-secondary-icon: var(--greyscale-400, #97979b);
    }
    :global(.dark) {
        --color-secondary-icon: var(--greyscale-700, #56565c);
    }

    [class*='icon'] {
        font-size: 1rem;
    }

    .web-inline-tag {
        font-size: 0.75rem;
        padding-block: 2px;
        margin-block-start: 1px;
    }

    .icon-secondary {
        color: var(--color-secondary-icon);
        margin-left: -0.375rem;
    }
</style>
