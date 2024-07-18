<script lang="ts">
    import { browser, dev } from '$app/environment';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { appwriteInit } from '$lib/appwrite/init';
    import { Switch } from '$lib/components';
    import { loginGithub } from '$routes/init/helpers';
    import type { TicketVariant } from '../constants';

    import type { PageData } from './$types';

    export let name = '';
    export let title = '';
    export let showGitHub = true;
    $: ({ ticket } = $page.data as PageData);
</script>

<div class="u-flex u-flex-vertical u-gap-4 u-margin-block-start-32">
    <label for="name">Your name</label>
    <input
        class="web-input-text"
        type="text"
        placeholder="Enter your name"
        id="name"
        name="name"
        required
        bind:value={name}
        maxlength="42"
        disabled={!browser}
    />
</div>

<div class="u-flex u-flex-vertical u-gap-4 u-margin-block-start-32">
    <label for="name">Your title</label>
    <input
        class="web-input-text"
        type="text"
        placeholder="Enter your title"
        id="title"
        name="title"
        required
        bind:value={title}
        maxlength="42"
        disabled={!browser}
    />
</div>

<hr />

{#if ticket.gh_user}
    <div class="u-flex u-cross-center u-gap-8 web-u-color-text-primary">
        <img src="/images/icons/colored/check.svg" alt="" />
        <span class="web-sub-body-500">GitHub account connected</span>
    </div>

    <div
        class="u-flex u-cross-center u-main-between"
        style="margin-block-start: 0.25rem; gap: 1.25rem"
    >
        <p class="web-sub-body-500">
            Your ticket has been updated to show your unique GitHub contribution pattern.
        </p>
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
            <div class="web-icon-github web-u-color-text-primary" />
            <span class="text">(DEBUG) Log-out of GitHub</span>
        </button>
    {/if}
{:else}
    <h2 class="web-sub-body-500 web-u-color-text-primary">Integrate your GitHub account</h2>
    <p class="web-sub-body-500" style:margin-block-start="0.25rem">
        Sign in with your GitHub account and see the magic happen in your ticket.
    </p>
    <button
        class="web-button is-full-width is-secondary u-margin-block-start-24"
        on:click={loginGithub}
    >
        <div class="web-icon-github web-u-color-text-primary" />
        <span class="text">Log in to GitHub account</span>
    </button>
{/if}

<hr />

{#if ticket.aw_email}
    <div class="u-flex u-cross-center u-gap-8 web-u-color-text-primary">
        <img src="/images/icons/colored/check.svg" alt="" />
        <span class="web-sub-body-500">Appwrite account connected</span>
    </div>

    <p class="web-sub-body-500" style="margin-block-start: 0.25rem;">
        Your ticket has been upgraded.
    </p>
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
<hr />
<button class="web-button is-full-width u-margin-block-start-32">Save</button>

<style lang="scss">
    hr {
        margin-block: 2rem;
        border-block-end: 1px solid hsl(var(--web-color-offset));
    }
</style>
