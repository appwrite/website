<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { IsLoggedIn } from '$lib/components';
    import { SOCIAL_STATS } from '$lib/constants';
    import type { NavLink } from './MainNav.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, InlineTag, Icon } from '$lib/components/ui';

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
                href={SOCIAL_STATS.GITHUB.LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                class="w-full! md:w-fit"
            >
                <Icon icon="star" aria-hidden="true" />
                Star on GitHub
                <InlineTag>{SOCIAL_STATS.GITHUB.STAT}</InlineTag>
            </Button>
        </div>
    </div>
</nav>
