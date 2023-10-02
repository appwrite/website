<script lang="ts" context="module">
    import { navigating } from '$app/stores';
    import { writable } from 'svelte/store';

    export type DocsLayoutVariant = 'default' | 'expanded' | 'two-side-navs';
    export type DocsLayoutState = {
        showReferences: boolean;
        showSidenav: boolean;
        showSearch: boolean;
        currentVariant: DocsLayoutVariant | null;
    };
    export const layoutState = writable<DocsLayoutState>({
        showReferences: false,
        showSidenav: false,
        showSearch: false,
        currentVariant: null
    });
    export function toggleReferences() {
        layoutState.update((state) => ({
            ...state,
            showReferences: !state.showReferences,
            showSidenav: false
        }));
    }
    export function toggleSidenav() {
        layoutState.update((state) => ({
            ...state,
            showReferences: false,
            showSidenav: !state.showSidenav
        }));
    }
</script>

<script lang="ts">
    import Search from '$lib/components/Search.svelte';

    export let variant: DocsLayoutVariant = 'default';

    const variantClasses: Record<DocsLayoutVariant, string> = {
        default: 'aw-grid-side-nav aw-container u-padding-inline-0',
        expanded: 'aw-grid-huge-navs',
        'two-side-navs': 'aw-grid-two-side-navs'
    };

    $: variantClass = variantClasses[variant];
    $: $layoutState.currentVariant = variant;

    navigating.subscribe(() => {
        layoutState.update((n) => ({
            ...n,
            showReferences: false,
            showSidenav: false
        }));
    });

    function handleKeypress(event: KeyboardEvent) {
        if (event.metaKey && event.key.toLowerCase() === 'k') {
            $layoutState.showSearch = true;
        } else if (event.key.toLowerCase() === 'escape' || event.key.toLowerCase() === 'esc') {
            $layoutState.showSearch = false;
        }
    }
</script>

<svelte:window on:keydown={handleKeypress} />

<div class="u-position-relative u-overflow-hidden">
    <div
        class={variantClass}
        class:is-open={$layoutState.showSidenav}
        style:--container-size={variant === 'default' ? 'var(--container-size-large)' : undefined}
    >
        <section class="aw-mobile-header is-transparent">
            <div class="aw-mobile-header-start">
                <a href="/">
                    <img
                        class="aw-logo u-only-dark"
                        src="/images/logos/appwrite.svg"
                        alt="appwrite"
                        width="130"
                    />
                    <img
                        class="aw-logo u-only-light"
                        src="/images/logos/appwrite-light.svg"
                        alt="appwrite"
                        width="130"
                    />
                </a>
            </div>
            <div class="aw-mobile-header-end">
                <a href="https://cloud.appwrite.io/console" class="aw-button">
                    <span class="aw-sub-body-500">Go to console</span>
                </a>
                <button
                    on:click={toggleSidenav}
                    class="aw-button is-text"
                    aria-label="open navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M3 5.5H17"
                            stroke="#E4E4E7"
                            stroke-width="1.2"
                            stroke-linecap="round"
                        />
                        <path
                            d="M3 14.5H17"
                            stroke="#E4E4E7"
                            stroke-width="1.2"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>
        </section>
        <header class="aw-main-header is-transparent" class:is-transparent={variant !== 'expanded'}>
            <div class="aw-main-header-wrapper">
                <div class="aw-main-header-row">
                    <div class="aw-main-header-start u-stretch">
                        <a href="/">
                            <img
                                class="aw-logo u-only-dark"
                                src="/images/logos/appwrite.svg"
                                alt="appwrite"
                                width="130"
                            />
                            <img
                                class="aw-logo u-only-light"
                                src="/images/logos/appwrite-light.svg"
                                alt="appwrite"
                                width="130"
                            />
                        </a>
                        <nav class="aw-main-header-nav">
                            <ul class="aw-main-header-nav-list">
                                <li class="aw-main-header-nav-item">
                                    <a class="aw-main-header-nav-link is-selected" href="/docs"
                                        >Docs</a
                                    >
                                </li>
                            </ul>
                        </nav>
                        <div class="u-flex u-stretch aw-u-margin-inline-start-48">
                            <button
                                class="aw-input-button aw-u-flex-basis-400"
                                on:click={() => ($layoutState.showSearch = true)}
                            >
                                <span class="aw-icon-search" aria-hidden="true" />
                                <span class="text">Search in docs</span>

                                <div class="u-flex u-gap-4 u-margin-inline-start-auto">
                                    <span class="aw-kbd" aria-label="command">⌘</span>
                                    <span class="aw-kbd">K</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="aw-main-header-end">
                        <div class="u-flex u-gap-8">
                            <a
                                href="https://github.com/appwrite/appwrite/stargazers"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="aw-button is-text"
                            >
                                <span class="aw-icon-star" aria-hidden="true" />
                                <span class="text">Star on GitHub</span>
                                <span class="aw-inline-tag aw-sub-body-400">33.2K</span>
                            </a>
                            <a href="https://cloud.appwrite.io/console" class="aw-button">
                                <span class="aw-sub-body-500">Go to console</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <slot />
    </div>
</div>

<Search bind:open={$layoutState.showSearch} />
