<script lang="ts" context="module">
    export type NavLink = {
        label: string;
        href?: string;
        showBadge?: boolean;
        submenu?: ComponentType;
    };
</script>

<script lang="ts">
    import { page } from '$app/stores';
    import { classNames } from '$lib/utils/classnames';

    import { hasNewChangelog } from '$routes/changelog/utils';
    import type { ComponentType } from 'svelte';
    import ProductsSubmenu from './ProductsSubmenu.svelte';

    export let initialized = false;

    let navLinks: NavLink[] = [
        {
            label: 'Docs',
            href: '/docs'
        },
        {
            label: 'Community',
            href: '/community'
        },
        {
            label: 'Blog',
            href: '/blog'
        },
        {
            label: 'Products',
            submenu: ProductsSubmenu
        },
        {
            label: 'Integrations',
            href: '/integrations'
        },
        {
            label: 'Changelog',
            href: '/changelog',
            showBadge: hasNewChangelog?.() && !$page.url.pathname.includes('/changelog')
        },
        {
            label: 'Pricing',
            href: '/pricing'
        }
    ];
</script>

<nav class="web-main-header-nav" aria-label="Main">
    <ul class="web-main-header-nav-list">
        {#each navLinks as navLink}
            <li class="web-main-header-nav-item text-primary hover:text-accent">
                {#if navLink.submenu}
                    <button
                        class="web-main-header-nav-item-button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="submenu"
                        data-submenu-button
                    >
                        <svelte:component this={navLink.submenu} label={navLink.label} />
                    </button>
                {:else}
                    <a
                        class={classNames(
                            'data-[badge]:after:animate-scale-in data-[badge]:relative data-[badge]:after:absolute data-[badge]:after:size-1.5 data-[badge]:after:translate-full data-[badge]:after:rounded-full'
                        )}
                        href={navLink.href}
                        data-initialized={initialized ? '' : undefined}
                        data-badge={navLink.showBadge ? '' : undefined}
                        >{navLink.label}
                    </a>
                {/if}
            </li>
        {/each}
    </ul>
</nav>

<style>
    [data-badge] {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            background-color: hsl(var(--color-accent));
            border-radius: 100%;
            width: 0.375rem;
            height: 0.375rem;

            inset-block-start: -2px;
            inset-inline-end: -4px;
            translate: 100%;
        }

        &:not([data-initialized])::after {
            animation: scale-in 0.2s ease-out;
        }
    }
</style>
