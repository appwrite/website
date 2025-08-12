<script lang="ts">
    import { type Snippet } from 'svelte';
    interface BlockquoteProps {
        children: Snippet;
        name: string;
        title: string;
    }

    const { children, name, title }: BlockquoteProps = $props();
</script>

<blockquote class="flex flex-col gap-6">
    {@render children()}
    <div class="text-paragraph-md flex flex-col">
        <span class="text-primary font-medium">{name}</span>
        <span class="text-secondary">{title}</span>
    </div>
</blockquote>
