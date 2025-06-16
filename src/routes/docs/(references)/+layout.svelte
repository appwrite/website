<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutProps } from './$types';
    import SiteHeader from '$lib/components/layout/site-header.svelte';
    import SiteFooter from '$lib/components/layout/site-footer.svelte';

    const { children }: LayoutProps = $props();
</script>

<SiteHeader />
{@render children()}
<SiteFooter />
