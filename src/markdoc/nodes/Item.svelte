<script lang="ts">
    import { isInDocs } from '$lib/layouts/Docs.svelte';
    import { isInChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { isInPolicy } from '$markdoc/layouts/Policy.svelte';

    const inDocs = isInDocs();
    const inChangelog = isInChangelog();
    const inPolicy = isInPolicy();

    $: classes = (() => {
        if (inDocs) return '';
        if (inChangelog) return 'web-paragraph-lg';
        if (inPolicy) return '';
        return 'web-paragraph-lg';
    })();
</script>

<li><p class={classes}><slot /></p></li>
