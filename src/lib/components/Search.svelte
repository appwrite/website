<script lang="ts">
    import { afterNavigate, goto } from '$app/navigation';
    import { layoutState } from '$lib/layouts/Docs.svelte';
    import { isMac } from '$lib/utils/platform';

    import { createCombobox, melt } from '@melt-ui/svelte';

    import { type Hit, type Hits, MeiliSearch } from 'meilisearch';
    import { tick } from 'svelte';

    export let open = true;

    let value: string;
    let container: HTMLDivElement;

    const client = new MeiliSearch({
        host: 'https://search.appwrite.org',
        apiKey: '10a5fea149bfaff21ef4d7cbe7f8a09d4fab404d6c3510279a365e065f8955a7'
    });
    const index = client.index<Props>('website');

    type Props = {
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
    };

    let results: Hits<Props> = [];

    async function search(value: string) {
        return index.search(value, {
            limit: 20
        });
    }

    async function handleInput(value: string) {
        if (!value) {
            results = [];
        } else {
            const response = await search(value);
            results = response.hits;
        }
    }

    function handleExit(event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) {
        if (event.target === container) {
            open = false;
            value = '';
        }
    }

    function createHref(hit: Hit<Props>): string {
        const anchor = hit.anchor === '#' ? '' : (hit.anchor ?? '');
        const target = hit.url + anchor;

        return target.toString();
    }

    const recommended: Hits<Props> = [
        {
            uid: 'recommended-references-account',
            url: '/docs/references/cloud/client-web/account',
            h1: 'API reference',
            h2: 'Account'
        },
        {
            uid: 'recommended-references-teams',
            url: '/docs/references/cloud/client-web/teams',
            h1: 'API reference',
            h2: 'Teams'
        },
        {
            uid: 'recommended-references-databases',
            url: '/docs/references/cloud/client-web/databases',
            h1: 'API reference',
            h2: 'Databases'
        },
        {
            uid: 'recommended-references-storage',
            url: '/docs/references/cloud/client-web/storage',
            h1: 'API reference',
            h2: 'Storage'
        }
    ];

    afterNavigate(() => {
        open = false;
    });

    $: handleInput(value);

    let inputEl: HTMLInputElement;
    $: if (open && inputEl) {
        inputEl.value = '';
        inputEl?.focus();
    }

    const {
        elements: { input, menu, option },
        states: { inputValue }
    } = createCombobox<Props>({
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
            header: hit.h1,
            subtitle: hit.h2 ?? hit.h3 ?? hit.h4 ?? hit.h5 ?? hit.h6
        };
    }
</script>

<svelte:window on:keydown={handleKeypress} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="wrapper fixed inset-0 flex items-center justify-center p-0"
    data-visible={open ? true : undefined}
    style:z-index="100"
    style:background="hsl(var(--web-color-black) / 0.3)"
    style:backdrop-filter="blur(15px)"
    style:-webkit-backdrop-filter="blur(15px)"
    bind:this={container}
    on:click={handleExit}
>
    <div class="web-input-text-search-wrapper web-u-margin-inline-20 w-full max-w-[680px]">
        <span class="web-icon-search z-[5]" aria-hidden="true" style="inset-block-start:0.9rem"
        ></span>
        <div id="searchbox"></div>

        <input
            class="web-input-button bg-white-800/75! relative z-1 !rounded-b-none !pl-10"
            type="text"
            id="search"
            bind:value
            placeholder="Search in docs"
            style:inline-size="100%"
            use:melt={$input}
            bind:this={inputEl}
            data-hit="-1"
            on:keydown={(e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                }
            }}
        />
        <div
            class="web-card is-normal flex flex-col gap-6"
            use:melt={$menu}
            style="--card-padding-mobile:1rem; border-radius:0 0 0.5rem 0.5rem;"
        >
            {#if value}
                <section>
                    {#if results.length > 0}
                        <h6 class="text-micro uppercase">{results.length} results found</h6>
                        <ul class="mt-2 flex flex-col gap-1">
                            {#each results as hit, i (hit.uid)}
                                {@const subtitleContent = getSubtitleContent(hit)}
                                <li>
                                    <a
                                        data-hit={i}
                                        href={createHref(hit)}
                                        class="web-button text-caption is-text web-u-padding-block-8 web-padding-inline-12 web-u-cross-start flex
                                            max-w-full min-w-full flex-col gap-2"
                                        use:melt={$option({
                                            value: hit,
                                            label: hit.title ?? i.toString()
                                        })}
                                    >
                                        <div class="web-u-trim-1">
                                            {#if subtitleContent.header}
                                                <span class="web-u-color-text-secondary"
                                                    >{subtitleContent.header}</span
                                                >
                                                {#if subtitleContent.subtitle}
                                                    <span class="web-u-color-text-secondary">
                                                        /
                                                    </span>
                                                {/if}
                                            {/if}

                                            {#if subtitleContent.subtitle}
                                                <span class="text-primary"
                                                    >{subtitleContent.subtitle}</span
                                                >
                                            {/if}
                                        </div>
                                        {#if hit.p}
                                            <div
                                                class="web-u-color-text-secondary w-full overflow-hidden text-left text-ellipsis whitespace-nowrap"
                                            >
                                                {hit.p}
                                            </div>
                                        {/if}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p class="text-caption">
                            No results found for <span class="font-bold">{value}</span>
                        </p>
                    {/if}
                </section>
            {/if}
            <section>
                <h6 class="text-micro uppercase">Recommended</h6>
                <ul class="mt-2 flex flex-col gap-1">
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
                                class="web-button text-caption is-text web-u-padding-block-4 web-u-cross-start flex min-w-full flex-col gap-2"
                            >
                                <div class="web-u-trim-1">
                                    <span class="web-u-color-text-secondary">{hit.h1}</span>
                                    {#if hit.h2}
                                        <span class="web-u-color-text-secondary"> / </span>
                                        <span class="text-primary">{hit.h2}</span>
                                    {/if}
                                </div>
                            </a>
                        </li>
                    {/each}
                </ul>
            </section>
        </div>
    </div>
</div>

<style lang="scss">
    .wrapper {
        opacity: 0;
        pointer-events: none;
        transition: opacity 250ms ease;
    }

    .wrapper[data-visible] {
        opacity: 1;
        pointer-events: auto;
    }

    a.web-button {
        scroll-margin-block: 1rem;
    }

    .web-card {
        margin-block-start: -0.0625rem;
        max-block-size: min(18.75rem, calc(100vh - 5.5rem));
        border-block-start-width: 0;

        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
</style>
