<script lang="ts" context="module">
    export const tribes = [
        null,
        'Appwrite',
        'Flutter',
        'Svelte',
        'React',
        'Vue',
        'Angular',
        'Next',
        'Astro',
        'Qwik',
        'Apple',
        'Android',
        'Windows',
        'Linux',
        'Python',
        'Dart',
        'php',
        'Ruby',
        'NET'
    ];
</script>

<script lang="ts">
    import { browser, dev } from '$app/environment';
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { appwriteInit } from '$lib/appwrite/init';
    import { Switch } from '$lib/components';
    import { loginGithub } from '$routes/init-0/helpers';
    import type { TicketVariant } from '../constants';

    import type { PageData } from './$types';
    import TribeToggle from './tribe-toggle.svelte';
    import { getAppwriteDashboardUrl } from '$lib/utils/dashboard';
    import { Button, Icon } from '$lib/components/ui';

    export let name = '';
    export let tribe: string | null = null;
    export let showGitHub = true;
    export let variant: TicketVariant = 'default';
    $: ({ ticket } = page.data as PageData);

    const variants: TicketVariant[] = ['default', 'pink', 'rainbow'] as const;
</script>

<div class="u-gap-4 u-margin-block-start-32 flex flex-col">
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

{#if dev}
    <label for="variant" class="u-margin-block-start-32 u-block">Ticket variant (DEBUG)</label>
    <select
        id="variant"
        class="u-margin-block-start-4"
        style:text-transform="capitalize"
        bind:value={variant}
    >
        {#each variants as variant}
            <option value={variant}>{variant}</option>
        {/each}
    </select>
{/if}

<hr />

{#if ticket.gh_user}
    <div class="u-flex u-cross-center u-gap-8 text-primary">
        <img src="/images/icons/colored/check.svg" alt="" />
        <span class="text-sub-body font-medium">GitHub account connected</span>
    </div>

    <div
        class="u-flex u-cross-center u-main-between"
        style="margin-block-start: 0.25rem; gap: 1.25rem"
    >
        <p class="text-sub-body font-medium">
            Your ticket has been updated to show your unique GitHub contribution pattern.
        </p>
        <Switch bind:checked={showGitHub} />
    </div>

    {#if dev}
        <Button
            variant="secondary"
            class="is-full-width u-margin-block-start-24"
            onclick={async () => {
                await appwriteInit.account.deleteSession('current');
                goto('/init-0/tickets');
            }}
            disabled={!browser}
        >
            <Icon name="github" class="text-primary" />
            <span class="text">(DEBUG) Log-out of GitHub</span>
        </Button>
    {/if}
{:else}
    <h2 class="text-sub-body text-primary font-medium">Integrate your GitHub account</h2>
    <p class="text-sub-body font-medium" style:margin-block-start="0.25rem">
        Sign in with your GitHub account and see the magic happen in your ticket.
    </p>
    <Button class="is-full-width u-margin-block-start-24" onclick={loginGithub} variant="secondary">
        <Icon name="github" class="text-primary" />
        <span class="text">Log in to GitHub account</span>
    </Button>
{/if}

<hr />

{#if ticket.aw_email}
    <div class="u-flex u-cross-center u-gap-8 text-primary">
        <img src="/images/icons/colored/check.svg" alt="" />
        <span class="text-sub-body font-medium">Appwrite account connected</span>
    </div>

    <p class="text-sub-body font-medium" style="margin-block-start: 0.25rem;">
        Your ticket has been upgraded.
    </p>
{:else}
    <h2 class="text-sub-body text-primary font-medium">Integrate your Appwrite account</h2>
    <p class="text-sub-body font-medium" style:margin-block-start="0.25rem">
        Sign in with your Appwrite account and see the magic happen in your ticket.
    </p>
    <Button
        variant="secondary"
        href={getAppwriteDashboardUrl(`/login?forceRedirect=${page.url.origin}/init-0/tickets`)}
        class="is-full-width u-margin-block-start-24"
    >
        <Icon name="appwrite" class="text-primary" />
        <span class="text">Log in to Appwrite account</span>
    </Button>
{/if}
<hr />

<h2 class="text-sub-body text-primary font-medium">Add your tribe</h2>
<p class="text-sub-body font-medium" style:margin-block-start="0.25rem">
    Customize your Init ticket with your technology.
</p>
<div class="tribes">
    {#each tribes as t}
        <TribeToggle
            tribe={t}
            checked={t === tribe}
            onClick={() => {
                tribe = t;
            }}
        />
    {/each}
</div>

<style lang="scss">
    hr {
        margin-block: 2rem;
        border-block-end: 1px solid hsl(var(--web-color-offset));
    }

    .tribes {
        margin-block-start: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media (max-width: 1023px) {
        .tribes {
            gap: 0.625rem;
        }
    }
</style>
