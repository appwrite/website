<script lang="ts">
    import { classNames } from '$lib/utils/classnames';
    import type { SvelteHTMLElements } from 'svelte/elements';

    type Props = {
        text: string;
        splitBy?: 'words' | 'characters';
        staggerBy?: number;
    } & SvelteHTMLElements['span'];

    const { text, splitBy = 'words', staggerBy = 75, class: className, ...rest }: Props = $props();

    const words = splitBy === 'words' ? text.split(' ') : text.split('');
</script>

<span class="sr-only">{text}</span>
<span class={classNames('relative', className)} {...rest}>
    {#each words as word, i}
        <span class="animate-text mr-2 inline-block" style:animation-delay={`${i * staggerBy}ms`}
            >{word}</span
        >
    {/each}
</span>
