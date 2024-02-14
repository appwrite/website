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
        layoutState.update((state) => {
            return {
                ...state,
                showReferences: false,
                showSidenav: !state.showSidenav
            };
        });
    }

    const CTX_KEY = Symbol('docs');
    export const isInDocs = () => getContext<boolean>(CTX_KEY) ?? false;
</script>

<script lang="ts">
    import Search from '$lib/components/Search.svelte';

    import { isMac } from '$lib/utils/platform';
    import { getContext, setContext } from 'svelte';
    import { GITHUB_STARS } from '$lib/constants';

    export let variant: DocsLayoutVariant = 'default';
    export let isReferences = false;

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
    setContext(CTX_KEY, true);

    const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && ($layoutState.showReferences || $layoutState.showSidenav)) {
            e.preventDefault();
            layoutState.update((state) => ({
                ...state,
                showReferences: false,
                showSidenav: false
            }));
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="u-position-relative">
    <section class="aw-mobile-header is-transparent">
        <div class="aw-mobile-header-start">
            <a href="/" aria-label="homepage">
                <img
                    class="aw-logo u-only-dark"
                    src="/images/logos/appwrite.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
                <img
                    class="aw-logo u-only-light"
                    src="/images/logos/appwrite-light.svg"
                    alt="appwrite"
                    height="24"
                    width="130"
                />
            </a>
        </div>
        <div class="aw-mobile-header-end">
            <a href="https://cloud.appwrite.io/console" class="aw-button aw-is-only-desktop">
                <span class="aw-sub-body-500">Go to console</span>
            </a>
            <button class="aw-button is-text" aria-label="open navigation" on:click={toggleSidenav}>
                {#if $layoutState.showSidenav}
                    <span aria-hidden="true" class="aw-icon-close" />
                {:else}
                    <span aria-hidden="true" class="aw-icon-hamburger-menu" />
                {/if}
            </button>
        </div>
    </section>
    <header
        class="aw-main-header {isReferences ? 'is-reference' : 'is-docs'}"
        class:is-transparent={variant !== 'expanded'}
    >
        <div class="aw-main-header-wrapper">
            <div class="aw-main-header-start u-stretch">
                <a href="/" aria-label="homepage">
                    <img
                        class="aw-logo u-only-dark"
                        src="/images/logos/appwrite.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                    <img
                        class="aw-logo u-only-light"
                        src="/images/logos/appwrite-light.svg"
                        alt="appwrite"
                        height="24"
                        width="130"
                    />
                </a>
                <nav class="aw-main-header-nav" aria-label="Top">
                    <ul class="aw-main-header-nav-list">
                        <li class="aw-main-header-nav-item">
                            <a class="aw-link" href="/docs">Docs</a>
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
                            {#if isMac()}
                                <span class="aw-kbd" aria-label="command">⌘</span>
                            {:else}
                                <span class="aw-kbd" aria-label="control">Ctrl</span>
                            {/if}
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
                        <span class="aw-inline-tag aw-sub-body-400">{GITHUB_STARS}</span>
                    </a>
                    <a href="https://cloud.appwrite.io/console" class="aw-button">
                        <span class="aw-sub-body-500">Go to console</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <div
        class={variantClass}
        class:is-open={$layoutState.showSidenav}
        style:--container-size={variant === 'default' ? 'var(--container-size-large)' : undefined}
    >
        <slot />
    </div>
</div>

<Search bind:open={$layoutState.showSearch} />
