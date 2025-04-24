<script lang="ts">
    export let text: string;

    const words = text.split(' ');
</script>

<span class="sr-only">{text}</span>
<span class="relative">
    {#each words as word, i}
        <span
            class="animate-enter mr-2 inline-block"
            style:animation-delay="{i * 75}ms
            ">{word}</span
        >
    {/each}
</span>
