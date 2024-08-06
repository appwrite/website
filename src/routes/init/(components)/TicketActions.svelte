<script lang="ts">
    import { page } from '$app/stores';
    import { Switch } from '$lib/components';
    import { createCopy } from '$lib/utils/copy';
    import { loginGithub } from '$routes/init/helpers';
    import Tooltip from '$lib/components/Tooltip.svelte';

    import type { PageData } from '../tickets/customize/$types';
    import { browser, dev } from '$app/environment';
    import { appwriteInit } from '$lib/appwrite/init';
    import { goto } from '$app/navigation';

    export let showGitHub = true;
    export let customizing = false;
    export let saveTicket: () => void;
    let { ticket } = $page.data as PageData;

    const ticketUrl = `${$page.url.origin}/init/tickets/${ticket?.$id}`;
    const { copied, copy } = createCopy(ticketUrl);
    $: twitterText = encodeURIComponent(
        [
            `Join Init and celebrate everything new with @appwrite`,
            ``,
            `Claim your ticket. ${ticketUrl}`
        ].join('\n')
    );
</script>

{#if customizing}
    <div
        class="action-container u-flex u-main-between u-gap-16"
        style:justify-content="space-between"
    >
        <div class="u-flex u-gap-16">
            {#if ticket.gh_user}
                <div class="u-flex u-cross-center u-gap-8">
                    <div class="u-flex u-cross-center u-gap-8 web-u-color-text-primary">
                        <span class="web-sub-body-500">Connected to GitHub</span>
                    </div>

                    <Tooltip placement="bottom">
                        <Switch bind:checked={showGitHub} />
                        <svelte:fragment slot="tooltip">Show GitHub contributions</svelte:fragment>
                    </Tooltip>
                </div>
            {:else}
                <button class="web-button is-secondary" on:click={loginGithub}>
                    <div class="web-icon-github web-u-color-text-primary" />
                    <span class="text">Log in to GitHub</span>
                </button>
            {/if}
        </div>

        <div class="buttons">
            <button class="web-button is-secondary" on:click={() => (customizing = false)}>
                <span class="text">Cancel</span>
            </button>
            <button class="web-button" on:click={saveTicket}>
                <span class="text">Save Changes</span>
            </button>
        </div>
    </div>
{:else}
    <div class="buttons" style:justify-content="space-between">
        <div class="u-flex u-gap-8">
            <button class="web-button" on:click={() => (customizing = !customizing)}>
                <span class="text">Customize ticket</span>
            </button>
        </div>

        <div class="u-flex u-gap-8">
            <button class="web-button is-secondary" on:click={copy}>
                <div class="web-icon-{$copied ? 'check' : 'copy'} web-u-color-text-primary" />
                <span class="text">Copy URL</span>
            </button>
            <a
                class="web-button is-secondary"
                href="https://twitter.com/intent/tweet?text={twitterText}"
                target="_blank"
            >
                <div class="web-icon-x web-u-color-text-primary" />
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
    }
</style>
