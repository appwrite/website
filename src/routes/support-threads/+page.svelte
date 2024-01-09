<script lang="ts">
    import { afterNavigate, goto, invalidate } from '$app/navigation';
    import { Main } from '$lib/layouts';
    import { createDebounce } from '$lib/utils/debounce';
    import { DEFAULT_DESCRIPTION, DEFAULT_HOST } from '$lib/utils/metadata';
    import { TITLE_SUFFIX } from '$routes/titles';

    import FooterNav from '$lib/components/FooterNav.svelte';
    import MainFooter from '$lib/components/MainFooter.svelte';
    import ThreadCard from './ThreadCard.svelte';

    import { queryParam } from 'sveltekit-search-params';
    import PreFooter from './PreFooter.svelte';
    import TagsDropdown from './TagsDropdown.svelte';
    import { filterThreads, getThreads } from './helpers';

    const title = 'Support Threads' + TITLE_SUFFIX;
    const description = DEFAULT_DESCRIPTION;
    const ogImage = DEFAULT_HOST + '/images/open-graph/website.png';

    export let data;

    let threads = data.threads;

    let searching = false; // Do some sick animation
    let query = '';

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

    const tags = ['Web', 'Flutter', 'Javascript', 'Dart', 'Apple'];
    const moreTags = [
        'Self hosted',
        'Databases',
        'Functions',
        'Cloud',
        'Android',
        'Windows',
        'Linux',
        'MacOS',
        'iOS',
        'iPadOS',
        'WatchOS'
    ];
    const _selectedTags = queryParam<string[]>('tags', {
        encode(value) {
            return value.join(',');
        },
        decode(value) {
            return value?.split(',') ?? [];
        },
        defaultValue: []
    });

    let selectedTags: string[] = [];
    // $: selectedTags = $_selectedTags; // Optimistic UI hack

    // afterNavigate(() => {
    //     selectedTags = $_selectedTags;
    // });

    function toggleTag(tag: string) {
        if (selectedTags.includes(tag)) {
            selectedTags = selectedTags.filter((t) => t !== tag);
        } else {
            selectedTags = [...selectedTags, tag];
        }
        handleSearch(query);
        // _selectedTags.update((p) => {
        //     let result: string[];

        //     const prevArr = p ?? [];
        //     if (prevArr.includes(tag)) {
        //         result = prevArr.filter((t) => t !== tag);
        //     } else {
        //         result = [...prevArr, tag];
        //     }

        //     selectedTags = result; // Optimistic UI hack
        //     return result;
        // });
    }
</script>

<svelte:head>
    <!-- Titles -->
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <!-- Desscription -->
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
    <div
        class="aw-big-padding-section-level-1 u-position-relative u-overflow-hidden"
        style="margin-block-start: -10rem; padding-block-start: 10rem; border-block-end: 1px solid hsl(var(--aw-color-smooth));"
    >
        <div
            class="u-position-absolute"
            style="pointer-events: none; inset-inline-start: -700px; inset-block-start: 0px;"
        >
            <enhanced:img src="./(assets)/bg-red.svg" alt="" />
        </div>
        <div
            class="u-position-absolute"
            style="pointer-events: none; inset-inline-end: -700px; inset-block-start: -400px;"
        >
            <enhanced:img src="./(assets)/bg-green.svg" alt="" />
        </div>
        <div class="aw-big-padding-section-level-2 u-position-relative aw-u-margin-block-80">
            <div class="aw-container">
                <h1 class="aw-display aw-u-color-text-primary">Support threads</h1>
            </div>
        </div>
    </div>

    <div class="aw-container" style="padding-block-end: 5rem">
        <div class="u-flex u-flex-wrap u-cross-center u-gap-32">
            <ul class="u-flex u-flex-wrap u-gap-8">
                {#each tags as tag}
                    <li style="display: flex; align-items: center;">
                        <button
                            class="aw-btn-tag"
                            class:is-selected={selectedTags?.includes(tag)}
                            on:click={() => toggleTag(tag)}
                        >
                            {tag}
                        </button>
                    </li>
                {/each}
                <li>
                    <TagsDropdown tags={moreTags} selectedTags={selectedTags ?? []} {toggleTag} />
                </li>
            </ul>
            <div
                class="aw-input-text-search-wrapper u-width-full-line u-max-width-350 aw-u-max-inline-size-none-mobile u-margin-inline-start-auto"
            >
                <span
                    class="aw-icon-search u-z-index-5"
                    aria-hidden="true"
                    style="inset-block-start:0.9rem"
                />
                <input
                    class="aw-input-button -u-padding-block-0 u-position-relative u-z-index-1"
                    type="text"
                    id="search"
                    placeholder="Search for threads"
                    data-hit="-1"
                    use:search
                    bind:value={query}
                />
            </div>
        </div>

        {#if threads.length}
            <h2 class="u-margin-block-start-16 aw-u-color-text-primary" aria-live="polite">
                Found {query.length ? threads.length : '600+'} results.
            </h2>
        {/if}

        <div class="u-flex-vertical u-gap-16 u-margin-block-start-16">
            {#each threads as thread (thread.$id)}
                <ThreadCard {thread} {query} />
            {:else}
                <div class="aw-card is-normal has-border-gradient empty-card">
                    <enhanced:img class="img" src="./(assets)/empty-state.png" alt="" />
                    <span class="aw-main-body-500">No support threads found</span>
                    <button
                        class="aw-button"
                        on:click={() => {
                            query = '';
                            handleSearch('');
                        }}>Clear search</button
                    >
                </div>
            {/each}
        </div>
    </div>
    <PreFooter />
    <div class="aw-container" style="margin-block-start: -7.75rem;">
        <FooterNav />
        <MainFooter />
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
            color: hsl(var(--aw-color-primary));
            text-align: center;
        }

        button {
            margin-block-start: 1.5rem;
            margin-inline: auto;
        }
    }
</style>
