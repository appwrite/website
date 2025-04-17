<script lang="ts">
    import MainFooter from '$lib/components/layout/site-footer.svelte';
    import MainHeader from '$lib/components/layout/site-header.svelte';
    import SubFooter from '$lib/components/layout/sub-footer.svelte';
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet;
    };

    let { children }: Props = $props();
</script>

<MainHeader />
{@render children()}
<MainFooter />
<SubFooter />
