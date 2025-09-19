<script lang="ts">
    import type { Snippet } from 'svelte';

    interface ItemProps {
        open?: boolean;
        title: string;
        children: Snippet;
    }

    const { open, title, children }: ItemProps = $props();
</script>

<li class="border-offset border-b">
    <details class="group" {open}>
        <summary
            class="flex cursor-pointer list-none appearance-none items-center justify-between py-4 marker:hidden [&::-webkit-details-marker]:hidden"
        >
            <span class="text-primary text-sub-body font-medium">{title}</span>
            <div class="icon text-primary transition-transform group-[&[open]]:rotate-180">
                <span class="icon-cheveron-down" aria-hidden="true"></span>
            </div>
        </summary>
        <div class="text-secondary text-sub-body mt-0 flex flex-col gap-4 pb-4">
            {@render children()}
        </div>
    </details>
</li>
