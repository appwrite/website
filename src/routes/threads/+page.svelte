<script lang="ts">
    import { Main } from '$lib/layouts';
    import { createDebounce } from '$lib/utils/debounce';
    import { DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';
    import { Button } from '$lib/components/ui';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import ThreadCard from './ThreadCard.svelte';

    import PreFooter from './PreFooter.svelte';
    import TagsDropdown from './TagsDropdown.svelte';
    import { getThreads } from './helpers';

    const title = 'Threads' + TITLE_SUFFIX;
    const description =
        "Appwrite's Threads page showcases our community interactions on Discord. Join the conversation, ask questions, or assist other members with their issues.";
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    let { data } = $props();

    let threads = $state(data.threads);

    let searching = false; // Do some sick animation
    let query = $state('');

    const handleSearch = async (value: string) => {
        query = value;
        searching = true;
        threads = await getThreads({
            q: value,
            tags: selectedTags ?? [],
            allTags: true
        });
    };

    const { debounce, reset } = createDebounce();

    const search = (node: HTMLInputElement) => {
        const inputHandler = () => {
            const value = node.value.toLowerCase();

            debounce(() => {
                handleSearch(value);
            });
        };

        const keydownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const value = node.value.toLowerCase();

                reset();
                handleSearch(value);
            }
        };

        node.addEventListener('input', inputHandler);
        node.addEventListener('keydown', keydownHandler);

        return {
            destroy() {
                node.removeEventListener('input', inputHandler);
                node.removeEventListener('keydown', keydownHandler);
            }
        };
    };

    const tags = ['Web', 'Flutter', 'GraphQL', 'Cloud', 'Self Hosted'];

    const moreTags = [
        'Tools',
        'Accounts',
        'Users',
        'Teams',
        'Databases',
        'Storage',
        'Functions',
        'Realtime',
        'Locale',
        'Avatars',
        'Webhooks',
        'General',
        'REST API'
    ];

    let selectedTags: string[] = $state([]);

    function toggleTag(tag: string) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter((t) => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
        handleSearch(query);
    }
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Description -->
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <!-- Image -->
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Main>
    <div class="w-big-padding-section">
        <div>
            <div
                class="web-big-padding-section-level-2 web-u-margin-block-0 web-u-sep-block-end relative overflow-hidden py-10"
            >
                <div
                    class="absolute"
                    style="pointer-events: none; inset-inline-start: -700px; inset-block-start: 0px;"
                >
                    <enhanced:img src="./(assets)/bg-red.svg" alt="" />
                </div>
                <div
                    class="absolute"
                    style="pointer-events: none; inset-inline-end: -700px; inset-block-start: -400px;"
                >
                    <enhanced:img src="./(assets)/bg-green.svg" alt="" />
                </div>

                <div class="container">
                    <h1
                        class="text-display font-aeonik-pro text-primary web-u-margin-block-80 web-u-padding-block-end-40"
                    >
                        Threads
                    </h1>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 web-u-margin-block-start-24">
                <div class="container">
                    <div class="flex flex-wrap items-center gap-8">
                        <ul class="flex flex-wrap gap-2">
                            {#each tags as tag}
                                <li class="flex items-center">
                                    <button
                                        class="web-btn-tag"
                                        class:is-selected={selectedTags?.includes(tag)}
                                        onclick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                </li>
                            {/each}
                            <li>
                                <TagsDropdown
                                    tags={moreTags}
                                    selectedTags={selectedTags ?? []}
                                    {toggleTag}
                                />
                            </li>
                        </ul>
                        <div
                            class="web-input-text-search-wrapper web-u-max-inline-size-none-mobile ml-auto w-full max-w-[350px]"
                        >
                            <span
                                class="web-icon-search z-[5]"
                                aria-hidden="true"
                                style="inset-block-start:0.9rem"
                            ></span>

                            <input
                                class="web-input-button relative z-1 !pl-10"
                                type="text"
                                id="search"
                                placeholder="Search for threads"
                                data-hit="-1"
                                use:search
                                bind:value={query}
                                style:width="100%"
                            />
                        </div>
                    </div>

                    {#if threads.length}
                        <h2 class="text-primary mt-4" aria-live="polite">
                            Found {query.length ? threads.length : '5000+'} results.
                        </h2>
                    {/if}

                    <div class="mt-4 flex flex-col gap-4">
                        {#each threads as thread (thread.$id)}
                            <ThreadCard {thread} {query} />
                        {:else}
                            <div class="web-card is-normal has-border-gradient empty-card">
                                <enhanced:img class="img" src="./(assets)/empty-state.png" alt="" />
                                <span class="text-body font-medium">No support threads found</span>
                                <Button
                                    onclick={() => {
                                        query = '';
                                        handleSearch('');
                                    }}>Clear search</Button
                                >
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="web-big-padding-section-level-2 web-u-margin-block-end-0">
                <PreFooter />
            </div>
            <div class="web-big-padding-section-level-2 -mt-24">
                <div class="container">
                    <FooterNav />
                    <MainFooter />
                </div>
            </div>
        </div>
    </div>
</Main>

<style lang="scss">
    .empty-card {
        padding: 1.25rem;

        .img {
            display: block;
            width: 13.75rem;
            height: auto;
            margin-inline: auto;
        }

        span {
            display: block;
            color: hsl(var(--web-color-primary));
            text-align: center;
        }

        button {
            margin-block-start: 1.5rem;
            margin-inline: auto;
        }
    }
</style>
