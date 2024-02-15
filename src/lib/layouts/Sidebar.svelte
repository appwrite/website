<script lang="ts" context="module">
    export type NavLink = {
        label: string;
        href: string;
        icon?: string;
        isParent?: boolean;
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
    import { GITHUB_STARS } from '$lib/constants';
    import { layoutState, toggleSidenav } from './Docs.svelte';
    import SidebarNavButton from './SidebarNavButton.svelte';

    export let expandable = false;
    export let navigation: NavTree;
    export let parent: NavParent | undefined = undefined;

    function isNavLink(item: NavLink | NavGroup): item is NavLink {
        return 'href' in item;
    }
</script>

<nav
    class="aw-side-nav"
    use:clickOutside={(e) => {
        const el = e.target;
        if (!(el instanceof HTMLElement)) return;
        if (el.closest('.aw-main-header') || el.closest('.aw-mobile-header')) return;
        $layoutState.showSidenav = false;
    }}
    aria-label="Side"
>
    <div class="aw-side-nav-wrapper">
        <button
            class="aw-input-text aw-is-not-desktop"
            on:click={() => ($layoutState.showSearch = true)}
        >
            <span class="aw-icon-search" />
            <span class="text">Search in docs</span>
        </button>
        <div class="aw-side-nav-scroll">
            {#if parent}
                <section class="aw-side-nav-wrapper-parent">
                    <a href={parent.href} aria-label="go back">
                        <span class="icon-cheveron-left" aria-hidden="true" />
                    </a>
                    <span class="aw-side-nav-wrapper-parent-title aw-eyebrow">{parent.label}</span>
                </section>
            {/if}
            {#each navigation as navGroup}
                <section>
                    {#if isNavLink(navGroup)}
                        {#if expandable && !$layoutState.showSidenav}
                            <Tooltip placement="right">
                                <SidebarNavButton groupItem={navGroup} />
                                <svelte:fragment slot="tooltip">{navGroup.label}</svelte:fragment>
                            </Tooltip>
                        {:else}
                            <SidebarNavButton groupItem={navGroup} />
                        {/if}
                    {:else}
                        {#if navGroup.label}
                            <h2 class="aw-side-nav-header aw-eyebrow u-un-break-text">
                                {navGroup.label}
                            </h2>
                        {/if}
                        <ul>
                            {#each navGroup.items as groupItem}
                                <li>
                                    {#if expandable && !$layoutState.showSidenav}
                                        <Tooltip placement="right">
                                            <SidebarNavButton {groupItem} />
                                            <svelte:fragment slot="tooltip"
                                                >{groupItem.label}</svelte:fragment
                                            >
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
                on:click={toggleSidenav}
                class="aw-icon-button u-margin-inline-start-auto"
                style:margin-bottom="1rem"
                aria-label="toggle nav"
            >
                <span class="icon-cheveron-right" aria-hidden="true" />
            </button>
        {/if}
        <div class="aw-side-nav-mobile-footer-buttons">
            <IsLoggedIn>
                <svelte:fragment slot="isLoggedIn">
                    <a href="https://cloud.appwrite.io" class="aw-button">
                        <span class="text">Go to Console</span>
                    </a>
                </svelte:fragment>
                <svelte:fragment slot="isNotLoggedIn">
                    <a href="https://cloud.appwrite.io" class="aw-button">
                        <span class="text">Get started</span>
                    </a>
                </svelte:fragment>
            </IsLoggedIn>

            <a
                href="https://github.com/appwrite/appwrite/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                class="aw-button is-text aw-u-inline-width-100-percent-mobile"
            >
                <span class="aw-icon-star" aria-hidden="true" />
                <span class="text">Star on GitHub</span>
                <span class="aw-inline-tag aw-sub-body-400">{GITHUB_STARS}</span>
            </a>
        </div>
    </div>
</nav>
