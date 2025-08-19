<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { Snippet } from 'svelte';

    interface BadgeProps {
        class?: string;
        children: Snippet;
    }

    const { class: className = '', children }: BadgeProps = $props();
</script>

<span
    class={cn(
        'font-aeonik-fono text-eyebrow text-primary rounded-full bg-black px-1.5 py-1 uppercase outline-2 [outline-offset:-1px] outline-[var(--color-offset)] outline-dashed',
        className
    )}
>
    {@render children()}
</span>
