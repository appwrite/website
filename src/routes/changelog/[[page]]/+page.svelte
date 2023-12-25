<script lang="ts">
    import { goto } from '$app/navigation';
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { onMount } from 'svelte';
    import ChangelogEntry from '../ChangelogEntry.svelte';
    import { page } from '$app/stores';
    import { CHANGELOG_KEY } from '../utils';

    export let data;

    const seo = {
        title: 'Changelog',
        description: DEFAULT_DESCRIPTION,
        ogImage: `${DEFAULT_HOST}/images/open-graph/website.png`
    };

    function loadMore() {
        goto(`/changelog/${data.nextPage}`, { replaceState: true, noScroll: true });
    }

    onMount(() => {
        localStorage.setItem(CHANGELOG_KEY, $page.data.changelogEntries.toString());
    });
</script>

<svelte:head>
    <!-- Titles -->
    <title>{seo.title}</title>
    <meta property="og:title" content={seo.title} />
    <meta name="twitter:title" content={seo.title} />
    <!-- Desscription -->
    <meta name="description" content={seo.description} />
    <meta property="og:description" content={seo.description} />
    <meta name="twitter:description" content={seo.description} />
    <!-- Image -->
    <meta property="og:image" content={seo.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={seo.ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="aw-big-padding-section">
        <div class="aw-big-padding-section-level-1">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container wrapper">
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

                    {#if data.nextPage}
                        <button class="aw-button is-secondary" on:click={loadMore}>Load more</button>
                    {/if}
                </div>
            </div>
        </div>
        <div class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden">
            <div class="aw-big-padding-section-level-2">
                <div class="aw-container">
                    <PreFooter />
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .wrapper {
        --padding-inline: 1rem;
        box-sizing: border-box;
        max-width: calc(49.375rem + var(--padding-inline) * 2);
        padding-inline: var(--padding-inline);
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
                hsl(var(--aw-color-greyscale-700)) 0%,
                hsl(var(--aw-color-greyscale-700)) 95%,
                transparent 100%
            );

            position: absolute;
            inset-inline-start: -0.5px;
            inset-block-start: var(--dot-offset);
            width: 1px;
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

    @media screen and (max-width: 512px) {
        ul {
            padding-inline-start: 0;
            margin-block-start: 2.5rem;

            &::before {
                display: none;
            }
        }
    }
</style>
