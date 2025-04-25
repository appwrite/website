<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { Snippet } from 'svelte';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        class?: string;
        children: Snippet;
    } & SvelteHTMLElements['span'];

    const { class: className, children, ...rest }: Props = $props();
</script>

<span
    class={classNames(
        '-mb-1 block bg-linear-145 from-[#f8a1ba] to-white to-50% bg-clip-text pb-1 text-transparent',
        className
    )}
    {...rest}
>
    {@render children()}
</span>
