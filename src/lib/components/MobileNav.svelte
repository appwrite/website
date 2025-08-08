<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { IsLoggedIn } from '$lib/components';
    import { SOCIAL_STATS } from '$lib/constants';
    import type { NavLink } from './MainNav.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, InlineTag, Icon } from '$lib/components/ui';
    import { GithubStats } from '$lib/components/shared';
    import { trackEvent } from '$lib/actions/analytics';

    export let open = false;
    export let links: NavLink[];

    afterNavigate(() => {
        open = false;
    });
</script>

<svelte:window on:resize={() => open && (open = false)} />

<nav
    class="web-side-nav sticky top-[74px] block max-h-screen overflow-hidden lg:hidden"
    class:hidden={!open}
>
    <div class="web-side-nav-wrapper ps-4 pe-4">
        <div class="flex items-center gap-2 px-4">
            <Button
                href={getAppwriteDashboardUrl('/register')}
                variant="secondary"
                class="flex-1"
                event="mobile_nav-sign_up-click"
            >
                Sign up
            </Button>
            <IsLoggedIn class="flex-1" />
        </div>
        <div class="web-side-nav-scroll max-w-screen! pr-0!">
            <section>
                <ul>
                    {#each links as { href, label, mobileSubmenu }}
                        <li>
                            {#if mobileSubmenu}
                                <svelte:component this={mobileSubmenu} {label} />
                            {:else}
                                <a
                                    class="web-side-nav-button"
                                    {href}
                                    onclick={() =>
                                        trackEvent(
                                            `mobile-nav-${label.toLowerCase().replace(' ', '_')}-click`
                                        )}
                                >
                                    <span class="text-caption">{label}</span>
                                </a>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
        <div class="web-side-nav-mobile-footer-buttons mx-1!">
            <GithubStats class="w-full! md:w-fit" />
        </div>
    </div>
</nav>
