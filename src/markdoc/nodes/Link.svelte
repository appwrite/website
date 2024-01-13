<script lang="ts">
    import { getContext } from 'svelte';
    import { TABLE_CTX_KEY } from './Table.svelte';

    export let href: string;
    export let title: string;

    const isExternal = ['http://', 'https://'].some((prefix) => href.startsWith(prefix));
    const target = isExternal ? '_blank' : undefined;
    const rel = isExternal ? 'noopener nofollow' : undefined;

    const isDocs = getContext('isDocs') ?? false;
    const inTable = getContext(TABLE_CTX_KEY) ?? false;
</script>

<a
    class="aw-link is-inline"
    {href}
    {title}
    {target}
    {rel}><slot /></a
>