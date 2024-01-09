<script lang="ts">
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';
    import { appwriteInit } from '$lib/appwrite/init';
    import TribeToggle from './tribe-toggle.svelte';

    export let name = '';
    export let tribe: string | null = null;

    const tribes = [
        null,
        'Appwrite',
        'Flutter',
        'JavaScript',
        'Svelte',
        'React',
        'Vue',
        'Angular',
        'Next',
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

<div class="u-flex u-flex-vertical u-gap-4 u-margin-block-start-32">
    <label for="name">Your name</label>
    <input
        class="aw-input-text"
        type="text"
        placeholder="Enter your name"
        id="name"
        name="name"
        required
        bind:value={name}
        maxlength="128"
        disabled={!browser}
    />
</div>

<hr />

<h2 class="aw-sub-body-500 aw-u-color-text-primary">Integrate your Appwrite account</h2>
<p class="aw-sub-body-500" style:margin-block-start="0.25rem">
    Sign in with your Appwrite Account and see the magic happen in your ticket
</p>
<button class="aw-button is-full-width is-secondary u-margin-block-start-24" disabled>
    <div class="aw-icon-appwrite aw-u-color-text-primary" />
    <span class="text">(SOON) Log in to Appwrite Account</span>
</button>
<button
    class="aw-button is-full-width is-secondary u-margin-block-start-24"
    on:click={async () => {
        await appwriteInit.account.deleteSession('current');
        goto('/init/ticket');
    }}
    disabled={!browser}
>
    <div class="aw-icon-github aw-u-color-text-primary" />
    <span class="text">(DEBUG) Log-out of GitHub</span>
</button>

<hr />

<h2 class="aw-sub-body-500 aw-u-color-text-primary">Add your tribe</h2>
<p class="aw-sub-body-500" style:margin-block-start="0.25rem">
    Add your favorite technology to your Init ticket and join your tribe of like-minded developers
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
        border-block-end: 1px solid hsl(var(--aw-color-offset));
    }

    .tribes {
        margin-block-start: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>
