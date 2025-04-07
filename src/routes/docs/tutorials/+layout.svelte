<script lang="ts">
    import { page } from '$app/state';
    import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
    import Sidebar from '../Sidebar.svelte';

    $: variant =
        page.route.id === '/docs/tutorials' ? 'default' : ('two-side-navs' as DocsLayoutVariant);
</script>

<Docs {variant}>
    <Sidebar />
    <slot />
</Docs>
