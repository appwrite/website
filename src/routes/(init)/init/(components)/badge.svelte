<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { Snippet } from 'svelte';

    interface Props {
        class?: string;
        children: Snippet;
    }

    const { class: className = '', children }: Props = $props();
</script>

<span
    class={classNames(
        'font-aeonik-fono text-micro text-primary rounded-full bg-black px-3 py-0.5 uppercase outline-2 [outline-offset:-1px] outline-[var(--color-offset)] outline-dashed',
        className
    )}
>
    {@render children()}
</span>
