<script lang="ts">
    import Icon from '$lib/components/ui/icon';
    import Lockup from '../(assets)/small-lockup.png';
    import { initDates } from '../+page.svelte';

    import Badge from './badge.svelte';
</script>

<div
    class="mx-auto flex w-full items-center gap-4 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjY4IiB2aWV3Qm94PSIwIDAgMTIyIDY4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB5PSIyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI0Ii8+CjxyZWN0IHg9IjYwIiB5PSIzMiIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K)] py-4 md:h-[76px]"
>
    <div class="md:basis-1/3">
        <Badge class="ml-0">Init is coming <span class="text-accent">/</span> {initDates}</Badge>
    </div>
    <a href="/init" class="md:basis-1/3">
        <img class="mx-auto mt-2 hidden max-w-[200px] md:block" src={Lockup} alt="Appwrite" />
    </a>
    <div class="mr-0 ml-auto justify-self-end text-right">
        <a href="/init" class="text-primary group mr-0 ml-auto flex items-center gap-2 text-right"
            >Register now <Icon
                class="transition group-hover:-translate-x-0.5"
                name="arrow-right"
            /></a
        >
    </div>
</div>
