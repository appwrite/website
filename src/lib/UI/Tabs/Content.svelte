<script lang="ts">
    import { melt } from '@melt-ui/svelte';
    import { getTabsContext } from './index.svelte';

    export let tab: string;

    const {
        elements: { content }
    } = getTabsContext();
</script>

<div use:melt={$content(tab)}>
    <slot />
</div>
