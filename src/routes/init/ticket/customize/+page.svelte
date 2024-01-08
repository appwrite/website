<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import { quadOut } from 'svelte/easing';
    import { fly, type TransitionConfig } from 'svelte/transition';
    import ShineSVG from '../../(assets)/shine.svg';
    import Ticket from './ticket.svelte';
    import TribeToggle from './tribe-toggle.svelte';
    import { appwriteInit } from '$lib/appwrite/init';
    import { goto } from '$app/navigation';

    export let data;

    let name = data.username?.name ?? '';

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
    let tribe: string | null = null;

    function toScale(value: number, from: [number, number], to: [number, number]) {
        const [fromMin, fromMax] = from;
        const [toMin, toMax] = to;

        const fromRange = fromMax - fromMin;
        const toRange = toMax - toMin;
        const scale = toRange / fromRange;

        return (value - fromMin) * scale + toMin;
    }

    function ticketOut(_node: HTMLElement): TransitionConfig {
        // Scale from 1 to 0.75, from opacity 1 to 0.5
        return {
            duration: 500,
            css: (t) => `
                transform: scale(${toScale(t, [0, 1], [0.9, 1])});
                opacity: ${toScale(t, [0, 1], [0.25, 1])};
            `,
            easing: quadOut
        };
    }
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div style:margin-block-start="0.625rem">
            <!-- <a class="aw-link aw-u-color-text-secondary u-cross-baseline" href="/init/ticket">
                <span class="aw-icon-chevron-left" aria-hidden="true" />
                <span>Back</span>
            </a> -->
            <h1 class="aw-title aw-u-color-text-primary" style:margin-block-start="1.5rem">
                Customize ticket<span class="aw-u-color-text-accent">_</span>
            </h1>

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
            >
                <div class="aw-icon-github aw-u-color-text-primary" />
                <span class="text">DEBUG Log-out of GitHub</span>
            </button>

            <hr />

            <h2 class="aw-sub-body-500 aw-u-color-text-primary">Add your tribe</h2>
            <p class="aw-sub-body-500" style:margin-block-start="0.25rem">
                Add your favorite technology to your Init ticket and join your tribe of like-minded
                developers
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
        </div>
        <div class="ticket-preview">
            {#key tribe}
                <div
                    class="ticket-holder"
                    in:fly={{ y: -100, delay: 400, duration: 500, easing: quadOut }}
                    out:ticketOut
                >
                    <Ticket
                        {name}
                        user={data.username?.login}
                        id="0013371"
                        {tribe}
                        contributions={data.contributions}
                    />
                </div>
            {/key}
            <img class="shine" src={ShineSVG} alt="" />
        </div>
    </div>

    <div class="aw-container">
        <FooterNav />
        <MainFooter />
    </div>
</Main>

<style lang="scss">
    .hero {
        display: grid;
        grid-template-columns: minmax(420px, 30%) min(65%, 700px);
        gap: 7.5rem;
        justify-content: space-between;

        padding-inline: clamp(1.25rem, 4vw, 120rem);
        padding-block-start: 4rem;
    }

    .ticket-preview {
        --p-border-radius: 1rem;
        border: 1px solid hsl(var(--aw-color-subtle));
        border-radius: var(--p-border-radius);

        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 0.925 / 1;

        display: grid;
        place-items: center;

        .ticket-holder {
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;
        }

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 20;
        }
    }

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
