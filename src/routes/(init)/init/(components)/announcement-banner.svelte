<script lang="ts">
    import Icon from '$lib/components/ui/icon';
    import Lockup from '../(assets)/small-lockup.svg';
    import { initDates } from '../+page.svelte';

    import Badge from './badge.svelte';
</script>

<div
    class="mx-auto flex w-full flex-col items-center justify-between gap-4 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjY4IiB2aWV3Qm94PSIwIDAgMTIyIDY4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI0Ii8+CjxyZWN0IHg9IjYwIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K)] py-4 md:h-[76px] md:flex-row"
>
    <Badge>Init is coming <span class="text-accent">/</span> {initDates}</Badge>
    <img src={Lockup} alt="Appwrite" />
    <a href="/init" class="text-primary group flex items-center gap-2"
        >Register now <Icon class="transition group-hover:-translate-x-0.5" name="arrow-right" /></a
    >
</div>
