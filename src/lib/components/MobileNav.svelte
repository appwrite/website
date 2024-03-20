<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { IsLoggedIn } from '$lib/components';
    import { GITHUB_STARS } from '$lib/constants';
    import type { NavLink } from '$lib/layouts/Main.svelte';

    export let open = false;
    export let links: NavLink[];

    afterNavigate(() => {
        open = false;
    });
</script>

<svelte:window on:resize={() => open && (open = false)} />

<nav class="web-side-nav web-is-not-desktop" class:u-hide={!open}>
    <div class="web-side-nav-wrapper u-padding-inline-16">
        <div class="u-flex items-center u-gap-8">
            <a href="https://cloud.appwrite.io/register" class="web-button is-secondary web-u-flex-1">
                Sign up
            </a>
            <IsLoggedIn classes="web-u-flex-1" />
        </div>
        <div class="web-side-nav-scroll">
            <section>
                <ul>
                    {#each links as { href, label }}
                        <li>
                            <a class="web-side-nav-button" {href}>
                                <span class="web-caption-400">{label}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
        <div class="web-side-nav-mobile-footer-buttons">
            <a
                href="https://github.com/appwrite/appwrite/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                class="web-button is-text web-u-inline-width-100-percent-mobile"
            >
                <span class="web-icon-star" aria-hidden="true" />
                <span class="text">Star on GitHub</span>
                <span class="web-inline-tag web-sub-body-400">{GITHUB_STARS}</span>
            </a>
        </div>
    </div>
</nav>
