<script lang="ts">
    import { MainFooter, FooterNav, PreFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import ChangelogEntry from './ChangelogEntry.svelte';

    export let data;
</script>

<Main>
    <div class="wrapper">
        <h1 class="aw-display aw-u-color-text-primary">Changelog</h1>
        <ul>
            {#each data.entries as entry}
                <li>
                    <div class="aw-dot" />
                    <ChangelogEntry {entry}>
                        <svelte:component this={entry.component} />
                    </ChangelogEntry>
                </li>
            {/each}
        </ul>

        <button class="aw-button is-secondary">Load more</button>
    </div>
    <div
        class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative u-overflow-hidden"
    >
        <div class="aw-container">
            <PreFooter />
            <FooterNav />
            <MainFooter />
        </div>
    </div>
</Main>

<style lang="scss">
    .wrapper {
        --padding-inline: 1rem;

        max-width: calc(49.375rem + var(--padding-inline) * 2);
        margin-block-start: 7.5rem;
        margin-inline: auto;
        padding-inline: var(--padding-inline);
        padding-block-end: 10rem;
    }

    ul {
        --padding-is: 2rem;
        --dot-offset: 0.25rem;

        display: grid;
        gap: 5rem;

        padding-inline-start: var(--padding-is);
        border-inline-start: 2px solid transparent;
        margin-block-start: 5rem;
        position: relative;

        &::before {
            content: '';
            background: linear-gradient(
                to bottom,
                hsl(var(--aw-color-smooth)) 0%,
                hsl(var(--aw-color-smooth)) 95%,
                transparent 100%
            );

            position: absolute;
            inset-inline-start: -1px;
            inset-block-start: var(--dot-offset);
            width: 2px;
            height: 100%;
        }

        li {
            position: relative;

            .aw-dot {
                position: absolute;
                inset-inline-start: calc(var(--padding-is) * -1);
                translate: -50% var(--dot-offset);
            }
        }
    }

    button {
        margin-block-start: 5rem;
        margin-inline: auto;
        min-inline-size: 10.9375rem;
    }
</style>
