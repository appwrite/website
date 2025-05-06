<script lang="ts">
    import Icon from '$lib/components/ui/icon';
    import Lockup from '../(assets)/small-lockup.svg';
    import { initDates } from '../+page.svelte';

    import Badge from './badge.svelte';
</script>

<div
    class="mx-auto flex w-full flex-col items-center justify-between gap-4 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAyOCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNDQ4IDBIMFYwLjQ0OEgwLjQ0OFYwWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8cGF0aCBkPSJNMTMuODg4NCAyNy40Mzk5SDEzLjQ0MDRWMjcuODg3OUgxMy44ODg0VjI3LjQzOTlaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI0Ii8+Cjwvc3ZnPgo=)] bg-[size:76px_76px] py-4 md:h-[76px] md:flex-row"
>
    <Badge>Init is coming <span class="text-accent">/</span> {initDates}</Badge>
    <img src={Lockup} alt="Appwrite" />
    <a href="/init" class="text-primary group flex items-center gap-2"
        >Register now <Icon class="transition group-hover:-translate-x-0.5" name="arrow-right" /></a
    >
</div>
