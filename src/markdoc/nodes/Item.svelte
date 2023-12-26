<script lang="ts">
    import { isInsideChangelog } from '$markdoc/layouts/Changelog.svelte';
    import { getContext } from 'svelte';

    const isDocs = getContext('isDocs') ?? false;
    const inChangelog = isInsideChangelog();
</script>

<li><p class:aw-paragraph-lg={!isDocs && !inChangelog}><slot /></p></li>
