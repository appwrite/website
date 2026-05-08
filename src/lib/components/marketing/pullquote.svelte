<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type BlockquoteElementProps = SvelteHTMLElements['blockquote'];

    interface PullquoteProps extends BlockquoteElementProps {
        name: string;
        title: string;
        avatar: string;
    }

    const { class: className, children, title, avatar, name }: PullquoteProps = $props();
</script>

<div class="container mx-auto">
    <blockquote
        class={cn(
            className,
            '/font-aeonik-pro mx-auto flex w-full max-w-[30rem] flex-col items-center justify-center gap-3 pb-16 text-center'
        )}
    >
        <p class="text-description text-primary font-medium">
            <span class="text-accent -mr-1">“</span>
            {@render children?.()}
            <span class="text-accent -ml-1">”</span>
        </p>
        <div class="flex items-center gap-2">
            <img
                src={avatar}
                alt={name}
                class="size-6 rounded-full"
                width="48"
                height="48"
                decoding="async"
                loading="lazy"
            />
            <p class="text-caption text-primary m-0 font-medium">
                {name}, <span class="text-secondary">{title}</span>
            </p>
        </div>
    </blockquote>
</div>
