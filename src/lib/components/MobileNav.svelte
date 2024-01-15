<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import type { NavLink } from '$lib/layouts/Main.svelte';
    import {loggedIn} from "$lib/utils/console";

    export let open = false;
    export let links: NavLink[];

    afterNavigate(() => {
        open = false;
    });
</script>

<svelte:window on:resize={() => open && (open = false)} />

<nav class="aw-side-nav aw-is-not-desktop" class:u-hide={!open}>
    <div class="aw-side-nav-wrapper aw-u-padding-inline-16">
        <div class="u-flex items-center u-gap-8">
            <a href="https://cloud.appwrite.io/register" class="aw-button is-secondary aw-u-flex-1">
                Sign up
            </a>

            {#if $loggedIn}
                <a href="https://cloud.appwrite.io" class="aw-button aw-u-flex-1">Go to Console</a>
            {:else}
                <a href="https://cloud.appwrite.io" class="aw-button aw-u-flex-1">Get started</a>
            {/if}
        </div>
        <div class="aw-side-nav-scroll">
            <section>
                <ul>
                    {#each links as { href, label }}
                        <li>
                            <a class="aw-side-nav-button" {href}>
                                <span class="aw-caption-400">{label}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
        <div class="aw-side-nav-mobile-footer-buttons">
            <a
                href="https://github.com/appwrite/appwrite/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                class="aw-button is-text aw-u-inline-width-100-percent-mobile"
            >
                <span class="aw-icon-star" aria-hidden="true" />
                <span class="text">Star on GitHub</span>
                <span class="aw-inline-tag aw-sub-body-400">38.4K</span>
            </a>
        </div>
    </div>
</nav>
