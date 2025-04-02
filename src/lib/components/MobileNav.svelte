<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { IsLoggedIn } from '$lib/components';
    import { Button } from '$lib/components/ui';
    import { GITHUB_REPO_LINK, GITHUB_STARS } from '$lib/constants';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import type { NavLink } from './MainNav.svelte';

    export let open = false;
    export let links: NavLink[];

    afterNavigate(() => {
        open = false;
    });
</script>

<svelte:window on:resize={() => open && (open = false)} />

<nav class="web-side-nav web-is-not-desktop" class:hidden={!open}>
    <div class="web-side-nav-wrapper ps-4 pe-4">
        <div class="flex items-center gap-2 px-4">
            <Button href={getAppwriteDashboardUrl('/register')} variant="secondary" class="flex-1">
                Sign up
            </Button>
            <IsLoggedIn class="flex-1" />
        </div>
        <div class="web-side-nav-scroll">
            <section>
                <ul>
                    {#each links as { href, label, mobileSubmenu }}
                        <li>
                            {#if mobileSubmenu}
                                <svelte:component this={mobileSubmenu} {label} />
                            {:else}
                                <a class="web-side-nav-button" {href}>
                                    <span class="text-caption">{label}</span>
                                </a>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
        <div class="web-side-nav-mobile-footer-buttons">
            <Button
                href={GITHUB_REPO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                class="mx-auto"
            >
                <span class="web-icon-star" aria-hidden="true"></span>
                <span class="text">Star on GitHub</span>
                <span class="web-inline-tag text-sub-body">{GITHUB_STARS}</span>
            </Button>
        </div>
    </div>
</nav>
