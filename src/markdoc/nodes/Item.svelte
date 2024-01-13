<script lang="ts">
    import { getContext } from 'svelte';

    const isDocs = getContext('isDocs') ?? false;
</script>

<li><p class:aw-paragraph-lg={!isDocs}><slot /></p></li>
