<script lang="ts" module>
    export type DocsLayoutState = {
        showReferences: boolean;
        showSidenav: boolean;
        showSearch: boolean;
    };

    export const docsLayoutState = $state<DocsLayoutState>({
        showReferences: false,
        showSidenav: false,
        showSearch: false
    });
</script>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutProps } from './(two-side-navs)/$types';
    import SiteHeader from '$lib/components/layout/site-header.svelte';
    import SiteFooter from '$lib/components/layout/site-footer.svelte';
    import Search from '$lib/components/Search.svelte';

    const { children }: LayoutProps = $props();
</script>

<SiteHeader />
{@render children()}
<SiteFooter />
<Search bind:open={docsLayoutState.showSearch} />
