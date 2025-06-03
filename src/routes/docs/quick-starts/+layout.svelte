<script lang="ts">
    import { page } from '$app/state';
    import Docs from '$lib/layouts/Docs.svelte';
    import Sidebar from '../Sidebar.svelte';
</script>

<Docs variant={page.route.id === '/docs/quick-starts' ? 'default' : 'two-side-navs'}>
    <Sidebar />
    <slot />
</Docs>
