<script lang="ts">
    import { cn } from '$lib/utils/cn';
    import type { SvelteHTMLElements } from 'svelte/elements';
    import { menuState } from './menu-state.svelte';

    type Props = {
        class?: string;
    } & SvelteHTMLElements['button'];

    const {
        class: className,
        'aria-label': ariaLabel = 'Open navigation menu',
        onclick,
        ...rest
    }: Props = $props();

    const { isOpen } = menuState();
</script>

<button
    aria-label={ariaLabel}
    class={cn(
        'focus:ring-accent flex size-7 cursor-pointer appearance-none items-center justify-center rounded-xs',
        className
    )}
    onclick={(e) => {
        onclick?.(e);
    }}
    {...rest}
>
    <span class="h-4.5 w-7">
        <span
            class={cn(
                'dark:bg-primary relative block h-px w-6 translate-y-1 bg-gray-800 transition-all duration-200 ease-in-out',
                'before:bg-primary before:absolute before:bottom-1 before:left-0 before:block before:h-px before:w-7',
                'before:ease-in-out before:[transition:bottom_200ms_200ms,transform_200ms]',
                'after:bg-primary after:absolute after:top-1 after:left-0 after:block after:h-px after:w-7',
                'after:ease-in-out after:[transition:top_200ms_200ms,transform_200ms]',
                {
                    '!bg-transparent': isOpen,
                    'before:bottom-0 before:rotate-45 before:[transition:bottom_200ms,transform_200ms_200ms]':
                        isOpen,
                    'after:top-0 after:-rotate-45 after:[transition:top_200ms,transform_200ms_200ms]':
                        isOpen
                }
            )}
        ></span>
    </span>
</button>
