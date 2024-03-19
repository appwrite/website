<script lang="ts">
    export let title = '';

    const el = title ? 'h3' : 'span';
</script>

<svelte:element this={el} class="aw-sub-body-500 aw-u-color-text-primary">
    {title}
</svelte:element>
