<script lang="ts">
    import { page } from '$app/stores';
    import { Switch } from '$lib/components';
    import { createCopy } from '$lib/utils/copy';
    import { loginGithub } from '$routes/init/helpers';
    import Tooltip from '$lib/components/Tooltip.svelte';

    import { browser, dev } from '$app/environment';
    import { appwriteInit } from '$lib/appwrite/init';
    import { goto } from '$app/navigation';

    export let showGitHub = true;
    export let customizing = false;
    export let modified = false;
    export let saving = false;
    export let saveTicket: () => void;
    let { ticket } = $page.data;

    const ticketUrl = `${$page.url.origin}/init/tickets/${ticket?.$id}`;
    const shareTextOptions = [
        `Join us during the week of August 19–23 to celebrate everything new with @appwrite. Claim your ticket here 👇 ${ticketUrl}`,
        `Come celebrate everything new with @appwrite from August 19–23! Don't miss out on the latest features and updates. Get your ticket ASAP! 📅 ${ticketUrl}`,
        `Don't miss out on init @appwrite from August 19–23. Get your ticket now and join us for a week of innovation. 🚀 ${ticketUrl}`,
        `Join us August 19–23 to explore everything new with @appwrite. Reserve your spot and be the first to know about the latest features 📌 ${ticketUrl}`,
        `Join the fun! We're celebrating everything new with @appwrite from August 19–23. Secure your ticket here 🎟️ ${ticketUrl}`,
        `We're celebrating everything new with @appwrite from August 19–23. Come join us and see what's in store. Get your ticket 🗓️ ${ticketUrl}`,
        `Join us for an incredible week of exploring everything new with @appwrite, August 19–23. Get your ticket here ✨ ${ticketUrl}`,
        `Join us August 19–23 to see everything new with @appwrite. Claim your ticket and be the first to experience the FRESH updates 👇 ${ticketUrl}`,
        `Let's celebrate everything new with @appwrite from August 19–23. Grab your ticket and join us for a week full of surprises 🎁 ${ticketUrl}`,
        `Be part of everything new with @appwrite from August 19–23. Get your ticket here: ${ticketUrl}`,
        `Join the fun! August 19–23, let's check out everything new with @appwrite together. Get your ticket and don't miss out 🎟️ ${ticketUrl}`,
        `I'm attending init @appwrite from August 19–23. Come along and experience the latest features with us. Get your ticket 🎫 ${ticketUrl}`,
        `Don't miss out on the fun! Join us at @appwrite init from August 19–23. Get your ticket here 🔥 ${ticketUrl}`,
        `My ticket looks so good! I'll be at @appwrite init from August 19–23. Join us and be the first to explore the updates 🌐 ${ticketUrl}`,
        `Spot my GitHub contribution graph! 🔥 Let's explore everything new with @appwrite from August 19–23. Secure your spot right away! ${ticketUrl}`,
        `I'm excited for everything new with @appwrite August 19–23. Come check out all the cool stuff with me! ${ticketUrl}`,
        `It's finally happening! Grab your ticket here and don't miss out on everything new with @appwrite from August 19–23 🚀 ${ticketUrl}`,
        `Join us for a week of everything new with @appwrite, August 19–23. Get your ticket here: ${ticketUrl}`,
        `Don't miss out on everything new with @appwrite from August 19–23. Get your ticket here: 💡 ${ticketUrl}`,
        `Let's check out everything new with @appwrite from August 19–23. Secure your ticket and join us for a week full of awesomeness! 🎉 ${ticketUrl}`
    ];

    const { copied, copy } = createCopy(ticketUrl);
    $: twitterText = encodeURIComponent(
        shareTextOptions[Math.floor(Math.random() * shareTextOptions.length)]
    );
</script>

{#if customizing}
    <div class="action-container flex justify-between gap-4" style:justify-content="space-between">
        <div class="flex gap-4">
            {#if ticket.gh_user}
                <div class="flex items-center gap-2">
                    <div class="text-primary flex items-center gap-2">
                        <span class="text-sub-body font-medium">Connected to GitHub</span>
                    </div>

                    <Tooltip placement="bottom">
                        <Switch bind:checked={showGitHub} />
                        <svelte:fragment slot="tooltip">Show GitHub contributions</svelte:fragment>
                    </Tooltip>
                </div>
            {:else}
                <button class="web-button is-secondary" on:click={loginGithub}>
                    <div class="web-icon-github text-primary"></div>
                    <span class="text">Log in to GitHub</span>
                </button>
            {/if}
        </div>

        <div class="buttons">
            <button class="web-button is-secondary" on:click={() => (customizing = false)}>
                <span class="text">Cancel</span>
            </button>
            <button
                class="web-button save-button"
                on:click={saveTicket}
                disabled={!modified || saving}
            >
                <span class="text">Save Changes</span>
            </button>
        </div>
    </div>
{:else}
    <div class="buttons" style:justify-content="space-between">
        <button class="web-button customize-button" on:click={() => (customizing = !customizing)}>
            <span class="text">Customize</span>
        </button>

        <div class="action-buttons flex gap-2">
            <button class="web-button is-secondary" on:click={copy}>
                <div class="web-icon-{$copied ? 'check' : 'copy'} text-primary"></div>
                <span class="text">Copy URL</span>
            </button>
            <a
                class="web-button is-secondary"
                href="https://twitter.com/intent/tweet?text={twitterText}"
                target="_blank"
            >
                <div class="web-icon-x text-primary"></div>
                <span class="text">Share</span>
            </a>
        </div>
    </div>
    {#if dev}
        <button
            style:margin-top="24px"
            on:click={async () => {
                await appwriteInit.account.deleteSession('current');
                goto('/init/tickets');
            }}
            disabled={!browser}
        >
            (DEBUG) Log-out of GitHub
        </button>
    {/if}
{/if}

<style lang="scss">
    .action-container {
        @media screen and (max-width: 1024px) {
            flex-direction: column;
            gap: 32px;
        }
    }
    .buttons {
        display: flex;
        align-items: center;
        gap: 16px;

        @media screen and (max-width: 1024px) {
            flex-direction: column;

            .action-buttons {
                width: 100%;
            }
            .web-button {
                &.customize-button,
                &.save-button {
                    width: 100%;
                }

                &.is-secondary {
                    width: 100%;
                }
            }
        }
    }
</style>
