<script lang="ts">
    import { page } from '$app/stores';
    import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
    import Sidebar from '../Sidebar.svelte';

    $: variant = $page.url.pathname.endsWith('/tutorials')
        ? 'default'
        : ('two-side-navs' as DocsLayoutVariant);
</script>

<Docs {variant}>
    <Sidebar />
    <slot />
</Docs>
