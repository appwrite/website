<script lang="ts">
    export let title = '';

    const el = title ? 'h3' : 'span';
</script>

<svelte:element this={el} class="web-sub-body-500 web-u-color-text-primary">
    {title}
</svelte:element>
