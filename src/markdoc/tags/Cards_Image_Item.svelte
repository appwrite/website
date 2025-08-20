<script lang="ts">
    import { type Snippet } from 'svelte';

    interface CardsImageItemProps {
        href: string;
        light?: string;
        dark?: string;
        title: string;
        children: Snippet;
    }

    const { href, light = '', dark = '', title, children }: CardsImageItemProps = $props();
</script>

<a
    {href}
    class="bg-card border-smooth hover:bg-smooth mb-0! flex flex-col gap-1 rounded-2xl border p-4 outline-0"
>
    <header class="flex items-center gap-1">
        <img src={dark} alt="" class="hidden size-8 dark:block" width="32" height="32" />
        <img src={light} alt="" class="block size-8 dark:hidden" width="32" height="32" />
        <h4 class="text-sub-body text-primary font-medium">
            {title}
        </h4>
    </header>

    <p class="text-sub-body text-primary font-medium">
        {@render children()}
    </p>
</a>
