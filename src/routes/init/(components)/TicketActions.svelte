<script lang="ts">
    import { browser, dev } from '$app/environment';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { appwriteInit } from '$lib/appwrite/init';
    import { Switch } from '$lib/components';
    import { createCopy } from '$lib/utils/copy';
    import { loginGithub } from '$routes/init/helpers';

    import type { PageData } from '../tickets/customize/$types';

    export let showGitHub = true;
    export let customizing = false;
    export let saveTicket: () => void;
    $: ({ ticket } = $page.data as PageData);

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
    {#if ticket.gh_user}
        <div class="u-flex u-cross-center u-gap-8 web-u-color-text-primary">
            <img src="/images/icons/colored/check.svg" alt="" />
            <span class="web-sub-body-500">GitHub</span>
        </div>

        <div
            class="u-flex u-cross-center u-main-between"
            style="margin-block-start: 0.25rem; gap: 1.25rem"
        >
            <Switch bind:checked={showGitHub} />
        </div>

        {#if dev}
            <button
                class="web-button is-full-width is-secondary u-margin-block-start-24"
                on:click={async () => {
                    await appwriteInit.account.deleteSession('current');
                    goto('/init/tickets');
                }}
                disabled={!browser}
            >
                <span class="text">(DEBUG) Log-out of GitHub</span>
            </button>
        {/if}
    {:else}
        <h2 class="web-sub-body-500 web-u-color-text-primary">Integrate your GitHub account</h2>
        <p class="web-sub-body-500" style:margin-block-start="0.25rem">
            Sign in with GitHub account and see the magic happen in your ticket.
        </p>
        <button
            class="web-button is-full-width is-secondary u-margin-block-start-24"
            on:click={loginGithub}
        >
            <div class="web-icon-github web-u-color-text-primary" />
            <span class="text">Log in to GitHub account</span>
        </button>
    {/if}

    {#if ticket.aw_email}
        <div class="u-flex u-cross-center u-gap-8 web-u-color-text-primary">
            <img src="/images/icons/colored/check.svg" alt="" />
            <span class="web-sub-body-500">Appwrite</span>
        </div>
    {:else}
        <h2 class="web-sub-body-500 web-u-color-text-primary">Integrate your Appwrite account</h2>
        <p class="web-sub-body-500" style:margin-block-start="0.25rem">
            Sign in with your Appwrite account and see the magic happen in your ticket.
        </p>
        <a
            href="https://cloud.appwrite.io/login?forceRedirect={$page.url.origin}/init/tickets"
            class="web-button is-full-width is-secondary u-margin-block-start-24"
        >
            <div class="web-icon-appwrite web-u-color-text-primary" />
            <span class="text">Log in to Appwrite account</span>
        </a>
    {/if}

    <div class="buttons">
        <button class="web-button is-secondary" on:click={() => (customizing = false)}>
            <span class="text">Cancel</span>
        </button>
        <button class="web-button" on:click={saveTicket}>
            <span class="text">Save Changes</span>
        </button>
    </div>
{:else}
    <div class="buttons">
        <button class="web-button" on:click={() => (customizing = !customizing)}>
            <span class="text">Customize ticket</span>
        </button>

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
            <span class="text">Post</span>
        </a>
    </div>
{/if}

<style lang="scss">
    .buttons {
        display: flex;
        align-items: center;
        gap: 16px;
    }
</style>
