<script lang="ts" context="module">
    import { navigating } from '$app/stores';
    import { writable } from 'svelte/store';

    export type DocsLayoutVariant = 'default' | 'expanded' | 'two-side-navs';

    const sidebar = cva('grid [grid-template-columns:280px_minmax(0,_1fr)] max-w-[90rem] mx-auto', {
        variants: {
            variant: {
                default: 'grid [grid-template-columns:280px_minmax(0,_1fr)] max-w-[90rem] mx-auto',
                expanded: 'web-grid-huge-navs',
                'two-side-navs': 'mx-auto max-w-[90rem]'
            }
        }
    });

    export type SidebarVariant = VariantProps<typeof sidebar>['variant'];

    export type DocsLayoutState = {
        showReferences: boolean;
        showSidenav: boolean;
        showSearch: boolean;
        currentVariant: SidebarVariant;
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
        console.log('toggling');
        layoutState.update((state) => {
            return {
                ...state,
                showReferences: false,
                showSidenav: !state.showSidenav
            };
        });
    }

    const CTX_KEY = Symbol('docs');
    const TUT_CTX_KEY = Symbol('tut-docs');
    export const isInDocs = () => getContext<boolean>(CTX_KEY) ?? false;
    export const isInTutorialDocs = () => getContext<boolean>(TUT_CTX_KEY) ?? false;
</script>

<script lang="ts">
    import { Search } from '$lib/components';
    import { getContext, setContext } from 'svelte';
    import { page } from '$app/stores';
    import { cva, type VariantProps } from 'cva';
    import MobileHeader from '$lib/components/docs/mobile-header.svelte';
    import Header from '$lib/components/docs/header.svelte';

    $: $layoutState.currentVariant = variant;

    export let variant: SidebarVariant = 'default';
    export let isReferences = false;

    navigating.subscribe(() => {
        layoutState.update((n) => ({
            ...n,
            showReferences: false,
            showSidenav: false
        }));
    });

    const key = $page.route.id?.includes('tutorials') ? TUT_CTX_KEY : CTX_KEY;
    setContext(key, true);

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

<div class="relative">
    <MobileHeader />
    <Header {variant} {isReferences} />
    <div
        class="mx-auto grid max-w-[90rem] [grid-template-columns:280px_minmax(0,_1fr)]"
        class:is-open={$layoutState.showSidenav}
        style:--container-size={variant === 'default' ? 'var(--container-size-large)' : undefined}
    >
        <slot />
    </div>
</div>

<Search bind:open={$layoutState.showSearch} />
