<script lang="ts">
    import { page } from '$app/state';
    import Docs, { type DocsLayoutVariant } from '$lib/layouts/Docs.svelte';
    import Sidebar from '../Sidebar.svelte';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    let variant = $derived(
        page.route.id === '/docs/tutorials' ? 'default' : ('two-side-navs' as DocsLayoutVariant)
    );
</script>

<Docs {variant}>
    <Sidebar />
    {@render children?.()}
</Docs>
