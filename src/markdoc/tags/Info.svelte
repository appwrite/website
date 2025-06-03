<script lang="ts">
    interface Props {
        title: string;
        children?: import('svelte').Snippet;
    }

    const { title, children }: Props = $props();
</script>

<div class="web-inline-info">
    <span class="icon-info" aria-hidden="true"></span>
    <h5 class="text-sub-body text-primary font-medium">{title}</h5>
    {@render children?.()}
</div>
