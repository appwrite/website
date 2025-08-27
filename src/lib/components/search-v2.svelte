<script lang="ts">
    import { afterNavigate, goto } from '$app/navigation';
    import { layoutState } from '$lib/layouts/Docs.svelte';
    import { isMac } from '$lib/utils/platform';

    import { createCombobox, melt } from '@melt-ui/svelte';

    import { MeiliSearch } from 'meilisearch';
    import { tick } from 'svelte';
    import Icon, { type IconType } from './ui/icon';
    import type { SearchHit, SearchItem } from '$lib/meilisearch/types';
    import { transformResults } from '$lib/meilisearch/search';
    import { PUBLIC_MEILISEARCH_SEARCH_KEY } from '$env/static/public';

    interface SearchProps {
        open: boolean;
    }

    let { open = $bindable(false) }: SearchProps = $props();

    let value = $state<string>('');
    let container: HTMLDivElement;

    const meilisearchClient = new MeiliSearch({
        host: 'https://ms-6b6b7d6df3ec-29090.fra.meilisearch.io',
        apiKey: PUBLIC_MEILISEARCH_SEARCH_KEY
    });

    const index = meilisearchClient.index<SearchItem>('website');

    let results = $state<Array<SearchHit>>([]);

    const resetValue = () => {
        value = '';
    };

    const handleInput = async (value: string) => {
        const response = await index.search(value, {
            attributesToCrop: ['p'],
            cropLength: 40,

            attributesToHighlight: ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
            highlightPreTag: '<mark>',
            highlightPostTag: '</mark>'
        });
        results = response.hits;
    };

    function handleExit(event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
        if (event.target === container) {
            open = false;
            resetValue();
        }
    }

    function createHref(hit: SearchHit): string {
        const anchor = hit.anchor === '#' ? '' : (hit.anchor ?? '');
        const target = hit.url + anchor;

        return target.toString();
    }

    const recommended = [
        {
            uid: 'custom-domains',
            url: '/blog/post/custom-domains-with-sites',
            title: 'Custom domains with Appwrite Sites',
            icon: 'blog'
        },
        {
            uid: 'quick-starts-flutter',
            url: '/quick-starts/flutter',
            title: 'Quick start with Flutter',
            icon: 'quickstarts'
        },
        {
            uid: 'tutorial-idea-tracker',
            url: '/docs/tutorials/react',
            h1: 'Build an ideas tracker with React',
            icon: 'docs'
        },
        {
            uid: 'email-password',
            url: '/docs/products/auth/email-password',
            h1: 'Auth with email and password',
            icon: 'users'
        },
        {
            uid: 'queries',
            url: '/docs/products/databases/queries',
            h1: 'Querying your database',
            icon: 'database'
        }
    ];

    afterNavigate(() => {
        open = false;
    });

    $effect(() => {
        handleInput(value);
    });

    let inputEl: HTMLInputElement;

    $effect(() => {
        if (open && inputEl) {
            inputEl.value = '';
            inputEl?.focus();
        }
    });

    const {
        elements: { input, menu, option },
        states: { inputValue }
    } = createCombobox<SearchItem>({
        forceVisible: true,
        preventScroll: false,
        portal: null,
        positioning: null,
        onSelectedChange({ next }) {
            if (next) {
                goto(next.value.url);
                tick().then(() => {
                    inputValue.set('');
                });
                inputValue.set('');
            }
            return undefined;
        }
    });

    function handleKeypress(event: KeyboardEvent) {
        const cmdPressed = isMac() ? event.metaKey : event.ctrlKey;
        if (cmdPressed && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            $layoutState.showSearch = true;
        } else if (event.key.toLowerCase() === 'escape' || event.key.toLowerCase() === 'esc') {
            event.preventDefault();
            $layoutState.showSearch = false;
        }
    }

    // function getSubtitleContent(
    //     hit: Hit<{ h1?: string; h2?: string; h3?: string; h4?: string; h5?: string; h6?: string }>
    // ): { header?: string; subtitle?: string } {
    //     return {
    //         header: hit._formatted?.h1,
    //         subtitle:
    //             hit._formatted?.h2 ??
    //             hit._formatted?.h3 ??
    //             hit._formatted?.h4 ??
    //             hit._formatted?.h5 ??
    //             hit._formatted?.h6
    //     };
    // }

    type GroupKey = string;

    const groupedResults = $derived(transformResults(results));

    $inspect(groupedResults);
</script>

<svelte:window on:keydown={handleKeypress} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    class="pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-black/10 p-0 opacity-0 backdrop-blur-lg transition-opacity duration-250 ease-out data-[visible]:pointer-events-auto data-[visible]:opacity-100"
    data-visible={open ? true : undefined}
    bind:this={container}
    onclick={handleExit}
