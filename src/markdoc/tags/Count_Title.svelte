<script lang="ts">
    interface Props {
        title?: string;
    }

    const { title = '' }: Props = $props();

    const el = $derived(title ? 'h3' : 'span');
</script>

<svelte:element this={el} class="text-sub-body text-primary font-medium">
    {title}
</svelte:element>
