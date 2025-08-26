<script lang="ts">
    import { afterNavigate, goto } from '$app/navigation';
    import { layoutState } from '$lib/layouts/Docs.svelte';
    import { isMac } from '$lib/utils/platform';

    import { createCombobox, melt } from '@melt-ui/svelte';

    import { type Hit, type Hits, MeiliSearch } from 'meilisearch';
    import { tick } from 'svelte';
    import Icon, { type IconType } from './ui/icon';

    interface SearchProps {
        open: boolean;
    }

    let { open = $bindable(false) }: SearchProps = $props();

    let value = $state<string>('');
    let container: HTMLDivElement;

    const meilisearchClient = new MeiliSearch({
        host: 'https://search.appwrite.org',
        apiKey: '10a5fea149bfaff21ef4d7cbe7f8a09d4fab404d6c3510279a365e065f8955a7'
    });

    const index = meilisearchClient.index<SearchResult>('website');

    interface SearchResult {
        url: string;
        title?: string;
        uid?: string;
        meta?: Record<string, string>;
        page_block?: number;
        urls_tags?: Array<string>;
        h1?: string;
        h2?: string;
        h3?: string;
        h4?: string;
        h5?: string;
        h6?: string;
        p?: string;
        anchor?: string;
        _formatted?: SearchResult;
    }

    let results = $state<Hits<SearchResult>>([]);

    const resetValue = () => {
        value = '';
    };

    const handleInput = async (value: string) => {
        const response = await index.search(value, {
            attributesToCrop: ['p'],
            cropLength: 40,
            limit: 20,
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

    function createHref(hit: Hit<SearchResult>): string {
        const anchor = hit.anchor === '#' ? '' : (hit.anchor ?? '');
        const target = hit.url + anchor;

        return target.toString();
    }

    const recommended: Hits<SearchResult & { icon?: IconType }> = [
        {
            uid: 'custom-domains',
            url: '/blog/post/custom-domains-with-sites',
            h1: 'Custom domains with Appwrite Sites',
            icon: 'blog'
        },
        {
            uid: 'quick-starts-flutter',
            url: '/quick-starts/flutter',
            h1: 'Quick start with Flutter',
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
    } = createCombobox<SearchResult>({
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

    function getSubtitleContent(hit: Hit): { header?: string; subtitle?: string } {
        return {
            header: hit._formatted?.h1,
            subtitle:
                hit._formatted?.h2 ??
                hit._formatted?.h3 ??
                hit._formatted?.h4 ??
                hit._formatted?.h5 ??
                hit._formatted?.h6
        };
    }
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
                class="bg-card/75 border-offset placeholder:text-secondary text-caption text-primary focus:placeholder:text-primary relative z-1 h-12 flex-1 rounded-t-2xl border pl-10 shadow-none outline-0"
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
            class="bg-card/75 border-offset flex max-h-80 flex-col gap-1 overflow-hidden overflow-y-auto rounded-b-2xl border-x border-b px-4 pt-4 pb-2 outline-none"
            use:melt={$menu}
        >
            {#if value && value.length >= 3}
                <section>
                    {#if results.length > 0}
                        <h6 class="text-eyebrow font-aeonik-fono uppercase">
                            {results.length} results found
                        </h6>
                        <ul class="mt-2 flex flex-col gap-1">
                            {#each results as hit, i (hit.uid)}
                                {@const subtitleContent = getSubtitleContent(hit)}
                                {@const isDocs = hit.urls_tags?.includes('docs')}
                                {@const isBlog = hit.urls_tags?.includes('blog')}
                                <li>
                                    <a
                                        data-hit={i}
                                        href={createHref(hit)}
                                        class="text-caption group data-[highlighted]:bg-smooth data-[highlighted]:text-primary text-secondary focus:bg-smooth -mx-2 flex min-w-full items-start gap-2.5 rounded-lg px-2 py-2.5 transition-colors"
                                        use:melt={$option({
                                            value: hit,
                                            label: hit.title ?? i.toString()
                                        })}
                                    >
                                        <div
                                            class="bg-offset border-offset flex size-6 shrink-0 items-center justify-center gap-2 rounded-sm border"
                                        >
                                            <Icon
                                                name={isDocs
                                                    ? 'docs'
                                                    : isBlog
                                                      ? 'blog'
                                                      : 'lightning'}
                                                class="size-4"
                                            />
                                        </div>
                                        <div
                                            class="[&_mark]:text-primary flex flex-col [&_mark]:bg-transparent [&:is(mark)]:bg-transparent"
                                        >
                                            <div
                                                class="text-secondary line-clamp-1 flex items-center gap-0.5"
                                            >
                                                {#if subtitleContent.header}
                                                    <span
                                                        class="[&:is(mark)]:font-medium [&>mark]:font-medium"
                                                    >
                                                        {@html subtitleContent.header}</span
                                                    >
                                                    {#if subtitleContent.subtitle}
                                                        <span> / </span>
                                                        <span
                                                            class="[&:is(mark)]:font-medium [&>mark]:font-medium"
                                                            >{@html subtitleContent.subtitle}</span
                                                        >
                                                    {/if}
                                                {/if}
                                            </div>
                                            {#if hit._formatted}
                                                <div
                                                    class="text-secondary mt-1 line-clamp-1 flex w-full items-center text-left"
                                                >
                                                    <span
                                                        class="[&>mark]:text-greyscale-900 [&>mark]:bg-mint-500 line-clamp-1 [&>mark]:rounded-sm [&>mark]:px-0.5 [&>mark]:font-medium"
                                                        >{@html hit._formatted.p}</span
                                                    >
                                                </div>
                                            {/if}
                                        </div>
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="text-caption py-4 text-center">
                            No results found for <span class="font-bold">"{value}"</span>
                        </p>
                    {/if}
                </section>
            {:else}
                <section>
                    <h6 class="text-eyebrow font-aeonik-fono uppercase">Suggestions</h6>
                    <ul class="mt-4 flex flex-col gap-1">
                        {#each recommended as hit, i (hit.uid)}
                            {@const index = i + (results.length ? results.length : 0)}
                            <li>
                                <a
                                    data-hit={index}
                                    href={createHref(hit)}
                                    use:melt={$option({
                                        value: hit,
                                        label: hit.title ?? i.toString()
                                    })}
                                    class="text-caption group data-[highlighted]:bg-smooth data-[highlighted]:text-primary text-secondary focus:bg-smooth -mx-2 flex min-w-full items-center gap-2.5 rounded-lg px-2 py-2.5 transition-colors"
                                >
                                    <Icon name={hit.icon} class="fill-primary size-4 shrink-0" />

                                    <div class="line-clamp-1 flex-1">
                                        <span>{hit.h1}</span>
                                    </div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                </section>
            {/if}
        </div>
    </div>
</div>
