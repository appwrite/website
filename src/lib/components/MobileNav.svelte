<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { IsLoggedIn } from '$lib/components';
    import { SOCIAL_STATS } from '$lib/constants';
    import type { NavLink } from './MainNav.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button } from '$lib/components/ui';
    import { GithubStats } from '$lib/components/shared';
    import { trackEvent } from '$lib/actions/analytics';

    export let open = false;
    export let links: NavLink[];
    export let offerButton = false;

    afterNavigate(() => {
        open = false;
        document.body.style.overflow = '';
    });
</script>

<svelte:window
    on:resize={() => {
        open && (open = false);
    }}
/>

<nav class="web-side-nav sticky block max-h-screen overflow-hidden xl:hidden" class:hidden={!open}>
    <div class="web-side-nav-wrapper ps-4 pe-4">
        <div class="flex items-center gap-2 px-4">
            {#if offerButton}
                <IsLoggedIn class="flex-1" offerButton />
            {:else}
                <Button
                    href={getAppwriteDashboardUrl('/register')}
                    variant="secondary"
                    class="flex-1"
                    event="mobile_nav-sign_up-click"
                >
                    Sign up
                </Button>
                <IsLoggedIn class="flex-1" offerButton={false} />
            {/if}
        </div>
        <div class="web-side-nav-scroll max-w-screen! pr-0!">
            <section>
                <ul>
                    {#each links as { href, label, mobileSubmenu, showBadge }}
                        <li>
                            {#if mobileSubmenu}
                                <svelte:component this={mobileSubmenu} {label} />
                            {:else}
                                <a
                                    class="web-side-nav-button"
                                    {href}
                                    data-badge={showBadge ? '' : undefined}
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
    }
</style>
