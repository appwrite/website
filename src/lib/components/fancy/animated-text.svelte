<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    interface Props {
        text: string;
        class?: string;
    }

    let { text, class: className = '' }: Props = $props();

    const words = text.split(' ');
</script>

<span class="sr-only">{text}</span>
<span class={classNames('relative overflow-hidden', className)}>
    {#each words as word, i}
        <span
            class="animate-text mr-2 inline-block"
            style:animation-delay="{i * 75}ms
            ">{word}</span
        >
    {/each}
</span>
