<script lang="ts" context="module">
    export type NavLink = {
        label: string;
        href?: string;
        showBadge?: boolean;
        submenu?: ComponentType;
        mobileSubmenu?: ComponentType;
    };
</script>

<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { ComponentType } from 'svelte';

    export let initialized = false;

    export let links: NavLink[] = [];
</script>

<nav class="web-main-header-nav" aria-label="Main">
    <ul
        class={classNames('web-main-header-nav-list flex items-center opacity-0', {
            'animate-fade-in duration-200': initialized
        })}
    >
        {#each links as link}
            <li class="web-main-header-nav-item text-primary hover:text-accent">
                {#if link.submenu}
                    <div
                        class="web-main-header-nav-item-button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        aria-controls="submenu"
                        data-submenu-button
                    >
                        <svelte:component this={link.submenu} label={link.label} />
                    </div>
                {:else}
                    <a
                        class={classNames(
                            'data-[badge]:after:animate-scale-in data-[badge]:relative data-[badge]:after:absolute data-[badge]:after:size-1.5 data-[badge]:after:translate-full data-[badge]:after:rounded-full'
                        )}
                        href={link.href}
                        data-initialized={initialized ? '' : undefined}
                        data-badge={link.showBadge ? '' : undefined}
                        >{link.label}
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
