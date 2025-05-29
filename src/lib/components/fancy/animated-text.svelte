<script lang="ts">
    import { classNames } from '$lib/utils/classnames';

    export let text: string;
    const words = text.split(' ');

    let className: string = '';
    export { className as class };
</script>

<span class="sr-only">{text}</span>
<span class={classNames('relative', className)}>
    {#each words as word, i}
        <span
            class="animate-text mr-2 inline-block"
            style:animation-delay="{i * 75}ms
            ">{word}</span
        >
    {/each}
</span>
