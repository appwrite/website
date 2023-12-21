<script lang="ts">
    import { getContext } from 'svelte';

    export let href: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const isDocs = getContext('isDocs') ?? false;
</script>

<a class="aw-link {isDocs ? 'aw-paragraph-md' : 'aw-paragraph-lg'}" {href} {target} {rel}
    ><slot /><span class="icon-cheveron-right" style:font-size="16px" /></a
>

<style>
    a {
        display: flex;
    }
</style>
