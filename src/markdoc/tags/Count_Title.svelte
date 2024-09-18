<script lang="ts">
    export let title = '';

    const el = title ? 'h3' : 'span';
</script>

<svelte:element this={el} class="text-sub-body font-medium text-primary">
    {title}
</svelte:element>
