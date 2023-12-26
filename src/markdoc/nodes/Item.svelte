<script lang="ts">
    import { isInDocs } from '$lib/layouts/Docs.svelte';
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';
    import { isInTable } from './Table.svelte';

    const inDocs = isInDocs();
    const inChangelog = isInChangelog();
    const inPolicy = isInPolicy();
    const inTable = isInTable();

    $: classes = (() => {
        if (inDocs) return '';
        if (inChangelog) return '';
        if (inPolicy && inTable) return '';
        return 'aw-paragraph-lg';
    })();
</script>

<li><p class={classes}><slot /></p></li>
