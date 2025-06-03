<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
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
        class={classNames(
            className,
            '/font-aeonik-pro mx-auto flex w-full max-w-[30rem] flex-col items-center justify-center gap-3 pb-16 text-center'
        )}
    >
        <h2 class="text-description text-primary font-medium">
            <span class="text-accent -mr-1">“</span>
            {@render children?.()}
            <span class="text-accent -ml-1">”</span>
        </h2>
        <div class="flex items-center gap-2">
            <img src={avatar} alt={name} class="size-6 rounded-full" />
            <h5 class="text-caption text-primary font-medium">
                {name}, <span class="text-secondary">{title}</span>
            </h5>
        </div>
    </blockquote>
</div>
