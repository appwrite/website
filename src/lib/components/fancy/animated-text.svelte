<script lang="ts">
    import { cn } from '$lib/utils/cn';

    interface Props {
        text: string;
        class?: string;
    }

    let { text, class: className = '' }: Props = $props();

    const words = text.split(' ');
</script>

<span class="sr-only">{text}</span>
<span class={cn('relative overflow-hidden', className)}>
    {#each words as word, i}
        <span class="relative overflow-hidden">
            <span
                class="animate-enter mr-2 inline-block"
                style:animation-delay="{i * 75}ms
                ">{word}</span
            >
        </span>
    {/each}
</span>
