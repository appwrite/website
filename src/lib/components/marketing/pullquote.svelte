<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type BlockquoteElementProps = SvelteHTMLElements['blockquote'];
    interface PullquoteProps extends BlockquoteElementProps {}

    const { class: className, children }: PullquoteProps = $props();
</script>

<blockquote class={classNames(className)}>
    {@render children?.()}
</blockquote>