>
    <div class="web-input-text-search-wrapper relative w-full max-w-2xl min-w-sm outline-0!">
        <div class="relative flex justify-between">
            <Icon name="search" class="absolute top-3.5 left-3 z-5" aria-hidden="true"></Icon>
            <input
                class="dark:bg-smooth bg-card/90 border-offset placeholder:text-secondary text-caption text-primary focus:placeholder:text-primary relative z-1 h-12 flex-1 rounded-t-2xl border pl-10 shadow-none outline-0 backdrop-blur-[48px]"
                type="text"
                id="search"
                bind:value
                placeholder="Search..."
                style:inline-size="100%"
                use:melt={$input}
                bind:this={inputEl}
                data-hit="-1"
                onkeydown={(e) => {
                    if (e.key === 'Tab') {
                        e.preventDefault();
                    }
                }}
            />
            {#if value}
                <button
                    onclick={resetValue}
                    class="absolute top-3.5 right-2 z-5 cursor-pointer px-1 transition-colors hover:text-white"
                >
                    <Icon name="close" />
                </button>
            {/if}
        </div>
        <div
            class="bg-card/90 dark:bg-card-75 border-offset relative flex max-h-80 flex-col gap-1 rounded-b-2xl border-x border-b pt-4 pb-2 backdrop-blur-[48px] outline-none"
            use:melt={$menu}
        >
            {#if value && value.length >= 3}
                {#if results.length > 0}
                    {@const totalResults = results.length}

                    <div class="top-0 max-h-80 overflow-x-auto overflow-y-auto px-4 pb-10">
                        {#each groupedResults as group}
                            <div>
                                <h6 class="text-primary mb-2 font-sans text-xs">Docs</h6>
                                <ul class="flex flex-col gap-1">
                                    {#each group.hits as hit, index (hit.uid)}
                                        <li>
                                            <a
                                                href={createHref(hit)}
                                                class="text-caption group data-[highlighted]:bg-smooth data-[highlighted]:text-primary text-secondary focus:bg-smooth -mx-2 flex min-w-full items-start gap-2.5 rounded-lg px-2 py-2.5 transition-colors"
                                                use:melt={$option({
                                                    value: hit.uid,
                                                    label: hit.title ?? hit.uid
                                                })}
                                            >
                                                <div
                                                    class="bg-offset border-offset flex size-6 shrink-0 items-center justify-center gap-2 rounded-sm border"
                                                >
                                                    <Icon name="docs" class="size-4" />
                                                </div>
                                                <div
                                                    class="[&_mark]:text-primary flex flex-col [&_mark]:bg-transparent [&:is(mark)]:bg-transparent"
                                                >
                                                    <div
                                                        class="text-secondary line-clamp-1 flex items-center gap-0.5"
                                                    >
                                                        {#if hit.title}
                                                            <span
                                                                class="[&:is(mark)]:font-medium [&>mark]:font-medium"
                                                            >
                                                                {@html hit.title}</span
                                                            >
                                                            <!-- {#if subtitleContent.subtitle}
                                                                <span> / </span>
                                                                <span
                                                                    class="[&:is(mark)]:font-medium [&>mark]:font-medium"
                                                                    >{@html subtitleContent.subtitle}</span
                                                                >
                                                            {/if} -->
                                                        {/if}
                                                    </div>

                                                    <div
                                                        class="text-secondary mt-1 line-clamp-1 flex w-full items-center text-left"
                                                    >
                                                        <span
                                                            class="[&>mark]:text-greyscale-900 [&>mark]:bg-mint-500 line-clamp-1 [&>mark]:rounded-sm [&>mark]:px-0.5 [&>mark]:font-medium"
                                                            >{@html hit.content}</span
                                                        >
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/each}
                    </div>
                    <div
                        class="bg-subtle border-smooth fixed bottom-0 left-px w-full rounded-b-2xl border-t py-3 text-center"
                    >
                        <h6 class="text-eyebrow font-aeonik-fono uppercase">
                            {totalResults} result{totalResults === 1 ? '' : 's'} found
                        </h6>
                    </div>
                {:else}
                    <p class="text-caption py-4 text-center">
                        No results found for <span class="text-primary font-medium">"{value}"</span>
                    </p>
                {/if}
            {:else}
                <div class="px-4">
                    <h6 class="text-eyebrow font-aeonik-fono uppercase">Suggestions</h6>
                    <ul class="mt-4 flex flex-col gap-1">
                        {#each recommended as hit, i (hit.uid)}
                            {@const index = i + (results.length ? results.length : 0)}
                            <li>
                                <a
                                    data-hit={index}
                                    use:melt={$option({
                                        value: hit,
                                        label: hit.title ?? i.toString()
                                    })}
                                    class="text-caption group data-[highlighted]:bg-smooth data-[highlighted]:text-primary text-secondary focus:bg-smooth -mx-2 flex min-w-full items-center gap-2.5 rounded-lg px-2 py-2.5 transition-colors"
                                >
                                    <Icon
                                        name={hit.icon as IconType}
                                        class="fill-primary size-4 shrink-0"
                                    />

                                    <div class="line-clamp-1 flex-1">
                                        <span>{hit.title}</span>
                                    </div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>
