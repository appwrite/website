<script lang="ts">
    import { type Snippet } from 'svelte';

    interface CardsItemProps {
        href: string;
        icon?: string;
        image?: string;
        title: string;
        children?: Snippet;
    }

    const { href, icon = '', image = '', title, children }: CardsItemProps = $props();
</script>

<a
    {href}
    class="bg-card border-smooth hover:bg-smooth mb-0! flex flex-col gap-2 rounded-2xl border p-4 outline-0 transition-colors"
>
    <header class="flex items-center gap-1">
        {#if icon}
            <span class="{icon} web-u-font-size-24" aria-hidden="true"></span>
        {/if}
        {#if image}
            <img src={image} alt={title} class="w-6 object-contain object-center" />
        {/if}
        <h4 class="text-sub-body text-primary font-medium">
            {title}
        </h4>
    </header>
    <div class="text-sub-body">
        {#if children}
            {@render children()}
        {/if}
    </div>
</a>
