<script lang="ts">
    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import Main from '$lib/layouts/Main.svelte';
    import ShineSVG from '../../(assets)/shine.svg';

    let name = '';
</script>

<svelte:head>
    <title>Appwrite init_ - Customize Ticket</title>
</svelte:head>

<Main>
    <div class="hero">
        <div style:margin-block-start="0.625rem">
            <a class="aw-link aw-u-color-text-secondary u-cross-baseline" href="/init_/ticket">
                <span class="aw-icon-chevron-left" aria-hidden="true" />
                <span>Back</span>
            </a>
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
                />
            </div>
        </div>
        <div class="ticket-preview">
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

        .shine {
            position: absolute;
            inset-block-start: -100px;
            inset-inline-end: -100px;
            z-index: 20;
        }
    }
</style>
