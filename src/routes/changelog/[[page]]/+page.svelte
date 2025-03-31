<script lang="ts">
    import { goto } from '$app/navigation';
    import { FooterNav, MainFooter, PreFooter } from '$lib/components';
    import { Main } from '$lib/layouts';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { onMount } from 'svelte';
    import ChangelogEntry from '../ChangelogEntry.svelte';
    import { page } from '$app/stores';
    import { CHANGELOG_KEY } from '../utils';
    import { TITLE_SUFFIX } from '$routes/titles';

    export let data;

    const seo = {
        title: 'Changelog' + TITLE_SUFFIX,
        description:
            "Explore Appwrite's changelog to stay on top of all the product updates and track our journey.",
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
    <!-- Description -->
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
    <div class="web-big-padding-section">
        <div class="pt-10">
            <div class="web-big-padding-section-level-2">
                <div class="wrapper container">
                    <h1 class="text-display font-aeonik-pro text-primary">Changelog</h1>
                    <ul>
                        {#each data.entries as entry}
                            <li>
                                <div class="web-dot" />
                                <ChangelogEntry {entry}>
                                    <svelte:component this={entry.component} />
                                </ChangelogEntry>
                            </li>
                        {/each}
                    </ul>

                    {#if data.nextPage}
                        <button class="web-button is-secondary" on:click={loadMore}
                            >Load more</button
                        >
                    {/if}
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden pt-10">
            <div class="pt-[7.5rem]">
                <div class="container">
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
                hsl(var(--web-color-greyscale-700)) 0%,
                hsl(var(--web-color-greyscale-700)) 95%,
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

            .web-dot {
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
