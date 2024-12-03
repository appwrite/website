<script lang="ts">
    export let title = '';

    const el = title ? 'h3' : 'span';
</script>

<svelte:element this={el} class="text-sub-body text-primary font-medium">
    {title}
</svelte:element>
