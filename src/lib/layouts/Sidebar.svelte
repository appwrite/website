<script lang="ts" module>
    export type NavLink = {
        label: string;
        href: string;
        icon?: string;
        new?: boolean;
        isParent?: boolean;
        openInNewTab?: boolean;
    };

    export type NavGroup = {
        label?: string;
        items: Array<NavLink>;
    };

    export type NavParent = {
        label: string;
        href: string;
    };

    export type NavTree = Array<NavGroup | NavLink>;
</script>

<script lang="ts">
    import { clickOutside } from '$lib/actions/clickOutside';
    import { Tooltip, IsLoggedIn } from '$lib/components';
    import { Button, Icon, InlineTag } from '$lib/components/ui';
    import { SOCIAL_STATS } from '$lib/constants';
    import { layoutState, toggleSidenav } from './Docs.svelte';
    import SidebarNavButton from './SidebarNavButton.svelte';

    interface Props {
        expandable?: boolean;
        navigation: NavTree;
        parent?: NavParent | undefined;
    }

    let { expandable = false, navigation, parent = undefined }: Props = $props();

    function isNavLink(item: NavLink | NavGroup): item is NavLink {
        return 'href' in item;
    }
</script>

<nav
    class="web-side-nav"
    use:clickOutside={(e) => {
        const el = e.target;
        if (!(el instanceof HTMLElement)) return;
        if (el.closest('.web-main-header') || el.closest('.web-mobile-header')) return;
        $layoutState.showSidenav = false;
    }}
    aria-label="Side"
>
    <div class="web-side-nav-wrapper">
        <button
            class="web-input-text web-is-not-desktop"
            onclick={() => ($layoutState.showSearch = true)}
        >
            <span class="web-icon-search"></span>
            <span class="text">Search in docs</span>
        </button>
        <div class="web-side-nav-scroll">
            {#if parent}
                <section class="web-side-nav-wrapper-parent">
                    <a href={parent.href} aria-label="go back">
                        <span class="icon-cheveron-left" aria-hidden="true"></span>
                    </a>
                    <span class="web-side-nav-wrapper-parent-title text-micro uppercase"
                        >{parent.label}</span
                    >
                </section>
            {/if}
            {#each navigation as navGroup}
                <section>
                    {#if isNavLink(navGroup)}
                        {#if expandable && !$layoutState.showSidenav}
                            <Tooltip placement="right">
                                <SidebarNavButton groupItem={navGroup} />
                                {#snippet tooltip()}
                                    <span>{navGroup.label}</span>
                                {/snippet}
                            </Tooltip>
                        {:else}
                            <SidebarNavButton groupItem={navGroup} />
                        {/if}
                    {:else}
                        {#if navGroup.label}
                            <h2 class="web-side-nav-header text-micro whitespace-nowrap uppercase">
                                {navGroup.label}
                            </h2>
                        {/if}
                        <ul>
                            {#each navGroup.items as groupItem}
                                <li>
                                    {#if expandable && !$layoutState.showSidenav}
                                        <Tooltip placement="right">
                                            <SidebarNavButton {groupItem} />
                                            {#snippet tooltip()}
                                                <span>{groupItem.label}</span>
                                            {/snippet}
                                        </Tooltip>
                                    {:else}
                                        <SidebarNavButton {groupItem} />
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </section>
            {/each}
        </div>
        {#if expandable}
            <button
                onclick={toggleSidenav}
                class="web-icon-button ml-auto"
                style:margin-bottom="1rem"
                aria-label="toggle nav"
            >
                <span class="icon-cheveron-right" aria-hidden="true"></span>
            </button>
        {/if}
        <div class="web-side-nav-mobile-footer-buttons">
            <IsLoggedIn />

            <Button
                variant="text"
                href={SOCIAL_STATS.GITHUB.LINK}
                target="_blank"
                rel="noopener noreferrer"
                class="web-u-inline-width-100-percent-mobile"
            >
                <Icon class="star" aria-hidden="true"></Icon>
                <span class="text">Star on GitHub</span>
                <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
            </Button>
        </div>
    </div>
</nav>
